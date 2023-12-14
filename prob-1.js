const input = "(8+2)-3";
const isOperand = (ch) => {
    return ch >= '0' && ch <= '9';
}
const stack = [];
for (let i = input.length - 1; i >= 0; i--){
    console.log(input[i], isOperand(input[i]));
    if(isOperand(input[i])){
        stack.push(input[i]);
    }
    else{
        const first = stack.pop();
        const second = stack.pop();
        stack.push(first + second + input[i]);
    }

}

console.log(stack);

