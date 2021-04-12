namespace SpriteKind {
    export const enemyprojectil = SpriteKind.create()
    export const anoy_u = SpriteKind.create()
    export const ivis = SpriteKind.create()
}
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    list.push(sprite)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.startEffect(effects.ashes)
    otherSprite.destroy()
    info.changeScoreBy(1)
    music.beamUp.play()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.sonar.play()
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . 8 . . . 
        . 8 6 . . 9 . . 6 . . . 8 . . . 
        . 8 6 6 . 9 9 . 6 8 . . 8 . . . 
        9 . . . 8 8 . . . 8 . 6 . 8 6 . 
        9 6 8 9 . . 8 . 6 . . 9 . 8 6 . 
        6 9 8 9 6 . 8 . 6 . . 9 8 . 9 . 
        6 . . . 6 . . . 8 . . . 8 . 9 . 
        . . . 9 8 . 6 . 8 8 9 6 . 8 . . 
        . 8 . 9 8 9 6 . 9 8 9 6 . 8 . . 
        . . . . . 9 . . 9 . . . . . . . 
        `, Mann, 0, 100)
})
info.onCountdownEnd(function () {
    Mann.setKind(SpriteKind.Player)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemyprojectil, function (sprite, otherSprite) {
    music.bigCrash.play()
    Mann.startEffect(effects.fountain)
    Mann.destroy()
    info.changeLifeBy(-1)
    pause(2000)
    info.startCountdown(2)
    Mann = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .......cccc.........
        .......cbbccc.......
        ....bbccbddbcbb.....
        .cbbddcbd11dccbbbcc.
        cbbbddcbd11dbcdbbbcc
        cbbbdddccccccddbbbcc
        .cbbbbddddbbbbbbccc.
        ...ccccbbbbccccccc..
        ......cccccccc......
        ....................
        ....................
        ....................
        ....................
        ....................
        `, SpriteKind.ivis)
    scene.cameraFollowSprite(Mann)
    controller.moveSprite(Mann, 100, 100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.enemyprojectil, function (sprite, otherSprite) {
    otherSprite.startEffect(effects.starField)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.startEffect(effects.fire)
    otherSprite.destroy()
    info.changeScoreBy(1)
    TEMP = list.indexOf(otherSprite)
    list.removeAt(TEMP)
})
let mySprite: Sprite = null
let wee: Sprite = null
let farmer: Sprite = null
let projectile2: Sprite = null
let TEMP = 0
let projectile: Sprite = null
let list: Sprite[] = []
let Mann: Sprite = null
game.splash("Aliens on earth?? shoot cows to regain fuel and dodge or destroy incoming projiectiles")
Mann = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    .......cccc.........
    .......cbbccc.......
    ....bbccbddbcbb.....
    .cbbddcbd11dccbbbcc.
    cbbbddcbd11dbcdbbbcc
    cbbbdddccccccddbbbcc
    .cbbbbddddbbbbbbccc.
    ...ccccbbbbccccccc..
    ......cccccccc......
    ....................
    ....................
    ....................
    ....................
    ....................
    `, SpriteKind.Player)
controller.moveSprite(Mann, 100, 80)
info.setScore(0)
info.setLife(3)
scene.cameraFollowSprite(Mann)
tiles.setTilemap(tilemap`level1`)
list = []
game.onUpdateInterval(800, function () {
    if (info.score() > 3) {
        projectile2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . 2 5 4 2 . . . . . . 
            . . . . . . 2 4 4 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, farmer, Mann.x - farmer.x, Mann.y - farmer.y)
        projectile2.setKind(SpriteKind.enemyprojectil)
    }
})
forever(function () {
    music.ringTone(131)
    music.playMelody("C - E F - E A G ", 241)
    music.playMelody("D - B A G - - F ", 241)
    music.playMelody("D E D - E - F - ", 241)
    music.stopAllSounds()
    music.ringTone(196)
    music.playMelody("C - E F - E A G ", 241)
    music.playMelody("D - B A G - - F ", 241)
    music.playMelody("D E D - E - F - ", 241)
    music.stopAllSounds()
})
game.onUpdateInterval(900, function () {
    for (let value of list) {
        if (info.score() > 3) {
            projectile2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . 2 5 4 2 . . . . . . 
                . . . . . . 2 4 4 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value, 0, 80)
            projectile2.setKind(SpriteKind.enemyprojectil)
        }
    }
})
game.onUpdateInterval(3000, function () {
    wee = sprites.create(img`
        1 . . . . . . . 1 . . . . . . . 
        1 1 . . . . . 1 1 . . . . . . . 
        1 1 d d d d 1 1 . . . . . . . . 
        . d d f d f b c . . . . . . . . 
        . d b d b b b c . . . . . . . . 
        . . b f 3 f c . . . . . . . . . 
        . . . 3 3 3 d d b b b b . . . . 
        . . . . d f f 1 d f b b b c . . 
        . . . . b f f d f f c . c . . . 
        . . . . b d d d b b c . . . . . 
        . . . . b c . b c . c . . . . . 
        . . . . b b . b c . c . . . . . 
        . . . . c c . c c . c . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    wee.setPosition(randint(16, 320), 99)
    if (info.score() > 30) {
        game.splash("Enough FUEL!")
        game.over(true)
    }
    if (info.score() > 1) {
        farmer = sprites.create(img`
            . . . . . d d d d d b b b b . . 
            . . . b d d b b b b b b b b c c 
            . . . b b b c c c c c c c c c c 
            . . . c c c c . . . . . . c c c 
            . . . . . . d c c b b . . d . . 
            . . . . . . b f c f b . . d . . 
            . 1 1 1 1 1 1 1 b b b . . b . . 
            . . . . . c d f f f f d . b . . 
            . . . . . c d d d d d d c . . . 
            . . . . . . . c b b b c . . . . 
            . . . . . . . c c b b . . . . . 
            . . . . . . . c . . b . . . . . 
            . . . . . . . c . . b . . . . . 
            . . . . . . . c . . b . . . . . 
            . . . . . . c c . b b . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        farmer.setPosition(randint(16, 320), 23)
    }
})
game.onUpdateInterval(10000, function () {
    music.pewPew.play()
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . c b b c . . . . . . 
        . . . . . c b 2 4 b c . . . . . 
        . . . . . c b 4 2 b c . . . . . 
        . . . . . . c b b c . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.enemyprojectil)
    mySprite.follow(Mann, 40)
    mySprite.setPosition(0, 0)
})
