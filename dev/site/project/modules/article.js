class T200HomeArticle {
    constructor() {

    }

    @key 
    articleid;

    @index 
    userid;

    @text 
    content;

    @time 
    createtime;

    @time 
    publishtime;

    @integer 
    stateid;

    @integer 
    removed;
    
}