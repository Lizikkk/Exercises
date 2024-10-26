function isEqual(a,b){
    if(a === b){  // თუ ტიპი არ გვაინტერესებს გამოვიყენებთ '==' 
        return "ტოლია"
    }
    else{
        return "არ არის ტოლი"
    }
}

console.log(isEqual(5 ,5))