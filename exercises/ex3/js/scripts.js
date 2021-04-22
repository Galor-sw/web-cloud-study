var totalRect = 0;
var colors = {}
var colorArray = ["first", "second","third", "four", "five", "six"];
function init(){
    var myFamilyName = "or";
    var toAppend = myFamilyName.length * 2;
        for (var i = 0; i< toAppend; i++) {
            AddRectangle();
        }
}
function AddRectangle() {
        var Rect = new rectangle();
};

function changeBackground(idToChange){
    var tempById = this.document.getElementById(idToChange);
        if(tempById.className == "normalRect3")
        {
            tempById.className = "picRect3";
            tempById.style.backgroundColor = "white";
        }
        else if(tempById.className == "picRect3"){
            tempById.className = "normalRect3"
            tempById.style.backgroundColor = getColorCode();
}}


function getColorCode() {
    var makeColorCode = '0123456789ABCDEF';
    var code = '#';
        for (var count = 0; count < 6; count++) {
        code =code+ makeColorCode[Math.floor(Math.random() * 16)];
        }
        return code;
    }
    
    function rectangle() {
    totalRect++;
    var artcleObj = document.createElement('div');
    var initId = "RectID"+totalRect;
    var myColor = getColorCode();
        artcleObj.id = initId ;
        artcleObj.style.backgroundColor = myColor;
        if(totalRect-1 == 0) {
            artcleObj.className="firstRect3";
            artcleObj.innerHTML="<div class='plus' onclick='rectangle()'></div>";
        }
        else {
        artcleObj.className = "normalRect3";
                artcleObj.setAttribute('onclick','changeBackground("'+initId+'")');
                if((totalRect != 0) && (totalRect %3 == 0)) {
                    artcleObj.innerHTML="<div class='star'></div>";
                }
            }
                
    var appendRect = function() {
        document.getElementsByTagName('main')[0].appendChild(artcleObj);
        }
    appendRect();
};


