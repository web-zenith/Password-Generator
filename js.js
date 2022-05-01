let ri = document.querySelector("#rangeinp");
let li = document.querySelector("#labelrange");
let password
setInterval(() => {
    li.innerHTML = ri.value;
}, 1);

let btn = document.querySelector("#btn");
btn.onclick = function () {
    btn.disabled = true;
    setTimeout(() => {
        btn.disabled = false;
    }, 2000);
    function makeid(length) {
        var result = "";
        var characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@-#_+/";
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
            );
        }
        return result;
    }
    password = makeid(ri.value);
    let date = new Date();
    localStorage.setItem(date, password)
    document.querySelector(
        ".pass"
    ).innerHTML = `${password}`;
    document.querySelector(".pass").onclick = function () {
        var range = document.createRange();
        range.selectNode(document.querySelector(".pass"));
        window.getSelection().removeAllRanges(); // clear current selection
        window.getSelection().addRange(range); // to select text
        document.execCommand("copy");
        window.getSelection().removeAllRanges(); // to deselect
    };

    
};
