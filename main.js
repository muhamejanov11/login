let ID = document.querySelector('.Modme_ID')
let Password = document.querySelector('.Password')
let btn = document.querySelector('button')

let users_970 = [
    {
        id: 1,
        userName: 'Nurik',
        modme_ID: 816397,
        password: 85169,
        novigatePage: './nurik.html'
    }, {
        id: 2,
        userName: 'Said',
        modme_ID: 611732,
        password: 35012,
        novigatePage: './said.html'
    }, {
        id: 3,
        userName: 'Nurik',
        modme_ID: 680711,
        password: 64150,
        novigatePage: './sardor.html'
    }, {
        id: 4,
        userName: 'Nurik',
        modme_ID: 635027,
        password: 48329,
        novigatePage: './amirshox.html'
    }


]

btn.addEventListener('click', (e) => {
    e.preventDefault()
    users_970.map((v) => {
        if (v.modme_ID == ID.value && v.password == Password.value) {
            window.location.href = v.novigatePage
        }
    })
})