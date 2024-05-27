radio.onReceivedValue(function (name, value) {
    if (name == "y" && value > 520) {
        forward = value
        back = 0
    } else if (name == "y" && value < 520) {
        forward = 0
        back = 519 - value
    }
    if (name == "x" && value > 520) {
        right = value - 520
        left = 0
    } else if (name == "x" && value < 520) {
        right = 0
        left = 519 - value
    } else {
    	
    }
    pins.analogWritePin(AnalogPin.P1, forward - right + left)
    pins.analogWritePin(AnalogPin.P2, forward - left + right)
    pins.analogWritePin(AnalogPin.P0, back + right)
    pins.analogWritePin(AnalogPin.P13, back + left)
    if (name == "hold") {
        if (value == 0) {
            if (servo_state - 6 > 10) {
                servo_state += -5
            }
        } else if (value == 1) {
            if (servo_state + 6 < 180) {
                servo_state += 5
            }
        } else {
        	
        }
    }
    pins.servoWritePin(AnalogPin.P5, servo_state)
    serial.writeValue("x", servo_state)
})
let left = 0
let right = 0
let back = 0
let forward = 0
let servo_state = 0
servo_state = 20
let k = 2
radio.setGroup(1)
serial.redirectToUSB()
basic.showString("1")
