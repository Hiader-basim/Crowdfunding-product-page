const opens = document.querySelector("nav .container .humburger .open"),
closes = document.querySelector("nav .container .humburger .close"),
mune = document.querySelector("nav .nav-list"),
overlayer = document.querySelector(".overlayer"),
bookmark = document.querySelector(".head .cont .box .Bookmark"),
bookmarked = document.querySelector(".head .cont .box .Bookmark h6") ,
box_Bamboo = document.querySelector(".modil .cont .Bamboo"),
box_footerBamboo = document.querySelector(".modil .cont .footer-Bamboo"),
box_Black = document.querySelector(".modil .cont .Black"),
box_footerBlack = document.querySelector(".modil .cont .footer-Black"),
box_Mahogany = document.querySelector(".modil .cont .Mahogany"),
box_footerMahogany = document.querySelector(".modil .cont .footer-Mahogany"),
modil = document.querySelector(".modil"),
to_modil = document.querySelector(".to-modil"),
modil_close = document.querySelector(".modil .cont  .title i"),
Select = document.querySelector(".Select"),
Continue = document.querySelector(".Continue"),
got = document.querySelector(".got"),
got_it = document.querySelector(".got-it");

bookmark.addEventListener("click" , () =>{
    bookmarked.style.color = "hsl(176, 72%, 28%)";
    bookmarked.innerHTML = "Bookmarked";
})
opens.addEventListener("click",() => {
    opens.classList.add("d-none");
    closes.classList.add("d-block");
    mune.classList.add("d-block");
    overlayer.classList.add("d-block");
});

closes.addEventListener("click",() => {
    opens.classList.remove("d-none");
    mune.classList.remove("d-block");
    closes.classList.remove("d-block");
    overlayer.classList.remove("d-block");
});

box_Bamboo.addEventListener("click",() => {
    box_footerBamboo.classList.add("d-block");
});
box_Black.addEventListener("click",() => {
    box_footerBlack.classList.add("d-block");
});
box_Mahogany.addEventListener("click",() => {
    box_footerMahogany.classList.add("d-block");
});
to_modil.addEventListener("click",() => {
    overlayer.classList.add("d-block");
    modil.classList.add("d-block");
});
Select.addEventListener("click",() => {
    overlayer.classList.add("d-block");
    modil.classList.add("d-block");
});
modil_close .addEventListener("click",() => {
    overlayer.classList.remove("d-block");
    modil.classList.remove("d-block");
});
Continue.addEventListener("click" , () =>{
    got.classList.add("d-block");
    modil.classList.remove("d-block");
})
got_it.addEventListener("click" , () =>{
    overlayer.classList.remove("d-block");
    modil.classList.remove("d-block");
    got.classList.remove('d-block');
});