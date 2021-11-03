basic.showLeds(`
    . . . . .
    . . . . .
    # . . . .
    . . . . .
    . . . . .
    `)
basic.pause(200)
basic.showLeds(`
    . . . . .
    . . . . .
    # # . . .
    . . . . .
    . . . . .
    `)
basic.pause(200)
basic.showLeds(`
    . . . . .
    . . . . .
    # # # . .
    . . . . .
    . . . . .
    `)
basic.pause(200)
basic.showLeds(`
    . . . . .
    . . . . .
    # # # # .
    . . . . .
    . . . . .
    `)
basic.pause(200)
basic.showLeds(`
    . . . . .
    . . . . .
    # # # # #
    . . . . .
    . . . . .
    `)
basic.pause(100)
basic.clearScreen()
basic.pause(100)
basic.showLeds(`
    . . . . .
    . . . . .
    # # # # #
    . . . . .
    . . . . .
    `)
basic.clearScreen()
basic.forever(function () {
    basic.showString("" + (input.temperature()))
    basic.pause(1000)
    basic.showString("...")
    basic.pause(100)
})
