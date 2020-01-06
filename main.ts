radio.onReceivedValueDeprecated(function (name, value) {
    led.unplot(x, y)
    if (name == "y") {
        y = value
    }
    if (name == "x") {
        x = value
    }
    led.plot(x, y)
    pins.servoWritePin(AnalogPin.P2, x * 20)
    pins.servoWritePin(AnalogPin.P1, y * 20)
})
input.onButtonPressed(Button.B, function () {
    music.playTone(494, music.beat(BeatFraction.Quarter))
    pins.servoSetPulse(AnalogPin.P1, 2500)
})
input.onButtonPressed(Button.A, function () {
    music.playTone(698, music.beat(BeatFraction.Quarter))
    pins.servoSetPulse(AnalogPin.P1, 500)
})
let y = 0
let x = 0
OLED12864_I2C.init(60)
OLED12864_I2C.showString(
0,
0,
"Hello!",
1
)
radio.setGroup(155)
basic.forever(function () {
    OLED12864_I2C.showString(
    0,
    0,
    "11111",
    1
    )
    basic.pause(2000)
    OLED12864_I2C.showString(
    0,
    0,
    "22222",
    1
    )
    basic.pause(2000)
})
