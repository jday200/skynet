class T200Person {
    constructor() {

    }

    //@key 
    userid;

    //@text
    //@index
    username;

    //@password
    password;

    //@email 
    email;

    //@date 
    birthday;

    //@text 
    country;

    parse_insert() {

    }

    parse_delete() {

    }

    parse_select() {
        let sql;

        sql = "select * from person where username = ${this.username}";

        return sql;
    }
}

module.exports = T200Person;