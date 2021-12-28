function getEvenNumbers(numbersArray){
    // filter out the odd numbers
    return numbersArray.filter(function(number){
        return number % 2 === 0;
    });
}