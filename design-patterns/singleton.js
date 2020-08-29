// Singleton A
// - only instantiated when needed

var Singleton = (function () {
    var instantiated;

    function init() {
        // singleton here
        return {
            publicMethod: function () {
                console.log('hello world');
            },
            publicProperty: 'test'
        };
    }

    return {
        getInstance: function () {
            if (!instantiated) {
                instantiated = init();
            }
            return instantiated;
        }
    };
})();

// calling public methods is then as easy as:
Singleton.getInstance().publicMethod();

var a = Singleton.getInstance();
var b = Singleton.getInstance();
a === b // true