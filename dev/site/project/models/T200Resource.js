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

    merge_delete_all() {
        return `delete from resource where resource_id in (${this.resource_id})`;
    }

    merge_update() {
        return `update resource set name = '${this.name}', path = '${this.path}' where resource_id = '${this.resource_id}'`;
    }

    merge_select() {
        return `select * from resource where user_id = '${this.user_id}'`;
    }

    merge_select_by_resource_id() {
        return `select * from resource where resource_id = '${this.resource_id}'`;
    }

    merge_select_all() {
        return `select * from resource order by resource_id`;
    }

}

module.exports = T200Resource;