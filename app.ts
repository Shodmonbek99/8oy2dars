interface User {
    name: string;
    email: string;
}

const userForm = document.getElementById('userForm') as HTMLFormElement;
const userCards = document.getElementById('userCards') as HTMLDivElement;

let users: User[] = [];

userForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    
    const newUser: User = {
        name: nameInput.value,
        email: emailInput.value
    };
    
    users.push(newUser);
    nameInput.value = '';
    emailInput.value = '';
    renderUserCards();
});

function renderUserCards() {
    userCards.innerHTML = '';
    users.forEach((user) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h2>${user.name}</h2>
            <p>${user.email}</p>
        `;
        userCards.appendChild(card);
    });
}
