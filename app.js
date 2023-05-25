var displayNextPrompt = true;

var name = prompt("Input your Full Name: ", "");
var isNameValid = false, isAddressValid = true, isphoneNumberValid = true, isCityValid = true;
var address, phoneNumber, city;

var isEmpty = true;

var isClicked = false;



while(isEmpty) {
    while(!isNameValid) {

        if(name.length > 0) {
            isNameValid = true;
            document.getElementById("personName").innerHTML = name;
            isEmpty = false;
        }else {
            name = prompt("Input a valid Name:", "");
        }
    }

    if(isAddressValid && isNameValid) {
        address = prompt("Input your Address: ", "");
        if(address != null || address != "") {
            isAddressValid = false;
            document.getElementById("address").innerHTML = address;
        }else {
            isAddressValid = true;
        }
    }

    while(isAddressValid == false) {

        if(address == null || address == "") {
            address = prompt("Input a valid Address:", "");
        }else {
            isAddressValid = true;
            document.getElementById("address").innerHTML = address;
            isEmpty = false;
        }
    }

    if(isAddressValid && isphoneNumberValid && isNameValid) {
        phoneNumber = prompt("Input your Phone Number", "");
        if(phoneNumber != null || phoneNumber != "") {
            isphoneNumberValid = false;
            document.getElementById("phoneNumber").innerHTML = phoneNumber;
        }else {
            isphoneNumberValid = true;
        }
    }

    while(isphoneNumberValid == false) {
        if(phoneNumber == null || phoneNumber == "") {
            phoneNumber = prompt("Input a valid Phone Number:", "");
        }else {
            isphoneNumberValid = true;
            document.getElementById("phoneNumber").innerHTML = phoneNumber;
            isEmpty = false;
        }
    }


    if(isAddressValid && isphoneNumberValid && isCityValid && isNameValid) {
        city = prompt("Input your City: ");
        if(city != null || city != "") {
            isCityValid = false;
            document.getElementById("city").innerHTML = city;
        }else {
            isCityValid = true;
        }
    }

    while(isCityValid == false) {
        if(city == null || city == "") {
            city = prompt("Input a valid City:", "");
        }else {
            isCityValid = true;
            document.getElementById("city").innerHTML = city;
            isEmpty = false;
        }
    }
}

// if()

function computeArea() {
    var length, width = 0;
    var area = 0;
    length = Number(document.getElementById("length").value);
    width = Number(document.getElementById("width").value);

    document.getElementById("rectangle-shape").style.height = length + 'rem';
    document.getElementById("rectangle-shape").style.width = width + 'rem';

    area = length * width;

    area = document.getElementById("area-result").innerHTML = "a = " + area;

    document.getElementById("area-length").innerHTML = "l = " + length;
    document.getElementById("area-length").style.marginTop = length/2 + '%';
    document.getElementById("area-length").style.marginLeft = width+2 + 'rem';


    document.getElementById("area-width").innerHTML = "w = " + width;

}


function computePerimeter() {
    var length, width = 0;
    var perimeter = 0;

    length = Number(document.getElementById("length2").value);
    width = Number(document.getElementById("width2").value);

    // document.getElementById("rectangle-peri").style.height = length + 'rem';
    // document.getElementById("rectangle-peri").style.width = width + 'rem';

    perimeter = 2 * (length + width);

    document.getElementById("peri-result").innerHTML = "<strong>Perimeter = " + perimeter + "</strong>";

    document.getElementById("peri-length").innerHTML = "l = " + length;
    document.getElementById("peri-length").style.marginTop = length/2 + '%';
    document.getElementById("peri-length").style.marginLeft = width+2 + 'rem';


    document.getElementById("peri-width").innerHTML = "w = " + width;

    document.getElementById("rectangle-peri").style.cssText = `border: 4px dotted green; height: ${length}rem; width: ${width}rem`;

}


//simple interest calculator section

function simpleInterestCalc() {

    var principal = Number(document.getElementById("principal").value);
    var rate = Number(document.getElementById("rate").value);
    var time = Number(document.getElementById("time").value);

    document.getElementById("calcRate").innerHTML = rate;

    rate /= 100;

    document.getElementById("rateRes").innerHTML = rate;
    
    document.getElementById("rateTIme").innerHTML = 1 + (rate * time);

    var interest = principal * (1 + (rate * time));

    document.getElementById("interestSol").innerHTML = "$" + interest;

    document.getElementById("hidden").style.visibility = "visible";


    console.log(interest);
}


