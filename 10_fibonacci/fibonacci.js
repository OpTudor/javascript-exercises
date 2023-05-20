const fibonacci = function(a) {
    num = parseInt(a)
    if(num < 0 || isNaN(num)) return "OOPS";
    let n1=0,n2=1;
    let n3;
    if(num === 1) return 1;
    for(let i=2; i <= num ;i++){
        n3=n1+n2;
        n1=n2;
        n2=n3;

    }
    return n3;

};

// Do not edit below this line
module.exports = fibonacci;
