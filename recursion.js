
// Countdown to zero

const countdown = (number) => {
    console.log(number)
    if(number <= 0) {
        console.log("Process complete")
    }
    else {
        countdown(number-1)
    }
};


countdown(10000)