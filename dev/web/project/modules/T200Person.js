class T200Person {
    userid;

    username;

    password;

    email;
    
    constructor() {

    }

    merge_insert() {
        return `insert into 'person' ('username', 'password') values('${this.username}', '${this.password}')`;
    }

    merge_delete() {
        return `delete from 'person' where userid = '${this.userid}'`;
    }

    merge_update() {

    }

    merge_select() {
        return `select * from 'person' where 'username' = '${this.username}'`;
    }

    //
    build_create() {
        return `create table if not exists person (userid int, username varchar(50), password varchar(100), email varchar(100))`;
    }

    build_drop() {
        return `drop table if exists person`;
    }
}

module.exports = T200Person;