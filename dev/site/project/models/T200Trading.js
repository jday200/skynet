class T200Trading {

    trading_id;

    user_id;

    content;

    constructor() {

    }

    build_create() {
        return `create table if not exists trading(trading_id int primary key auto_increment, content text, user_id int, INDEX index_user_id(user_id) )`;
    }

    build_drop() {
        return `drop table if exists trading`;
    }

    //
    merge_insert() {
        return `insert into trading(content, user_id) values ('${this.content}', ${this.user_id})`;
    }

    merge_delete() {
        return `delete from trading where trading_id = '${this.trading_id}'`;
    }

    merge_delete_all() {
        return `delete from trading where trading_id in (${this.trading_id})`;
    }

    merge_update() {
        return `update trading set content = '${this.content}' where trading_id = '${this.trading_id}'`;
    }

    merge_select() {
        return `select * from trading where user_id = '${this.user_id}'`;
    }

    merge_select_by_trading_id() {
        return `select * from trading where trading_id = '${this.trading_id}'`;
    }

    merge_select_all() {
        return `select * from trading order by trading_id`;
    }

}

module.exports = T200Trading;