const breachAction = require('./breachAction');
function checkRespRate(respRate) {
  if(respRate < 30){
      breachAction('respRate','low',respRate);
      return false;
  }
  else if(respRate > 95){
      breachAction('respRate','high',respRate);
      return false;
  }
  return true;
}
module.exports = checkRespRate;