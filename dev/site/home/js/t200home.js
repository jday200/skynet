function login() {

}

function reload() {
    location.reload();
}

function logout() {
    $.set_cookie('sid', '');
    location.reload();
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

function formtostring(name) {
    let data = new FormData($.id(name));
    let result = $.datatostring(data);
    return result;
}

function hit(name, value) {
    $.set_cookie(name, value);
}