class T200Blog {
    blog_id;

    content;

    user_id;

    constructor() {

    }

    build_create() {
        return `create table if not exists blog(blog_id int primary key auto_increment, content text, user_id int, INDEX index_user_id (user_id) )`;
    }

    build_drop() {
        return `drop table if exists blog`;
    }

    //
    merge_insert() {
        return `insert into blog(content, user_id) values ('${this.content}', ${this.user_id})`
    }

    merge_delete() {
        return `delete from blog where blog_id = '${this.blog_id}'`;
    }

    merge_delete_all() {
        return `delete from blog where blog_id in (${this.blog_id})`;
    }

    merge_update() {
        return `update blog set content = '${this.content}' where blog_id = '${this.blog_id}'`;
    }

    merge_select() {
        return `select * from blog where user_id = '${this.user_id}'`;
    }

    merge_select_by_blog_id() {
        return `select * from blog where blog_id = '${this.blog_id}'`;
    }

    merge_select_all() {
        return `select * from blog order by blog_id`;
    }

}

module.exports = T200Blog;