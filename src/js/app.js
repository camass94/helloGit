'use strict';

function runTest() {
    var totalTime,
        start,
        iterations,
        myObj;

    console.log('Object.create(null)');
    start = (new Date()).getTime();
    iterations = 1000000;
    while (iterations--) {
        myObj = Object.create(null);
    }
    totalTime = (new Date()).getTime() - start;
    console.log('\ttotalTime: ' + totalTime);

    console.log('Object.create({})');
    start = (new Date()).getTime();
    iterations = 1000000;
    while (iterations--) {
        myObj = Object.create({});
    }
    totalTime = (new Date()).getTime() - start;
    console.log('\ttotalTime: ' + totalTime);

    console.log('new Object()');
    start = (new Date()).getTime();
    iterations = 1000000;
    while (iterations--) {
        myObj = new Object();
    }
    totalTime = (new Date()).getTime() - start;
    console.log('\ttotalTime: ' + totalTime);

    console.log('{}');
    start = (new Date()).getTime();
    iterations = 1000000;
    while (iterations--) {
        myObj = {};
    }
    totalTime = (new Date()).getTime() - start;
    console.log('\ttotalTime: ' + totalTime);
    console.log('--------------------------');
};

var showName = (function () {
    var name = 'LEVIS3';
    return {
        getName : function () {
            return name;
        }
    };
}());
console.log(showName.getName());

function myFunction () {
    var str = document.getElementById("demo").innerHTML;
    var n = str.replace("sdlfsjdflsjdlfkj", "replace test success!");
    document.getElementById("demo").innerHTML= n;
};

function lengthTest () {
    var phones = ['iphone', 'galaxy', 'sky', 'optimus', 'htc'];
    var x = document.getElementById('arryDemo');

    x.innerHTML = phones.length;
};

function reverseTest () {
    var phones = ['iphone', 'galaxy', 'sky', 'optimus', 'htc'];
    phones.reverse();
    var x = document.getElementById('arryDemo');
    x.innerHTML = phones;
};

function sliceTest () {
    var fruits = ['banana', 'orange', 'lemon', 'apple', 'mango'];
    var citrus = fruits.slice(1,4);
    var x = document.getElementById('arryDemo');
    x.innerHTML = citrus;
};

function convertTest () {
    var phones = ['iphone', 'galaxy', 'sky', 'optimus', 'htc'];
    phones.toString();
    var x = document.getElementById('arryDemo');
    x.innerHTML = phones;
};

var r = new XMLHttpRequest();
r.open("post", "path/to/api", true);
r.onreadystatechange = function () {
    if (r.readyState != 4 || r.status != 200) return;
    alert("success:" + r.responseText);
};
r.send("banana = yellow");