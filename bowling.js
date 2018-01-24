let verify = require('./bowling.verify.js');
let returnSum = require('./sum.js');
function finalScore(scoreArry) {

  let score = [].concat(scoreArry);
  let k = 0;
  let resultVerify = verify(score);
  if( resultVerify === null)
    return null;

  //  basic function
  return returnSum(score , k );

}
module.exports = finalScore;
