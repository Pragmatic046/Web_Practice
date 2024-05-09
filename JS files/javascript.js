// -----------------------GLOBAL WORK----------------------------------------------------------------
let database = []

// -----------------------Sign Up Page Starts from here-------------------------------------------------
function signup() {
    // In this function 'signup-btn' will enble to perform function on click to call the 'render_signup_page' function
    document.getElementById("signup-btn").addEventListener("click", window.location.href = "signup.html")
}

// function submit_Data(name, email, password, repassword) {
function submit_Data() {
    var get_name = document.getElementById('name').value
    var get_email = document.getElementById('email').value
    var get_password = document.getElementById('password').value
    var get_repassword = document.getElementById('confirm-password').value

    if (get_name === "" && get_email === "" && get_password === "" && get_repassword === "") {
        alert("Fill all the fields")
    }
    else if (get_password !== get_repassword) {
        alert("Warning! Password does'nt match")
    }
    else {
        database.push({ get_name: get_name, get_email: get_email, get_password: get_password, get_repassword: get_repassword })
        alert("Data stored in database.")
        window.location.href = "login.html"
    }
    // localStorage.setItem('database', JSON.stringify(database))
    //Store user data from local storage(JSON)
    // let users = JSON.parse(localStorage.getItem('database'));
}

// -------------------------------Sign Up End here-----------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
// ------------------Login Page Starts Here------------------------------------------------------------------

function login() {

    // In this function 'signup-btn' got enbled to perform function on click to call the 'render_signup_page' function
    document.getElementById("login-btn").addEventListener("click", window.location.href = "login.html")
}

// Authentication function, checking email and password that matches with the database
function auth() {
    console.log({database})
    let auth_get_email = document.getElementById('login-email').value
    let auth_get_password = document.getElementById('login-password').value
    let findUser = database.find(user => user.auth_get_email === auth_get_email && user.auth_get_password === auth_get_password)

    if (findUser) {
        window.location.href = "index.html"
        alert('success')
    } else {
        alert('Something went wrong. Please try again')
    }
    //Retrieve user data from local storage(JSON)
    // let users = JSON.parse(localStorage.getItem('database'));
}

// ---------------------------Login Page Ends Here-----------------------------------------------------
// ------------------------------------------------------------------------------------------------------
// --------------INDEX PAGE--------------------------------------------------------------------
// .
// .
// -------------------Index Ends Here-----------------------------------------------------------------
