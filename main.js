const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
    if(err)
    {
        console.error(err);
        return;
    }
    console.log(data);
    function fibonacci(n) {
        if(n < 1) return 0
        if (n <= 2) return 1
        else return fibonacci(n - 1) + fibonacci(n - 2)
     }
     let valor=fibonacci(data)
     console.log(valor)
    
});

