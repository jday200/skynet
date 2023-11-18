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

function set_region() {
    let city = [
        ['seoul', 20000],
        ['tokyo', 10000]
    ];

    let result = "";

    city.forEach(item => {
        result += `<a class="region_item" href="/region/city.html?id=${item[1]}">${item[0]}</a> `;
    });
    $.id("region").innerHTML = result;
}

function turning(id, obj, url) {
    let result = `test=&paging=${id}`;
    $.post(url, result, function(data){
        obj.innerHTML = data;
    }, function(){
        alert("Load Failure!");
    });
}

function hit_search(id, obj, url) {
    let result = formtostring(id);
    $.post(url, result, function(data){
        obj.innerHTML = data;
    }, function(){
        alert("Search Failure!");
    });
}