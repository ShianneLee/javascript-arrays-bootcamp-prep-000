var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(array, element){
  return [element, ...array]
  
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array = [element, ...array]
  return array
}
function addElementToEndOfArray(){
  return [...arr, element]
}
function destructivelyAddElementToEndOfArray(){
  arr = [...arr, element]
  return arr
}
function accessElementInArray(arr, index){
  return arr[index]
}
function destructivelyRemoveElementFromBeginningOfArray(arr){
  return arr.shift()
}
function removeElementFromBeginningOfArray(arr){
  return arr.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(arr){
  return arr.pop()
}
function removeElementFromEndOfArray(arr){
  return arr.slice(0, arr.length - 1)
}
