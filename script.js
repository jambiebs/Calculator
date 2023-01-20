const result = document.getElementById("result");
result.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        e.preventDefault();
        result.value = eval(result.value);
    } 
//      Uncaught TypeError: Cannot read properties of undefined (reading 'value')
//     at HTMLInputElement.<anonymous> (script.js:6:36)
// (anonymous) @ script.js:6
});