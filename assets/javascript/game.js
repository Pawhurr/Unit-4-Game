var targetNumber = newNum();
var wins = 0;
var losses = 0;
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

function resetGame() {
    crystalValue = 0;
    playerNumber = 0;
    $("#player-total").text("0");
    $(".crystals").empty();
    newNum();
    targetNumber = newNum();

    $("#random-total").text(targetNumber);
    


}


function newNum() {
    var num = Math.floor(Math.random() * 101);
        num += 19;
    return num;
}

function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function crystalCreator() {
for (var i = 0; i < 4; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", crystalPic[i]);
    imageCrystal.attr("data-crystalvalue", crystalNumber[i])
    $(".crystals").append(imageCrystal);
}}

crystalCreator();
    
$("#random-total").text(targetNumber);



$(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    
    playerNumber += crystalValue;
    $("#player-total").text(playerNumber);

    if (playerNumber === targetNumber) {

        wins++;
        $("#player-wins").text(wins);
        
    } else if (playerNumber > targetNumber) {

        losses++;
        $("#player-losses").text(losses);
        
        
    }
    
});

$(".btn").on("click", function() {
    resetGame();
})