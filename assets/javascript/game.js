var wins = 0;
var losses = 0;

alert("Click START to begin");

$(".btn").on("click", function() {
    $(".btn").text("RESTART");
})

function resetGame() {

var targetNumber = newNum();
var playerNumber = 0;
var crystalNumber = [
    randomInRange(1, 12),
    randomInRange(1, 12),
    randomInRange(1, 12),
    randomInRange(1, 12)
];
var crystalPic = [
    "assets/images/bluecrystal.jpg",
    "assets/images/greencrystal.jpg",
    "assets/images/redcrystal2.jpg",
    "assets/images/yellowcrystal.jpg"
];


function newNum() {
    var num = Math.floor(Math.random() * 101);
        num += 19;
    return num;
}

function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


for (var i = 0; i < 4; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", crystalPic[i]);
    imageCrystal.attr("data-crystalvalue", crystalNumber[i])
    $(".crystals").append(imageCrystal);
}

    
$("#random-total").text(targetNumber);



$(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    
    playerNumber += crystalValue;
    $("#player-total").text(playerNumber);
    

    if (playerNumber === targetNumber) {

        wins++;
        $("#player-wins").text(wins);
        alert("YOU WIN!  You gathered the exact number of gems and Billy is thrilled.  Click RESTART.");
        

    } else if (playerNumber > targetNumber) {

        losses++;
        $("#player-losses").text(losses);
        alert("YOU LOSE!  You have exceeded the allowable gem limit and will be fined immensely.  Click RESTART.");
        
    }
    
});

}

$(".btn").on("click", function() {
    $(".crystals").empty();
    $(".crystal-image").empty();
    $("#player-total").text("0");
    resetGame();
})