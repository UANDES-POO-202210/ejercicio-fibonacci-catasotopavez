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

//utilicé las siguientes páginas para hacer el código: 
//https://stackoverflow.com/questions/7944239/generating-fibonacci-sequence#:~:text=function*%20fib()%20%7B%20var,next()%3B%20%2F%2F%201%20sequence.
//https://www.youtube.com/watch?v=FusB-KqZfXc
//https://stackoverflow.com/questions/11646107/you-have-not-concluded-your-merge-merge-head-exists
