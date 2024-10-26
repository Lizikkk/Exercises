function convertTemp(fahrenheit){
    if( typeof fahrenheit === 'number'){
        return (fahrenheit - 32) * 5 / 9 
    }
    else{
        return false
    }
}

console.log(convertTemp(50))