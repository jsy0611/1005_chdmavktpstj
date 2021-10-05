let cm = 0
// 
// 
// 초음파센서를 사용해서 돌아오는 시간을 확인하고 거리를 잼
// 
// *키재거나
// *거리
// 
// *ctrl+z 블록 삭제시 
// 다시 돌아옴
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    cm = pins.map(
    pins.pulseIn(DigitalPin.P2, PulseValue.High),
    0,
    46473,
    2,
    1000
    )
    basic.showNumber(cm)
})
// 확장->sonar 추가하면
// 초음파센서와 관련된 블록 사용가능
basic.forever(function () {
    cm = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    basic.pause(100)
})
// 수출력
basic.forever(function () {
    basic.showNumber(cm)
})
// 거리 숫자나오면서
// 값에 따라 소리출력
// 
// 소리는 p0
basic.forever(function () {
    if (cm < 10) {
        music.playTone(262, 100)
    } else if (cm >= 10 && cm < 30) {
        music.playTone(262, 200)
    } else if (cm >= 31 && cm < 70) {
        music.playTone(262, 500)
    } else {
        music.stopAllSounds()
        music.stopMelody(MelodyStopOptions.All)
    }
})
