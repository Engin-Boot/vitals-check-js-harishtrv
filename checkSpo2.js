const breachAction = require('./breachAction');
function checkSpo2(spo2) {
  if(spo2 < 90){
      breachAction('spo2','low',spo2);
      return false;
  }
  return true;
}
module.exports = checkSpo2;