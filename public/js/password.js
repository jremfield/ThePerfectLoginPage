const password = document.querySelector('input[name=password]')
const toggle = document.querySelector('input[type=button]')
var visible = false

toggle.addEventListener('click', () => {
    if (visible) {
        visible = false
        password.type = 'password'

        toggle.value = '+'
    }

    else {
        visible = true
        password.type = 'text'

        toggle.value = '-'
    }
})