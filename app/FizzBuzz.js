class FizzBuzz {
    constructor(){}

    calculate(number) {
        if (this.isFizz(number) && this.isBuzz(number))
        {
            return 'FizzBuzz';
        }

        if (this.isFizz(number)) {
            return 'Fizz';
        }

        if (this.isBuzz(number)) {
            return 'Buzz';
        }

        return number;
    };

    isBuzz(number) {
        return number % 5 == 0;
    }

    isFizz(number) {
        return number % 3 == 0;
    }
}

module.exports = FizzBuzz;