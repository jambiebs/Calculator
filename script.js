const result = document.getElementById("result");
result.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        e.preventDefault();
        result.value = eval(result.value);
    }
});