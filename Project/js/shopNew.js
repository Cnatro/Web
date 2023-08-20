function ranDom (max, min){
  return Math.random()*(max - min + 1) + min;
}
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


    //shopnew,shopOld
    let shopNew = document.getElementById('n_shopNew');
    let shopOld = document.getElementById('n_shopOld');
    let h3eleNew = document.querySelector('#n_shopNew h3');
    let h3eleOld = document.querySelector('#n_shopOld h3');
    shopNew.onclick = ()=>{
      h3eleNew.style.borderBottom = ".5rem solid aqua";
      h3eleOld.style.borderBottom =".5rem solid transparent";
       //hiển thị danh sách sản phẫm cũ mới
       let showOld = document.getElementById('n_result_shopOld');
       let showNew = document.getElementById('n_result_shopNew');
       showNew.style.display = 'block';
       showOld.style.display = 'none';
    }
    shopOld.onclick = ()=>{
      h3eleOld.style.borderBottom = ".5rem solid aqua";
      h3eleNew.style.borderBottom =".5rem solid transparent";
      //hiển thị danh sách sản phẫm cũ mới
      let showNew = document.getElementById('n_result_shopNew');
      let showOld = document.getElementById('n_result_shopOld');
      showOld.style.display = 'block';
      showNew.style.display = 'none';
    }
    // nhãn sp
    let brank = document.querySelectorAll('ul.n_bank li a');
    for(let li of brank){
      li.onclick = function (){
        li.style.borderBottom = '.4rem solid aqua';
        li.onmouseout = ()=>{
          li.style.borderBottom =".4rem solid transparent";
        }

        //thực hiển ẩn hiên danh sách car
        let slide_car = document.getElementById('n_content_list');
        let showCars = document.querySelector('.n_cars');
        let list_photo = document.querySelectorAll('.n_car img');
        let nameCar = document.querySelectorAll('#name');
        let money = document.querySelectorAll('#money');
        slide_car.style.display = 'none';
        showCars.style.visibility = 'visible';
        
        let index = 1;
        for(let photo of list_photo){
          photo.src = `../Image/${li.dataset.name}-${index}.jpg`;
          index = index + 1;
        }
        for( let i = 0 ; i < nameCar.length ; i++){
          nameCar[i].innerHTML = `<span style = "color :#343434">${li.dataset.name} ${i+1}</span>`;
        }
        for( let i = 0 ; i < money.length ; i++){
          money[i].innerHTML = `<span style = "color :#707070;font-size: .8rem !important;">Tiền : ${Math.floor(ranDom(1000,100))}0.000.000 VNĐ</span>`;
        }
      }
    }

    //slice show xe
    let list_Cars = document.querySelectorAll('.n_list_cars div#n_item');
    let index = 0;
    setInterval(()=>{
      document.querySelector('.n_list_cars').appendChild(list_Cars[index]);
      index = (index + 1) % list_Cars.length;
    },2000);


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