class T200Traffic {

    traffic_id;

    user_id;

    content;

    constructor() {

    }

    build_create() {
        return `create table if not exists traffic(traffic_id int primary key auto_increment, content text, user_id int, INDEX index_user_id(user_id) )`;
    }

    build_drop() {
        return `drop table if exists traffic`;
    }

    //
    merge_insert() {
        return `insert into traffic(content, user_id) values ('${this.content}', ${this.user_id})`;
    }

    merge_delete() {
        return `delete from traffic where traffic_id = '${this.traffic_id}'`;
    }

    merge_delete_all() {
        return `delete from traffic where traffic_id in (${this.traffic_id})`;
    }

    merge_update() {
        return `update traffic set content = '${this.content}' where traffic_id = '${this.traffic_id}'`;
    }

    merge_select() {
        return `select * from traffic where user_id = '${this.user_id}'`;
    }

    merge_select_by_traffic_id() {
        return `select * from traffic where traffic_id = '${this.traffic_id}'`;
    }

    merge_select_all() {
        return `select * from traffic order by traffic_id`;
    }

}

module.exports = T200Traffic;