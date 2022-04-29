function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function myAverage() {
    document.getElementById("myDropdown2").classList.toggle("show");
}

function myError() {
    document.getElementById("myError").classList.toggle("show");
}

window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
        var myAverage = document.getElementById("myDropdown2");
        var myError = document.getElementById("myError");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
        if (myAverage.classList.contains('show')) {
            myAverage.classList.remove('show');
        }
        if (myError.classList.contains('show')) {
            myError.classList.remove('show');
        }
    }
}



var randomNum = function() {
    var random = Math.floor(Math.random() * 20) + 1;
    var mod6 = random + 6;
    var mod5 = random + 5;
    var mod4 = random + 4;
    var mod3 = random + 3;

    //ОЛЕНЬ
    document.getElementById("num").innerHTML = random;
    document.getElementById("modnum").innerHTML = mod5;

    //ВОЛК
    document.getElementById("numWolf").innerHTML = random;
    document.getElementById("modnumWolf").innerHTML = mod4;

    //ЛЯГУШКА
    document.getElementById("numLag").innerHTML = random;
    document.getElementById("modnumLag").innerHTML = mod3;

    //БАРСУК
    document.getElementById("numBar").innerHTML = random;
    document.getElementById("modnumBar").innerHTML = mod3;

    //КАБАН
    document.getElementById("numKab").innerHTML = random;
    document.getElementById("modnumKab").innerHTML = mod3;

    //ЧЕРНЫЙ МЕДВЕДЬ
    document.getElementById("numBlackBear").innerHTML = random;
    document.getElementById("modnumBlackBear").innerHTML = mod4;

    //УПРЯЖНАЯ ЛОШАДЬ
    document.getElementById("numHourse").innerHTML = random;
    document.getElementById("modnumHourse").innerHTML = mod6;

}

var randomTaran = function() {
    var random = Math.floor(Math.random() * 6) + 1;
    var mod = random + 3;
    document.getElementById("attack1").innerHTML = random + " + 3 = " + mod;
}
var randomKop = function() {
    var random = Math.floor(Math.random() * 8) + 1;
    var mod = random + 3;
    document.getElementById("attack2").innerHTML = random + " + 3 = " + mod;
}

var myAttackWolf = function() {
    var random2d4 = Math.floor(Math.random() * 8) + 1;
    var mod2 = random2d4 + 2;
    document.getElementById("wolfKus").innerHTML = random2d4 + " + 2 = " + mod2;


}
var myAttackLag1 = function() {
    var random6 = Math.floor(Math.random() * 6) + 1;
    var mod1_6 = random6 + 1;
    document.getElementById("lagKus").innerHTML = random6 + " + 1 = " + mod1_6;
}
var myAttackLag2 = function() {

    var random2d4 = Math.floor(Math.random() * 8) + 1;
    document.getElementById("lagPro").innerHTML = random2d4;

}

var myAttackBar1 = function() {

    var random1d6 = Math.floor(Math.random() * 6) + 1;
    var mod1 = random1d6 + 1;
    document.getElementById("Bar1").innerHTML = random1d6 + " + 1 = " + mod1;
}
var myAttackBar2 = function() {

    var random2d4 = Math.floor(Math.random() * 8) + 1;
    var mod1 = random2d4 + 1;
    document.getElementById("Bar2").innerHTML = random2d4 + " + 1 = " + mod1;

}
var myAttackKab1 = function() {

    var random1d6 = Math.floor(Math.random() * 6) + 1;
    var mod1 = random1d6 + 1;
    document.getElementById("Kab1").innerHTML = random1d6 + " + 1 = " + mod1;
}
var myAttackKab2 = function() {

    var random1d6 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("Kab2").innerHTML = random1d6;

}

var myAttackBlackBear1 = function() {

    var random1d6 = Math.floor(Math.random() * 6) + 1;
    var mod2 = random1d6 + 2;
    document.getElementById("BlackBear1").innerHTML = random1d6 + " + 2 = " + mod2;
}
var myAttackBlackBear2 = function() {

    var random2d4 = Math.floor(Math.random() * 8) + 1;
    var mod2 = random2d4 + 2;
    document.getElementById("BlackBear2").innerHTML = random2d4 + " + 2 = " + mod2;;

}
var myAttackHourse = function() {

    var random2d4 = Math.floor(Math.random() * 8) + 1;
    var mod4 = random2d4 + 4;
    document.getElementById("Hourse").innerHTML = random2d4 + " + 4 = " + mod4;;

}