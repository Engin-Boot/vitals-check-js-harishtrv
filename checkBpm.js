const breachAction = require('./breachAction');
function checkBpm(bpm) {
  if(bpm < 70){
      breachAction('bpm','low',bpm);
      return false;
  }
  else if(bpm > 150){
      breachAction('bpm','high',bpm);
      return false;
  }
  return true;
}
module.exports=checkBpm;