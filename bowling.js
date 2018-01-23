function finalScore(score) {
  let k = 0;
  // test for negative and null
  let negative = score.filter(x => {
    if(x<0 || x === null)
      return true;
    return false;
  })
  //console.log(negative);
  if(negative.length > 0)
  {
    if(negative[0] === null)
      return null;
    else {
      return false;
    }
  }

  if(score.length > 22 || score.length < 12)
  {
    return 'wronginput';
  }
  // basic function

  for (let i = 0; i < score.length; i++) {
    if(score[i] === 10)
    {
      score[i] += score[i+1] + score[i+2];
    }
    else if (score[i]+score[i+1] === 10){
      score[i] = 10 + score[i+2];
      score[i+1] = 0;
      i++;
    }
    else {
      score[i] += score[i+1];
      score[i+1]=0;
      i++;
    }
    ++k;
    if(k===10)
      break;
  }
  let sum= 0;
  //console.log(score);
  let a = score.filter(x => {
    if(x!== 0)
      return true;
    return false;
  }).filter( x => {
    k--;
    if(k<0)
      return false;
    else {
      return true;
    }
  })
  if(a.length === 0 )
    return 0;
  //test for invalid input

  sum = a.reduce((x,y) => x+y)
  return sum;


}
module.exports = finalScore;
