let B = 0
let G = 0
let R = 0
let strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
strip.setBrightness(50)
basic.forever(function () {
    R = randint(0, 255)
    G = randint(0, 255)
    B = randint(0, 255)
    for (let index = 0; index <= 4; index++) {
        strip.setPixelColor(index, neopixel.rgb(R, G, B))
        strip.show()
        basic.pause(100)
        strip.clear()
        for (let index = 0; index <= 4; index++) {
            strip.setPixelColor(index, neopixel.rgb(R, G, B))
            strip.show()
            basic.pause(100)
            strip.clear()
        }
    }
})
