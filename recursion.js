// Divide and conquer
const summa = function(array) {
       
    if(array.length === 0) {
        return 0;
    }       
    else {
        let [head, ...tail] = array
        return head + summa(tail);
    }
    
}

console.log(summa([3,4,5,12,12,12,2,4,5,6,7,8,9,0,9]))



// // Countdown to zero

// const countdown = (number) => {
//     console.log(number)
//     if(number <= 0) {
//         console.log("Process complete")
//     }
//     else {
//         countdown(number-1)
//     }
// };


// countdown(10000)