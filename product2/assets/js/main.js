// ===scroll header add background
var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var nav = $('.nav');
function scrollHeader () {
    if(this.scrollY >= 200) {
        nav.classList.add('active');
    }
    else{
        nav.classList.remove('active');
    }
}
window.addEventListener('scroll', scrollHeader)


// ===on top
var ontop = $('.on-top');
function actiontop () {
    if(this.scrollY >= 600) {
        ontop.classList.add('active2');
    }
    else{
        ontop.classList.remove('active2');
    }
}
window.addEventListener('scroll', actiontop);

// ===scroll menu active
var section = $$('section[id]');
function activesection () {
    var scrollY = window.pageYOffset;

    section.forEach( function (current) {
        var top = current.offsetTop - 100;
        var height = current.offsetHeight;

        var sectionID = current.getAttribute('id');
        var link = $('.nav-menu a[href*=' + sectionID + ']');
        if(scrollY > top && scrollY <= top + height) {
            link.classList.add('active3')
        }
        else{
            link.classList.remove('active3')
        }
    })
}
window.addEventListener('scroll', activesection)

// === tat/ mo menu mobile
var listmenu = $('.nav-menu-list');
var bars = $('.bars');
function onoffmenu () {
    listmenu.classList.toggle('active4');
}
bars.addEventListener('click', onoffmenu);

// ===click link ==> off menu
var menulink = $$('.nav-menu-link');
function clicklinkoffmenu () {
    listmenu.classList.remove('active4')
}
menulink.forEach(function (s) {
    s.addEventListener('click', clicklinkoffmenu)
})

// ================view products=========

var allview = document.querySelectorAll('.view')
var allcolor = document.querySelectorAll('.color');
var allshoes = document.querySelectorAll('.shoes-cart');
var searchBox = document.querySelector('.search-box');
var searchIcon = document.querySelector('.search');
var lopphu = document.querySelector('.lop-phu');


searchIcon.onclick = (e) => {
    e.preventDefault();
    searchBox.classList.toggle('active6');
    lopphu.classList.toggle('active6')
}
lopphu.onclick = () => {
    searchBox.classList.toggle('active6')
    lopphu.classList.toggle('active6')
}
// suggestions(): Tạo search gợi ý
function suggestions() {
    var search = document.getElementById('search').value.toUpperCase();
    console.log(search);
    var searchHistory = document.querySelectorAll('.search-history .sneaker-name');
    for (var i = 0 ; i < searchHistory.length ; i++) {
        console.log(searchHistory)
        if(searchHistory[i].innerText.toUpperCase().indexOf(search) > -1) {
            searchHistory[i].style.display = "block";
        }
        else{
            searchHistory[i].style.display = "none";
        }
    }
}
// 
var searchHistory = document.querySelector('.search-history');
var sonSH = searchHistory.getElementsByClassName('sneaker-name')
console.log(sonSH.innerText)





// lặp qua tất cả thẻ btn ,  gán sự liện click , truyền vào func (đối số e) ,loại bỏ sự truy cập mặc định
// tạo một biến = e.target.dataset.filter (từ thẻ btn chọn đến mục tiêu, lọc ra tập dữ liệu mong muốn)
// contains : thùng chứa
for (var i = 0 ; i < allview.length ; i++) {
    allview[i].addEventListener('click', (e) => {
        e.preventDefault();
        var filter = e.target.dataset.filter;
        //console.log(filter);
        allshoes.forEach((product) => {
            if(filter == 'all') {
                product.style.display = 'block';
            }
            else {
                if(product.classList.contains(filter)){
                    product.style.display = 'block';
                }else{
                    product.style.display = 'none';
                }
            }
        })
    })
}
//Search products
// lấy id input, gán sự kiện 'keyup' ,tạo biến = nội dung input.loại bỏ chữ thường và khoảng trắng
var search = document.getElementById('search');
var productError = document.querySelector('.product-error');

search.addEventListener('keyup', (e) => {
    e.preventDefault();
    var searchKeyup = search.value.toLowerCase().trim();
    var btnSearch = document.getElementById('clickSearch');
    btnSearch.onclick = function () {
        for (var i = 0 ; i < allshoes.length ; i++) {
            if(allshoes[i].classList.contains(searchKeyup)) {
                allshoes[i].style.display = 'block';
                productError.style.display = 'none'
            }else if (searchKeyup == "") {
                allshoes[i].style.display = 'block';
                productError.style.display = 'none'
            }
            else{
                allshoes[i].style.display = 'none';
                productError.style.display = 'flex'
            }
        }
    }
    
})
// function viewproduct (type, view) {
//     for( var i = 0 ; i < allview.length ; i++){
//         allview[i].classList.remove('active4');
//     }
//     view.classList.add('active4');

//     switch(type) {
//         case 'all' : {
//             for ( var i = 0; i <allshoes.length; i++) {
//                 allshoes[i].classList.remove('active5');
//             }
//             break;
//         }
//         case 'new' : {
//             for ( var i = 0; i <allshoes.length; i++) {
//                 allshoes[i].classList.add('active5');
//             }
//             for ( var i = 0; i <allshoes.length; i++) {
//                 var news = document.querySelectorAll('.news');
//                 news[i].classList.remove('active5');
//             }
//             break;
//         }
//         case 'sale' : {
//             for ( var i = 0; i <allshoes.length; i++) {
//                 allshoes[i].classList.add('active5');
//             }
//             for ( var i = 0; i <allshoes.length; i++) {
//                 var sales = document.querySelectorAll('.saless');
//                 sales[i].classList.remove('active5');
//             }
//             break;
//         }
//     }
    
// }

// 
function clickcolor (type , viewcolor) {
    viewcolor.style.background = '#141414';
    viewcolor.style.color = '#fff';  
} 


// === page detail===


function clickimgdetail (type, allimg) {
    var idimg = document.getElementById('img-content-id');
    idimg.src = allimg.src;
}





