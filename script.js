
$(document).ready(function() {

    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    $("#encrypt").on("click", function() {

        // Retreving the value fields
        var input = $("#input");
        var key = $("#key").val();
        var PlainText = input.val();
        PlainText = PlainText.toLowerCase();
        key = parseInt(key);

        var CipherText = "";
        for (var i = 0; i < PlainText.length; i++) {
            var char = PlainText.charAt(i);
            var index = alphabet.indexOf(char);
            var cindex = index + key;

            // If it can't find an empty space in the PlainText index is equal to -1. Thus it
            // runs when the encryption process runs when it is not equal to 1
            if (index !== -1) {

                if (cindex >= 26) {
                    cindex = cindex - 26;
                }

                CipherText += alphabet.charAt(cindex); //      Insert key here when the function is fully implemented

            } else {
                if (CipherText === " ") {
                    CipherText += " ";
                } else {
                    CipherText += char;
                }
            }
        }

        $(".content").text(CipherText).hide().delay(800).fadeIn();
    });

});
$(document).ready(function() {

    var alphabet = "zyxwvutsrqponmlkjihgfedcba";
    $("#decrypt").on("click", function() {

        // Retreving the value fields
        var input = $("#input");
        var key = $("#key").val();
        var PlainText = input.val();
        PlainText = PlainText.toLowerCase();
        key = parseInt(key);

        var CipherText = "";
        for (var i = 0; i < PlainText.length; i++) {
            var char = PlainText.charAt(i);
            var index = alphabet.indexOf(char);
            var cindex = index + key;

            // If it can't find an empty space in the PlainText index is equal to -1. Thus it
            // runs when the encryption process runs when it is not equal to 1
            if (index !== -1) {

                if (cindex >= 26) {
                    cindex =  26-cindex;
                }

                CipherText += alphabet.charAt(cindex); //      Insert key here when the function is fully implemented

            } else {
                if (CipherText === " ") {
                    CipherText += " ";
                } else {
                    CipherText += char;
                }
            }
        }

        $(".content").text(CipherText).hide().delay(800).fadeIn();
    });

});

