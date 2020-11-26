
function randomInteger(min, max) {
    let time = min + Math.random() * (max + 1 - min);
    return Math.floor(time);
}

function f(name, time) {
    const flag = true
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (flag) {
                alert(`Cкакун по кличке ${name} финишировал за ${time} cекунд`);
            }


        }, 2000);

    });


}


