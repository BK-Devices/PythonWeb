// ######################## AJAX function ######################## //
function createRequestObject() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlhttp;
}

var http = createRequestObject();

// ######################## Form box variables ######################## //

var signin_id = document.getElementById("signin-id");
var signin_id_mess = document.getElementById("signin-id-mess");
var signup_id = document.getElementById("signup-id");
var signup_id_mess = document.getElementById("signup-id-mess");
var pass = document.getElementById("signup-psw");
var psw_mess = document.getElementById("signup-psw-mess");
var signin_mess = document.getElementById("signin-mess");
var signup_mess = document.getElementById("signup-mess");

// ######################## Changing box by using navigation bar ######################## //
function view(block){
    if(block == "home"){
        document.getElementById("home-link").style.border = "2px solid #80ff40";
        document.getElementById("admin-link").style.border = "2px solid transparent";
        document.getElementById("cars-link").style.border = "2px solid transparent";
        document.getElementById("service-link").style.border = "2px solid transparent";
        document.getElementById("about-link").style.border = "2px solid transparent";

        document.getElementById("home-box").style.display = "block";
        document.getElementById("form-box").style.display = "none";
        document.getElementById("cars-box").style.display = "none";
        document.getElementById("service-box").style.display = "none";
        document.getElementById("about-box").style.display = "none";

        document.getElementById("home-content").style.display = "block";
        document.getElementById("form-content").style.display = "none";
        document.getElementById("cars-content").style.display = "none";
        document.getElementById("service-content").style.display = "none";
        document.getElementById("about-content").style.display = "none";

        document.getElementById("car").style.display = "none";
        document.getElementById("car-mess").style.display = "none";

        document.getElementById("signin").reset();
        document.getElementById("signup").reset();
        document.getElementById("car-form").reset();
    }
    if(block == "admin"){
        document.getElementById("home-link").style.border = "2px solid transparent";
        document.getElementById("admin-link").style.border = "2px solid #80ff40";
        document.getElementById("service-link").style.border = "2px solid transparent";
        document.getElementById("cars-link").style.border = "2px solid transparent";
        document.getElementById("about-link").style.border = "2px solid transparent";

        document.getElementById("home-box").style.display = "none";
        document.getElementById("form-box").style.display = "block";
        document.getElementById("cars-box").style.display = "none";
        document.getElementById("service-box").style.display = "none";
        document.getElementById("about-box").style.display = "none";

        document.getElementById("home-content").style.display = "none";
        document.getElementById("form-content").style.display = "block";
        document.getElementById("cars-content").style.display = "none";
        document.getElementById("service-content").style.display = "none";
        document.getElementById("about-content").style.display = "none";

        document.getElementById("car").style.display = "none";
        document.getElementById("car-mess").style.display = "none";

        document.getElementById("car-form").reset();
    }
    if(block == "cars"){
        document.getElementById("home-link").style.border = "2px solid transparent";
        document.getElementById("admin-link").style.border = "2px solid transparent";
        document.getElementById("cars-link").style.border = "2px solid #80ff40";
        document.getElementById("service-link").style.border = "2px solid transparent";
        document.getElementById("about-link").style.border = "2px solid transparent";

        document.getElementById("home-box").style.display = "none";
        document.getElementById("form-box").style.display = "none";
        document.getElementById("cars-box").style.display = "block";
        document.getElementById("service-box").style.display = "none";
        document.getElementById("about-box").style.display = "none";

        document.getElementById("home-content").style.display = "none";
        document.getElementById("form-content").style.display = "none";
        document.getElementById("cars-content").style.display = "block";
        document.getElementById("service-content").style.display = "none";
        document.getElementById("about-content").style.display = "none";

        document.getElementById("signin").reset();
        document.getElementById("signup").reset();
    }
    if(block == "service"){
        document.getElementById("home-link").style.border = "2px solid transparent";
        document.getElementById("admin-link").style.border = "2px solid transparent";
        document.getElementById("cars-link").style.border = "2px solid transparent";
        document.getElementById("service-link").style.border = "2px solid #80ff40";
        document.getElementById("about-link").style.border = "2px solid transparent";

        document.getElementById("home-box").style.display = "none";
        document.getElementById("form-box").style.display = "none";
        document.getElementById("cars-box").style.display = "none";
        document.getElementById("service-box").style.display = "block";
        document.getElementById("about-box").style.display = "none";

        document.getElementById("home-content").style.display = "none";
        document.getElementById("form-content").style.display = "none";
        document.getElementById("cars-content").style.display = "none";
        document.getElementById("service-content").style.display = "block";
        document.getElementById("about-content").style.display = "none";

        document.getElementById("car").style.display = "none";
        document.getElementById("car-mess").style.display = "none";

        document.getElementById("signin").reset();
        document.getElementById("signup").reset();
        document.getElementById("car-form").reset();
    }
    if(block == "about"){
        document.getElementById("home-link").style.border = "2px solid transparent";
        document.getElementById("admin-link").style.border = "2px solid transparent";
        document.getElementById("cars-link").style.border = "2px solid transparent";
        document.getElementById("service-link").style.border = "2px solid transparent";
        document.getElementById("about-link").style.border = "2px solid #80ff40";

        document.getElementById("home-box").style.display = "none";
        document.getElementById("form-box").style.display = "none";
        document.getElementById("cars-box").style.display = "none";
        document.getElementById("service-box").style.display = "none";
        document.getElementById("about-box").style.display = "block";

        document.getElementById("home-content").style.display = "none";
        document.getElementById("form-content").style.display = "none";
        document.getElementById("cars-content").style.display = "none";
        document.getElementById("service-content").style.display = "none";
        document.getElementById("about-content").style.display = "block";

        document.getElementById("car").style.display = "none";
        document.getElementById("car-mess").style.display = "none";

        document.getElementById("signin").reset();
        document.getElementById("signup").reset();
        document.getElementById("car-form").reset();
    }
}

// ######################## Changing sign-in and sign-up block functions ######################## // 
function signInBlock(){
    document.getElementById("signin").reset();
    signin_id_mess.style.display = "none";
    signin_mess.style.display = "none";
    document.getElementById("signin-btn").style.color = "#000";
    document.getElementById("signup-btn").style.color = "#fff";
    document.getElementById("signin").style.left = "50px";
    document.getElementById("signup").style.left = "450px";
    document.getElementById("btn").style.left = "0px";
}
function signUpBlock(){
    document.getElementById("signup").reset();
    signup_id_mess.style.display = "none";
    psw_mess.style.display = "none";
    signup_mess.style.display = "none";
    document.getElementById("signin-btn").style.color = "#fff";
    document.getElementById("signup-btn").style.color = "#000";
    document.getElementById("signin").style.left = "-400px";
    document.getElementById("signup").style.left = "50px";
    document.getElementById("btn").style.left = "110px";
}

// ######################## sign-in id checking functions ######################## //
signin_id.addEventListener("input", () => {
    if(0 < signin_id.value.length){
        signin_id_mess.style.display = "block";

        http.open("get", "/checkid/?data=" + JSON.stringify({"Id": signin_id.value}));
        http.onreadystatechange = signInIdResponse;
        http.send(null);
    }
    else{
        signin_id_mess.style.display = "none";
    }
})
function signInIdResponse() {
    if(http.readyState == 4){
        response = http.responseText;
        if(response == "Yes"){
            signin_id_mess.innerHTML = "Found";
            signin_id_mess.style.color = "#00ff00";
        }
        else if(response == "No"){
            signin_id_mess.innerHTML = "Not found";
            signin_id_mess.style.color = "#ff0000";
        }
        else{
            signin_id_mess.innerHTML = "Sorry Connection Error";
            signin_id_mess.style.color = "#ff0000";
        }
    }
}

// ######################## sign-up id checking functions ######################## //
signup_id.addEventListener("input", () => {
    if(0 < signup_id.value.length){
        signup_id_mess.style.display = "block";

        http.open("get", "/checkid/?data=" + JSON.stringify({"Id": signup_id.value}));
        http.onreadystatechange = signUpIdResponse;
        http.send(null);
    }
    else{
        signup_id_mess.style.display = "none";
    }
})
function signUpIdResponse() {
    if(http.readyState == 4){
        response = http.responseText;
        if(response == "No"){
            signup_id_mess.innerHTML = "Available";
            signup_id_mess.style.color = "#00ff00";
        }
        else if(response == "Yes"){
            signup_id_mess.innerHTML = "Not available";
            signup_id_mess.style.color = "#ff0000";
        }
        else{
            signup_id_mess.innerHTML = "Sorry Connection Error";
            signup_id_mess.style.color = "#ff0000";
        }
    }
}

// ######################## Sign-up password strength functions ######################## //
pass.addEventListener("input", () => {
    if(0 < pass.value.length){
        psw_mess.style.display = "block";

        if(4 > pass.value.length){
            psw_mess.innerHTML = "Weak";
            psw_mess.style.color = "#ff0000";
        }
        else if(4 <= pass.value.length && pass.value.length < 8){
            psw_mess.innerHTML = "Medium";
            psw_mess.style.color = "#ebf749";
        }
        else{
            psw_mess.innerHTML = "Strong";
            psw_mess.style.color = "#00ff00";
        }
    }
    else{
        psw_mess.style.display = "none";
    }
})

// ######################## Sign-in function ######################## //
function signIn(){
    event.preventDefault();
    psw = document.getElementById("signin-psw").value;
    http.open("get", "/signin/?data=" + JSON.stringify({"Id": signin_id.value, "Password": psw}));
    http.onreadystatechange = signInResponse;
    http.send(null);
}
function signInResponse(){
    if(http.readyState == 4){
        response = http.responseText;
        if(response == "Yes"){
            document.getElementById("signin").action = "/user/";
            document.getElementById("signin").submit();
        }
        else if(response == "No"){
            signin_mess.style.display = "block";
            signin_mess.innerHTML = "Please check your userid or password";
            signin_mess.style.color = "#ff0000";
        }
        else{
            signin_mess.style.display = "block";
            signin_mess.innerHTML = "Sorry Connection Error";
            signin_mess.style.color = "#ff0000";
        }
    }
}

// ######################## Sign-up function ######################## //
function signUp(){
    event.preventDefault();
    nm = document.getElementById("signup-nm").value;
    em = document.getElementById("signup-em").value;
    if(signup_id.value.length > 4 && nm.length > 4 && pass.value.length > 8){
        http.open("get", "/signup/?data=" + JSON.stringify({"Id": signup_id.value, "Name": nm, "Email": em, "Password": pass.value}));
        http.onreadystatechange = signUpResponse;
        http.send(null);
    }
    else{
        signup_mess.innerHTML = "Please provide correct data";
        signup_mess.style.color = "#ff0000";
    }
}
function signUpResponse(){
    if(http.readyState == 4){
        signup_mess.style.display = "block";
        response = http.responseText;
        if(response == "Yes"){
            signup_mess.innerHTML = "Congratulations You are registered successfully";
            signup_mess.style.color = "#00ff00";
        }
        else if(response == "No"){
            signup_mess.innerHTML = "Please check your userid or password";
            signup_mess.style.color = "#ff0000";
        }
        else{
            signup_mess.innerHTML = "Sorry Connection Error";
            signup_mess.style.color = "#ff0000";
        }
    }
}

// ######################## Car Searching function ######################## //
function model(){
    mod = document.getElementById("mod-inp").value;
    if(mod == ""){
        document.getElementById("car").style.display = "none";
        document.getElementById("car-mess").style.display = "block";
        document.getElementById("car-mess").innerHTML = "Plese Enter Model Name in Text Box";
    }
    else{
        http.open("get", "/searchcar/?data=" + JSON.stringify({'Type': 'Model', 'Name': mod}));
        http.onreadystatechange = showCarResult;
        http.send(null);
    }
}
function allCars(){
    http.open("get", "/searchcar/?data=" + JSON.stringify({'Type': 'All', 'Name': 'All'}));
    http.onreadystatechange = showCarResult;
    http.send(null);
}
function company(comp){
    http.open("get", "/searchcar/?data=" + JSON.stringify({'Type': 'Company', 'Name': comp}));
    http.onreadystatechange = showCarResult;
    http.send(null);
}
function type(typ){
    http.open("get", "/searchcar/?data=" + JSON.stringify({'Type': 'Type', 'Name': typ}));
    http.onreadystatechange = showCarResult;
    http.send(null);
}
function showCarResult(){
    if(http.readyState == 4){
        result = JSON.parse(http.responseText);
        document.getElementById("car").style.display = "none";
        document.getElementById("car-mess").style.display = "block";
        if(result.result == "Empty"){
            document.getElementById("car-mess").innerHTML = "Sorry! Their are no cars in our Showroom";
        }
        else if(result.result == null){
            document.getElementById("car-mess").innerHTML = "Sorry! Connection Error";
        }
        else{
            document.getElementById("car").style.display = "block";
            document.getElementById("car-mess").style.display = "none";
            showCars(result);
        }
    }
}
function showCars(val){
    if(val == "inc"){
        car += 1;
    }
    else if(val == "dec"){
        car -= 1;
    }
    else{
        result = val;
        car = 0;
    }
    len = Object.keys(result.result).length;
    if(car > len - 1){
        car = len - 1;
    }
    if(car < 0){
        car = 0;
    }
    document.getElementById("pho").src = result.result[car].Photo;
    document.getElementById("mod").innerHTML  = "Model : " + result.result[car].Model;
    document.getElementById("comp").innerHTML = "Company : " + result.result[car].Company;
    document.getElementById("typ").innerHTML  = "Type : " + result.result[car].Type;
    document.getElementById("eng").innerHTML  = "Engine : " + result.result[car].Engine;
    document.getElementById("mil").innerHTML  = "Mileage : " + result.result[car].Mileage;
    document.getElementById("tran").innerHTML = "Transmission : " + result.result[car].Transmission;
    document.getElementById("fue").innerHTML  = "Fuel Type : " + result.result[car].Fuel;
    document.getElementById("pri").innerHTML  = "Price : " + result.result[car].Price;
    document.getElementById("car-num").innerHTML  = (car + 1) + " / " + len;
}