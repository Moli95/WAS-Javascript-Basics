document.getElementById('checkModulo').addEventListener('click', (event) => {
  let numbeToCheck = parseInt(document.getElementById('numbertoCheck').value);
  document.getElementsByTagName('h4')[0].innerHTML = `Number ${numbeToCheck} is divisible by:`

  for (let i = 0; i<document.getElementsByTagName('tr').length; i++) {
    document.getElementsByTagName('tr')[i].className = '';
  }

  if (numbeToCheck % 2 == 0) {
    document.getElementsByTagName('td')[1].innerHTML = "YES";
    document.getElementsByTagName('tr')[0].classList.add('success');
  } else {
    document.getElementsByTagName('td')[1].innerHTML = "NO";
    document.getElementsByTagName('tr')[0].classList.add('danger');
  }
  if (numbeToCheck % 3 == 0) {
    document.getElementsByTagName('td')[3].innerHTML = "YES";
    document.getElementsByTagName('tr')[1].classList.add('success');
  } else {
    document.getElementsByTagName('td')[3].innerHTML = "NO";
    document.getElementsByTagName('tr')[1].classList.add('danger');
  }
  if (numbeToCheck % 4 == 0) {
    document.getElementsByTagName('td')[5].innerHTML = "YES";
    document.getElementsByTagName('tr')[2].classList.add('success');
  } else {
    document.getElementsByTagName('td')[5].innerHTML = "NO";
    document.getElementsByTagName('tr')[2].classList.add('danger');
  }
  if (numbeToCheck % 5 == 0) {
    document.getElementsByTagName('td')[7].innerHTML = "YES";
    document.getElementsByTagName('tr')[3].classList.add('success');
  } else {
    document.getElementsByTagName('td')[7].innerHTML = "NO";
    document.getElementsByTagName('tr')[3].classList.add('danger');
  }
  if (numbeToCheck % 7 == 0) {
    document.getElementsByTagName('td')[9].innerHTML = "YES";
    document.getElementsByTagName('tr')[4].classList.add('success');
  } else {
    document.getElementsByTagName('td')[9].innerHTML = "NO";
    document.getElementsByTagName('tr')[4].classList.add('danger');
  }
  if (numbeToCheck % 11 == 0) {
    document.getElementsByTagName('td')[11].innerHTML = "YES";
    document.getElementsByTagName('tr')[5].classList.add('success');
  } else {
    document.getElementsByTagName('td')[11].innerHTML = "NO";
    document.getElementsByTagName('tr')[5].classList.add('danger');
  }
});
