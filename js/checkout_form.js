function redirect() {
    console.log('1')
    form_obj.removeEventListener('submit', checkValidity)
    window.location.replace('google.com')
    window.location.href = 'google.com'
}

function checkValidity() {
    let error_message = ''

    const ccnum = document.getElementById('ccnum').value
    var numbers = /^[0-9]*$/
    if (!numbers.test(ccnum)) {
        error_message =
            error_message + 'CC Number contains invalid characters\n'
    }
    if (ccnum.length != 16) {
        error_message = error_message + 'CC Number must be 16 digits\n'
    }

    const fname = document.getElementById('fname').value
    var english = /^[A-Za-z]*$/
    if (!english.test(fname)) {
        error_message = error_message + 'name entered invalid\n'
    }

    const CW = document.getElementById('CW').value
    if (!numbers.test(CW)) {
        error_message = error_message + 'CW contains invalid characters\n'
    }
    if (CW.length != 3) {
        error_message = error_message + 'CW must be 3 digits\n'
    }

    const currentDate = new Date().toJSON().slice(0, 10)
    const curMonth = currentDate.slice(5, 7)
    const curYear = currentDate.slice(2, 4)

    const month = document.getElementById('month').value
    const year = document.getElementById('year').value
    if (parseInt(year) < parseInt(curYear)) {
        error_message = error_message + 'Incorrect date entered\n'
    } else {
        if (
            (parseInt(month) < parseInt(curMonth) &&
                parseInt(year) === parseInt(curYear)) ||
            parseInt(month) > 12 ||
            parseInt(month) < 1
        ) {
            error_message = error_message + 'Incorrect date entered\n'
        }
    }

    if (!(error_message === '')) {
        alert(error_message)
    } else {
        window.location.replace('thank_you.html?plan_num=' + value)
    }
}

const params = new URLSearchParams(window.location.search)
let value = params.get('plan_num')

const form_obj = document.getElementById('submitButton')
form_obj.addEventListener('click', checkValidity)
// window.location.href = 'www.google.com'

// checkValidity()
