function produceDrivingRange(range){
  return function(start , end) {
    let num = Math.abs(parseInt(start, 10) - parseInt(end , 10))
    if (num <= range) {
      diff = range - num;
      return `within range by ${diff}`
    } else {
      return `${num - range} blocks out of range`
    }
  }
}


function produceTipCalculator(tip){
  return function(fare){
    return tip * fare;
  }
}
function createDriver() {
  let driverId = 0;

  return function(name){
    this.name = name;
    this.id = ++driverId;
  }
}
