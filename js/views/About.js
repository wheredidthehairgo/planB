class About extends BaseClass {
    constructor(str){
        super(str);
    }

    init(){
        this.$dom.find('#carousel-example-generic-news').on('slid.bs.carousel', function() {
            var index = $('#carousel-example-generic-news .active').index('#carousel-example-generic-news .item');
            $(".right_list_title").fadeOut(100, function() {
                $("#news_title").html(NewList[index].title);
                $("#news_title").attr("title", NewList[index].title);
                $(".right_list_title").fadeIn(500);
            });
        });
    }
}

module.exports=About;