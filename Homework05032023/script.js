// Решить следующие задачи:
// Напишите цикл for, который выводит консоль каждое второе число от 0 до 10
// Напишите цикл for, который выводит в консоль  все числа от 55 до 20
// Дан массив numbers. Вывести в консоль все числа из массива

// const numbers = [3, 5, 11, 2, 8, 1, 6];

// Сформировать новый массив numbers_squared и передать в него все элементы из массива numbers, возведенные в квадрат
// Создать переменную last_elem и передать в нее последний элемент из сформированного массива numbers_squared (обратиться к элементу массива по индексу)
// Дан объект user. Используя данные из объекта, сформировать строку в формате: ‘User’s name is <FIRST_NAME> <LAST_NAME>. He is <AGE> years old’

// const user = {
// first_name: 'Ivan', 
// last_name: 'Ivanov', 
// age: 20, 
// salary: 500
// }
// _______________________________________________
// Задача 1

// for(let i = 0; i < 10; i++) {
//     console.log(i)
// }
// ______________________________________________

// Задача 2
// for(let i = 0; i < 55; i++) {
//     if(i > 20) {
//     console.log(i)
// }
// }
// ______________________________________________
// Задача 3
// const numbers = [3, 5, 11, 2, 8, 1, 6];
// console.log(numbers);
// ______________________________________________
// Задача 4
const numbers = [3, 5, 11, 2, 8, 1, 6];
const numbers_squared = []

for(let i = 0; i < numbers.length; i++){
    numbers_squared.push(numbers[i] * numbers[i])
}
console.log(numbers_squared);
// __________________________________________________
// Задача 5
let last_elem = [];
last_elem.push(numbers_squared[6])
console.log(last_elem);
// __________________________________________________
// Задача 6
 const user = {
 first_name: 'Ivan', 
 last_name: 'Ivanov', 
 age: 20, 
 salary: 500
 }

 console.log("Users name is ", user.first_name + user.last_name, "He is ", user.age, "years old");