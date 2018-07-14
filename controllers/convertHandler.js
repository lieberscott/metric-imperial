/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  let regex = /([A-Za-z]+)/; // parenthesis enable inclusion of the separator in an array item
  
  this.getNum = (input) => {
    let result = input.split(regex)[0];
    if (result == "") { // default value is 1, per instructions
      result = 1;
    };
    
    console.log("resultlength", result.length);
    console.log("getNum: ", result);

    return result || "invalid number"; // check if this does what you think it will
  };
  
  this.getUnit = (input) => {
    let result;
    if (input.split(regex)[1]) { // if there's a unit included
      result = input.split(regex)[1].toLowerCase();
    }
    else {
      result = "invalid unit";
    }
        
    console.log("getUnit: ", result);
    return result;
  };
  
  this.getReturnUnit = (initUnit) => {
    let result;
    
    switch(initUnit) {
    case "gal":
      result = "l";
      break;
    case "l":
      result = "gal";
      break;
    case "lbs":
      result = "kg";
      break;
    case "kg":
      result = "lbs";
      break;
    case "mi":
      result = "km";
      break;
    case "km":
      result = "mi";
      break;
    default:
      result = "invalid unit";
}
    
    return result;
  };

  this.spellOutUnit = (unit) => {
    let result;
    
    switch(unit) {
      case "gal":
        result = "gallons";
        break;
      case "l":
        result = "liters";
        break;
      case "lbs":
        result = "pounds";
        break;
      case "kg":
        result = "kilograms";
        break;
      case "mi":
        result = "miles";
        break;
      case "km":
        result = "kilometers";
        break;
      default:
        result = "invalid unit";
  }
    
    return result;
  };
  
  this.convert = (initNum, initUnit) => {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    console.log("initNum: ", initNum);
    switch(initUnit) {
      case "gal":
        result = eval(initNum) * galToL;
        break;
      case "l":
        result = eval(initNum) / galToL;
        break;
      case "lbs":
        result = eval(initNum) * lbsToKg;
        break;
      case "kg":
        result = eval(initNum) / lbsToKg;
        break;
      case "mi":
        result = eval(initNum) * miToKm;
        break;
      case "km":
        result = eval(initNum) / miToKm;
        break;
      default:
        result = "invalid unit";
    }
    console.log("convert: ", result);
    return result;
  };
  
  this.getString = (initNum, initUnit, returnNum, returnUnit) => {
    let result;
    
    result = initNum + " " + this.spellOutUnit(initUnit) + " converts to " + +returnNum.toFixed(5) + " " + this.spellOutUnit(returnUnit);
    
    return result;
  };
  
}

module.exports = ConvertHandler;
