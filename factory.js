var XMLHttpFactory = function () {};
XMLHttpFactory.createXMLHttp = function(option) {
    var XMLHttp = null;
    if(window.XMLHttpRequest){
        XMLHttp = new XMLHttpRequest();
    }else if(window.ActiveXObject) {
        XMLHttp = new ActiveXObject('Microsofit.XMLHTTP');
    }
    return XMLHttp;
}
var xmlHttp = XMLHttpFactory.createXMLHttp({
    'url':'163.com',
    'type':'post'
});
var xmlHttp = XMLHttpFactory.createXMLHttp({
    'url':'baidu.com',
    'type':'get'
});

function A(name) {
    this.name = name;
    this.init = function() {
        console.log('super');
    }
}
function ObjectFactory() {
    var obj = {},
    Constructor = Array.prototype.shift.call(arguments);
    obj.__proto__ = typeof Constructor.prototype === 'number' ? Object.prototype : Constructor.prototype;
    var ret = Constructor.apply(obj,arguments);
    return typeof ret === 'object' ? ret :obj;
}
var a = ObjectFactory(A,'dddd');
console.log(a);