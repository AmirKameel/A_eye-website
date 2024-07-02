const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});
loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


document.addEventListener('DOMContentLoaded', function () {
    // Handle signup form submission
    document.querySelector('.sign-up form').addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent the form from submitting the default way

        const username = event.target.querySelector('input[placeholder="Name"]').value;
        const email = event.target.querySelector('input[placeholder="Email"]').value;
        const password = event.target.querySelector('input[placeholder="Password"]').value;
        const age = event.target.querySelector('input[placeholder="Age"]').value;

        try {
            const response = await axios.post('http://localhost:3022/signup', { username, email, password, age });
            alert(response.data.message); // Show a success message
        } catch (error) {
            console.error('There was an error!', error);
            alert('Error signing up');
        }
    });
});
