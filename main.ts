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
        teethdown.showImage(0)
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
})
let teethfront: Image = null
let teethup: Image = null
let teethdown: Image = null
let pause2 = 0
let repeat = 0
basic.showIcon(IconNames.Happy)
repeat = 3
pause2 = 200
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
