global.BaseClass=require('./libs/BaseClass');
global.NewList=require('./libs/NewList');

const About=new (require('./views/About'))(".about");
const Foot=new (require('./views/Foot'))(".foot");