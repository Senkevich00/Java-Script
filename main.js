const username = localStorage.getItem('username');

if (username === null || username.length === 0) {
    document.querySelector('#username').classList.remove('hidden');
    document.querySelector('#username').addEventListener('input', function () {
        localStorage.setItem('username', this.value.trim());
    });
} else {
    document.querySelector('.greet').textContent = `Привет, ${username}!`;
}









