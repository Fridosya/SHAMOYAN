//Checking of Fisrt name field
function checkFirst() {
    var first = document.getElementById("first").value;
    var regex = /^[а-яА-Яa-zA-Z\s]{2,15}$/;

    if (regex.test(first)) { // if testing of first is true
        document.getElementById("first_Check").style.color = "green";
        document.getElementById("first_Check").innerHTML = "Все верно:)";
        return true;
    }
    else {// if it's not
        document.getElementById("first_Check").style.color = "red";
        document.getElementById("first_Check").innerHTML = "Поле заполнено неверно";
        return false;
    }
}


//Checking of Last name field
function checkLast() {
    var last = document.getElementById("last").value;
    var regex = /^[а-яА-Яa-zA-Z\s]{2,20}$/;

    if (regex.test(last)) { // if testing of first is true
        document.getElementById("last_Check").style.color = "green";
        document.getElementById("last_Check").innerHTML = "Все верно:)";
        return true;
    }
    else {// if it's not
        document.getElementById("last_Check").style.color = "red";
        document.getElementById("last_Check").innerHTML = "Поле заполнено неверно";
        return false;
    }
    console.log('ee')
}

//Checking of Destination field
function checkDest() {
    var dest = document.getElementById("dest").value;
    var regex = /^[а-яА-Яa-zA-Z\s\.\,\d\ ]{5,50}$/;

    if (regex.test(dest)) { // if testing of dest is true
        document.getElementById("dest_Check").style.color = "green";
        document.getElementById("dest_Check").innerHTML = "Все верно:)";
        return true;
    }
    else {// if it's not
        document.getElementById("dest_Check").style.color = "red";
        document.getElementById("dest_Check").innerHTML = "Поле заполнено неверно";
        return false;
    }
}

//Checking of Phone number field
function checkPhone() {
    var phone = document.getElementById("phone").value;
    var regex = /^\d{3}-(\d{3})-\d{3}$/;

    if (regex.test(phone)) { // if testing of first is true
        document.getElementById("phone_Check").style.color = "green";
        document.getElementById("phone_Check").innerHTML = "Все верно:)";
        return true;
    }
    else {// if it's not
        document.getElementById("phone_Check").style.color = "red";
        document.getElementById("phone_Check").innerHTML = "Поле заполнено неверно";
        return false;
    }
}

function checkDate() {
    if (document.getElementById("date").value.length) {
        document.getElementById("date_time_Check").style.color = "green";
        document.getElementById("date_time_Check").innerHTML = "Все верно:)";
        return true;
    }
    else {// if it's not
        document.getElementById("date_time_Check").style.color = "red";
        document.getElementById("date_time_Check").innerHTML = "Поле заполнено неверно";
        return false;
    }
}

function checkTime() {
    if (document.getElementById("time").value.length) { // if testing of first is true
        document.getElementById("date_time_Check").style.color = "green";
        document.getElementById("date_time_Check").innerHTML = "Все верно:)";
        return true;
    }
    else {// if it's not
        document.getElementById("date_time_Check").style.color = "red";
        document.getElementById("date_time_Check").innerHTML = "Поле заполнено неверно";
        return false;
    }
}

function checkQuant() {
    if (document.getElementById("quantity").value.length) { // if testing of first is true
        document.getElementById("quant_Check").style.color = "green";
        document.getElementById("quant_Check").innerHTML = "Все верно:)";
        return true;
    }
    else {// if it's not
        document.getElementById("quant_Check").style.color = "red";
        document.getElementById("quant_Check").innerHTML = "Поле заполнено неверно";
        return false;
    }
}

//Collect and output all the data
document.querySelector(".form").onsubmit = function (e) { e.preventDefault() }
function outputData(e) {

    var first = document.getElementById("first").value;
    var last = document.getElementById("last").value;
    var dest = document.getElementById("dest").value;
    var phone = document.getElementById("phone").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var dateAndTime = date + " at " + time;
    var quantity = document.getElementById("quantity").value;
    var paymethod = document.getElementById("paymethod").value;

    if (first != "" && last != "" && dest != "" && phone != "" && date != "" && time != "" && quantity != "") {
        document.getElementById("summary").style.color = "black";
        document.getElementById("summary").innerHTML = "Здравствуйте, " + first + " " + last + "!";
        document.getElementById("summary").innerHTML += "<p>Ваш заказ принят. Мы свяжемся с вами в ближайшее время. Детали Вашего заказа: </p>";
        document.getElementById("summary").innerHTML += "<p>Номер телефона: " + phone + ".</br>";
        document.getElementById("summary").innerHTML += "Место назначения " + dest + ".</br>";
        document.getElementById("summary").innerHTML += "Дата и время " + dateAndTime + ".</br>";
        document.getElementById("summary").innerHTML += "Количество человек " + quantity + ".</br>";
        document.getElementById("summary").innerHTML += "Способ оплаты: " + paymethod + ".</p>";
        document.getElementById("summary").innerHTML += "<p style='font-weight: bold;'>Мы рады, что вы пользуетесь услугами нашей компании :)</p>";
    }
    else {
        document.getElementById("summary").style.color = "red";
        document.getElementById("summary").innerHTML = "Please, fill in all the fields...";
    }
}

function mouseOver() {
    const elem = document.getElementById("color");
    elem.style.color = "blue";
    elem.querySelector('span').style.color = "blue";
}

function mouseOut() {
    const elem = document.getElementById("color");
    elem.style.color = "black";
    elem.querySelector('span').style.color = "black";
}

function buttonClick() {
    if (document.getElementById("textcovered").style.display == "block") {
        document.getElementById("textcovered").style.display = "none"
    }
    else { document.getElementById("textcovered").style.display = "block" }
}

$('.footer .text').click(function () {
    $('body').fadeOut(1000);
    setTimeout(() => { alert('Сайт исчез') }, 1000)
})

$('.button2').click(function () {
    $('.inputsblock').slideUp(1000)
})
