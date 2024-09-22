let randNum = (min=0, max=1) => {
  if(typeof(min) == 'string' || typeof(max) == 'string'){
    console.error('Error: `min` and `max` has to be Numbers')
    return 0
  }
  if(min < max){
    return Math.random()*(max-min)+min
  }
  else{
    console.error("Error: `min` has to be less than `max`")
    return 0
  }
}

console.log(randNum(-5, 10))