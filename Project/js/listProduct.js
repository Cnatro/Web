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

}
function City_random (max, min){
    return Math.random()*(max - min + 1) + min;
}