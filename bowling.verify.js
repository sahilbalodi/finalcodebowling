let checkLengthOfArray = require('./checklength.js');
function verify(score) {

  //test for negative and null
  let negative = score.filter(x => {
    if(x<0 || x === null)
      return true;
    return false;
  })
  if(negative.length > 0)
  {
    return null;
  }
  for (let i = 0; i < score.length; i++) {
    if( typeof(score[i]) !== typeof(1) )
      return null;
  }
  //test for length
  if(score.length > 21 || score.length < 11)
  {
    return null;
  }

}
module.exports = verify;
