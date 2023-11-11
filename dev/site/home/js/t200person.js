function location_edit() {
    let result = formtostring("form");
    $.post('/content/person/region', result, function(data){
        $.id("location").innerHTML = data;
    }, function(){
        alert("Load Failure!");
    });
}

