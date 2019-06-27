function produceDrivingRange(range) {
    return function (starting, ending) {
  
      let start = parseInt(starting);
      let end = parseInt(ending);
      let distanceToTravel = Math.abs( end - start );
      let difference = range - distanceToTravel;
  
      if ( difference > 0 ) {
        return `within range by ${difference}`
      } else {
        return `${Math.abs(difference)} blocks out of range`
      }
    }
  }
  
  function produceTipCalculator(percentage) {
    return function (fare) {
      return fare * percentage;
    }
  }
  
  function createDriver() {
    let driverId = 0
    return class {
      constructor( name ) {
        this.id = ++driverId
        this.name = name
      }
    }
  }