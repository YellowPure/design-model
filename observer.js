var Event = function () {
    var listen, log, obj, one, remove, trigger, __this;
    obj = {};
    __this = this;
    listen = function (key, eventFn) {
        var stack, _ref;
        _ref = obj[key];
        stack = (_ref != null) ? _ref : obj[key] = [];
        return stack.push(eventFn);
    };
    one = function (key, eventFn) {
        remove(key);
        return listen(key, eventFn);
    };
    remove = function (key) {
        var _ref = obj[key];
        return _ref != null ? _ref.length = 0 : void 0;
    };
    trigger = function () {
        var fn, stack, _i, _len, _ref, key;
        key = Array.prototype.shift.call(arguments);
        _ref = obj[key];
        stack = (_ref) != null ? _ref : obj[key] = [];
        for (_i = 0, _len = stack.length; _i < _len; _i++) {
            fn = stack[_i];
            if (fn.apply(__this, arguments) === false) {
                return false;
            }

        }
    }
    return {
        listen: listen,
        one: one,
        remove: remove,
        trigger: trigger
    }
}
// var adultTv = new Event();
// adultTv.listen('play', function (data) {
//     alert('今天是谁的电影?' + data.name);
// });
// adultTv.trigger('play', { 'name': '麻生希' });
// adultTv.trigger('play', { 'name': '小泽玛利亚' });

var SelfEvent = function () {
    var _events = {};
    var __this = this;
    var listen = function (key, eventFn) {
        _events[key] = _events[key] || [];
        isFunction(eventFn) && _events[key].push(eventFn);
    };
    var isFunction = function (f) {
        return Object.prototype.toString.call(f) === '[object Function]';
    };
    var remove = function (key) {
        if (_events[key] != null) {
            delete _events[key];
        }
    };
    var trigger = function () {
        // 取得key
        var key = Array.prototype.shift.apply(arguments);
        var farr = _events[key] || [];
        farr.forEach(function (element) {
            element && element.apply(null, arguments);
        }, this);
        // console.log(_events);
    };
    return {
        listen: listen,
        remove: remove,
        trigger: trigger
    }
}

var adultTv = new SelfEvent();
adultTv.listen('play', function (data) {
    alert('今天是谁的电影?' + data.name);
});
adultTv.trigger('play', { 'name': '麻生希' });
adultTv.trigger('play', { 'name': '小泽玛利亚' });
