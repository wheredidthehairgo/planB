class BaseClass {
    constructor(str){
        this.$dom = $(str);
        this.init();
    }
    init(){}
}

module.exports = BaseClass;