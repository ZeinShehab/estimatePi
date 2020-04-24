var canvas = document.getElementById("canvas");
canvas.setAttribute("width", window.innerWidth);
canvas.setAttribute("height", window.innerHeight);
var ctx = canvas.getContext("2d");


function drawCoordinates(x, y, clr) {
    var pointSize = 0.1;

    ctx.fillStyle = clr;
    ctx.beginPath();
    ctx.arc(x, y, pointSize, 0, Math.PI * 2, true);
    ctx.fill();

};


function drawCircle(x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 0.5 * Math.PI);
    ctx.stroke();
};


function drawRect(x, y, width, height) {
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.stroke();
};


function estimatePi(n) {
    var numPointsCircle = 0;
    var numPointsTotal = 0;

    for (var i = 0; i < n; i++) {
        var point = [Math.random(), Math.random()];
        var distance = (point[0] * point[0]) + (point[1] * point[1]);
        if (distance <= 1) {
            numPointsCircle++;
            drawCoordinates(point[0] * enlarge + movex, point[1] * enlarge + movey, "#f44336");
        } else {
            drawCoordinates(point[0] * enlarge + movex, point[1] * enlarge + movey, "#008CBA");
        }
        numPointsTotal++;

    };
    return 4 * (numPointsCircle / numPointsTotal);
};


var movex = 1;
var movey = 80;
var enlarge = 200;


function run() {
    clrScrn();    
    var numberPoints = document.getElementById("numberPoints").value
    var pi = estimatePi(numberPoints);
    document.getElementById("pi").innerHTML = pi;
    drawRect(0 + movex, 0 + movey, 200, 200);
    drawCircle(0 + movex, 0 + movey, 200);
};


function clrScrn() {
    document.getElementById("pi").innerHTML = "";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0 + movey - 1, 202, 202)
}
