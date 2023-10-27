class T200Article {
    articleid;

    title;

    content;

    userid;

    constructor() {

    }

    build_create() {
        return `create table if not exists article(articleid int primary key auto_increment, title varchar(200), content text, userid int, INDEX index_userid(userid) )`;
    }

    build_drop() {
        return `drop table if exists article`;
    }

    //
    merge_insert() {
        return `insert into article(title, content, userid) values ('${this.title}', '${this.content}', ${this.userid})`
    }

    merge_delete() {
        return `delete from article where articleid = '${this.articleid}'`;
    }

    merge_delete_all() {
        return `delete from article where articleid in (${this.articleid})`;
    }

    merge_update() {
        return `update article set title = '${this.title}', content = '${this.content}' where articleid = '${this.articleid}'`;
    }

    merge_select() {
        return `select * from article where userid = '${this.userid}'`;
    }
    
    merge_select_by_article_id() {
        return `select * from article where articleid = '${this.articleid}'`;
    }

    merge_select_all() {
        return `select * from article order by articleid`;
    }
}

module.exports = T200Article;