// Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.
const numbers = document.querySelector('.numbers')

for (let i = 100; i >=10; i--) {
    const p = document.createElement('p')
    p.innerText = i
    numbers.append(p);
}
// _________________________________________
// Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.
const str = ['Lorem', 'Country', 'age', 'name', 'last name']
const stringsDiv = document.querySelector(".strings_container")

for(let i = 0; i < str.length; i++) {
    const p = document.createElement("p")
    p.innerText = str[i]
    stringsDiv.append(p)
}
// ________________________________________
// Задача 3 
// Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.
const users = [
    {
        name: Lorel,
        surname: Smith,
        age: 15
    }, {
        name: Marina,
        surname: Samson,
        age: 35
    }, {
        name: Veronika,
        surname: Meyer,
        age: 27
    }, {
        name: Jack,
        surname: Dominik,
        age: 22
    }
]
const userDiv = document.querySelector(".users-container")
for (let i = 0; i < users.length; i++) {
    if (users[i].age < 18) continue
    const {name, surname, age} = users[i]
    const div = document.createElement("div")
    const pFirstName = document.createElement("p")
    pFirstName.innerText = `Имя пользователя: ${name}`
    const pLastName = document.createElement("p")
    pLastName.innerText = `Фамилия пользователя: ${surname}`
    const pAge = document.createElement("p")
    pAge.innerText = `Возраст пользователя: ${age}`
    div.append(pFirstName, pLastName, pAge)
}