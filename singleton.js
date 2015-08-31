var singleInstance = function (fn) {
    var instance;
    return function() {
        return instance || (instance = fn.apply(this,arguments));
    }
}
var createAlert = singleInstance(function() {
    return document.body.appendChild( document.createElement('div') )
});

var createFarmer = singleInstance(function() {
    var farmer = function(){
        this.name = 'farmer'+Math.random();
    }
    return new farmer();
});
var f = createFarmer();
var f1 = createFarmer();