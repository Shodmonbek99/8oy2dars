interface User {
    name: string;
    email: string;
    password: string;
}

const userForm = document.getElementById('userForm') as HTMLFormElement;
const userCards = document.getElementById('userCards') as HTMLDivElement;

let users: User[] = [];

userForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    
    const newUser: User = {
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

function deleteUser(index: number) {
    users.splice(index, 1);
    renderUserCards();
}

function editUser(index: number) {
    const user = users[index];
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;

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
    }
}

function addUser(event: Event) {
    event.preventDefault();
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;

    const newUser: User = {
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

userForm.addEventListener('submit', addUser as EventListener);
