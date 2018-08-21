"use strict";
var shownNumber = 0;
var totalSumNum = 0;
var wins = parseInt(0);
var losses = parseInt(0);
var hasFinished = false;
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;

// totalInnerText = document.getElementById("totalScore").innerText;
// ^^ how do i give this a = without rewriting it?
function resetGame() {
    shownNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    console.log(shownNumber);
    document.getElementById("totalScore").innerText = 0;
    updateDisplay();
    totalSumNum = 0;
};

function updateDisplay() {
    console.log(shownNumber);
    document.getElementById("displayObjectiveNum").innerHTML = "\n" + shownNumber;

    crystal1 = Math.floor(Math.random() * 12) + 1;
    crystal2 = Math.floor(Math.random() * 12) + 1;
    crystal3 = Math.floor(Math.random() * 12) + 1;
    crystal4 = Math.floor(Math.random() * 12) + 1;
    console.log(crystal1, crystal2, crystal3, crystal4);
// values double when in 2nd phase of game
// when points are added, they dont add correctly.

    $("#crystal1").on("click", function () {
        totalSumNum += crystal1;
        console.log("totalSumNum after change " + totalSumNum);
        document.getElementById("totalScore").innerText = totalSumNum;
        checkWin();
    });

    $("#crystal2").on("click", function () {
        totalSumNum += crystal2;
        console.log("totalSumNum after change " + totalSumNum);
        document.getElementById("totalScore").innerText = totalSumNum;
        checkWin();
    });

    $("#crystal3").on("click", function () {
        totalSumNum += crystal3;
        console.log("totalSumNum after change " + totalSumNum);
        document.getElementById("totalScore").innerText = totalSumNum;
        checkWin();
    });

    $("#crystal4").on("click", function () {
        totalSumNum += crystal4;
        console.log("totalSumNum after change " + totalSumNum);
        document.getElementById("totalScore").innerText = totalSumNum;
        checkWin();
    });



    console.log("totalSumNum b4 change " + totalSumNum);
};

function checkWin() {
    if (totalSumNum === shownNumber) {
        document.getElementById("wins").textContent += 1;
        hasFinished = true;
        checkEndGame();
    }
    checkLoss();
};

function checkLoss() {
    if (totalSumNum > shownNumber) {
        document.getElementById("losses").textContent += 1;
        hasFinished = true;
    }
    checkEndGame();
};

function checkEndGame() {
    if (hasFinished) {
        resetGame();
        hasFinished = false;
    } else {
        return false;
    }
};

window.onload = resetGame();