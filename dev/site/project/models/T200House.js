class T200House {

    house_id;

    user_id;

    constructor() {

    }

    build_create() {
        return `create table if not exists house(house_id int primary key auto_increment, user_id int, INDEX index_user_id(user_id) )`;
    }

    build_drop() {
        return `drop table if exists house`;
    }

    //
    merge_insert() {
        return `insert into house(user_id) values (${this.user_id})`;
    }

    merge_delete() {
        return `delete from house where house_id = '${this.house_id}'`;
    }

    merge_update() {

    }

    merge_select() {
        return `select * from house`;
    }
}

module.exports = T200House;