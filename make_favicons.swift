import Foundation
import AppKit

guard let image = NSImage(contentsOfFile: "public/logo.png"),
      let tiffData = image.tiffRepresentation,
      let rep = NSBitmapImageRep(data: tiffData) else {
    print("Error loading image")
    exit(1)
}

let width = rep.pixelsWide
let height = rep.pixelsHigh

// Let's create a clean CGImage or NSBitmapImageRep
// First find exact bounding box of the SB emblem
// The SB emblem has pixels with non-white color in y range 100 to 570
var emblemMinX = width, emblemMaxX = 0, emblemMinY = height, emblemMaxY = 0

for y in 100...570 {
    for x in 0..<width {
        if let c = rep.colorAt(x: x, y: y) {
            if c.redComponent < 0.94 || c.greenComponent < 0.94 || c.blueComponent < 0.94 {
                if x < emblemMinX { emblemMinX = x }
                if x > emblemMaxX { emblemMaxX = x }
                if y < emblemMinY { emblemMinY = y }
                if y > emblemMaxY { emblemMaxY = y }
            }
        }
    }
}

print("Emblem bounding box: x=\(emblemMinX)...\(emblemMaxX) (\(emblemMaxX - emblemMinX + 1)), y=\(emblemMinY)...\(emblemMaxY) (\(emblemMaxY - emblemMinY + 1))")

// Emblem width ~ 670, height ~ 450
let emblemW = emblemMaxX - emblemMinX + 1
let emblemH = emblemMaxY - emblemMinY + 1
let emblemSize = max(emblemW, emblemH)

// Let's create a square image where emblem is perfectly centered with a slight margin
let pad = Int(Double(emblemSize) * 0.08)
let targetSide = emblemSize + pad * 2

guard let squareRep = NSBitmapImageRep(
    bitmapDataPlanes: nil,
    pixelsWide: targetSide,
    pixelsHigh: targetSide,
    bitsPerSample: 8,
    samplesPerPixel: 4,
    hasAlpha: true,
    isPlanar: false,
    colorSpaceName: .deviceRGB,
    bytesPerRow: targetSide * 4,
    bitsPerPixel: 32
) else {
    exit(1)
}

// Clear to transparent
for y in 0..<targetSide {
    for x in 0..<targetSide {
        squareRep.setColor(NSColor.clear, atX: x, y: y)
    }
}

let startX = pad + (emblemSize - emblemW) / 2
let startY = pad + (emblemSize - emblemH) / 2

for ey in 0..<emblemH {
    let srcY = emblemMinY + ey
    let destY = startY + ey
    for ex in 0..<emblemW {
        let srcX = emblemMinX + ex
        let destX = startX + ex
        if let c = rep.colorAt(x: srcX, y: srcY) {
            let maxC = max(c.redComponent, max(c.greenComponent, c.blueComponent))
            let alpha: CGFloat
            if maxC > 0.97 {
                alpha = 0.0
            } else if maxC > 0.92 {
                alpha = (0.97 - maxC) / 0.05
            } else {
                alpha = 1.0
            }
            if alpha > 0.01 {
                let pixelColor = NSColor(
                    calibratedRed: c.redComponent,
                    green: c.greenComponent,
                    blue: c.blueComponent,
                    alpha: alpha
                )
                squareRep.setColor(pixelColor, atX: destX, y: destY)
            }
        }
    }
}

func exportResized(source: NSBitmapImageRep, size: Int, filename: String) {
    guard let ctx = CGContext(
        data: nil,
        width: size,
        height: size,
        bitsPerComponent: 8,
        bytesPerRow: size * 4,
        space: CGColorSpaceCreateDeviceRGB(),
        bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue
    ) else { return }
    
    ctx.interpolationQuality = .high
    if let cgImage = source.cgImage {
        // CGContext coordinate has origin at bottom-left
        ctx.draw(cgImage, in: CGRect(x: 0, y: 0, width: size, height: size))
    }
    
    if let outCGImage = ctx.makeImage() {
        let newRep = NSBitmapImageRep(cgImage: outCGImage)
        if let data = newRep.representation(using: .png, properties: [:]) {
            try? data.write(to: URL(fileURLWithPath: filename))
            print("Saved \(filename) [\(size)x\(size)]")
        }
    }
}

exportResized(source: squareRep, size: 512, filename: "public/favicon-512x512.png")
exportResized(source: squareRep, size: 192, filename: "public/favicon-192x192.png")
exportResized(source: squareRep, size: 180, filename: "public/apple-touch-icon.png")
exportResized(source: squareRep, size: 64, filename: "public/favicon-64x64.png")
exportResized(source: squareRep, size: 32, filename: "public/favicon-32x32.png")
exportResized(source: squareRep, size: 32, filename: "public/favicon.png")
exportResized(source: squareRep, size: 16, filename: "public/favicon-16x16.png")

