function produceDrivingRange(blockRange) {
    return function(start, end) {
        let distance = parseInt(end) - parseInt(start);
        if (distance < blockRange) {
            return `within range by ${blockRange - distance}`;
        } else {
            return `${distance - blockRange} blocks out of range`;
        }
    }
}

function produceTipCalculator(tip) {
    return function(bill) {
        return tip * bill;
    }
}

function createDriver() {
    let DriverId = 0;
    return class {
        constructor(name) {
            this.id = ++DriverId;
            this.name = name;
        }
    }
}