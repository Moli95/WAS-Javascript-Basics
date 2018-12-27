peselCheck = (pesel) => {
    let lengthOfMonths = [31,28,31,30,31,30,31,31,30,31,30,31];

    if(pesel.length > 11) {
        return 'Pesel is to long';
    } else if (pesel.length < 11) {
        return 'Pesel is to short';
    }

    if(pesel.substring(2, 4) > 12 || (pesel.substring(2, 4) < 1)) {
        return 'Bad month';
    } else if (pesel.substring(4, 6) <= 1 || pesel.substring(4, 6) > lengthOfMonths[parseInt(pesel.substring(2, 4))-1]) {
        return 'Bad day'
    }
    return true;
}

document.getElementById('peselCheck').addEventListener('click', () => {
    let result = peselCheck(document.getElementById('numbertoCheck').value);
    if(result == 1) {
        document.getElementById('peselResult').innerHTML = 'Correct Pesel Number';
        document.getElementById('peselResult').classList = 'text-success';
    } else {
        document.getElementById('peselResult').innerHTML = result;
        document.getElementById('peselResult').classList = 'text-danger';
    }

});