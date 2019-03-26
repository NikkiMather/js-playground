const list = document.querySelector(".itemList");
const listTempLi = document.querySelector(".itemList li");
const input = document.querySelector(".itemToAdd");
const submit = document.querySelector(".addItem");
let listStarted = false;

const test = function() {
    if (!document.querySelector(".itemList li")) {
        list.innerHTML = "<li>There are no items in your list</li>";
    }
};

submit.addEventListener("click", function(e) {
    let listStarted = true;
    const item = input.value;
    const li = `<li>${item} <span>x</span></li>`;

    if (listStarted) {
        document.querySelector(".noItems").style.display = "none";
    }

    listTempLi.insertAdjacentHTML("afterend", li);
});

document.querySelector("body").addEventListener("click", function(e) {
    if (document.querySelector(".itemList li span")) {
        remove.addEventListener("click", function(e) {
            console.log("test");
            e.target.parentElement.removeChild(e.target);
        });
    }
});

function init() {
    test();
}

init();
