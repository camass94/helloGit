'use strict';
//gnb
//addEventListener("이벤트", "callback", "false/true")
    //false는 버블링 : 자식노드 -> 부모노드 이벤트 발생
    //true는 캡쳐링 : 부모노드 -> 자식노드 이벤트 발생

(function () {
    var i;
    var gnb = document.getElementById("gnb");
    var gnbList = gnb.children;
    var gnbLiTotal = gnbList.length;  //5(li)
    var subGnbUl = gnb.getElementsByTagName("ul");

    //gnb li, gnb li ul node length
    console.log(gnbLiTotal);
    console.log(subGnbUl.length); //2(ul)

    for (i = 0; i < gnbLiTotal; i++) {

        if (gnbList[i].children[1]) {

            (function (i) {
                var duration = 800;
                gnbList[i].children[0].addEventListener("mouseover", function () {
                    gnbList[i].children[1].style.display="block";
                },false);
                gnbList[i].addEventListener("mouseleave", function () {
                    setTimeout(function () {
                        gnbList[i].children[1].style.display="none";
                    }, duration)
                }, false);

                //keyboard access
                gnbList[i].children[0].addEventListener("focus", function () {
                    gnbList[i].children[1].style.display="block";
                });
                gnbList[i].children[1].addEventListener("blur", function () {
                    setTimeout(function () {
                        gnbList[i].children[1].style.display="none";
                    }, duration)
                }, false);

            }(i));

        } else {
            return false;
        }

    }
}());

function modifyText() {
    var t2 = document.getElementById("t2");
    if (t2.firstChild.nodeValue == "three") {
        t2.firstChild.nodeValue = "two";
    } else {
        t2.firstChild.nodeValue = "three";
    }
}
var el = document.getElementById("outside");
el.addEventListener("click", modifyText, false);

(function () {
    var test = document.getElementById("test");

    test.addEventListener("mouseenter", function (event) {
        event.target.style.color = "purple";
        setTimeout(function () {
            event.target.style.color = "";
        }, 500)
    }, false)

    test.addEventListener("mouseover", function (event) {
        event.target.style.color = "orange";
        setTimeout(function () {
            event.target.style.color = "";
        }, 500)
    }, false)
}());

(function (){
    var numArray = new Array(240, 4, 555, 123, 1, 444, 66);
    var i = 0;
    function compareNumbers(a, b) {
        return a - b;
    }

    while (numArray[i] < 100) {
        console.log(numArray[i++]);
    }
    console.log(numArray.sort(compareNumbers));
    console.log(numArray.reverse());

    var fruitArray = ['strawberry', 'apple', 'peach', 'lemon', 'lime', 'banana'];
    var resultString = fruitArray.join('@');
    console.log(resultString);
    console.log(fruitArray.sort());

    var queue = [];
    queue.push('first');
    queue.push('second');
    queue.push('third');
    console.log(queue);
    console.log(queue.shift());
    console.log(queue.shift());
    console.log(queue);

    var originArray = [];
    originArray[0] = ["one", "two"];
    originArray[1] = ["three", "four"];
    originArray[2] = ["five", "six"];
    originArray[3] = ["seven", "eight"];

    var newArray = originArray.slice(1,3);
    console.log(newArray);
    console.log(originArray[1][0] = "octopus");
    console.log(newArray);

    var charSets = ["ab", "bb", "cd", "ab", "cc", "ab", "dd", "ab"];
    function replaceElement(element, index, array) {
        if(element == "ab") array[index] = "##";
    }
    charSets.forEach(replaceElement);
    console.log(charSets);
}());

(function () {
    var intervalId = null;
    var redBox = document.getElementById("redbox");

    redBox.addEventListener("click", startBox, false);

    function startBox() {
        if (intervalId === null) {
            var x = 100;
            intervalId = setInterval(function () {
                x += 5;
                redBox.style.left = x + "px";
            }, 100);
        } else {
            clearInterval(intervalId);
            intervalId = null;
        }
    }
}());

(function () {
    var firstDate = new Date();

    setTimeout(function () {
        doEvent(firstDate);
    }, 2500);

    function doEvent() {
        var secondData = new Date();
        var diff = secondData - firstDate;
        console.log(diff);
    }
}());

(function () {
    var sum = 0;
    var cells = document.querySelectorAll("td + td");

    for (var i = 0; i < cells.length; i++) {
        sum += parseFloat(cells[i].firstChild.nodeValue);
    }

    var newRow = document.createElement("tr");

    var firstCell = document.createElement("td");
    var firstCellText = document.createTextNode("Sum:");
    firstCell.appendChild(firstCellText);
    newRow.appendChild(firstCell);

    var secondCell = document.createElement("td");
    var secondCellText = document.createTextNode(sum);
    secondCell.appendChild(secondCellText);
    newRow.appendChild(secondCell);

    document.getElementById("table1").querySelector("tbody").appendChild(newRow);
    //document.getElementById("table1").appendChild(newRow);
}());

(function () {
    window.onload = window.onresize = function () {
        var box = document.getElementById("elem");
        var style = window.getComputedStyle(box, null);
        var height = parseInt(style.getPropertyValue("height"));
        var width = parseInt(style.getPropertyValue("width"));

        var x = width / 2;
        var y = height / 2;

        var circleRadius = Math.min(width, height) / 2;

        var circ = document.getElementById("circ");
        circ.setAttribute("r", circleRadius);
        circ.setAttribute("cx", x);
        circ.setAttribute("cy", y);
    }
}());