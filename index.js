function appendToResult(value) {
    document.getElementById('result').value += value;
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  
  function calculateResult() {
    let result = document.getElementById('result').value;
    try {
      let output = eval(result);
      document.getElementById('result').value = output;
    } catch (e) {
      document.getElementById('result').value = 'Error';
    }
  }
  