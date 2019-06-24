function produceDrivingRange(range){
  return function (startB, endB){
    let start = parseInt(startB);
    let end = parseInt(endB);
    let distance = Math.abs(start - end);
    let difference = range - distance;

    if (difference > 0){
      return `within range by ${difference}`;
    } else {
      return `${Math.abs(difference)} blocks out of range`;
    }
  }
}

function produceTipCalculator(percent){
  return function (fare){
    return fare * percent;
  }
}

function createDriver(){
  let driverId = 0;
  return class{
    constructor(name){
      this.name = name;
      this.id = driverId++;
    };
  };
};
