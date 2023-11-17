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


function email_edit() {
    $.id('email_box').innerHTML = " \
    <form class='form' id='email_form'> \
    <div class='form_item'> \
    <label class='form_label'>Email:</label> \
    <input class='form_value' id='form_email' type='email' name='email'> \
    </div> \
    <div class='form_item'> \
    <label class='form_label'>Code:</label> \
    <input class='form_value' type='password' name='code'> \
    </div> \
    </form> \
    ";
    $.id("email_button").innerHTML = "Save";
    $.id("email_button").onclick = email_save;
}

function email_save() {
    let result = formtostring("email_form");
    $.post('/content/person/email/save', result, function(data){
        alert("Save Success!");
        $.id("email").innerHTML = $.id("form_email").value;
        $.id("email_box").innerHTML = "";
        $.id("email_button").innerHTML = "Edit";
        $.id("email_button").onclick = email_edit;
    }, function(){
        alert("Save Failure!");
    });
}


function nationality_edit() {
    $.id('nationality_box').innerHTML = " \
    <form class='form' id='nationality_form'> \
    <div class='form_item'> \
    <label class='form_label'>Email:</label> \
    <input class='form_value' id='form_email' type='email' name='email'> \
    </div> \
    <div class='form_item'> \
    <label class='form_label'>Code:</label> \
    <input class='form_value' type='password' name='code'> \
    </div> \
    </form> \
    ";
    $.id("nationality_button").innerHTML = "Save";
    $.id("nationality_button").onclick = nationality_save;
}

function nationality_save() {
    let result = formtostring("nationality_form");
    $.post('/content/person/nationality/save', result, function(data){
        alert("Save Success!");
        $.id("nationality").innerHTML = $.id("form_nationality").value;
        $.id("nationality_box").innerHTML = "";
        $.id("nationality_button").innerHTML = "Edit";
        $.id("nationality_button").onclick = nationality_edit;
    }, function(){
        alert("Save Failure!");
    });
}


function location_edit() {
    $.id('location_box').innerHTML = " \
    <form class='form' id='location_form'> \
    <input type='hidden' name='test'> \
    <div class='form_item'> \
    <label class='form_label'>Continent:</label> \
    <select class='form_value' id='continent' name='continent' \
    onchange='continent_change(this.value);'> </select> \
    </div> \
    <div class='form_item'> \
    <label class='form_label'>Region:</label> \
    <select class='form_value' id='region' name='region' \
    onchange='region_change(this.value);'> </select> \
    </div> \
    <div class='form_item'> \
    <label class='form_label'>City:</label> \
    <select class='form_value' id='city' name='city'> </select> \
    </div> \
    </form> \
    ";

    continent_init($.id("continent"));

    $.id("location_button").innerHTML = "Save";
    $.id("location_button").onclick = location_save;
}

function location_save() {
    let result = formtostring("location_form");
    $.post('/content/person/location/save', result, function(data){
        alert("Save Success!");
        $.id("location_region").innerHTML = $.id("region").value;
        $.id("location_city").innerHTML = $.id("city").options[$.id("city").selectedIndex].text;
        $.id("location_box").innerHTML = "";
        $.id("location_button").innerHTML = "Edit";
        $.id("location_button").onclick = location_edit;
    }, function(){
        alert("Save Failure!");
    });
}

function intro_edit() {
    $.id("intro").disabled = false;
    $.id("intro_button").innerHTML = "Save";
    $.id("intro_button").onclick = intro_save;
}

function intro_save() {
    let result = formtostring("intro_form");
    $.post('/content/person/intro/save', result, function(data){
        alert("Save Success!");
        $.id("intro").disabled = true;
        $.id("intro_button").innerHTML = "Edit";
        $.id("intro_button").onclick = intro_edit;
    }, function(){
        alert("Save Failure!");
    });
}