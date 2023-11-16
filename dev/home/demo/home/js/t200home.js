function login() {
    $.set_cookie('sid', 1);
    alert('Login Success!');
}

function logout() {
    $.set_cookie('sid', 0);
}

function nav_check() {
    let sid = $.cookie('sid');

    if(sid && 0 < sid){
        $.id('nav_right').innerHTML = '<a href="/content/index.html">My</a> | <a href="#" onclick="logout();">Logout</a>';
    }
}

function forward(action) {
    $.id('main').innerHTML = `<div><a href="${action}">跳转</a></div>`;
    $.win.location = action;
}