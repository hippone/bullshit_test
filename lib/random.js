export function randomInt(min,max){
  const p = Math.random();
  return Math.floor((1-p)*min+p*max);
}

export function createRandomPick(arr){
  arr = [...arr];
  function randomPick(){
    const len = arr.length-1;
    const index = randomInt(0,len)
    const picked = arr[len];
    [arr[index],arr[len]] = [arr[len],arr[index]]
    return picked;
  }
  randomPick();
  return randomPick;
}