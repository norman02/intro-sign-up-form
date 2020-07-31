

const validate = () => {
    // get elements
    let firstIcon = document.getElementById('first-error-icon')
    let firstNameInput = document.getElementById('first_name')
    let firstError = document.getElementById('first_error')

    let secondIcon = document.getElementById('second_icon')
    let lastNameInput = document.getElementById('last_name_input')
    let secondError = document.getElementById('second_error')

    let thirdIcon = document.getElementById('third_icon')
    let emailInput = document.getElementById('email_input')
    let thirdError = document.getElementById('third_error')

    let fourthIcon = document.getElementById('fourth_icon')
    let passwordInput = document.getElementById('password_input')
    let fourthError = document.getElementById('second_error')



    // values of inputs 
    let firstName = firstNameInput.value
    let lastName = lastNameInput.value
    let email = emailInput.value
    let password = passwordInput.value



    if (firstName === '') {
        firstIcon.style.display = 'inline'
        firstNameInput.style.border = '1.5px solid red'
        firstError.style.display = 'inline'
        firstNameInput.placeholder = ''
    } else {
        firstIcon.style.display = 'none'
        firstNameInput.style.border = '1.5px solid green'
        firstError.style.display = 'none'
    }

    if (lastName === '') {
        secondIcon.style.display = 'inline'
        lastNameInput.style.border = '1.5px solid red'
        secondError.style.display = 'inline'
        lastNameInput.placeholder = ''
    } else {
        secondIcon.style.display = 'none'
        lastNameInput.style.border = '1.5px solid green'
        secondError.style.display = 'none'
    }

    if (email === '') {
        thirdIcon.style.display = 'inline'
        emailInput.style.border = '1.5px solid red'
        thirdError.style.display = 'inline'
        emailInput.placeholder = ''
    } else {
        thirdIcon.style.display = 'none'
        emailInput.style.border = '1.5px solid green'
        thirdError.style.display = 'none'
    }

    if (password === '') {
        fourthIcon.style.display = 'inline'
        passwordInput.style.border = '1.5px solid red'
        fourthError.style.display = 'inline'
        passwordInput.placeholder = ''
    } else {
        fourthIcon.style.display = 'none'
        passwordInput.style.border = '1.5px solid green'
        fourthError.style.display = 'none'
    }

}

document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault()
    validate()
})





