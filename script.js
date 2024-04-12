
// *click function for top box to show and hide
let topbox = document.getElementById('topbox');

function topclickshow(){
    topbox.style.display = "block";
}

function topclickhide(){
    topbox.style.display = "none";
}


// *click function for bottom box to show and hide
let bottombox = document.getElementById('bottombox');

function bottomclickshow(){
    bottombox.style.display = "block";
}

function bottomclickhide(){
    bottombox.style.display = "none";
}

// *click function for bottom box to show and hide
let leftbox = document.getElementById('leftbox');

function leftclickshow(){
    leftbox.style.display = "block";
}

function leftclickhide(){
    leftbox.style.display = "none";
}

// *click function for bottom box to show and hide
let rightbox = document.getElementById('rightbox');

function rightclickshow(){
    rightbox.style.display = "block";
}

function rightclickhide(){
    rightbox.style.display = "none";
}


// *click to change a image function

let item1 = document.getElementById('item1');
let item2 = document.getElementById('item2');
let item3 = document.getElementById('item3');
let item4 = document.getElementById('item4');
let item5 = document.getElementById('item5');
let img1 = document.getElementById('secton-4_img1');
let img2 = document.getElementById('secton-4_img2');
let img3 = document.getElementById('secton-4_img3');
let img4 = document.getElementById('secton-4_img4');
let img5 = document.getElementById('secton-4_img5');
let txt1 = document.getElementById('txt1');
let txt2 = document.getElementById('txt2');
let txt3 = document.getElementById('txt3');
let txt4 = document.getElementById('txt4');
let txt5 = document.getElementById('txt5');
let pera1 = document.getElementById('pera1');
let pera2 = document.getElementById('pera2');
let pera3 = document.getElementById('pera3');
let pera4 = document.getElementById('pera4');
let pera5 = document.getElementById('pera5');



item1.addEventListener("click",() => {
    img1.style.display = 'block';
    txt1.style.display = 'block';
    pera1.style.display = 'block';
    img2.style.display = 'none';
    txt2.style.display = 'none';
    pera2.style.display = 'none';
    img3.style.display = 'none';
    txt3.style.display = 'none';
    pera3.style.display = 'none';
    img4.style.display = 'none';
    txt4.style.display = 'none';
    pera4.style.display = 'none';
    img5.style.display = 'none';
    txt5.style.display = 'none';
    pera5.style.display = 'none';
})

item2.addEventListener("click",() => {
    img1.style.display = 'none';
    txt1.style.display = 'none';
    pera1.style.display = 'none';
    img2.style.display = 'block';
    txt2.style.display = 'block';
    pera2.style.display = 'block';
    img3.style.display = 'none';
    txt3.style.display = 'none';
    pera3.style.display = 'none';
    img4.style.display = 'none';
    txt4.style.display = 'none';
    pera4.style.display = 'none';
    img5.style.display = 'none';
    txt5.style.display = 'none';
    pera5.style.display = 'none';
})

item3.addEventListener("click",() => {
    img1.style.display = 'none';
    txt1.style.display = 'none';
    pera1.style.display = 'none';
    img2.style.display = 'none';
    txt2.style.display = 'none';
    pera2.style.display = 'none';
    img3.style.display = 'block';
    txt3.style.display = 'block';
    pera3.style.display = 'block';
    img4.style.display = 'none';
    txt4.style.display = 'none';
    pera4.style.display = 'none';
    img5.style.display = 'none';
    txt5.style.display = 'none';
    pera5.style.display = 'none';
})

item4.addEventListener("click",() => {
    img1.style.display = 'none';
    txt1.style.display = 'none';
    pera1.style.display = 'none';
    img2.style.display = 'none';
    txt2.style.display = 'none';
    pera2.style.display = 'none';
    img3.style.display = 'none';
    txt3.style.display = 'none';
    pera3.style.display = 'none';
    img4.style.display = 'block';
    txt4.style.display = 'block';
    pera4.style.display = 'block';
    img5.style.display = 'none';
    txt5.style.display = 'none';
    pera5.style.display = 'none';
})
item5.addEventListener("click",() => {
    img1.style.display = 'none';
    txt1.style.display = 'none';
    pera1.style.display = 'none';
    img2.style.display = 'none';
    txt2.style.display = 'none';
    pera2.style.display = 'none';
    img3.style.display = 'none';
    txt3.style.display = 'none';
    pera3.style.display = 'none';
    img4.style.display = 'none';
    txt4.style.display = 'none';
    pera4.style.display = 'none';
    img5.style.display = 'block';
    txt5.style.display = 'block';
    pera5.style.display = 'block';
})
