class T200Blog {
    blogid;

    content;

    userid;

    constructor() {

    }

    build_create() {
        return `create table if not exists blog(blogid int primary key auto_increment, content text, userid int, INDEX index_userid (userid) )`;
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

    merge_select_all() {
        return `select * from blog order by blogid`;
    }

}

module.exports = T200Blog;