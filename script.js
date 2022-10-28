const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return a / b;
}

const operate = function(operator, var1, var2) {
    if (operator == add) {
        return add(var1, var2);
    } else if (operator == subtract) {
        return subtract(var1, var2);
    } else if (operator == multiply) {
        return multiply(var1, var2);
    } else if (operator == divide) {
        return divide(var1, var2);
    }
}