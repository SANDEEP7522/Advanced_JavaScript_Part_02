function Calculator() {
    this.result = 0;

    this.add = function(value) {
        this.result += value;
        return this;
    };

    this.subtract = function(value) {
        this.result -= value;
        return this;
    };

    this.multiply = function(value) {
        this.result *= value;
        return this;
    };

    this.divide = function(value) {
        if (value !== 0) {
            this.result /= value;
        }
         else {
            console.log("Division by zero is not allowed.");
        }
        return this;
    };

    this.getResult = function() {
        return this.result;
    };
}
const calc = new Calculator();
const finalResult = calc.add(2).subtract(2).multiply(2).divide(2).getResult();

console.log(finalResult); // Output: 6
