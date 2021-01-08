radio.onReceivedString(function (receivedString) {
    if (receivedString == "Left") {
        pins.analogWritePin(AnalogPin.P2, Steer)
        pins.digitalWritePin(DigitalPin.P12, Left)
    } else if (receivedString == "Rght") {
        pins.analogWritePin(AnalogPin.P2, Steer)
        pins.digitalWritePin(DigitalPin.P12, Right)
    } else {
        pins.analogWritePin(AnalogPin.P2, Stop)
        pins.digitalWritePin(DigitalPin.P12, Stop)
    }
})
let Right = 0
let Left = 0
let Steer = 0
let Stop = 0
radio.setGroup(1)
// Play a sound so we know it is starting.
music.playMelody("F B C5 - F - - - ", 400)
// Set all output pins to start at zero/off.
pins.analogWritePin(AnalogPin.P1, 0)
pins.digitalWritePin(DigitalPin.P8, 0)
pins.analogWritePin(AnalogPin.P2, 0)
pins.digitalWritePin(DigitalPin.P12, 0)
// Set variables for analog and digital outputs.
// power forwards, a number between 0-1023 - analog output
let Go = 1023
// zero to stop analog and digital outputs
Stop = 0
// digital output to control motor direction, 1 or 0 as required
let Forward = 0
// digital output to control motor direction, must be the opposite of 'Forward'. Swap 'Forward and 'Backward' values if going the wrong way.
let Backward = 1
// power to turn the front wheels, analog output set as high as allowed
Steer = 1023
// digital output to control steering motor direction, 1 or 0 as required
Left = 1
// digital output to control steering motor direction, opposite of 'Left'. Swap 'Left and Right values if turning the wrong way
Right = 0
