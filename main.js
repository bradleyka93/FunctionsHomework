// Your task is to write functions that will make these various calculators work:
//
// Celcius to fahrenheit: celcius * (9/5) + 32

function toFahrenheit (celcius) {
  console.log (celcius * (9/5) + 32);
}
toFahrenheit("22");

// Fahrenheit to celcius: (fahrenheit - 32) * 5/9

function toCelsius (fahrenheit) {
  console.log ([fahrenheit - 32] * 5/9)
}
toCelsius("22")

// Radius to circumference: 2 * Math.PI * radius

function toCircumference (radius) {
  console.log (2 * Math.PI * radius)
}
toCircumference("22")
// Pythagorean theorem: Math.sqrt((a * a) + (b * b))

function toPythagoreanTheorem (a, b) {
  console.log (Math.sqrt((a * a) + (b * b)))
}
toPythagoreanTheorem("6", "8")
// You have to use your developer tools to complete this assignment.
//
// When declaring these functions, be sure to include the appropriate parameters. That's what you need to figure out.
//
// Once they return the right number, you'll see that number appear in the console.
