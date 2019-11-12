function linearSearch(arr, char){
  for(let i=0; i<arr.length; i++){
    if(arr[i] === char) return i;
  }
  return -1;
  
}

var x = [1,4,5,6,7,536,356,346,436,31,33,35];
document.write("<div><p>Finding number 7 location in: "+x+"</p>");
document.write("<p>Output: "+linearSearch([1,4,5,6,7,536,356,346,436,31,33,35], 7)+"</p></div>");