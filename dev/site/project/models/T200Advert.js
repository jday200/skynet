class T200Advert {

    advert_id;

    user_id;

    constructor() {

    }

    build_create() {
        return `create table if not exists advert (advert_id int primary key auto_increment, user_id int, INDEX index_user_id(user_id) )`;
    }

    build_drop() {
        return `drop table if exists advert`;
    }

    //
    merge_insert() {
        return `insert into advert (user_id) values('${this.user_id}')`;
    }

    merge_delete() {
        return `delete from person where user_id = '${this.user_id}'`;
    }

    merge_update() {

    }

    merge_select() {
        return `select * from advert`;
    }
}

module.exports = T200Advert;