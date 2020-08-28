const expect = require('chai').expect;
function vitalsAreOk(bpm, spo2, respRate) {
    return checkBpm(bpm) && checkSpo2(spo2) && checkRespRate(respRate);
}
function checkBpm(bpm) {
    if(bpm < 70 || bpm > 150)
        return false;
    return true;
}
function checkSpo2(spo2) {
    if(spo2 < 90)
        return false;
    return true;
}
function checkRespRate(respRate) {
    if(respRate < 30 || respRate > 95)
        return false;
    return true;
}
expect(vitalsAreOk(100, 95, 70)).to.be.true;//checking all
expect(vitalsAreOk(50, 95, 70)).to.be.false;//checking bpm
expect(vitalsAreOk(160, 95, 70)).to.be.false;//checking bpm
expect(vitalsAreOk(100, 80, 70)).to.be.false;//checking spo2
expect(vitalsAreOk(100, 95, 25)).to.be.false;//checking respRate
expect(vitalsAreOk(100, 95, 100)).to.be.false;//checking respRate
//checking specific functions
//Test checkBpm(bpm)
expect(checkBpm(100)).to.be.true;
expect(checkBpm(60)).to.be.false;
expect(checkBpm(160)).to.be.false;
//Test checkSpo2(spo2)
expect(checkSpo2(100)).to.be.true;
expect(checkSpo2(70)).to.be.false;
//Test checkRespRate(respRate)
expect(checkRespRate(80)).to.be.true;
expect(checkRespRate(20)).to.be.false;
expect(checkRespRate(100)).to.be.false;

console.log('checker is done');
