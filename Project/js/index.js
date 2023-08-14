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
}