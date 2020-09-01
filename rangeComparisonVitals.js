const breachAction = require('./breachAction');
function generalVital(vitalType,value,lowLimit,highLimit) {
  if(value < lowLimit){
      breachAction(vitalType,'low',value);
      return false;
  }
  else if(value > highLimit){
      breachAction(vitalType,'high',value);
      return false;
  }
  return true;
}
module.exports=generalVital;