var customer1 = {
    Id:1,
    Name:1,
    Image:"https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg",
    mail:"hieudankaz@gmail.com",
    Location:"HCM, Viet Nam",
    Orders: 100,
    Register: "12.07.2018",
    Status:"Live"
}
const customer_table = document.getElementById("customer-table");
const show = document.getElementById("customer-table");
const listshow1 = document.getElementsByClassName("show-item");
const pagination_space_1 = document.getElementById("pagination_space_1");
const pagination_space_2 = document.getElementById("pagination_space_2");
const pagination_first = document.getElementById("pagination_first");
const pagination_2 = document.getElementById("pagination_2");
const pagination_3 = document.getElementById("pagination_3");
const pagination_4 = document.getElementById("pagination_4");
const pagination_last = document.getElementById("pagination_last");
const pagination_previous = document.getElementById("previous");
const pagination_next = document.getElementById("next");
const show_infos= document.getElementById("info-show");
var list_pagination =[pagination_first,pagination_2,pagination_3,pagination_4,pagination_last];
var max_page_num =1 ;
var num = 10;
var curent_page = 1 ;
function RenderFirst(customer){
    let active = "color-red";
    if(customer.Status == "Live"){
        active ="color-green";
    }
    let content =  " \n<tr class=\"table__row\">\n" +
    "                                    <td class=\"table__td text-light-theme\">#"+customer.Id+"</td>\n" +
    "                                    <td class=\"table__td\">\n" +
    "                                        <div class=\"media-item media-item--medium\">\n" +
    "                                            <a class=\"media-item__icon color-red\" href=\"/admin/customeraccount?Id="+customer.Id+"\">\n" +
    "                                                <div class=\"media-item__icon-text\">"+"img"+"</div>\n" +
    "                                                <img class=\"media-item__thumb\" src=\""+customer.Image+"\" alt=\"#\">\n" +
    "                                            </a>\n" +
    "                                            <div class=\"media-item__right\">\n" +
    "                                                <h5 class=\"media-item__title\"><a href=\"/admin/customeraccount?Id="+customer.Id+"\">"+customer.Name+"</a></h5><a class=\"text-sm text-grey\" href=\"mailto:#\">"+customer.mail+"</a>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </td>\n" +
    "                                    <td class=\"table__td text-light-theme\">"+customer.Location+"</td>\n" +
    "                                    <td class=\"table__td text-dark-theme\">"+customer.Orders+"</td>\n" +
    "                                    <td class=\"table__td d-none d-sm-table-cell\">\n" +
    "                                        <div class=\"table__status\"><span class=\"table__status-icon "+active+"\"></span>"+customer.Status+"</div>\n" +
    "                                    </td>\n" +
    "                                    <td class=\"table__td table__actions\">\n" +
    "                                        <div class=\"items-more\">\n" +
    "                                            <button class=\"items-more__button\">\n" +
    "                                                <svg class=\"icon-icon-more\">\n" +
    "                                                    <use xlink:href=\"#icon-more\"></use>\n" +
    "                                                </svg>\n" +
    "                                            </button>\n" +
    "                                            <div class=\"dropdown-items dropdown-items--right\">\n" +
    "                                                <div class=\"dropdown-items__container\">\n" +
    "                                                    <ul class=\"dropdown-items__list\">\n" +
    "                                                <li class=\"dropdown-items__item view_customer\" data-value="+customer.Id+"><a class=\"dropdown-items__link\" ><span class=\"dropdown-items__link-icon\">\n" +
        "                                    <svg class=\"icon-icon-view\">\n" +
        "                                      <use xlink:href=\"#icon-view\"></use>\n" +
        "                                    </svg></span>Details</a>\n" +
        "                                                        </li>\n" +
        "                                                        <li class=\" dropdown-items__item ban_customer\" data-value="+customer.Id+"><a class=\"dropdown-items__link\"><span class=\"dropdown-items__link-icon\">\n" +
        "                                    <svg class=\"icon-icon-task\">\n" +
        "                                      <use xlink:href=\"#icon-task\"></use>\n" +
        "                                    </svg></span>Change Status</a>\n" +
        "                                                        </li>\n" +
    "                                                    </ul>\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </td>\n" +
    "                                </tr>\n" +
    "  ";
    return content;
}
function Render(customer){
    let active = "color-red";
    if(customer.Status == "Live"){
        active ="color-green";
    }
    let content =  " \n<tr class=\"table__row\">\n" +
        "                                    <td class=\"table__td text-light-theme\">#"+customer.Id+"</td>\n" +
        "                                    <td class=\"table__td\">\n" +
        "                                        <div class=\"media-item media-item--medium\">\n" +
        "                                            <a class=\"media-item__icon color-red\" href=\"/admin/customeraccount?Id="+customer.Id+"\">\n" +
        "                                                <div class=\"media-item__icon-text\">"+"img"+"</div>\n" +
        "                                                <img class=\"media-item__thumb\" src=\""+customer.Image+"\" alt=\"#\">\n" +
        "                                            </a>\n" +
        "                                            <div class=\"media-item__right\">\n" +
        "                                                <h5 class=\"media-item__title\"><a href=\"/admin/customeraccount?Id="+customer.Id+"\">"+customer.Name+"</a></h5><a class=\"text-sm text-grey\" href=\"mailto:#\">"+customer.mail+"</a>\n" +
        "                                            </div>\n" +
        "                                        </div>\n" +
        "                                    </td>\n" +
        "                                    <td class=\"table__td text-light-theme\">"+customer.Location+"</td>\n" +
        "                                    <td class=\"table__td text-dark-theme\">"+customer.Orders+"</td>\n" +
        "                                    <td class=\"table__td d-none d-sm-table-cell\">\n" +
        "                                        <div class=\"table__status\"><span class=\"table__status-icon "+active+"\"></span>"+customer.Status+"</div>\n" +
        "                                    </td>\n" +
        "                                    <td class=\"table__td table__actions\">\n" +
        "                                        <div class=\"items-more\">\n" +
        "                                            <button class=\"items-more__button\">\n" +
        "                                                <svg class=\"icon-icon-more\">\n" +
        "                                                    <use xlink:href=\"#icon-more\"></use>\n" +
        "                                                </svg>\n" +
        "                                            </button>\n" +
    "                                            <div class=\"dropdown-items dropdown-items--right dropdown-items--up\">\n" +
    "                                                <div class=\"dropdown-items__container\">\n" +
    "                                                    <ul class=\"dropdown-items__list\">\n" +
    "                                                        <li class=\"dropdown-items__item view_customer\" data-value="+customer.Id+"><a class=\"dropdown-items__link\" ><span class=\"dropdown-items__link-icon\">\n" +
    "                                    <svg class=\"icon-icon-view\">\n" +
    "                                      <use xlink:href=\"#icon-view\"></use>\n" +
    "                                    </svg></span>Details</a>\n" +
    "                                                        </li>\n" +
    "                                                        <li class=\" dropdown-items__item ban_customer\" data-value="+customer.Id+"><a class=\"dropdown-items__link\"><span class=\"dropdown-items__link-icon\">\n" +
    "                                    <svg class=\"icon-icon-task\">\n" +
    "                                      <use xlink:href=\"#icon-task\"></use>\n" +
    "                                    </svg></span>Change Status</a>\n" +
    "                                                        </li>\n" +
    "                                                    </ul>\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </td>\n" +
    "                                </tr>\n" +

    "  ";
    return content;
}
var listtemp = [];
var listJSON;
var ajaxcustomo = $.ajax({
    async:true,
    url: 'api-customer',
    type: 'GET',
    success: function(data, status) {
        listJSON = data;
    }
});

function Load(){
    ajaxcustomo.done(()=>{
        RenderLoad();
        Init();
        document.getElementById("number-customer").innerHTML="("+listJSON.length+")";
    });
}
function RenderLoad(){

    for(let i=0;i<listJSON.length;i++){
        if(i% num == 0)
            listtemp[i] =RenderFirst(listJSON[i]);
        else
            listtemp[i] =Render(listJSON[i]);
    }
}


function RenderSearch(key){
    let tempindex  =0;
    listtemp =[];
    for(let i=0;i<listJSON.length;i++){
        let tempstring = listJSON[i].Id+"|"+listJSON[i].Name+"|"+listJSON[i].mail+"|"+listJSON[i].Location+"|"+listJSON[i].Status;
        if(tempstring.toUpperCase().includes(key.toUpperCase())){
            if(tempindex% num == 0)
                listtemp[tempindex] =RenderFirst(listJSON[i]);
            else
                listtemp[tempindex] =Render(listJSON[i]);
            tempindex++;
        }
    }
    Init();
    document.getElementById("number-customer").innerHTML="("+listtemp.length+")";
}

function RenderActive(){
    let tempindex  =0;
    listtemp =[];
    for(let i=0;i<listJSON.length;i++){
        if(listJSON[i].Status == "Live"){
            if(tempindex% num == 0)
                listtemp[tempindex] =RenderFirst(listJSON[i]);
            else
                listtemp[tempindex] =Render(listJSON[i]);
            tempindex++;
        }
    }
    Init();
    document.getElementById("number-customer").innerHTML="("+listtemp.length+")";
}

function RenderAllStatus(){
    RenderLoad();
    Init();
    document.getElementById("number-customer").innerHTML="("+listtemp.length+")";
}
function phantrang(index){
    let len = listtemp.length;
    let max =  curent_page * num;
    let indexitem = max-num;
    let du = len % num;

    if(max_page_num == curent_page)
        if(du != 0)
            max = max - num + du;


    customer_table.innerHTML= "";
    if(listtemp.length != 0)
    {
        for(indexitem;indexitem<max;indexitem++)
        {
            customer_table.innerHTML+=listtemp[indexitem];
        }
    }


    listban = document.getElementsByClassName("ban_customer");
    loadAjax(listban,bancustom);
    listdview = document.getElementsByClassName("view_customer");
    loadAjax(listdview,viewcustom);
    show_info();
}

function Init(){
    max_page_num = Math.ceil(listtemp.length/num);
    displayPagination();
    pagination_first.children[0].innerHTML=1;
    pagination_last.children[0].innerHTML=max_page_num;
    pagination_last.setAttribute("data-value",max_page_num);
    curent_page =1;
    SetNum(1);
    phantrang(1);
    setActiveNum();
}

function SetNum(page_num){

    if(page_num <= 3){
        pagination_2.children[0].innerHTML= 2;
        pagination_3.children[0].innerHTML =3;
        pagination_4.children[0].innerHTML =4;

        pagination_2.setAttribute("data-value",2);
        pagination_3.setAttribute("data-value",3);
        pagination_4.setAttribute("data-value",4);
    }
    else if( max_page_num - page_num < 3){
        pagination_2.children[0].innerHTML= Number(max_page_num) -3;
        pagination_3.children[0].innerHTML = Number(max_page_num) -2 ;
        pagination_4.children[0].innerHTML = Number(max_page_num) - 1;

        pagination_2.setAttribute("data-value",Number(max_page_num) -3);
        pagination_3.setAttribute("data-value",Number(max_page_num) -2);
        pagination_4.setAttribute("data-value",Number(max_page_num) -1);
    }

    else{
        pagination_2.children[0].innerHTML= Number(page_num) -1;
        pagination_3.children[0].innerHTML = Number(page_num) ;
        pagination_4.children[0].innerHTML = Number(page_num) +1;

        pagination_2.setAttribute("data-value",Number(page_num) -1);
        pagination_3.setAttribute("data-value",Number(page_num));
        pagination_4.setAttribute("data-value",Number(page_num) +1);
    }

    if( max_page_num - page_num < 3)
        pagination_space_2.style.display ="none";
    else
        pagination_space_2.style.display ="flex";

    if(page_num <= 3)
        pagination_space_1.style.display ="none";
    else
        pagination_space_1.style.display ="flex";

    if(max_page_num == page_num)
        pagination_next.style.display ="none";
    else
        pagination_next.style.display ="flex";

    if(page_num == 1)
        pagination_previous.style.display ="none";
    else
        pagination_previous.style.display ="flex";

    setActiveNum();
   
}
function displayPagination() {
    if(max_page_num <= 4)
        pagination_4.style.display = "none";
    else
        pagination_4.style.display = "flex";

    if(max_page_num <= 3)
        pagination_3.style.display = "none";
    else
        pagination_3.style.display = "flex";

    if(max_page_num <= 2)
        pagination_2.style.display = "none";
    else
        pagination_2.style.display = "flex";

    if(max_page_num <= 1)
        pagination_last.style.display = "none";
    else
        pagination_last.style.display = "flex";

}





function setActiveNum(){
    if (pagination_2.classList.contains('active')) {
        pagination_2.classList.remove('active');
    }
    if (pagination_4.classList.contains('active')) {
        pagination_4.classList.remove('active');
    }
    if (pagination_first.classList.contains('active')) {
        pagination_first.classList.remove('active');
    }
    if (pagination_last.classList.contains('active')) {
        pagination_last.classList.remove('active');
    }
    if (pagination_3.classList.contains('active')) {
        pagination_3.classList.remove('active');
    }

    if(curent_page == 1)
        pagination_first.classList.add('active');
    else if(curent_page == max_page_num)
        pagination_last.classList.add('active');
    else if(pagination_3.getAttribute("data-value") == curent_page)
        pagination_3.classList.add('active');
    else if(pagination_2.getAttribute("data-value") == curent_page)
        pagination_2.classList.add('active');
    else if(pagination_4.getAttribute("data-value") == curent_page)
        pagination_4.classList.add('active');

}
function banFromList(id){
    for (let [i, item] of listJSON.entries()) {
        if (item.Id == id) {
            listJSON[i].Status = "InActive";
        }
    }
    RenderLoad();
    Init();
    document.getElementById("number-customer").innerHTML="("+listtemp.length+")";
}
function bancustom(id){
    $.ajax({
        type : "POST",
        data : {
            Id : id
        },
        url : "/admin/customer",
        success: function(data, status) {
            window.location.href = "/admin/customer";
        }
    });
    banFromList(id);
}
function viewcustom(id){
    window.location.href = "/admin/customeraccount?Id="+id;
}


Array.prototype.forEach.call(listshow1, element=>{
    element.addEventListener("click",()=>{
        num = element.getAttribute("data-value");
        Init();
    })       
});

function loadAjax(listban,func){
    Array.prototype.forEach.call(listban, element=>{
        element.addEventListener("click",()=>{
            id = element.getAttribute("data-value");
            func(id);
        })       
    });
}


Array.prototype.forEach.call(list_pagination, element=>{
    element.addEventListener("click",()=>{
        let page_num = element.getAttribute("data-value");
        curent_page = Number(page_num);
        SetNum(page_num);
        phantrang();
    })       
});

pagination_previous.addEventListener("click",()=>{
        curent_page = Number(curent_page) - 1;
        SetNum(curent_page);
        phantrang();
});   

pagination_next.addEventListener("click",()=>{
    curent_page = Number(curent_page) + 1;
    SetNum(curent_page);
    phantrang();
});
function  show_info(){
    let len = listtemp.length;
    let max =  curent_page * num;
    let min = max-num;
    let du = len % num;

    if(max_page_num == curent_page)
        if(du != 0)
            max = max - num + du;


    let temp ="<span class=\"d-none d-sm-inline-block\" >Showing</span> "+min+" to "+max+"  <span class=\"d-none d-sm-inline-block\">of "+len+" items</span>"
    show_infos.innerHTML = temp;
}

function Search(){
   let temp = document.getElementById("search-box").value;
    RenderSearch(temp);
}


document.getElementById("active-status").addEventListener("click",()=>{
    RenderActive();
});
document.getElementById("all-status").addEventListener("click",()=>{
    RenderAllStatus();
});
Load();








