window.onload = ()=>{
    let show_Login = document.getElementById('n_login');
    show_Login.onclick = function (filePath){
        filePath = 'sign.html';
        let infoBox = document.getElementById("infoBox");
        let show_Login = document.getElementById("show_login");
    
        let xhr = new XMLHttpRequest();
        xhr.open("GET", filePath, true);
        xhr.onreadystatechange = function () {
          if (xhr.readyState == 4 && xhr.status == 200) {
            show_Login.innerHTML = xhr.responseText;
            infoBox.style.display = "block";
            show_Login.style.width = '100%';
          }
        };
        xhr.send();
        
         // fix js của sigin khi nhấp lại không được
        setTimeout(()=> {
          let input_sign = document.getElementById('n_72');
          input_sign.addEventListener('focus', function(){
             document.querySelector('label').style.fontSize = '10px';
             document.querySelector('label').style.top = '.2rem';
          });
          
          input_sign.addEventListener('blur', function(){
              if(input_sign.value === ""){
                  document.querySelector('label').style.fontSize = '1rem';
                  document.querySelector('label').style.top = '.6rem';
              }else{
                  document.querySelector('label').style.fontSize = '10px';
                  document.querySelector('label').style.top = '.2rem';
              }
           });
        },10);
    }
    
    let btn_Exit = document.getElementById("n_exit");
    btn_Exit.onclick = function (){
        infoBox.style.display = "none";
    }
    //nút gototop
    let gototop = document.getElementById('goToTop');
    gototop.onclick = function (){
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // làm cho thanh cuộn trở nên mợt hơn
      })
    }

    // làm ẩn hiện nút go to top
    window.addEventListener('scroll',()=>{
      let tmp = 0; 
      tmp = parseFloat(window.scrollY);
      if(tmp <= 300){
        gototop.style.position = 'static';
      }
      else{
        gototop.style.position = 'fixed';
      }
    });
    //cố định thành phần menu
    let menu = document.querySelector('header');
    window.addEventListener('scroll', ()=>{
        let tmp = window.scrollY;
        if(tmp >= 70){
          menu.style.position = 'fixed';
        }else{
          menu.style.position = 'static';
        }
    });
    // nap data lên list_item
    function loadData(){
      fetch('../json/list-search.json').then(res => res.json()).then(function(data) {
        let result = "";
          for(let i of data){
              result +=`
              <li><a href="showProduct.html">${i.vf}</a></li>
              <li><a href="showProduct.html">${i.tyt}</a></li>
              <li><a href="showProduct.html">${i.mc}</a></li>
              <li><a href="showProduct.html">${i.bmw}</a></li>
              <li><a href="showProduct.html">${i.ford}</a></li>
              <li><a href="showProduct.html">${i.acura}</a></li>
              <li><a href="showProduct.html">${i.audi}</a></li>
              <li><a href="showProduct.html">${i.austin}</a></li>
              <li><a href="showProduct.html">${i.bentley}</a></li>
              <li><a href="showProduct.html">${i.brabus}</a></li>
              <li><a href="showProduct.html">${i.cadillac}</a></li>
              <li><a href="showProduct.html">${i.chery}</a></li>
              <li><a href="showProduct.html">${i.daihatsu}</a></li>
              <li><a href="showProduct.html">${i.ferrari}</a></li>
              <li><a href="showProduct.html">${i.honda}</a></li>
              <li><a href="showProduct.html">${i.hyundai}</a></li>
              <li><a href="showProduct.html">${i.lamborghini}</a></li>
              <li><a href="showProduct.html">${i.tesla}</a></li>
              `;
          }
          document.querySelectorAll('.list_item').forEach((ele)=>{
             ele.innerHTML += result;
          })
      })
    }
    loadData();
    // phần tìm kiếm trong trang chủ
      let list_input_search = document.querySelectorAll('#n_search');
      list_input_search.forEach((input_search) =>{

            //let input_search = document.getElementById('n_search');
            let menu_search = input_search.closest('div').nextElementSibling;
            let list_item_menu;
            // vì hàm loadData ch kịp tải data lên cây dom nên ta phải chờ trong 1s
            setTimeout(() => {
              // list_item_menu = document.querySelectorAll('.list_item li');
              list_item_menu = input_search.closest('div').nextElementSibling.querySelectorAll('.list_item li');
      
              // hàm tìm kiếm
              input_search.addEventListener('keyup', function(){
                  list_item_menu.forEach((ele) => {
                    let text = ele.innerText.toLowerCase();
                    if(text.indexOf(input_search.value.toLowerCase()) > -1){
                        ele.style.display = "";
                    }
                    else{
                      ele.style.display = "none";
                    }
                  });
              });
            }, 1000);
            // ẩn hiện menu_search
            input_search.addEventListener('click', function (){
                  menu_search.style.display = "block";
      
                  for(let i of list_item_menu){
                    i.addEventListener('click',function(){
                      input_search.value = this.innerText;
                      menu_search.style.display = 'none';
                    });
                }
            });
      });


    // khánh
    var acc = document.getElementsByClassName("K_accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("KKactive");
        var K_content = this.nextElementSibling;
        if (K_content.style.display === "block") {
            K_content.style.display = "none";
        } else {
            K_content.style.display = "block";
        }
      });
    }

    function load_data(){
        fetch('../json/Ds-Suv.json').then(res => res.json()).then(function(data) {
            let result = "";
              for(let i of data){
                  result +=`
                  <div class="K_product_item">
                  <a href="../html/showProduct.html">
                      <div class="K_mainIMG"><img src="../Image/${i.img}.jpg" alt=""></div>
                      <h3 style="text-align: center; font-size: 2rem;width: 80%; margin: auto;">${i.name}</h3>
                      <div class="K_cost_index3"><h4 class="K_cost_index3_money" style="text-align: center;">559 triệu - 609 triệu</h4></div>
                      <div class="K_containerIcon">
                          <div class="K_index3-icon"><img src="../Image/call.jpg" alt=""></div>
                          <div class="K_index3-icon"><img src="../Image/cart.jpg" alt=""></div>
                      </div>
                      <div class="Kk_location">Điểm bán: Phú Yên</div>
                      <div class="Kk_color">Màu sắc: Đen</div>
                  </a>
              </div>
                  `;
              }
              document.querySelector('.K_products').innerHTML +=result;
          })
    }
    load_data();
    setTimeout(()=>{
            // lấy màu product
            let list_color = document.querySelectorAll('.K_hidden-content_item span#name_color');
            let list_img_product = document.querySelectorAll('.K_product_item');
            // dịch màu
            let arr_name_color = {
                red : "Đỏ",
                white:"Trắng",
                blue :"Xanh",
                yellow :"Vàng",
                silver:"Bạc",
                black : "Đen"
            }
            let city = {
                1 :"Phú Yên",
                2:"Tp HCM",
                3:"Hà Nội",
                4:"Đồng Nai",
                5:"Đà Nẵng",
                6:"Khánh Hòa",
                7:"Bình Định",
                8:"Quảng Nam"
            }
            // tên địa điểm
            for(let pro of list_img_product){
                pro.querySelector('.Kk_location').innerText = `Điểm bán: ${city[Math.floor(City_random(8,1))]}`;
                pro.querySelector('.K_cost_index3 h4').innerText = `${Math.floor(City_random(999,300))} triệu - ${Math.floor(City_random(1000,300))} triệu`;
            }
            
            list_color.forEach((color) =>{
                // console.log(color.dataset.namecolor)
                color.addEventListener('click', function(){
                    for(let pro of list_img_product){
                        let name_car = pro.querySelector('h3').innerText;
                        pro.querySelector('.K_mainIMG img').src = `../Image/${name_car}-${color.dataset.namecolor}.jpg`;
                        pro.querySelector('.Kk_color').innerText = `Màu sắc: ${arr_name_color[color.dataset.namecolor]}`;
                    }
                });
            });
    },1000)

}
function City_random (max, min){
    return Math.random()*(max - min + 1) + min;
}