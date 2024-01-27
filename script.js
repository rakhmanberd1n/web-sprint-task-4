let users = [
    {
        'email': 'ilyas@gmail.com',
        'password': '123',
        'fullName': 'Ilyas Zhuanyshev',
        'country': 'Kazakhstan',
        'birthdate': '1990-03-22'
    }
]

function registerInit() {
    document.querySelector('.btn').addEventListener('click', register)
    console.log(localStorage)
}

function loginInit() { 
    document.querySelector('.btn').addEventListener('click', login)
}

function register() {
    let email = document.querySelector('.email').value
    let passsword = document.querySelector('.password').value
    let fullName = document.querySelector('.fullName').value
    let country = document.querySelector('.country').value
    let birthdate = document.querySelector('.birthdate').value

    let userList = JSON.parse(localStorage.users)

    if (userList == null) {
        userList = users
    }

    let flag = false
    for (let user of userList) {
        if (user.email !== email) {
            flag = false
        } else {
            flag = true
            break
        }
    }

    if (!flag) {
        let newUser = {
            'email': email,
            'password': passsword,
            'fullName': fullName,
            'country': country,
            'birthdate': birthdate
        }
        userList.push(newUser)
        showNotification('Registration completed successfully!');
    }
    else {
        showNotification('A user with this email is already registered.');
    }

    localStorage.setItem('users', JSON.stringify(userList))
}

function showNotification(message) {
    window.alert(message);
}

function login() {
    let email = document.querySelector('.email').value
    let passsword = document.querySelector('.password').value

    let userList = JSON.parse(localStorage.users)

    for (let user of userList) {
        if (user.email === email && user.password === passsword) {
            document.querySelector('.form').style.display = 'none'
            document.querySelector('.profile_block').style.display = 'block'

            document.querySelector('.header_login_link').innerText = user.fullName
            document.querySelector('.header_register_link').innerText = 'Logout'

            let userNameWelcomeElement = document.querySelector('.profile_block_fullName_w');
            let userNameElement = document.querySelector('.profile_block_fullName');
            let userEmailElement = document.querySelector('.profile_block_email');
            let userCountryElement = document.querySelector('.profile_block_country');
            let userBirthdateElement = document.querySelector('.profile_block_birthdate');

            userNameWelcomeElement.innerText = user.fullName;
            userNameElement.innerText = user.fullName;
            userEmailElement.innerText = user.email;
            userCountryElement.innerText = user.country;
            userBirthdateElement.innerText = user.birthdate;
            break
        }
    }
}