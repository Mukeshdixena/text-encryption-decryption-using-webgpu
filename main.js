// var text = "abcd";
// var arr = new Uint32Array(text.length);

// for (var i = 0; i < text.length; i++) {
//     arr[i] = text.charCodeAt(i) - 'a'.charCodeAt(0);
// }

// console.log(arr); // Outputs: [4, 23, 0, 12, 15, 11, 4]


const toast = document.getElementById('toast');

function encrypt() {
    var text = document.getElementById("inputText").value;
    var key = document.getElementById("inputKey").value;
    var div = document.getElementById("encDiv");


    div.style = "display:block;"

    var arr = new Uint32Array(text.length);

    for (var i = 0; i < text.length; i++) {
        arr[i] = text.charCodeAt(i) - 'a'.charCodeAt(0);
    }

    console.log(arr);

    document.getElementById("encrypted").value = "encryptedText";
}

function decrypt() {
    var encryptedText = document.getElementById("inputText").value;
    var key = document.getElementById("inputKey").value;
    var div = document.getElementById("decDiv");

    div.style = "display:block;"



    var decryptedText = "other";
    document.getElementById("decrypted").value = decryptedText;
}
function copyEncText() {
    var copyText = document.getElementById("encrypted");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    showToast("Copied the text: " + copyText.value);
}
function copyDecText() {

    var copyText = document.getElementById("decrypted");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    showToast("Copied the text: " + copyText.value);
}

function showToast(message) {


    toast.innerText = message;

    toast.style.display = 'block';

    setTimeout(function () {
        toast.style.display = 'none';
    }, 3000);
}
