input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < repeat; index++) {
        teethdown.showImage(0)
        basic.pause(pause2)
        basic.showLeds(`
            . . . . .
            . . . # #
            . . . # #
            . # # # #
            . # # # .
            `)
    }
    for (let index = 0; index < repeat; index++) {
        teethdown.showImage(0)
        basic.pause(pause2)
        basic.showLeds(`
            . . . . .
            # # . # #
            # # . # #
            # . . . #
            . . . . .
            `)
    }
    for (let index = 0; index < repeat; index++) {
        teethdown.showImage(0)
        basic.pause(pause2)
        basic.showLeds(`
            . . . . .
            # # . . .
            # # . . .
            # # # # .
            . # # # .
            `)
    }
    basic.pause(pause2)
    for (let index = 0; index < repeat; index++) {
        teethup.showImage(0)
        basic.pause(pause2)
        basic.showLeds(`
            . # # # .
            . # # # #
            . . . # #
            . . . # #
            . . . . .
            `)
    }
    for (let index = 0; index < repeat; index++) {
        teethup.showImage(0)
        basic.pause(pause2)
        basic.showLeds(`
            . . . . .
            # . . . #
            # # . # #
            # # . # #
            . . . . .
            `)
    }
    for (let index = 0; index < repeat; index++) {
        teethup.showImage(0)
        basic.pause(pause2)
        basic.showLeds(`
            . # # # .
            # # # # .
            # # . . .
            # # . . .
            . . . . .
            `)
    }
    basic.pause(pause2)
    for (let index = 0; index < repeat; index++) {
        teethfront.showImage(0)
        basic.pause(pause2)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # # #
            . . # # #
            . . . . .
            `)
    }
    for (let index = 0; index < repeat; index++) {
        teethfront.showImage(0)
        basic.pause(pause2)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            # . . . #
            . . . . .
            `)
    }
    for (let index = 0; index < repeat; index++) {
        teethfront.showImage(0)
        basic.pause(pause2)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # . .
            # # # . .
            . . . . .
            `)
    }
    basic.showIcon(IconNames.Yes)
})
let teethfront: Image = null
let teethup: Image = null
let teethdown: Image = null
let pause2 = 0
let repeat = 0
basic.showIcon(IconNames.Happy)
repeat = 10
pause2 = 1000
let pause_b = 2000
teethdown = images.createImage(`
    . . . . .
    # # . # #
    # # . # #
    # # # # #
    . # # # .
    `)
teethup = images.createImage(`
    . # # # .
    # # # # #
    # # . # #
    # # . # #
    . . . . .
    `)
teethfront = images.createImage(`
    . . . . .
    . . . . .
    # # # # #
    # # # # #
    . . . . .
    `)
