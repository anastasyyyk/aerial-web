


/*==================== show menu ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show_menu')
        })
    }
}
showMenu('nav-toggle','nav-menu');







/*==================== pagination ====================*/
let items = document.querySelector('.products_row').children;
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let page = document.querySelector('.page');
let pageNum = document.querySelector('.page_num');

let maxItem = 6;
let index = 1;

const pagination = Math.ceil(items.length/maxItem);
console.log(pagination);

prev.addEventListener('click',function(){
    index--;
    check();
    showItems();
})
next.addEventListener('click',function(){
    index++;
    check();
    showItems();
})

function check(){
    if(index==pagination){
        next.classList.add('disabled');
    }else{
        next.classList.remove('disabled')
    }

    if(index==1){
        prev.classList.add('disabled');
    }else{
        prev.classList.remove('disabled')
    }
}

function showItems(){
    for(let i = 0; i<items.length; i++){
        items[i].classList.remove('show');
        items[i].classList.add('hide');


        if(i >=(index*maxItem)-maxItem && i<index*maxItem){
            //if i greater than and equal to (index*maxItem)-maxItem;
            //means (1*6)-6=0 if index=2 then (2*6)-6=6
            items[i].classList.add('show');
            items[i].classList.remove('hide');
        }
        page.innerHTML=index;
    }
    
}

window.onload=function(){
    showItems();
    check();
};








// --------- product gallery ---------
//  var productImg = document.getElementById("product_img");
// var smallImg = document.getElementById("small_img");

//     smallImg[0].onclick = function()
//     {
//         productImg.src = smallImg[0].src;
//     }
//     smallImg[1].onclick = function()
//     {
//         productImg.src = smallImg[1].src;
//     }
//     smallImg[2].onclick = function()
//     {
//         productImg.src = smallImg[2].src;
//     };

// console.log(smallImg);
// console.log(productImg);
 


// const imgs = document.querySelectorAll('.img_select a');
// const imgBtns = [...imgs];
// let imgId = 1;

// imgBtns.forEach((imgItem) => {
//     imgItem.addEventListener('click', (event) => {
//         event.preventDefault();
//         imgId = imgItem.dataset.id;
//         slideImage();
//     });
// });

// function slideImage(){
//     const displayWidth = document.querySelector('.img_showcase img:first-child').clientWidth;

//     document.querySelector('.img_showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
// }

// window.addEventListener('resize', slideImage);