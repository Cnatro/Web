window.onload = function () {
  let list_product = document.querySelector("#wp-product-new .list-products");
  let list_product_sell_best = document.querySelector("#wp-product-feature .list-products");
  //load data từ json lên
  fetch("../Project-Bootstrap5/data.json")
    .then((res) => res.json())
    .then(function (datas) {
        let data = "";
        for( let i of datas){
            data +=
             `<div class="col card product-item border-0">
                                    <div class="product-thumail overflow-hidden">
                                        <a href=""><img class="img-fluid" src="${i.src_img}" alt="" /></a>
                                    </div>
                                    <div class="product-infor py-2">
                                        <div class="product-assess text-warning d-inline-block py-2">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star-half-stroke"></i>
                                        </div>
                                        <span class="p-1 text-dark-emphasis">(8 nhận xét)</span>
                                        <div class="product-box">
                                            <h6><a class="product-name text-decoration-none text-dark" href="">Túi xách
                                                    hiệu JAKA Nhật bản</a></h6>
                                            <span class="price">${i.price}</span>
                                        </div>
                                    </div>
                                </div>
                                <!-- end item -->`;
        };
        
        // đấy data lên html
        list_product.innerHTML += data;
        list_product_sell_best.innerHTML += data;
    });
    // end lấy data
    
    //next-previous in product sell better
    let btn_next = document.getElementById("btn-next");
    let btn_previous = document.getElementById("btn-previous");

    btn_previous.addEventListener("click",()=>{
        let lastChild = list_product_sell_best.children[list_product_sell_best.children.length -1];
        document.querySelector("#wp-product-feature .list-products").prepend(lastChild);
    });
    btn_next.addEventListener("click",()=>{
        let firstChild = list_product_sell_best.children[0];
        document.querySelector("#wp-product-feature .list-products").append(firstChild);
    })  
    // go to top
    let goTopBtn = document.getElementById("goToTop");
    window.onscroll = function(){
        scrollToTop();
    };

    function scrollToTop(){
        if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
            goTopBtn.classList.add('show');
        }
        else
        goTopBtn.classList.remove('show');
    }
};
