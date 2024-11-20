let nimLastTwoDigits = 13; 
let isOdd = nimLastTwoDigits % 2 !== 0;
let startValue = nimLastTwoDigits;

if (isOdd) {
    let i = startValue;
    while (i <= startValue + 19) {
        console.log(i);
        i++;
    }
} else {
    let i = startValue;
    do {
        console.log(i);
        i++;
    } while (i <= startValue + 19);
}
