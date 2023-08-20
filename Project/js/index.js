window.onload = function (){
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
}

