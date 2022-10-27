const sendDataToServer = () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    fetch('/signin', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({
            email: email,
            password: password
        })

    }).then((res) => {
        return res.json()
    }).then((data) => {
        let userName = data.firstName;
        localStorage.setItem('username', userName)
        location.href = 'menu.html'
    })
};