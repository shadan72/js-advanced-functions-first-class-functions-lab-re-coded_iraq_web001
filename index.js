// Code your solution in this file!

const returnFirstTwoDrivers= function(driversArray){
    const newArray=[driversArray[0], driversArray[1]];
  return newArray;
};

const returnLastTwoDrivers= function(driversArray){
  const newArray=[driversArray[driversArray.length - 2], driversArray[driversArray.length -1]];
  return newArray;
};

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier= function(integer){
  return function(fare){
  return fare * interger
  }
}

let 