var socket = io.connect();
var xotArr = [];
var xotakerArr = [];
var gishatichArr = [];
var amenakerArr = [];
var mahArr = [];
var lionArr = [];

var side = 25;
var matrix = [
    [1, 1, 1, 1, 3, 7, 2, 2, 2, 2, 1, 1, 1, 1, 7, 7, 7, 7, 7, 0, 2, 2, 2, 2, 0, 0, 3, 3, 3, 3, 1, 1, 1, 0, 0, 2, 2, 2, 2, 0, 1],
    [1, 1, 1, 1, 3, 0, 2, 2, 2, 2, 1, 1, 1, 1, 1, 7, 7, 7, 0, 0, 2, 2, 2, 2, 0, 0, 3, 3, 3, 3, 1, 1, 1, 0, 0, 2, 2, 2, 2, 0, 1],
    [1, 1, 1, 1, 3, 0, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 7, 7, 0, 0, 2, 2, 2, 2, 7, 0, 3, 3, 3, 3, 1, 1, 1, 7, 0, 2, 2, 2, 2, 0, 1],
    [1, 1, 1, 1, 3, 0, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 0, 0, 0, 2, 2, 2, 2, 0, 0, 3, 3, 3, 3, 1, 1, 1, 0, 0, 2, 2, 2, 2, 0, 0],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 4, 4, 4, 4, 0, 0, 0, 2, 2, 2, 2, 0, 0, 7, 0, 0, 0, 1, 1, 1, 0, 0, 2, 2, 2, 2, 0, 1],
    [2, 2, 2, 2, 2, 2, 0, 7, 5, 0, 0, 5, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 2, 2, 2, 0, 1],
    [2, 2, 2, 2, 2, 7, 3, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 7, 7, 2, 2, 2, 2, 0, 1],
    [2, 2, 2, 2, 2, 2, 7, 0, 0, 0, 5, 7, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 1, 1, 1, 1, 1, 1, 1, 7, 7, 2, 2, 2, 2, 0, 1],
    [2, 2, 2, 2, 2, 7, 2, 0, 0, 0, 0, 0, 0, 6, 6, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 7, 7, 2, 2, 2, 2, 0, 1],
    [2, 2, 2, 2, 2, 2, 0, 0, 5, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 2, 2, 2, 2, 0, 1],
    [2, 2, 2, 2, 0, 2, 0, 0, 0, 2, 2, 2, 2, 4, 4, 4, 4, 0, 7, 7, 7, 7, 7, 0, 0, 0, 2, 2, 2, 2, 1, 1, 1, 0, 0, 2, 2, 2, 2, 0, 1],
    [2, 2, 2, 2, 0, 2, 0, 5, 0, 2, 2, 2, 2, 4, 4, 4, 4, 7, 7, 7, 7, 7, 7, 7, 0, 0, 2, 2, 2, 2, 1, 1, 1, 0, 0, 2, 2, 2, 2, 0, 1],
    [2, 2, 2, 2, 7, 2, 2, 0, 0, 2, 2, 2, 2, 4, 4, 4, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 2, 2, 2, 2, 1, 1, 1, 0, 0, 2, 2, 2, 2, 0, 1],
    [2, 2, 2, 2, 0, 0, 2, 0, 0, 2, 2, 2, 2, 4, 4, 4, 4, 7, 7, 7, 7, 7, 7, 7, 0, 0, 2, 2, 2, 2, 1, 1, 1, 0, 0, 2, 2, 2, 2, 0, 1],
    [7, 0, 0, 0, 0, 0, 2, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 7, 2, 2, 2, 2, 0, 1],
    [7, 7, 0, 7, 0, 0, 2, 7, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 7, 7, 7, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 2, 2, 2, 0, 1],
    [7, 7, 7, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 7, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 2, 2, 2, 0, 1],
    [7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 2, 2, 2, 0, 1],
    [7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 0, 1, 1, 1, 1, 2, 2, 2, 2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 2, 2, 2, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 0, 1, 1, 1, 1, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 2, 2, 2, 2, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 2, 2, 2, 2, 0, 1],
    [2, 2, 2, 2, 2, 2, 2, 2, 7, 0, 0, 0, 0, 2, 2, 4, 4, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 2, 2, 2, 2, 0, 1],
    [3, 3, 3, 3, 2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2, 4, 4, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 2, 2, 2, 2, 0, 1],
    [3, 3, 3, 3, 2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2, 4, 4, 0, 0, 0, 2, 2, 2, 2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 7, 7, 2, 2, 2, 2, 0, 1],
    [3, 3, 3, 3, 2, 2, 2, 2, 7, 0, 0, 0, 0, 2, 2, 4, 4, 0, 0, 0, 2, 2, 2, 2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 7, 7, 2, 2, 2, 2, 0, 1],
    [3, 3, 3, 3, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 4, 4, 0, 0, 0, 2, 2, 2, 2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 7, 7, 2, 2, 2, 2, 0, 1],
    [3, 3, 3, 3, 2, 2, 2, 2, 0, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 2, 2, 2, 2, 0, 0, 1],
    [3, 3, 3, 3, 2, 2, 2, 7, 7, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 2, 2, 2, 2, 0, 1],
    [3, 3, 3, 3, 2, 2, 2, 7, 7, 2, 2, 2, 2, 7, 1, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 1, 1, 1, 0, 0, 2, 2, 2, 2, 0, 1],
    [1, 1, 1, 1, 2, 2, 2, 7, 7, 2, 2, 2, 2, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 1, 1, 1, 0, 0, 2, 2, 2, 2, 0, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 2, 0, 5, 5, 0, 0, 0, 0, 0, 6, 6, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 2, 2, 2, 2, 0, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 5, 5, 5, 0, 0, 0, 6, 6, 6, 6, 6, 0, 0, 0, 1, 1, 1, 0, 0, 2, 2, 2, 2, 0, 1],
    [0, 7, 0, 0, 7, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 5, 7, 7, 0, 0, 0, 6, 6, 6, 6, 6, 0, 0, 0, 1, 1, 1, 0, 0, 2, 2, 2, 2, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 7, 0, 7, 7, 7, 7, 0, 0, 6, 6, 6, 6, 6, 0, 0, 0, 1, 1, 1, 0, 0, 2, 2, 2, 2, 0, 1],
    [3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 0, 6, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 2, 2, 2, 0, 1]
];
// var matrix=[];
// var datark=0;
// var grass=0;
// var xotaker=0;
// var gishatich=0;
// var amenker=0;
// var lion=0;
// var mah=0;
// var qar=0;
// for(var i=0;i<30;i++)
// {
//     matrix.push([]);
//     for(var j=0;j<30;j++)
//     {
//         random=Math.floor(Math.random() * (5 - 1 + 1)) + 1;

//        if(random==1&&grass<=400)
//         {
//             grass++;
//             matrix[i][j]=1;
//         }
//         else if(random==2&&xotaker<=125)
//         {
//             xotaker++;
//             matrix[i][j]=2;
//         }
//         else if(random==3&&gishatich<=125)
//         {
//             gishatich++;
//             matrix[i][j]=3;
//         }
//         else if(random==4&&amenker<=125)
//         {
//             amenker++;
//             matrix[i][j]=4;
//         }
//           else if(random==5&&mah<=25)
//         {
//             mah++;
//             matrix[i][j]=5;
//         }
//         else if(random==6&&lion<=125)
//         {
//             lion++;
//             matrix[i][j]=6;
//         }


//         else
//         {
//             matrix[i][j]=1;
//         }
//     }
// }
// matrix[15][15]=3
var exanak = "garun";
myVar = setInterval(function () {
    if (exanak == "garun") {
        exanak = "amar"
    }
    else if (exanak == "amar") {
        exanak = "ashun"
    }
    else if (exanak == "ashun") {
        exanak = "dmer"
    }
    else if (exanak == "dmer") {
        exanak = "garun"
    }

}, 6000);

function setup() {
    noStroke();
    createCanvas(matrix[0].length * side + 200, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Xot(x, y, 1);
                xotArr.push(gr);

            }
            else if (matrix[y][x] == 2) {
                var xt = new Xotaker(x, y, 2);
                xotakerArr.push(xt);
            }

            else if (matrix[y][x] == 3) {
                var gt = new Gishatich(x, y, 3);
                gishatichArr.push(gt);
            }
            else if (matrix[y][x] == 4) {
                var am = new Amenaker(x, y, 4);
                amenakerArr.push(am);
            }
            else if (matrix[y][x] == 5) {
                var ma = new Mah(x, y, 5);
                mahArr.push(ma);
            }
            else if (matrix[y][x] == 6) {
                var li = new Lion(x, y, 6);
                lionArr.push(li);
            }
        }
    }
}

var statistika;
function draw() {
    if (frameCount % 60 == 0) {
        statistika = {
            "xot": xotArr.length,
            "gishatich": gishatichArr.length ,
            "xotaker": xotakerArr.length,
            "amenaker": amenakerArr.length,
        }
        socket.emit("send obj", statistika);
    }
     if (frameCount % 1 == 0) {
         var x=Math.floor(random(1,40));
         var y=Math.floor(random(1,31));
         anamal_erevut(x,y);
     }
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                if (exanak == "garun") {
                    fill("#99ff00");
                    frameRate(10);
                }
                else if (exanak == "amar") {
                    fill("green");
                    frameRate(8);
                }
                else if (exanak == "ashun") {
                    fill("#ba8a4c");
                    frameRate(6);
                }
                else if (exanak == "dmer") {
                    fill("#ffffff");
                    frameRate(3);
                }
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                if (exanak == "garun") {
                    fill("#f7da00");
                    frameRate(10);
                }
                else if (exanak == "amar") {
                    fill("#f7da00");
                    frameRate(8);
                }
                else if (exanak == "ashun") {
                    fill("#f7da00");
                    frameRate(6);
                }
                else if (exanak == "dmer") {
                    fill("#efe070");
                    frameRate(3);
                }
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 3) {
                if (exanak == "garun") {
                    fill("#f70000");
                    frameRate(10);
                }
                else if (exanak == "amar") {
                    fill("#f70000");
                    frameRate(8);
                }
                else if (exanak == "ashun") {
                    fill("#f70000");
                    frameRate(6);
                }
                else if (exanak == "dmer") {
                    fill("#e25d5d");
                    frameRate(3);
                }
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                if (exanak == "garun") {
                    fill("#7a00f4");
                    frameRate(10);
                }
                else if (exanak == "amar") {
                    fill("#7a00f4");
                    frameRate(8);
                }
                else if (exanak == "ashun") {
                    fill("#7a00f4");
                    frameRate(6);
                }
                else if (exanak == "dmer") {
                    fill("#a453f4");
                    frameRate(3);
                }

                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                if (exanak == "garun") {
                    fill("#0f0500");

                }
                else if (exanak == "amar") {
                    fill("#0f0500");

                }
                else if (exanak == "ashun") {
                    fill("#0f0500");

                }
                else if (exanak == "dmer") {
                    fill("#a453f4");

                }
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 6) {
                if (exanak == "garun") {
                    fill("#f600ff");
                    frameRate(10);
                }
                else if (exanak == "amar") {
                    fill("#f147f7");
                    frameRate(8);
                }
                else if (exanak == "ashun") {
                    fill("#a049a3");
                    frameRate(6);
                }
                else if (exanak == "dmer") {
                    fill("#624963");
                    frameRate(3);
                }
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 7) {
                fill("#301f16");
                rect(x * side, y * side, side, side);
            }
            else {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
        }
    }

    for (var i in xotArr) {
        xotArr[i].bazmanal();
    }
    for (var i in xotakerArr) {
        xotakerArr[i].utel();
    }

    for (var i in gishatichArr) {
        gishatichArr[i].utel();
    }
    for (var i in amenakerArr) {
        amenakerArr[i].utel1();
    }
    for (var i in mahArr) {
        mahArr[i].utel3();
    }
    for (var i in lionArr) {

        lionArr[i].utel3();
    }
    fill("red");
    rect(1090, 2, 100, 60)
    textSize(32);
    fill("green");
    text(exanak, 1100, 30);
}

// var randomNum = Math.floor(Math.random() * 4);
// var weather = document.getElementById("weather");
// if (randomNum == 1) {
//     weather.innerHTML("Current Weather : Summer")
// } 
function anamal_erevut(x, y) {
    if (matrix[y][x] == 1) {
        for (var c in xotArr) {
            if (xotArr[c].x == x && xotArr.y == y) {
                xotArr.slice(c, 1);
            }
        }
    }
    if (matrix[y][x] == 2) {
        for (var c in xotakerArr) {
            if (xotakerArr[c].x == x && xotakerArr.y == y) {
                xotakerArr.slice(c, 1);
            }
        }
    }
    if (matrix[y][x] == 3) {
        for (var c in gishatichArr) {
            if (gishatichArr[c].x == x && gishatichArr.y == y) {
                gishatichArr.slice(c, 1);
            }
        }
    }
    if (matrix[y][x] == 4) {
        for (var c in amenakerArr) {
            if (amenakerArr[c].x == x && amenakerArr.y == y) {
                amenakerArr.slice(c, 1);

            }
        }
    }
    if (matrix[y][x] == 5) {
        for (var c in mahArr) {
            if (xotArr[c].x == x && mahArr.y == y) {
                mahArr.slice(c, 1);
            }
        }
    }
    if (matrix[y][x] == 6) {
        for (var c in lionArr) {
            if (lionArr[c].x == x && lionArr.y == y) {
                lionArr.slice(c, 1);
            }
        }
    }
    matrix[y][x] = 0;
}
