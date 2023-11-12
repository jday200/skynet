function location_edit() {
    let result = formtostring("form");
    $.post('/content/person/region', result, function(data){
        $.id("location").innerHTML = data;
    }, function(){
        alert("Load Failure!");
    });
}

function location_save() {
    let result = formtostring("region");
    $.post('/content/person/region/save', result, function(data){
        alert("Save Success!");
    }, function(){
        alert("Save Failure!");
    });
}

