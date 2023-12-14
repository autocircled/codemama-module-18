const input = "5*4-7/2+1";
const items = [];

function push(element) {
	return items.push(element);
}

function pop() {
	if (items.length > 0) {
		return items.pop();
	}
}

function isAlpha(c) {
	if ((c >= "a" && c <= "z") || (c >= "A" && c <= "Z")) {
		return true;
	}
	return false;
}

function isDigit(c) {
	if (c >= "0" && c <= "9") {
		return true;
	}
	return false;
}

function isOperator(c) {
	return !isAlpha(c) && !isDigit(c);
}

function getPriority(C) {
	if (C == "-" || C == "+") return 1;
	else if (C == "*" || C == "/") return 2;
	else if (C == "^") return 3;
	return 0;
}


function infixToPostfix(infix) {
	infix = "(" + infix + ")";

	var l = infix.length;
	let char_stack = items;
	var output = "";

	for (var i = 0; i < l; i++) {
		if (isAlpha(infix[i]) || isDigit(infix[i])) output += infix[i];
		else if (infix[i] == "(") char_stack.push("(");
		else if (infix[i] == ")") {
			while (char_stack[items.length - 1] != "(") {
				output += char_stack[items.length - 1];
				char_stack.pop();
			}

			char_stack.pop();
		} else {
			if (isOperator(char_stack[items.length - 1])) {
				if (infix[i] == "^") {
					while (getPriority(infix[i]) <= getPriority(char_stack[items.length - 1])) {
						output += char_stack[items.length - 1];
						char_stack.pop();
					}
				} else {
					while (getPriority(infix[i]) < getPriority(char_stack[items.length - 1])) {
						output += char_stack[items.length - 1];
						char_stack.pop();
					}
				}


				char_stack.push(infix[i]);
			}
		}
	}
	while (!char_stack.length == 0) {
		output += char_stack[items.length - 1];
		char_stack.pop();
	}

	return output;
}


function infixToPrefix(infix) {
	var l = infix.length;

	infix = infix.split("").reverse().join("");

	var infixx = infix.split("");
	for (var i = 0; i < l; i++) {
		if (infixx[i] == "(") {
			infixx[i] = ")";
		} else if (infixx[i] == ")") {
			infixx[i] = "(";
		}
	}
	infix = infixx.join("");

	var prefix = infixToPostfix(infix);

	prefix = prefix.split("").reverse().join("");
	return prefix;
}


console.log(infixToPrefix(input));
