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

const currentUser = data.find(el => el.lastName === surname);
if (currentUser) {
    alert(f.firstName)
}
else {
    alert("No results found for you request")
}






