$(document).ready(function () {
    'use strict';
    // console.log('main.js loaded');
    // var num1 = 30;
    // var num2 = 6;
    // console.log(num1 + num2);

    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));

    var c = Shape.Circle(100, 100, 50);
    c.fillColor = 'green';

    paper.view.draw();
})