let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddNunbers = 0;

for (let index = 0; index < numbers.length; index +=1){
    if(numbers[index] % 2 !== 0 ){
        oddNunbers +=1
    }
}        

if(oddNunbers <= 0){
    console.log('Nenhum valor impar encontrado');
}
else{
    console.log('Existem', oddNunbers, 'numeros impares');
}

 
 
     