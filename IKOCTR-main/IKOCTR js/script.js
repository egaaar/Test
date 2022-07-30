let brg_o = document.querySelector (".brg_o")
brg_o.addEventListener("click", function(){
    let ul = document.querySelector("ul");
    ul.style.left = "0";
    ul.style.position = "absolute";
})

brg_o.addEventListener("contextmenu", function(){
    let rofl = document.querySelector(".brg_o");
    rofl.innerHTML = ("<Button class=brg_o>ЛЕВОЙ КНОПКОЙ!!!</Button>");
    rofl.addEventListener("click", function(){
        let rofl = document.querySelector(".brg_o");
        let net = document.querySelector("title");
        rofl.innerHTML = ("Молодец!!!");
    })
})

let brg_c = document.querySelector (".brg_c")
brg_c.addEventListener("click", function(){
    let ul = document.querySelector("ul");
    ul.style.left = "100%";
    ul.style.position = "fixed";
})

let title = document.querySelector("h1")
title.addEventListener("contextmenu", function(){
    let title = document.querySelector ("h1");
    title.innerHTML = ("<input class=egg type=text name=input value=ЗнаешьНазваниеЛучше?>");
    let egg = document.querySelector(".egg");
    egg.addEventListener("blur", function(){
        let egg = document.querySelector(".egg");
        egg.className = ("egg_user");
    })
})
