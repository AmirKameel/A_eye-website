document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent the form from submitting the default way

        const username = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message_user = document.getElementById('message').value;

        try {
            const response = await axios.post("http://localhost:3022/user_concat", { username, email, message_user });
            alert(response.data.message); // Show a success message
        } catch (error) {
            console.error('There was an error!', error);
            alert('Error sending message');
        }
    });
});
