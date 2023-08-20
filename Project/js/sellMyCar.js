window.onload = () =>{
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
   
   
   // lưu ý chỉ áp dụng tạo ra div mới khi ng dùng nhập theo thứ tự
   

    let choose_btn = document.querySelectorAll('.choose_btn div.n_xp');
     choose_btn.forEach((choose_Div)=>{
        let input = choose_Div.querySelector('.n_inputs input[type = text]');
        let menu_Ul = choose_Div.querySelector('.n_brands');
        let list_li = choose_Div.querySelectorAll('.n_brands li');
        input.addEventListener('focus', function(){
            menu_Ul.style.display = 'block';
            for( let i of list_li){
                i.onclick = function (){
                    input.value = this.innerText;
                    input.dataset.nameCar = `${this.innerText}`;
                    menu_Ul.style.display = 'none';
                };
            }
        });
   });
   // thực hiện chức năng tìm kiếm
    let list_input = document.querySelectorAll('.n_inputs input[type=text]');
    list_input.forEach((ele_input ) => {
          ele_input.addEventListener('keyup', function(){
            let list_li_of_input = ele_input.closest('.n_inputs').querySelectorAll('.n_brands li');

            for(let li of list_li_of_input){
               let text = li.innerText.toLowerCase();
               if(text.indexOf(ele_input.value.toLowerCase()) >= 0){
                  li.style.display = "";
               }else{
                li.style.display = "none";
               }
            }
          });
    });

//    let new_Product = document.createElement('div');
//    let brand_car = document.getElementById('n_brand_car');
//    let dong_Xe = document.getElementById('n_vehicles');
//    let year = document.getElementById('n_year');
//    let phien_ban = document.getElementById('n_pb');
//    let dong_Co = document.getElementById('n_dx');
//    let hop_so = document.getElementById('n_hs');
//    let km = document.getElementById('n_km');
//    let money = document.getElementById('n_t');
//    let btn_Xn = document.querySelector('.btn_sell input[ type = button ]');
   
  // slide
  document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('div#n_slide_car div.n_product');
    document.getElementById('n_slide_car').appendChild(lists[0]);
}
    document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('div#n_slide_car div.n_product');
    document.getElementById('n_slide_car').prepend(lists[lists.length - 1]);
    }

    //slide comment
    let list_cmt = document.querySelectorAll('.n_list_cmt #n_cmt_1');
    let index = 0;
    setInterval(()=>{
        document.querySelector('.n_list_cmt').appendChild(list_cmt[index]);
        index = (index + 1) % list_cmt.length;
    },2000)

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


      // hiệu ứng question bằng jquery
      let list_question = document.querySelectorAll('.list_question div')
      list_question.forEach((question)=>{
            $(question).click(function(){
                $(this).parent().children('#n_splace_answer').slideToggle();
            });
      });
    //  let list_question = document.querySelectorAll('.list_question div');
    //  list_question.forEach((question)=>{
    //     let space_answer = question.getElementById('n_splace_answer');
    //         question.addEventListener('click', function(){
    //             space_answer.style.display = 'block';
    //         });
    //  });
      function active_go(ele){
            ele.classList.remove('btn_avitive');
            setTimeout(()=>{ele.classList.add('btn_avitive')},10)
      };
    // làm nút đi đến nơi chỉ định
    let list_go_To_btn = document.querySelectorAll('#btn_dk');
    let vitri_den = document.querySelector('.form_sell');
    list_go_To_btn.forEach((btn_go_to)=>{
        btn_go_to.onclick = function (){
           vitri_den.scrollIntoView({ behavior: "smooth" });
           active_go(vitri_den);
        }
    });

    // cố định thanh menu
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
          document.querySelector('.list_item').innerHTML += result;
      })
    }
    loadData();
    // phần tìm kiếm trong trang chủ
      let input_search = document.getElementById('n_search');
      let menu_search = document.querySelector('#value_search');
      let list_item_menu;
      // vì hàm loadData ch kịp tải data lên cây dom nên ta phải chờ trong 1s
      setTimeout(() => {
        list_item_menu = document.querySelectorAll('.list_item li');

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
}

