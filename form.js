

const validate = ()=> {
    const firstName = document.getElementById('first_name').value
    const lastName = document.getElementById('last_name').value
    console.log('hello' + firstName + lastName)
}

document.getElementById("submit").addEventListener("click", validate)