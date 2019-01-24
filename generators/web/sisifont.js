/*

   ╭─╴╶┬╴╭─╴╶┬╴┌─╴╭─╮╭╮╷╶┬╴   ╭─╴╭─╮╭╮╷╷ ╷┌─╴┌─╮╶┬╴┌─╴┌─╮
   ╰─╮ │ ╰─╮ │ ├─╴│ ││││ │    │  │ │││││╭╯├─╴├┬╯ │ ├─╴├┬╯
   ╶─╯╶┴╴╶─╯╶┴╴╵  ╰─╯╵╰╯ ╵    ╰─╴╰─╯╵╰╯╰╯ ╰─╴╵ ╰ ╵ ╰─╴╵ ╰
   © 2019 - Nicolas Chesnais - autre.space
   GPL 1.3 - https://www.gnu.org/licenses/gpl-3.0.html

*/

init();

function init() {
    var input = document.getElementById('input');
    input.oninput = function () {
        convert(this.innerText.split(String.fromCharCode(10)));
    };
    input.onclick = function () {
        if (this.textContent === 'Write something here.')
            this.textContent = '';
    };

    displaySpecimen();
}

function textToFont(text) {
    var font = [
        '                                                                                                                                                                                                                                                                                                                                                                                                                           ╭─╮            ╭─╮╶─╴ ○    ╶╮ ╶╮                 ╮ ╭╮                 \\  /  ^  ~ · · ○        \\  /  ^ · · \\  /  ^ · ·    ~  \\  /  ^  ~ · ·       \\  /  ^ · · /                                                                                                       ',
        '    ╷  ││ ┼┼╭┼╴ ○ ╭╮  │  ╭╯╰╮ ┬┴┬              /╭─╮╶╮ ╶─╮╶─╮╷  ┌─╴╭─╴╶─┐╭─╮╭─╮               ╶─╮╭─╮╭─┐┌─╮╭─╴┌─╮┌─╴┌─╴╭─╮╷ ╷╶┬╴  ╷╷ ╭╷  ╭╮╮╭╮╷╭─╮┌─╮╭─╮┌─╮╭─╴╶┬╴╷ ╷╷ ╷╷╷╷╷ ╷╷ ╷╶─╮ ┌╴\\  ╶┐  ^     \\    ╷       ╷    ╭╴   ╷   ╷  ╷ ╷  ╶┐                       ╷                    ╭╯ │ ╰╮                                                                                                                 ╭╮ ╷ ╷ ╷ ╷ ╭─╮· ·│╭│╶╮          │╭│         ╭╯  ┤  ╯    ╭┬┬       │ ││    ┌┬┐┌─┐┌─┐   ╭─┐╭─┐╭─┐╭─┐╭─┐╭─┐╭┬╴╭─╴┌─╴┌─╴┌─╴┌─╴╶┬╴╶┬╴╶┬╴╶┬╴┌─╮╭╮╷╭─╮╭─╮╭─╮╭─╮╭─╮   ╭─/╷ ╷╷ ╷╷ ╷╷ ╷╷ ╷├─╮┌─╮ \\  /  ^  ~ · · ○        \\  /  ^ · · \\  /  ^ · · ╶┤ ~  \\  /  ^  ~ · · ·     \\  /  ^ · · /    · ·',
        '    ╵    ┌┼┘╰┼╮╭─╯├┬╭    │  │    ╶┼╴   ╶─╴    / │ │ │ ╭─╯╶─┤└┼╴└─╮├─╮ ╶┤├─┤╰─┤ ·  ·  / ╶─╴ \\ ╶─╯│╭┤├─┤│╶┤│  │ │├─╴├─╴│╶╮├─┤ │   │├┴╮│  │││││││ │├─╯│ │├┬╯╰─╮ │ │ ││╭╯│││╭─╯╰─┤ ─  │  \\  │          ╶─╮├─╮╭─╴╭─┤╭─╮╶├╴╭─┐├─╮╶┐ ╶┐ ├┴╮ │ ╭╮╮╭╮╷╭─╮╭─┐┌─╮╷╭╴╭─╴╶├╴╷ ╷╷ ╷╷╷╷╮╷╭╷ ╷╶─╮╶┤  │  ├╴ ◠◡                                                                                                       ╵ ╭┼╴ ┼╴╶○╴┴┬┴ ╵ ├─╮   │╰│╰╯  //──┐╶─╴│╵│      ╶┼╴╰╴ ╶╯    ╷ ╷╰┤│ ·     ┴ ╰╯ \\\\ ├┘┤├─┤│┌┤  ╵├─┤├─┤├─┤├─┤├─┤├─┤├┼╴│  ├─╴├─╴├─╴├─╴ │  │  │  │ ┼╴│││││ ││ ││ ││ ││ │\\ /│/││ ││ ││ ││ │╰─┤│ ││╶┤╶─╮╶─╮╶─╮╶─╮╶─╮╶─╮╶┬╮╭─╴╭─╮╭─╮╭─╮╭─╮╶┐ ╶┐ ╶┐ ╶┐ ╭─┤╭╮╷╭─╮╭─╮╭─╮╭─╮╭─╮╶─╴╭─/╷ ╷╷ ╷╷ ╷╷ ╷╷ ╷├─╮╷ ╷',
        '    ╵    ┼┼ ╶┼╯ ○ ╰┴╯    ╰╮╭╯        ╯     · /  ╰─╯╶┴╴╰─╴╶─╯ ╵ ╶─╯╰─╯  ╵╰─╯╶─╯ ·  ╯  \\ ╶─╴ / ╵  ╰╰╯╵ ╵└─╯╰─╴└─╯╰─╴╵  ╰─╯╵ ╵╶┴╴╰─╯╵ ╵╰─╴╵╵╵╵╰╯╰─╯╵  ╰┬╯╵ ╰╶─╯ ╵ ╰─╯╰╯ ╰╯╯╵ ╵╶─╯╰─╴ └╴  \\╶┘    ───   ╰─╯╰─╯╰─╴╰─╯╰─╴ ╵ ╰─┤╵ ╵╶┴╴ │ ╵ ╵ ╰╴╵╵╵╵╰╯╰─╯├─╯╰─┤╵  ╶─╯ ╰╴╰─╯╰╯ ╰╯╯╯╵╰╰─┤╰─╴ ╰╮ │ ╭╯                                                                                                           │ ╰┼╴╶╯─ ╵ ─┼─ ╷ ╰─┤   ╰─╯    \\\\      ╰─╯      ╶─╴         ├─┤ ││    ╯       // └┴┘└┴┘└┴┘╭─╴╵ ╵╵ ╵╵ ╵╵ ╵╵ ╵╵ ╵╵╰╴╰┬╴╰─╴╰─╴╰─╴╰─╴╶┴╴╶┴╴╶┴╴╶┴╴└─╯╵╰╯╰─╯╰─╯╰─╯╰─╯╰─╯/ \\/─╯╰─╯╰─╯╰─╯╰─╯╶─╯├─╯╵╰╯╰─╯╰─╯╰─╯╰─╯╰─╯╰─╯╰┴╴╰┬╴╰─╴╰─╴╰─╴╰─╴╶┴╴╶┴╴╶┴╴╶┴╴╰─╯╵╰╯╰─╯╰─╯╰─╯╰─╯╰─╯ · /─╯╰─╯╰─╯╰─╯╰─╯╰─┤├─╯╰─┤',
        '                                                                                                                                                                                                                     ╶─╯      ╶╯                ╵    ╵                     ╶─╯                                                                                                                      ╵              ╵ ╰─╯                                       ╵                             ╰─╴                      ╯                                                                                               ╯                                                                ╶─╯   ╶─╯',
    ];

    var result = [];

    text.forEach(line => {
        let tempLine = Array(line === '' ? 1 : 5).fill('');
        for (let i = 0; i < line.length; i++) {
            let pos = (line.charCodeAt(i) - 32) * 3;
            for (let j = 0; j < 5; j++) {
                tempLine[j] += font[j][pos] + font[j][pos+1] + font[j][pos+2]
            }
        }
        result.push(...tempLine);
    });

    return result;
}

function format(text, width) {
    var result = [];
    text.forEach(line => {
        line = line.replace('’', '\'').replace('Œ', 'OE').replace('œ', 'oe')
        while (line.length > width) {
            let index = line.lastIndexOf(' ', width);
            if (index === -1) index = line.indexOf(' ');
            if (index === -1) break;
            result.push(line.slice(0, index));
            line = line.slice(index + 1);
        }
        result.push(line);
    });
    return result;
}

function display(text) {
    document.getElementById('output').innerHTML = text.join('<br>');
}

function getMaxWidthInGlyphs() {
    var glyphWidth = function () {
        var test = document.createElement("span");
        test.style.visibility = "hidden";
        document.getElementsByTagName("body")[0].appendChild(test);
        test.textContent = "|";
        var w = test.offsetWidth;
        test.parentNode.removeChild(test);
        return w * 3;
    };

    return Math.floor(document.getElementsByTagName('body')[0].offsetWidth / glyphWidth());
}

function convert(text) {
    display(
        textToFont(
            format(text, getMaxWidthInGlyphs())
        )
    );
}

function displaySpecimen() {
    convert([
        "Ô mage aztèque, l'écuyer vêtu d'un kit hawaïen et de bijoux reçut au coeur l'âcre piqûre, de l'île où arrive son frêle canoë.",
        "", "",
        "Ô MAGE AZTÈQUE, L'ÉCUYER VÊTU D'UN KIT HAWAÏEN ET DE BIJOUX REÇUT AU COEUR L'ÂCRE PIQÛRE, DE L'ÎLE OÙ ARRIVE SON FRÊLE CANOË.",
        "", "", "", "",
        " ! \" # $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z [ \\ ] ^ _ ` a b c d e f g h i j k l m n o p q r s t u v w x y z { | } ~                                                                    ¡ ¢ £ ¤ ¥ ¦ § ¨ © ª « ¬   ® ¯ ° ± ² ³ ´ µ ¶ · ¸ ¹ º » ¼ ½ ¾ ¿ À Á Â Ã Ä Å Æ Ç È É Ê Ë Ì Í Î Ï Ð Ñ Ò Ó Ô Õ Ö × Ø Ù Ú Û Ü Ý Þ ß à á â ã ä å æ ç è é ê ë ì í î ï ð ñ ò ó ô õ ö ÷ ø ù ú û ü ý þ ÿ"
    ]);
}
