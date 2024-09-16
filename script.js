
    //reponsive header and icon menu
    function toggleMenu() {
        var menu = document.querySelector('.menu');
        menu.classList.toggle('show');
    }
    function toggleTitleMenu() {
        var menu = document.querySelector('.menu');
        var icon = document.querySelector(".hamburger-icon");
        icon.classList.remove("clicked");
        icon.classList.remove('change');
        menu.classList.toggle('show');
    }


    var icon = document.querySelector(".hamburger-icon");
    icon.addEventListener("click", () => {
    icon.classList.toggle("clicked");
    });

    var icon = document.querySelector('.hamburger-icon');
    icon.classList.toggle('change');
    document.addEventListener("click", (event) => {
        var menu = document.querySelector('.menu');
        var icon = document.querySelector(".hamburger-icon");
    
        if (!menu.contains(event.target) && !icon.contains(event.target)) {
            menu.classList.remove('show');
            icon.classList.remove("clicked");
            icon.classList.remove('change');
        }
    });

document.querySelector('.button_circle').onclick = function () {
    document.getElementById('video').play();
    document.querySelector('.video_box').style.display = 'block'
    // document.style.Ob
};
document.querySelector('.video_box').onclick = function (e) {
    const video = document.getElementById('video');

    if (!video.contains(e.target)) {
        video.pause();
        document.querySelector('.video_box').style.display = 'none';
    }
};


//Login
var isLoggedIn = false;

document.getElementById('loginButton').onclick = function() {
    if (!isLoggedIn) {
       var accountname = document.getElementById('accountName')
       Object.assign(accountname.style,{
        display: 'block',
        transition: 'all 0.5s ease'
       })
        document.getElementById('loginButton').style.display = 'none';
        document.querySelector('.sign_up').style.display = 'none';
        isLoggedIn = true;
    }
};

document.getElementById('accountName').onclick = function() {
    var accountOptions = document.getElementById('accountOptions');
    if (accountOptions.style.display === 'none') {
        // accountOptions.style.display = 'block';
        Object.assign(accountOptions.style, {
            display: 'block',
            transition: 'all 0.5s ease',            

        })
    } else {
        accountOptions.style.display = 'none';
    }
};

document.addEventListener('click', function(e) {
    var accountContainer = document.querySelector('.account-container');
    if (!accountContainer.contains(e.target)) {
        document.getElementById('accountOptions').style.display = 'none';
    }
});


//Sign_Up
document.querySelector('.sign_up').onclick = function(){
    document.querySelector('.signup_popup').style.display = 'block'

    const inputs = document.querySelectorAll('.signup_popup input');
    inputs.forEach(input => input.value = '');
}
document.querySelector('.signup_popup').onclick = function(e){
    const form = document.querySelector('.form')
    if(!form.contains(e.target)){
        document.querySelector('.signup_popup').style.display = 'none'

    }
    
}



document.getElementById('logoutButton').onclick = function() {
    document.getElementById('loginButton').style.display = 'block';
    document.querySelector('.sign_up').style.display = 'block';
    document.getElementById('accountName').style.display = 'none';
    document.getElementById('accountOptions').style.display = 'none';
    isLoggedIn = false;
};


//Subcrice email

document.querySelector('.email_form_box button').onclick = function(e){
    var valueInput = document.querySelector('.email_form_box input').value
    var error = document.querySelector('#error_form_subscrise')
    console.log(error)

    if(valueInput ===''){
        error.style.display = 'block'
    }else{
        error.style.display = 'none'
        document.querySelector('#correct').style.display = 'block'
        setTimeout(() => {
            document.querySelector('#correct').style.display = 'none'
        }, 3000);
    }

}
//button_get_1_header
document.querySelector('#button_get_1_header').onclick = function(){
    console.log(this)
    alert('Comming Soon')
}
//button_get_1_main
document.querySelector('#button_get_1_main').onclick = function(){
    console.log(this)
    alert('Comming Soon')
}
document.querySelector('#button_get_2_main').onclick = function(){
    alert('Comming Soon')
}
document.querySelector('#button_get_3_main').onclick = function(){
    alert('Comming Soon')
}

///Validator

function Validator(option){
    var option = option
    var formElement = document.querySelector(option.form)
    console.log(option.rule)

    function messageErrol(inputElement, rule) {
        var errormessage = inputElement.parentElement.querySelector(option.errormessage);
        var isError;
    
        if (typeof rule.text === 'function') {
            isError = rule.text(inputElement.value);
        }else {
            isError = 'Invalid rule';
        }

    
        if (isError) {
            errormessage.innerHTML = isError;
            inputElement.parentElement.classList.add("invalid");
        } else {
            errormessage.innerHTML = '';
            inputElement.parentElement.classList.remove("invalid");
        }
        return isError;
    }
    
    
    if(formElement){

        formElement.onsubmit = function(e) {
            e.preventDefault(); 
            var isFormValid = true; 
            var formData = {};
        
            option.rule.forEach(rule => {
                var inputElement = document.querySelector(rule.selector);
                var isValid;
        
                if (rule.confirmPassword) {
                    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
                    console.log("GÌ đây",rule.confirmPassword)
                    isValid = rule.confirmPassword(inputElement.value);
                    if (isValid) {
                        var confirmPasswordElement = document.querySelector(rule.selector);
                        var errormessage = confirmPasswordElement.parentElement.querySelector(option.errormessage);
        
                        errormessage.innerHTML = isValid;
                        confirmPasswordElement.parentElement.classList.add('invalid');
                        isFormValid = false;
                    } else {
                        var confirmPasswordElement = document.querySelector(rule.selector);
                        var errormessage = confirmPasswordElement.parentElement.querySelector(option.errormessage);
        
                        errormessage.innerHTML = '';
                        confirmPasswordElement.parentElement.classList.remove('invalid');
                    }
                } else {
                    console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBB")
                    isValid = messageErrol(inputElement, rule);
                    if (isValid) {
                        isFormValid = false;
                    }
                    console.log("isValid", isValid)

                    console.log("isFormValid", isFormValid)
                }
        
                var inputName = inputElement.name;
                var inputValue = inputElement.value;
                formData[inputName] = inputValue;
            });
        
            if (isFormValid) {
                console.log('Form is valid');
                document.querySelector('.signup_popup').style.display = 'none';
                var accountName = document.querySelector('#accountName')
                accountName.innerHTML = formData.fullname

            } else {
                console.log('Form is not valid');
            }
        };
        
    }

    option.rule.forEach( rule => {
        console.log("rule selector",rule.selector)
        var inputElement = document.querySelector(rule.selector)
        console.log("INput",inputElement)
        //Xử lý blur
        inputElement.onblur = function(){
            console.log("BLUR input:", inputElement)
        messageErrol(inputElement, rule)

        }
        inputElement.addEventListener('oninput', function() {
            messageErrol(inputElement, rule);
        });
        
        
    });

    // console.log(formElement)
    // var formSelector = formElement.document.querySelector(option.selector)
    // console.log(formSelector)

}

Validator.isRequired = function(selector){
    // console.log(selector);
    return{
        selector: selector,
        text: function(value){
            return value.trim() ? null : 'Please enter this field'
        }
    }
}
Validator.isMail = function(selector){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return {
        selector: selector,
        text: function(value){
            return mailformat.test(value) ? undefined : 'Please enter mail'

            
        }
    };}
Validator.isPassword = function(selector){
    console.log(selector);
    return{
        selector: selector,
        text: function(value){
            return value.trim() ? null : 'At least 8 chars, 1 uppercase, 1 lowercase, 1 digit.'
        }
    }
}
Validator.isPasswordConfirm = function(selector, getvalue){
    console.log("getvalue", getvalue)
    return {
        selector: selector,
        text: function(value){
            return value === getvalue() ? undefined : 'Wrong password'

        }
    };}


