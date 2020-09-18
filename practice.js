var images = ["picture1.jpg", "picture2.jpg",
    "picture3.jpg", "picture4.jpg", "picture5.jpg", "picture11.jpg"
];

var a = document.getElementsByTagName("img");
var b = 0;

function func() {
    if (b < images.length) {
        a[1].setAttribute("src", images[b]);
        b++;
    } else {
        b = 0;
    };
};
var c = setInterval(func, 5000);

var d = document.getElementsByClassName("previous")[0];
var e = document.getElementsByClassName("next")[0];

function previous() {
    clearInterval(func);
    b--;

    if (b == 0 || b < 0) {
        b = images.length - 1;
        a[1].setAttribute("src", images[b]);
    } else {
        a[1].setAttribute("src", images[b]);
    }
}

function forward() {
    clearInterval(func);
    b++;

    if (b === images.length) {
        b = 0;
        a[1].setAttribute("src", images[b]);
        b++;
    } else {
        a[1].setAttribute("src", images[b]);
    }
}
d.addEventListener("click", previous);
e.addEventListener("click", forward);