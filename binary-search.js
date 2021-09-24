const myarray = [1, 3, 45, 5, 6, 7, 34, 5, 67, 89, 53, 12];

const search = (array, number) => {
    const sortedArray = array.sort((a, b) => { a > b ? a : b });

    let low = 0;
    let high = sortedArray.length - 1;

    while (low <= high) {
        let mid = Math.floor((high + low) / 2);
        let guess = sortedArray[mid];

        if (guess === number) {
            return mid;
        }

        if (guess > number) {
            high = mid - 1;
        }

        if (guess < number) {
            low = mid + 1
        }
    }
    return false;

};

console.log(search(myarray, 7));

