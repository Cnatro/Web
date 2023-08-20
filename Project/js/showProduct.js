var imgFeature = document.querySelector('.K_img-feature')
var listImg = document.querySelectorAll('.list-img img')
var preBtn = document.querySelector('.K_prev')
var nextBtn = document.querySelector('.K_next')
var currentIndex = 0;
function updateImageByImdex(index){
    //remove active
    document.querySelectorAll('.list-img div').forEach(item=>{
        item.classList.remove('K_active')
    })
    currentIndex = index
    imgFeature.src = listImg[index].getAttribute('src')
    listImg[index].parentElement.classList.add('K_active')

}
listImg.forEach((imgElement, index)=>{
    imgElement.addEventListener('click', e=>{
        imgFeature.style.opacity = '0'
        setTimeout(()=>{
            updateImageByImdex(index)
            imgFeature.style.opacity = '1'
        }, 400)
    })
})
preBtn.addEventListener('click', e=>{
    if(currentIndex == 0)
    {
        currentIndex = listImg.length - 1
    }
    else
    {
        currentIndex--
    }
    imgFeature.style.animation = ''
    setTimeout(()=>{
        updateImageByImdex(currentIndex)
        imgFeature.style.animation = 'slideLeft 0.5s ease-in-out forwards'
    }, 200)
    
})
nextBtn.addEventListener('click', e=>{
    if(currentIndex == listImg.length - 1)
    {
        currentIndex = 0
    }
    else
    {
        currentIndex++
    }
    imgFeature.style.animation = ''
    setTimeout(()=>{
        updateImageByImdex(currentIndex)
        imgFeature.style.animation = 'slideRight 0.5s ease-in-out forwards'
    }, 200)
})

updateImageByImdex(0)
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
                <li><a href="#">${i.vf}</a></li>
                <li><a href="#">${i.tyt}</a></li>
                <li><a href="#">${i.mc}</a></li>
                <li><a href="#">${i.bmw}</a></li>
                <li><a href="#">${i.ford}</a></li>
                <li><a href="#">${i.acura}</a></li>
                <li><a href="#">${i.audi}</a></li>
                <li><a href="#">${i.austin}</a></li>
                <li><a href="#">${i.bentley}</a></li>
                <li><a href="#">${i.brabus}</a></li>
                <li><a href="#">${i.cadillac}</a></li>
                <li><a href="#">${i.chery}</a></li>
                <li><a href="#">${i.daihatsu}</a></li>
                <li><a href="#">${i.ferrari}</a></li>
                <li><a href="#">${i.honda}</a></li>
                <li><a href="#">${i.hyundai}</a></li>
                <li><a href="#">${i.lamborghini}</a></li>
                <li><a href="#">${i.tesla}</a></li>
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