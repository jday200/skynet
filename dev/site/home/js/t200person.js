function nickname_edit() {
    $.id("nickname").disabled = false;
    $.id("nickname_button").innerHTML = "Save";
    $.id("nickname_button").onclick = nickname_save;
}

function nickname_save() {
    let result = formtostring("nickname_form");
    $.post('/content/person/nickname/save', result, function(data){
        alert("Save Success!");
        $.id("nickname").disabled = true;
        $.id("nickname_button").innerHTML = "Edit";
        $.id("nickname_button").onclick = nickname_edit;
    }, function(){
        alert("Save Failure!");
    });
}

function password_edit() {
    $.id('password_box').innerHTML = " \
    <form class='form' id='password_form'> \
    <div class='form_item'> \
    <label class='form_label'>Old Password:</label> \
    <input class='form_value' type='password' name='opwd'> \
    </div> \
    <div class='form_item'> \
    <label class='form_label'>New Password:</label> \
    <input class='form_value' type='password' name='npwd1'> \
    </div> \
    <div class='form_item'> \
    <label class='form_label'>New Password:</label> \
    <input class='form_value' type='password' name='npwd2'> \
    </div> \
    </form> \
    ";
    $.id("password_button").innerHTML = "Save";
    $.id("password_button").onclick = password_save;
}

function password_save() {
    let result = formtostring("password_form");
    $.post('/content/person/password/save', result, function(data){
        alert("Save Success!");
        $.id("password_box").innerHTML = "";
        $.id("password_button").innerHTML = "Edit";
        $.id("password_button").onclick = password_edit;
    }, function(){
        alert("Save Failure!");
    });
}



function location_edit() {
    let result = formtostring("form");
    $.post('/content/person/region', result, function(data){
        $.id("location").innerHTML = data;
    }, function(){
        alert("Load Failure!");
    });
}

function location_save() {
    let result = formtostring("location_form");
    $.post('/content/person/region/save', result, function(data){
        alert("Save Success!");
    }, function(){
        alert("Save Failure!");
    });
}

