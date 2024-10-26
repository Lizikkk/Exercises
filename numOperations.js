function numOperations(a, b, operation) {
    if (typeof a === 'number' && typeof b === 'number') {
        if(operation === '+'){
            return a + b 
        }
        if(operation === '-'){
            return a - b
        }            
        if(operation === '*'){
            return a * b
        }
        if(operation === '/'){
            if( b === 0){
                return false
            }
            else{
            return a / b
            }
        }
        return false;
    } 
    else {
        return false;
    }
}

console.log(numOperations(10,2));
console.log(numOperations(10,2,'2'));
console.log(numOperations(10,2,'*'));
console.log(numOperations(10,2,'/'));

