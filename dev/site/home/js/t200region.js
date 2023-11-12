function change1() {
    switch(this.value){
        case 'asia':
            $.id('region').innerHTML = "<option>china</option><option>japan</option>";
            break;
    }
}

function change2() {
    switch(this.value){
        case 'china':
            $.id('city').innerHTML = "<option>shanghai</option>";
            break;
    }
}