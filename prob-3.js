const input = "(8+2)-3";
console.log(infixToPostfix(input))

function infixToPostfix(input){
	let output = ""
	const stack = [];
	for (let i = 0; i < input.length; i++) {
		const item = input[i]
		if (item === '(') stack.push(item)
		else if (item === ')') {
			while(stack[stack.length -1] !== '(') {
				output += stack.pop();
			}
			stack.pop()
		}else if (isNumeric(item)) {
			output += item
		}else if (isOperator(item)){
			while(stack.length != 0 && getPriority(item) <= getPriority(stack[stack.length - 1])) {
				output += stack.pop();
			}
			stack.push(item)
		}
	}

	while(stack.length != 0) {
		output += stack.pop();
	}
	return output;   
}


function isNumeric(ch){
	if(ch >= '0' && ch <= '9') return true;
	return false;
}

function isOperator(ch){
	if (ch === '+' || ch === '-' || ch === '*' || ch === '/') return true;
	return false;
}

function getPriority(ch){
	if (ch === '+' || ch === '-') {
		return 1
	} else if ( ch === '*' || ch === '/'){
		return 2
	} else{
		return 0
	}
}
