//HTML DOM (DOCUMENT OBJECT MODEL)

//เข้าถึง element tag
let h1s = document.getElementsByTagName('h1');
console.log(h1s);
//เข้าถึง element id *ใช้บ่อย
let p1s = document.getElementById('p1');
console.log(p1s);
//เข้าถึง element class
let p2s = document.getElementsByClassName('p2');
console.log(p2s);

//เปลียนเนื้อหา text
let p3s = document.getElementById('p3');
//p3.innerText = 'change Dom3';
function displayText(){
    p3s.innerText = '<strong>change Dom3</strong>';
}
//เปลียนเนื้อหาHTML
let p4s = document.getElementById('p4');
//p4.innerHTML = '<strong>change Dom3</strong>';
function displayHTML(){
    p4s.innerHTML = '<strong>change Dom4</strong>';
}

let x1 = 10;
let y1 = 20;
let p5s = document.getElementById('p5');
function displayText1(){
    //p5.innerHTML = 'x1 = '+x1+' y1 = '+y1+' x1+y1 = '+x1+y1;
    p5s.innerHTML = `x1 = ${x1}, y1 =${y1},x1+y1 =${x1+y1}`;
}


//querySeletor id = # ,class = . ,tag = p,h1 เป็นต้น *ส่วนใหญ่ใช้กับ class,tag
let p6s = document.querySelector('#p6');
console.log(p6s);
let ps = document.querySelector('p') // มันจะเอาpตัวแรกมาแสดง 
console.log(ps);

let pas = document.querySelectorAll('p'); //แสดง tag p ทั้งหมด
console.log(pas);


//edit style Element
const p7s = document.getElementById('p7'); //const เป็นค่าคงที่ไม่สามารถเปลียนแปลงได้
//p7s.style.color = 'white';
//p7s.style.background = '#eb4d4b';
function ChangeColor7(){
    p7s.style.color='white';
    p7s.style.background='#eb4d4b';
    p7s.style.fontSize='20px';
}


// setAttribute  เปลี่ยน class
const p8s = document.querySelector('.p8');
function ChangeColor8(){
    p8s.setAttribute('class','c8s');
}


const box9 = document.querySelector('.light1');
function dark9(){
    box9.setAttribute('class','dark1');
}
function light9(){
    box9.setAttribute('class','light1');
}


//
const p10sALL = document.querySelectorAll('.p10');
console.log(p10sALL);
console.log(p10sALL[0]);
//console.log(p10sALL[p10sALL.length-1]);
console.log(p10sALL[0].innerHTML);

let message10 = p10sALL[0].innerHTML;
console.log(message10);


//createElement & appendChild
const menu11s = document.getElementById('menu11'); //mom node
const item11s = document.createElement('li'); //child node *การสร้าง li
item11s.innerHTML = 'Item';
menu11s.appendChild(item11s); //การต่อ node ลูกกับ node แม่


//createElement & appendChild + button count++
const menu12s = document.getElementById('menu12');
let count = 1;
function displayCreate(){
    const item12s = document.createElement('li');
    item12s.innerHTML ='ITEM'+(count++);
    menu12s.appendChild(item12s);
};


//removeChild ลบ
const menu13s = document.getElementById('menu13');
const Ditem3 = document.getElementById('item13-3');
function displayDelete(){
    menu13s.removeChild(Ditem3);
}


//replaceChild แทนที่
const menu14s = document.getElementById('menu14');
const Eitem = document.getElementById('item14-3');
const Nitem = document.createElement('li');
Nitem.innerHTML = 'E14';
function displayEdit(){
    menu14s.replaceChild(Nitem,Eitem);//(new,old)
}


//classList.add ,classList.remove ,classList.toggle ,.classList.contains
const box15s = document.getElementById('box15');
let status15;
function AddStyle15(){
    box15s.classList.add('dark15');
}
function RemoveStyle15(){
    box15s.classList.remove('dark15');
}
function SwitchStyle15(){
    box15s.classList.toggle('dark15'); //ใช้สลับ

    status15 = box15s.classList.contains('dark15'); //เช็คstatus
    console.log(status15);
    if(!status15){
        box15s.style.color='red';
    }else{
        box15s.style.color='green'
    }
}


//DOM Event
function Onload16(){ //onload  , onload="Onload16()" *ใส่อันนี้ใน html body
    alert("Welcome");
}

function hightlight17(obj){ //onfocus
    obj.style.background='yellow';
}

function unhightlight17(obj){ //onblur
    obj.style.background='white';
}


function GetMenu18(){ //onchange
    const menu18s = document.getElementById('Menu18');
    const display18s = document.getElementById('display18');
    console.log(menu18s.value); //console.log(menu18s.value.UpperCase()); แสดงเป็นตัวพิมใหญ่
    display18s.innerText = menu18s.value;
}


function hightlight19(obj){ //onmouseover
    obj.style.background='yellow';
}
function unhightlight19(obj){ //onmouseout
    obj.style.background='white ';
}


//EventListener 
const menu20s = document.getElementById('menu20');
const  display20s = document.getElementById('display20');
menu20s.addEventListener('onchange',GetMenu20);
function GetMenu20(){
    console.log(menu20s.value);
    display20s.innerHTML = menu20s.value;
}