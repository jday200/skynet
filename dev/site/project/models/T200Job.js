class T200Job {

    job_id;

    user_id;

    content;

    constructor() {

    }

    build_create() {
        return `create table if not exists job(job_id int primary key auto_increment, content text, user_id int, INDEX index_user_id(user_id) )`;
    }

    build_drop() {
        return `drop table if exists job`;
    }

    //
    merge_insert() {
        return `insert into job(content, user_id) values ('${this.content}', ${this.user_id})`;
    }

    merge_delete() {
        return `delete from job where job_id = '${this.job_id}'`;
    }

    merge_delete_all() {
        return `delete from job where job_id in (${this.job_id})`;
    }

    merge_update() {
        return `update job set content = '${this.content}' where job_id = '${this.job_id}'`;
    }

    merge_select() {
        return `select * from job where user_id = '${this.user_id}'`;
    }

    merge_select_by_job_id() {
        return `select * from job where job_id = '${this.job_id}'`;
    }

    merge_select_all() {
        return `select * from job order by job_id`;
    }

}

module.exports = T200Job;