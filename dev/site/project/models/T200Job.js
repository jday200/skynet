class T200Job {

    job_id;

    user_id;

    constructor() {

    }

    build_create() {
        return `create table if not exists job(job_id int primary key auto_increment, user_id int, INDEX index_user_id(user_id) )`;
    }

    build_drop() {
        return `drop table if exists job`;
    }

    //
    merge_insert() {
        return `insert into job(user_id) values (${this.user_id})`;
    }

    merge_delete() {
        return `delete from job where job_id = '${this.job_id}'`;
    }

    merge_update() {

    }

    merge_select() {
        return `select * from job`;
    }
}

module.exports = T200Job;