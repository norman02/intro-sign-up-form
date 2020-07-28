

const validate = ()=> {
    const firstName = document.getElementById('first_name').value
    const lastName = document.getElementById('last_name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    console.log('hello' + ' ' +  firstName + ' ' + lastName + ' at ' + email + ' I hope you realize that ' + password + ' is a stupid password')
}


document.getElementById("submit").addEventListener("click", validate)

