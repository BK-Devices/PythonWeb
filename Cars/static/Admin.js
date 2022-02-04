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

// ######################## Changing box by using navigation bar ######################## //
function view(block){
    if(block == "home"){
        document.getElementById("home-link").style.border = "2px solid #80ff40";
        document.getElementById("car-link").style.border = "2px solid transparent";
        document.getElementById("cust-link").style.border = "2px solid transparent";
        document.getElementById("report-link").style.border = "2px solid transparent";

        document.getElementById("home-box").style.display = "block";
        document.getElementById("car-box").style.display = "none";
        document.getElementById("cust-box").style.display = "none";
        document.getElementById("report-box").style.display = "none";

        document.getElementById("car").style.display = "none";
        document.getElementById("car-mess").style.display = "none";
        document.getElementById("cust").style.display = "none";
        document.getElementById("cust-mess").style.display = "none";

        document.getElementById("newcar-form").reset();
        document.getElementById("editcar-form").reset();
        document.getElementById("newcust-form").reset();
        document.getElementById("editcust-form").reset();
        document.getElementById("car-form").reset();
        document.getElementById("cust-form").reset();
    }
    if(block == "car"){
        document.getElementById("home-link").style.border = "2px solid transparent";
        document.getElementById("car-link").style.border = "2px solid #80ff40";
        document.getElementById("cust-link").style.border = "2px solid transparent";
        document.getElementById("report-link").style.border = "2px solid transparent";

        document.getElementById("home-box").style.display = "none";
        document.getElementById("car-box").style.display = "block";
        document.getElementById("cust-box").style.display = "none";
        document.getElementById("report-box").style.display = "none";

        document.getElementById("cust").style.display = "none";
        document.getElementById("cust-mess").style.display = "none";

        document.getElementById("cust-form").reset();
        document.getElementById("newcust-form").reset();
        document.getElementById("editcust-form").reset();
    }
    if(block == "cust"){
        document.getElementById("home-link").style.border = "2px solid transparent";
        document.getElementById("car-link").style.border = "2px solid transparent";
        document.getElementById("cust-link").style.border = "2px solid #80ff40";
        document.getElementById("report-link").style.border = "2px solid transparent";

        document.getElementById("home-box").style.display = "none";
        document.getElementById("car-box").style.display = "none";
        document.getElementById("cust-box").style.display = "block";
        document.getElementById("report-box").style.display = "none";

        document.getElementById("car").style.display = "none";
        document.getElementById("car-mess").style.display = "none";

        document.getElementById("car-form").reset();
        document.getElementById("newcar-form").reset();
        document.getElementById("editcar-form").reset();
    }
    if(block == "report"){
        document.getElementById("home-link").style.border = "2px solid transparent";
        document.getElementById("car-link").style.border = "2px solid transparent";
        document.getElementById("cust-link").style.border = "2px solid transparent";
        document.getElementById("report-link").style.border = "2px solid #80ff40";

        document.getElementById("home-box").style.display = "none";
        document.getElementById("car-box").style.display = "none";
        document.getElementById("cust-box").style.display = "none";
        document.getElementById("report-box").style.display = "block";

        document.getElementById("car").style.display = "none";
        document.getElementById("car-mess").style.display = "none";
        document.getElementById("cust").style.display = "none";
        document.getElementById("cust-mess").style.display = "none";

        document.getElementById("newcar-form").reset();
        document.getElementById("editcar-form").reset();
        document.getElementById("newcust-form").reset();
        document.getElementById("editcust-form").reset();
        document.getElementById("car-form").reset();
        document.getElementById("cust-form").reset();
    }
}

// ######################## Car form block Functions ######################## //
function newCarBlock(){
    document.getElementById("editcar-form").reset();
    document.getElementById("newcar-btn").style.color = "#000";
    document.getElementById("editcar-btn").style.color = "#fff";
    document.getElementById("newcar-form").style.left = "50px";
    document.getElementById("editcar-form").style.left = "450px";
    document.getElementById("car-btn").style.left = "0px";
}
function editCarBlock(){
    document.getElementById("newcar-form").reset();
    document.getElementById("newcar-btn").style.color = "#fff";
    document.getElementById("editcar-btn").style.color = "#000";
    document.getElementById("newcar-form").style.left = "-400px";
    document.getElementById("editcar-form").style.left = "50px";
    document.getElementById("car-btn").style.left = "150px";
}

// ######################## New Car function ######################## //
function newCar(){
    event.preventDefault();
    mod = document.getElementById("newcar-mod").value;
    comp = document.getElementById("newcar-comp").value;
    typ = document.getElementById("newcar-typ").value;
    eng = document.getElementById("newcar-eng").value + " cc";
    mil = document.getElementById("newcar-mil").value + " km/l";
    tran = document.getElementById("newcar-tran").value;
    fuel = document.getElementById("newcar-ful").value;
    pho = document.getElementById("newcar-pho").value;
    pri = document.getElementById("newcar-pri").value + " " + document.getElementById("newcar-prity").value;

    http.open("get", "/newcar/?data=" + JSON.stringify({"Model": mod, "Company": comp, "Type": typ, "Engine": eng, "Mileage": mil,
                                                        "Transmission": tran, "Fuel": fuel, "Photo": pho, "Price": pri}));
    http.onreadystatechange = newCarResponse;
    http.send(null);
}
function newCarResponse(){
    if(http.readyState == 4){
        result = JSON.parse(http.responseText);
        document.getElementById("car-mess").style.display = "block";
        document.getElementById("car").style.display = "none";
        if(result.result == "Empty"){
            document.getElementById("car-mess").innerHTML = "Sorry! Car Registration Failed";
        }
        else if(result.result == "Found"){
            document.getElementById("car-mess").innerHTML = "Car is already Registered";
        }
        else if(result.result == "Error"){
            document.getElementById("car-mess").innerHTML = "Please provide data without '&'";
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

// ######################## Edit Car function ######################## //
function editCar(){
    event.preventDefault();
    mod = document.getElementById("editcar-mod").value;
    pri = document.getElementById("editcar-pri").value + " " + document.getElementById("editcar-prity").value;

    http.open("get", "/editcar/?data=" + JSON.stringify({"Model": mod, "Price": pri}));
    http.onreadystatechange = editCarResponse;
    http.send(null);
}
function editCarResponse(){
    if(http.readyState == 4){
        result = JSON.parse(http.responseText);
        document.getElementById("car-mess").style.display = "block";
        document.getElementById("car").style.display = "none";
        if(result.result == "Empty"){
            document.getElementById("car-mess").innerHTML = "Sorry! Car Not Found";
        }
        else if(result.result == "Error"){
            document.getElementById("car-mess").innerHTML = "Please provide data without '&'";
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

// ######################## Customer form block Functions ######################## //
function newCustBlock(){
    document.getElementById("editcust-form").reset();
    document.getElementById("newcust-btn").style.color = "#000";
    document.getElementById("editcust-btn").style.color = "#fff";
    document.getElementById("newcust-form").style.left = "50px";
    document.getElementById("editcust-form").style.left = "450px";
    document.getElementById("cust-btn").style.left = "0px";
}
function editCustBlock(){
    document.getElementById("newcust-form").reset();
    document.getElementById("newcust-btn").style.color = "#fff";
    document.getElementById("editcust-btn").style.color = "#000";
    document.getElementById("newcust-form").style.left = "-400px";
    document.getElementById("editcust-form").style.left = "50px";
    document.getElementById("cust-btn").style.left = "150px";
}

// ######################## New Customer function ######################## //
function newCust(){
    event.preventDefault();
    nm = document.getElementById("newcust-nm").value;
    em = document.getElementById("newcust-em").value;
    mob = document.getElementById("newcust-mo").value;
    add = document.getElementById("newcust-ad").value;

    http.open("get", "/newcust/?data=" + JSON.stringify({"Name": nm, "Email": em, "Mobile": mob, "Address": add}));
    http.onreadystatechange = newCustResponse;
    http.send(null);
}
function newCustResponse(){
    if(http.readyState == 4){
        result = JSON.parse(http.responseText);
        document.getElementById("cust-mess").style.display = "block";
        document.getElementById("cust").style.display = "none";
        if(result.result == "Empty"){
            document.getElementById("cust-mess").innerHTML = "Sorry! Cust Registration Failed";
        }
        else if(result.result == "Error"){
            document.getElementById("cust-mess").innerHTML = "Please Give Details Without '&'";
        }
        else if(result.result == null){
            document.getElementById("cust-mess").innerHTML = "Sorry! Connection Error";
        }
        else{
            document.getElementById("cust").style.display = "block";
            document.getElementById("cust-mess").style.display = "none";
            showCust(result);
        }
    }
}

// ######################## Edit Customer function ######################## //
function editCust(){
    event.preventDefault();
    id = document.getElementById("editcust-id").value;
    mo = document.getElementById("editcust-mo").value;

    http.open("get", "/editcust/?data=" + JSON.stringify({"Id": id, "Mobile": mo}));
    http.onreadystatechange = editCarResponse;
    http.send(null);
}
function editCarResponse(){
    if(http.readyState == 4){
        result = JSON.parse(http.responseText);
        document.getElementById("cust").style.display = "none";
        document.getElementById("cust-mess").style.display = "block";
        if(result.result == null){
            document.getElementById("cust-mess").innerHTML = "Sorry! Connection Error";
        }
        else{
            document.getElementById("cust").style.display = "block";
            document.getElementById("cust-mess").style.display = "none";
            showCust(result);
        }
    }
}

// ######################## Customer Searching function ######################## //
function custId(){
    id= document.getElementById("cust-id").value;
    if(id == ""){
        document.getElementById("cust").style.display = "none";
        document.getElementById("cust-mess").style.display = "block";
        document.getElementById("cust-mess").innerHTML = "Plese Enter Id in Text Box";
    }
    else{
        http.open("get", "/searchcust/?data=" + JSON.stringify({'Type': 'Id', 'Name': id}));
        http.onreadystatechange = showCustResult;
        http.send(null);
    }
}
function custNm(){
    nm = document.getElementById("cust-nm").value;
    if(nm == ""){
        document.getElementById("cust").style.display = "none";
        document.getElementById("cust-mess").style.display = "block";
        document.getElementById("cust-mess").innerHTML = "Plese Enter Name in Text Box";
    }
    else{
        http.open("get", "/searchcust/?data=" + JSON.stringify({'Type': 'Name', 'Name': nm}));
        http.onreadystatechange = showCustResult;
        http.send(null);
    }
}
function allCust(){
    http.open("get", "/searchcust/?data=" + JSON.stringify({'Type': 'All', 'Name': 'All'}));
    http.onreadystatechange = showCustResult;
    http.send(null);
}
function showCustResult(){
    if(http.readyState == 4){
        result = JSON.parse(http.responseText);
        document.getElementById("cust").style.display = "none";
        document.getElementById("cust-mess").style.display = "block";
        if(result.result == "Empty"){
            document.getElementById("cust-mess").innerHTML = "Sorry! Their are no customers";
        }
        else if(result.result == null){
            document.getElementById("cust-mess").innerHTML = "Sorry! Connection Error";
        }
        else{
            document.getElementById("cust").style.display = "block";
            document.getElementById("cust-mess").style.display = "none";
            showCust(result);
        }
    }
}
function showCust(val){
    if(val == "inc"){
        cust += 1;
    }
    else if(val == "dec"){
        cust -= 1;
    }
    else{
        result = val;
        cust = 0;
    }
    len = Object.keys(result.result).length;
    if(cust > len - 1){
        cust = len - 1;
    }
    if(cust < 0){
        cust = 0;
    }
    
    document.getElementById("id").innerHTML = "Id : " + result.result[cust].Id;
    document.getElementById("nm").innerHTML = "Name : " + result.result[cust].Name;
    document.getElementById("em").innerHTML = "Email : " + result.result[cust].Email;
    document.getElementById("mo").innerHTML = "Mobile : " + result.result[cust].Mobile;
    document.getElementById("ad").innerHTML = "Address : " + result.result[cust].Address;
    document.getElementById("cust-num").innerHTML  = (cust + 1) + " / " + len;
}

// ######################## Report Showing function ######################## //
google.charts.load('current', {'packages':['corechart']});
function showReport(typ){
    http.open("get", "/carreport/?data=" + JSON.stringify({'Type': typ}));
    http.onreadystatechange = reportResponse;
    http.send(null);
}
function reportResponse(){
    if(http.readyState == 4){
        result = JSON.parse(http.responseText);
        if(result.result == null){
            document.getElementById("chart").innerHTML = "Sorry! Connection Error";
        }
        else{
            data = new google.visualization.arrayToDataTable(result.result);
            option = {
                title: "Searching Report",
                width: 1200,
                height: 600,
                pieSliceText: 'percentage',
                sliceVisibilityThreshold: 0
            }
            chart = new google.visualization.PieChart(document.getElementById('chart'));
            chart.draw(data, option);
        }
    }
}