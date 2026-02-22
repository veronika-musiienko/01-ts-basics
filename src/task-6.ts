function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}
const firstNum = getFirstElement<number>([1, 2, 3]);           
const firstStr = getFirstElement<string>(["a", "b", "c"]);    
const firstBool = getFirstElement<boolean>([true, false, true]); 

console.log(firstNum);
console.log(firstStr);
console.log(firstBool);