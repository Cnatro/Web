// hàm load data từ json lên html
// window.onload = function (){
//     function loadData(){
//         fetch("../json/news.json").then(res => res.json()).then(function(data){
//             let result = "";
//             for(let i of data){
//                 result += `
//             <div class="n_item_new n_flex">
//                 <div id="n_photo">
//                    <a href="#"> <img src="${i.img}" alt=""></a>
//                 </div>
//                 <div id="n_small">
//                     <h3><a  href="#">${i.text_a}</a></h3>
//                     <p>${i.text_p}</p>
//                     <span id="n_date">${i.text_span}</span>
//                 </div>
//             </div>
//                 `;
//             }
//             let list_item = document.querySelector('.n_list_item');
//             list_item.innerHTML +=result;
//         })
//     }
//     loadData();
// }
// {
//     "img" : "../Image/11.jpg",
//     "text_a" :"Người Việt dần quan tâm đến xe năng lượng mới khi tìm mua ô tô cũ",
//     "text_p" :"Xe năng lượng mới bao gồm xe điện và xe Hybrid ngày càng nhận được sự quan tâm lớn từ người mua ô tô cũ hiện nay khi lượng tìm kiếm gia tăng đáng kể trong 6 tháng đầu năm 2023.",
//     "text_span" : "08/08/2023"
// },


// window.onload= ()=>{
//     let input = document.querySelectorAll('.form input[type = text]');

//     input.forEach(function(ele_ip){
//         ele_ip.addEventListener('keyup', function(){
//             // console.log(this.closest('div').nextElementSibling);
//             let list_li = this.parentNode.nextElementSibling.querySelectorAll('li');
//             let result = "";
//             for( let i of list_li){
//                 if(i.indexOf(ele_ip)){
//                     result +=`<li>${i}</li>`;
//                 }
//             }
//             document.querySelector('.n_brands').innerHTML = result;
//         })
//     });
// }
window.onload = () => {
    let value_search = document.getElementById('n_brand_car');
    let menu_list = value_search.closest('.n_inputs').querySelectorAll('.n_brands li');
        // value_search.value  = value_search.value.toLowerCase();
        value_search.addEventListener('keyup', ()=>{
        menu_list.forEach((ele) => {
                let text = ele.innerText.toLowerCase();
                console.log(text);
                if(text.indexOf(value_search.value.toLowerCase()) > -1){
                        ele.style.display = "";
                }
                else{
                    ele.style.display = "none";
                }
        });
    })
    // let list_input = document.querySelectorAll('.n_inputs input[type = text]');
    // list_input.forEach((input) =>{
    //     let menu_list = input.closest('.n_inputs').querySelectorAll('.n_brands li');
    //     // value_search.value  = value_search.value.toLowerCase();
    //     input.addEventListener('keyup', ()=>{
    //     menu_list.forEach((ele) => {
    //             let text = ele.innerText.toLowerCase();
    //             console.log(text);
    //             if(text.indexOf(input.value.toLowerCase()) > -1){
    //                     ele.style.display = "";
    //             }
    //             else{
    //                 ele.style.display = "none";
    //             }
    //     });
    //     })
    // });
    

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
};





