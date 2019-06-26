function produceDrivingRange(range){
  return function(street1, street2){
    const difference=range-Math.abs(parseInt(street1)- parseInt(street2))
    if (difference>=0){
      return `within range by ${difference}`
    }else{
      return `${-difference} blocks out of range`
    }
  }
}

function produceTipCalculator(percent){
  return function(fare){
    return fare*percent
  }
}

function createDriver() {
  let driverId = 0;
  // return the class
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  };
}