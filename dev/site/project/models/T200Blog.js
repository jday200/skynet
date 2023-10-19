class T200Blog {
    blogid;

    content;

    userid;

    constructor() {

    }

    build_create() {
        return `create table if not exists blog(blogid int, content text, userid int)`;
    }

    build_drop() {
        return `drop table if exists blog`;
    }

    //
    merge_insert() {
        return `insert into blog(content, userid) values ('${this.content}', ${this.userid})`
    }

    merge_delete() {
        return `delete from blog where blogid = '${this.blogid}'`;
    }

    merge_update() {

    }

    merge_select() {
        return `select * from blog where userid = '${this.userid}'`;
    }
}

module.exports = T200Blog;