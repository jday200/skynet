class T200Trading {

    trading_id;

    user_id;

    constructor() {

    }

    build_create() {
        return `create table if not exists trading(trading_id int primary key auto_increment, user_id int, INDEX index_user_id(user_id) )`;
    }

    build_drop() {
        return `drop table if exists trading`;
    }

    //
    merge_insert() {
        return `insert into trading(user_id) values (${this.user_id})`;
    }

    merge_delete() {
        return `delete from trading where trading_id = '${this.trading_id}'`;
    }

    merge_update() {

    }

    merge_select() {
        return `select * from trading`;
    }

    merge_select_all() {
        return `select * from trading order by trading_id`;
    }

}

module.exports = T200Trading;