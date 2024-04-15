// Question 2
const firstName = 'John';
const question2Text = document.querySelector('#question2');
question2Text.textContent = `Hello, ${firstName}!`;

// Question 3
const employee = {
    name: ['Biff', 'Henderson'],
    employeeNumber: 30573,
    department: 'Repossesions',
    interests: ['the Mob', 'fast cars', 'baseball'],
    active: true,
};
const question3 = document.querySelector('#question3');
const employeeSentence = `The employee's name is ${employee.name[0]} ${employee.name[1]}. Their employee number is ${employee.employeeNumber}. They work in ${employee.department} and their interests are ${employee.interests.join(', ')}.`;
question3.textContent = employeeSentence;

// Question 4
class Coffee {
    constructor(type, size) {
        this.type = type;
        this.size = size;
    }

    coffeeOrder() {
        const question4 = document.querySelector('#question4');
        question4.textContent = `You have ordered a ${this.size} ${this.type} coffee.`;
    }
}
const myCoffee = new Coffee('latte', 'large');
myCoffee.coffeeOrder();

// Question 5
const sandwich3 = {
    bread: 'multigrain',
    meat: 'sliced turkey',
    vegetables: {
        tomatoes: 'roma',
        lettuce: 'romaine',
        pickles: 'kosher dill',
    },
    spread: 'garlic mayonnaise',
};
const question5 = document.querySelector('question5');
const tomatoType = sandwich3.vegetables.tomatoes;
question5.textContent = `The type of tomatoes used in the sandwich is ${tomatoType}.`;

// Question 6
const car1 = {
    type: 'coupe',
    color: 'red',
    fuelType: 'battery electric',
    wheelType: '17" aluminum alloy',
    description() {
        alert(`This car is a ${this.color} ${this.fuelType} powered ${this.type} with ${this.wheelType} wheels.`);
    },
};

// Question 7a
const apiKey = '200556150';
const url = `https://lamp.computerstudi.es/~Priyansh001/js03/test2/api/users.php?api_key=200556150`;

// Question 7b
fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

// Question 7c
function displayUserData(data) {
    // Question 7d
    const question7d = document.querySelector('#question7d');
    const personalId = document.createElement('h2');
    personalId.textContent = data.id;
    const personalFirstName = document.createElement('h3');
    personalFirstName.textContent = data.first_name;
    const personalLastName = document.createElement('h3');
    personalLastName.textContent = data.last_name;
    const personalImage = document.createElement('img');
    personalImage.src = data.avatar;
    question7d.appendChild(personalId);
    question7d.appendChild(personalFirstName);
    question7d.appendChild(personalLastName);
    question7d.appendChild(personalImage);

    // Question 7e
    const question7e = document.querySelector('#question7e');
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const headers = Object.keys(data.results[0]);
    const headerRow = document.createElement('tr');
    headers.forEach((header) => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);
    data.results.forEach((result) => {
        const row = document.createElement('tr');
        headers.forEach((header) => {
            const td = document.createElement('td');
            td.textContent = result[header];
            row.appendChild(td);
        });
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    question7e.appendChild(table);
}