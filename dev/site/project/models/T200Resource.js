class T200Resource {

    resource_id;

    user_id;

    name;

    path;

    constructor() {

    }

    build_create() {
        return `create table if not exists resource(resource_id int primary key auto_increment, user_id int, name varchar(255), path text, INDEX index_user_id(user_id) )`;
    }

    build_drop() {
        return `drop table if exists resource`;
    }

    //
    merge_insert() {
        return `insert into resource(user_id, name, path) values (${this.user_id}, '${this.name}', '${this.path}')`;
    }

    merge_delete() {
        return `delete from resource where resource_id = '${this.resource_id}'`;
    }

    merge_update() {

    }

    merge_select() {
        return `select * from resource`;
    }
}

module.exports = T200Resource;