"use strict";
const userForm = document.getElementById('userForm');
const userCards = document.getElementById('userCards');
let users = [];
userForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const newUser = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    };
    users.push(newUser);
    nameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
    renderUserCards();
});
function renderUserCards() {
    userCards.innerHTML = '';
    users.forEach((user, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h2>${user.name}</h2>
            <p>${user.email}</p>
            <p>${user.password}</p>
            <button class="edit" onclick="editUser(${index})">Edit</button>
            <button onclick="deleteUser(${index})">Delete</button>
        `;
        userCards.appendChild(card);
    });
}
function deleteUser(index) {
    users.splice(index, 1);
    renderUserCards();
}
function editUser(index) {
    const user = users[index];
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    nameInput.value = user.name;
    emailInput.value = user.email;
    passwordInput.value = user.password;
    userForm.onsubmit = (event) => {
        event.preventDefault();
        user.name = nameInput.value;
        user.email = emailInput.value;
        user.password = passwordInput.value;
        renderUserCards();
        userForm.onsubmit = addUser;
    };
}
function addUser(event) {
    event.preventDefault();
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const newUser = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    };
    users.push(newUser);
    nameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
    renderUserCards();
}
userForm.addEventListener('submit', addUser);
