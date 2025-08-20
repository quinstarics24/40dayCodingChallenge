const formTitle = document.getElementById('form-title');
const submitBtn = document.getElementById('submit-btn');
const toggleLink = document.getElementById('toggle-form');
const nameInput = document.getElementById('name');
const message = document.getElementById('message');

let isLogin = true;

toggleLink.addEventListener('click', () => {
    isLogin = !isLogin;
    if(isLogin){
        formTitle.innerText = 'Login';
        submitBtn.innerText = 'Login';
        toggleLink.innerText = "Don't have an account? Sign up";
        nameInput.style.display = 'none';
    } else {
        formTitle.innerText = 'Sign Up';
        submitBtn.innerText = 'Sign Up';
        toggleLink.innerText = "Already have an account? Login";
        nameInput.style.display = 'block';
    }
});

submitBtn.addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const name = nameInput.value;

    const url = isLogin ? 'http://localhost:3000/login' : 'http://localhost:3000/signup';

    const bodyData = isLogin ? { email, password } : { name, email, password };

    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bodyData)
        });

        const data = await res.json();

        if(res.ok){
            message.style.color = 'green';
            message.innerText = data.message;
        } else {
            message.style.color = 'red';
            message.innerText = data.message;
        }

    } catch(err) {
        message.style.color = 'red';
        message.innerText = 'Server error';
    }
});
