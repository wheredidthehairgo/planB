class Foot extends BaseClass {
    constructor(str){
        super(str);
    }
    init() {
        if((document.body.clientHeight+68)<window.innerHeight){
            this.$dom.addClass("fixed-bottom")
        }
    }
}

module.exports=Foot;