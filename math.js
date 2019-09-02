var counter = function(arr) {
    return 'There are ' + arr.length + ' elements';
}

var double = function(i) {
    return `The doubled value is ${i*2}`;
} 

var add = function(a, b) {
    return `The sum is ${a+b}`;
};

module.exports = {
    counter,
    double,
    add
};
