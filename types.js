let arr = [1, 2];
let brr = arr;
brr = [42, 43];
arr[0]; // ???

 /////////////////
 
let arr = [1, 2];
let brr = arr;
brr[0] = 42;
arr[0]; // ???
