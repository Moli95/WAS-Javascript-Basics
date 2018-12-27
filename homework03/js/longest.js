longest = (x) => {
    let maxLength = 0;
    let result = [];
    for(let i = 0; i<=x.length-1; i++) {
        if(x[i].length == maxLength) {
            maxLength = x[i].length;
            result.push(x[i]);
        } else if(x[i].length > maxLength) {
            maxLength = x[i].length;
            result = [];
            result.push(x[i]);
        }
    }
    return result;
}