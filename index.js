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

function produceDrivingRange( blockRange ) {
  return function ( startingBlock, endingBlock ) {

    let start = parseInt( startingBlock );
    let end = parseInt( endingBlock );
    let distanceToTravel = Math.abs( end - start );
    let difference = blockRange - distanceToTravel;

    if ( difference > 0 ) {
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(percent){
  return function(fare){
    return percent * fare;
  }
};