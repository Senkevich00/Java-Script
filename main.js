// задание 1
function isPalindrome(str) {
    var strLen = str.length,
        strReverse = str.split('').reverse().join('');
    if (strReverse == str) {
        return 'yes';
    } else {
        return 'no';
    }
}

test = isPalindrome('человек');
test2 = isPalindrome('шалаш');

console.log(test);
console.log(test2);

// задание 2
const array = [2, 1, 9, 4, 6, 5, 3, 7, 8, 10]
console.log("array", array)

bubbleSort(array)


function bubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            const buff = array[i]
            array[i] = array[i + 1]
            array[i + 1] = buff
        }

    }
    console.log("array", array)
}





