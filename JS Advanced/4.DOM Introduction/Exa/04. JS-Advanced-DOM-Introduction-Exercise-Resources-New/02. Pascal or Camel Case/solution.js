function solve() {
  let text = document.getElementById('text').value;
  let textCase = document.getElementById('naming-convention').value;

  if (textCase != 'Camel Case' && textCase != 'Pascal Case') {
    document.getElementById('result').textContent = 'Error!';
    return
  }

  let string = text.toLowerCase().split(' ');
  let newOne = [];
  for (let e of string) {
    e = e.charAt(0).toUpperCase() + e.slice(1);
    newOne.push(e);
  }
  result = newOne.join('');



  if (textCase === 'Camel Case') {

    result = result.charAt(0).toLowerCase() + result.slice(1)
    document.getElementById('result').textContent = result;

  } else {

    document.getElementById('result').textContent = result;
  }
}