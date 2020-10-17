const data = [
    {
        firstName: "Andrey",
        lastName: "Buzin",
        age: 20,
    },
    {
        firstName: "Viktor",
        lastName: "Kit",
        age: 18,
    },
    {
        firstName: "Sasha",
        lastName: "Gray",
        age: 24,
    }

]

const surname = prompt("Введите вашу фамилию");

const f = data.find(el => el.lastName === surname);
if (f) {
    alert(f.firstName)
}
else {
    alert("No results found for you request")
}






