function receivesAFunction(cb) {
    cb();
}

function returnsANamedFunction() {
    const namedFunc = function() {console.log("returning a named function") }
    return namedFunc;
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("returning an anon function"); 
    };
};