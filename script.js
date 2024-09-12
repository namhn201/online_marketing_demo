//reponsive
function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}
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

document.addEventListener('click', function(event) {
    var accountContainer = document.querySelector('.account-container');
    if (!accountContainer.contains(event.target)) {
        document.getElementById('accountOptions').style.display = 'none';
    }
});

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
