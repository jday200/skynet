class T200Exchange {

    exchange_id;

    user_id;

    content;

    constructor() {

    }

    build_create() {
        return `create table if not exists exchange(exchange_id int primary key auto_increment, content text, user_id int, INDEX index_user_id(user_id) )`;
    }

    build_drop() {
        return `drop table if exists exchange`;
    }

    //
    merge_insert() {
        return `insert into exchange(content, user_id) values ('${this.content}', ${this.user_id})`;
    }

    merge_delete() {
        return `delete from exchange where exchange_id = '${this.exchange_id}'`;
    }

    merge_delete_all() {
        return `delete from exchange where exchange_id in (${this.exchange_id})`;
    }

    merge_update() {
        return `update exchange set content = '${this.content}' where exchange_id = '${this.exchange_id}'`;
    }

    merge_select() {
        return `select * from exchange where userid = '${this.userid}'`;
    }

    merge_select_by_exchange_id() {
        return `select * from exchange where exchange_id = '${this.exchange_id}'`;
    }

    merge_select_all() {
        return `select * from exchange order by exchange_id`;
    }

}

module.exports = T200Exchange;