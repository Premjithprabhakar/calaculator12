function viewContent(num){
    console.log(input.value);
   input.value+=num
}
function numClear(){
    input.value=""
}
function numOper(){
    input.value=eval(input.value)
}
function lastDigit(){
    input.value=input.value.slice(0,-1)
}