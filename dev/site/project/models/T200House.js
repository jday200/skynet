class T200House {

    house_id;

    user_id;

    content;

    constructor() {

    }

    build_create() {
        return `create table if not exists house(house_id int primary key auto_increment, content text, user_id int, INDEX index_user_id(user_id) )`;
    }

    build_drop() {
        return `drop table if exists house`;
    }

    //
    merge_insert() {
        return `insert into house(content, user_id) values ('${this.content}', ${this.user_id})`;
    }

    merge_delete() {
        return `delete from house where house_id = '${this.house_id}'`;
    }

    merge_delete_all() {
        return `delete from house where house_id in (${this.house_id})`;
    }

    merge_update() {
        return `update house set content = '${this.content}' where house_id = '${this.house_id}'`;
    }

    merge_select() {
        return `select * from house where userid = '${this.user_id}'`;
    }

    merge_select_by_house_id() {
        return `select * from house where house_id = '${this.house_id}'`;
    }

    merge_select_all() {
        return `select * from house order by house_id`;
    }

}

module.exports = T200House;