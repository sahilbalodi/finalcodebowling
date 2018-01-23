function finalScore(score) {
  let k = 0;
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
  console.log(score);
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
  sum = a.reduce((x,y) => x+y)
  return sum;
  //console.log(a);

}


console.log(finalScore([0,0,0,0,0,0,0,0,0,0]));
console.log(finalScore([10,10,10,10,10,10,10,10,10,9,1,2]));


module.exports = finalScore;
