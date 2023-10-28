function login() {

}

function logout() {
    
}

function nav_check() {
    let sid = $.cookie('sid');

    if(sid && 0 < sid){
        $.find('nav_right').innerHTML = '<a href="/content/index.html">My</a> | <a href=".">Logout</a>';
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