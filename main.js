let randNum = (min=0, max=1) => {
  if(min == 0 && max == 1){
    return Math.random()
  }
  else if(min < max){
    return Math.random()*(max-min)+min
  }
  else{
    console.error("Error: `min` has to be less than `max`")
    return 0
  }
}

console.log(randNum(-5, 10))