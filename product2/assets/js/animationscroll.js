var sr = ScrollReveal ({
    distance : '60px',
    duration : 2500,
    delay : 400
})

// =====PAGE HOME
sr.reveal('.banner-colum-1, .colection-cart-1, .col1 ', {origin:'left'})
sr.reveal('.banner-LP, .colection-cart-2', {origin:'right'});
sr.reveal('.banner-img, .row-description, .newletter, .footer-roby ,.footer-copy', {origin:'bottom'})
sr.reveal('.sneaker-card, .col2', {origin:'bottom', delay:600})
sr.reveal('.section-title' , {origin:'bottom', delay:300})

//======PAGE SHOP
sr.reveal('.cate, .tools span', {origin:'left'});
sr.reveal('.tools a', {origin:'top'})
sr.reveal('.shop-page')
//======PAGE DETAIL
sr.reveal('.detail-header-mobile .name-product', {origin:'left'})
sr.reveal('.detail-header-mobile .price-product', {origin:'right'})
sr.reveal('.img-view, .img-data, .col-data div, .col-data h2,.col-header')