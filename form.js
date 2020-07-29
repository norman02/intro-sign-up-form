

const validate = ()=> {
    let valid = true
    let firstName = document.getElementById('first_name').value
    let lastName = document.getElementById('last_name').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value


    if (valid) {
        alert(`${firstName} ${lastName} ${email} ${password}`)
    } else {
        alert('please complete the required fields')
    }
}


document.getElementById("submit").addEventListener("click", validate)

