function produceDrivingRange(range) {
  return function (a, b) {
    let distance = Math.abs(parseInt(a) - parseInt(b))
    let difference = distance - range
    return difference > 0 ? `${difference} blocks out of range` : `within range by ${Math.abs(difference)}`
  }
}

function produceTipCalculator(tipPercentage) {
  return function (total) {
    return total * tipPercentage
  }
}

function createDriver() {
  let driverId = 0;
  return class Driver {
    constructor(name) {
      this.name = name
      this.id = ++driverId;
    }
  }
}