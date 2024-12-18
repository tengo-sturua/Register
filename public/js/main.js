document.addEventListener('DOMContentLoaded', () => {

const fromSignup = document.getElementById('signupForm')
const fromSignin = document.getElementById('signinForm')


if(fromSignin){
    fromSignin.addEventListener('submit', async (event) => {
        event.preventDefault()

        const data = {
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,
        }

        try{
            const response = await fetch('http://localhost:8080/api/auth/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            const result = await response.json()
            alert(result.message || 'Sign-In successful')
        }catch (error){
            alert('Sign-in failed')
        }
    })
}


if(fromSignup){
    fromSignup.addEventListener('submit', async (event) => {
        event.preventDefault()

        const data = {
            firstname: document.getElementById("name").value,
            lastname: document.getElementById("lastname").value,
            username: document.getElementById('username1').value,
            email: document.getElementById("email").value,
            password: document.getElementById('password1').value,
        }

        try{
            const response = await fetch('http://localhost:8080/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            const result = await response.json()
            alert(result.message || 'Sign-Up successful')
        }catch (error){
            alert('Sign-Up failed')
        }
    })
}

















})
