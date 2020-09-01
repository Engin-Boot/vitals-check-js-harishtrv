const expect = require('chai').expect;
var breachAction = require('./breachAction');
var checkBpm = require('./checkBpm');
var checkSpo2 = require('./checkSpo2');
var checkRespRate = require('./checkRespRate');
var generalVital = require('./rangeComparisonVitals');
function vitalsAreOk(bpm, spo2, respRate) {
    return checkBpm(bpm) && checkSpo2(spo2) && checkRespRate(respRate);
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
//Test generalVital
console.log('Testing generalVital function');
expect(generalVital('bpm',50,70,150)).to.be.false;
expect(generalVital('bpm',160,70,150)).to.be.false;
console.log('checker is done');
