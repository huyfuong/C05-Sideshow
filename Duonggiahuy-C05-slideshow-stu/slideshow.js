let slideIndex = 1;
showDivs(slideIndex);

function hienThiSlideTruocDo(n) {
    showDivs(slideIndex -= n);
}

function hienThiSlideKeTiep(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    let i = 0;
    let x = document.getElementsByClassName("slides");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}
