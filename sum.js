function returnSum(score , k ) {
  for (let i = 0; i < score.length; i++) {
    if(score[i] === 10)
    {
      score[i] += score[i+1] + score[i+2];
    }
    else if (score[i]+score[i+1] === 10){
      score[i] = 10 + score[i+2];
      score[i+1] = -1;
      i++;
    }
    else {
      score[i] += score[i+1];
      score[i+1] = -1;
      i++;
    }
    ++k;
    if(k === 10)
      break;
  }
  if( k !== 10 )
    return null;
  let sum = 0;
  let firstFilter = score.filter(x => {
    if(x !== -1)
      return true;
    return false;
  })
  let secondFilter = firstFilter.filter( x => {
    k--;
    if(k <= -1)
      return false;
    else {
      return true;
    }
  })
  console.log(secondFilter);
  if(secondFilter.length === 0 )
    return 0;
  else if (firstFilter.length > 12) {
    return null;
  }
  sum = secondFilter.reduce((x,y) => x+y)
  return sum;

}

module.exports = returnSum ;
