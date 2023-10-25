class T200Advert {

    advert_id;

    user_id;

    title;

    constructor() {

    }

    build_create() {
        return `create table if not exists advert (advert_id int primary key auto_increment, title varchar(255), user_id int, INDEX index_user_id(user_id) )`;
    }

    build_drop() {
        return `drop table if exists advert`;
    }

    //
    merge_insert() {
        return `insert into advert (title, user_id) values('${this.title}', '${this.user_id}')`;
    }

    merge_delete() {
        return `delete from advert where advert_id = '${this.advert_id}'`;
    }

    merge_delete_all() {
        return `delete from advert where advert_id in (${this.advert_id})`;
    }

    merge_update() {
        return `update advert set title = '${this.title}' where advert_id = '${this.advert_id}'`;
    }

    merge_select() {
        return `select * from advert where user_id = '${this.user_id}'`;
    }

    merge_select_by_advert_id() {
        return `select * from advert where advert_id = '${this.advert_id}'`;
    }

    merge_select_all() {
        return `select * from advert order by advert_id`;
    }
}

module.exports = T200Advert;