class header extends BaseClass {
    constructor(str){
        super(str);
    }

    init() {
        this.$dom.find('a').on('tap', function(){
            $(this).addclass("active");
        })
    }
}