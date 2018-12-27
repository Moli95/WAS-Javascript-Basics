fizzBuzz = (x) => {
    for(let i = 1; i <= x; i++) {
        let result = '';
        if(i%3 == 0) {
            result += 'Fizz';
        }
        if(i%5==0) {
            result += 'Buzz';
        }
        if(result.length != 0) {
            console.log(result);
        }
    }
}

//example
fizzBuzz(15);