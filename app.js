var userForm = document.getElementById('userForm');
var userCards = document.getElementById('userCards');
var users = [];
userForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var newUser = {
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
    users.forEach(function (user) {
        var card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = "\n            <h2>".concat(user.name, "</h2>\n            <p>").concat(user.email, "</p>\n        ");
        userCards.appendChild(card);
    });
}
