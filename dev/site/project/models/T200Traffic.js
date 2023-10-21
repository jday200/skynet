class T200Traffic {

    traffic_id;

    user_id;

    constructor() {

    }

    build_create() {
        return `create table if not exists traffic(traffic_id int primary key auto_increment, user_id int, INDEX index_user_id(user_id) )`;
    }

    build_drop() {
        return `drop table if exists traffic`;
    }

    //
    merge_insert() {
        return `insert into traffic(user_id) values (${this.user_id})`;
    }

    merge_delete() {
        return `delete from traffic where traffic_id = '${this.traffic_id}'`;
    }

    merge_update() {

    }

    merge_select() {
        return `select * from traffic`;
    }
}

module.exports = T200Traffic;