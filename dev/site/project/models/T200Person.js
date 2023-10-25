class T200Person {
    userid;

    username;

    password;

    email;

    constructor() {

    }

    build_create() {
        return `create table if not exists person (userid int primary key auto_increment, username varchar(50) UNIQUE, password varchar(100), email varchar(100) UNIQUE )`;
    }

    build_drop() {
        return `drop table if exists person`;
    }

    //
    merge_insert() {
        return `insert into person (username, password, email) values('${this.username}', '${this.password}', '${this.email}')`;
    }

    merge_delete() {
        return `delete from person where userid = '${this.userid}'`;
    }

    merge_delete_all() {
        return `delete from person where userid in (${this.userid})`;
    }

    merge_update() {
        return `update person set username = '${this.username}', password = '${this.password}', email = '${this.email}' where userid = '${this.userid}'`;
    }

    merge_select() {
        return `select * from person where username = '${this.username}'`;
    }

    merge_select_by_user_id() {
        return `select * from person where userid = '${this.userid}'`;
    }

    merge_select_all() {
        return `select * from person order by userid`;
    }


    //
    merge_login() {
        return `select * from person where username = '${this.username}' and password = '${this.password}'`;
    }
}

module.exports = T200Person;