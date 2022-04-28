function digPow(n, p){
    let arr2 = [];
    let arr = n.toString().split('');
  
    for(let i = 0; i < arr.length; i++) {
      arr2.push(Math.pow(arr[i], p++))
    }
    let k = Math.floor(arr2.reduce( (s,c) => s += c, 0) / n);
    return k * n === arr2.reduce( (s,c) => s += c, 0) ? k : -1;
}
  