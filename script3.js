//funtion
function F1(){
    console.log('Hellow World');
}
F1();//การเรียกใช้ funtion
F1();

function message(){
    alert('message!');
}

function displayname(){
    document.write('erath');
}


let PN = 200;
function plusnumber(pn){
    console.log(pn+5);
}
plusnumber(5);
plusnumber(PN);

function FullName(Fname,Lname){
    console.log("ชื่อจริง",Fname,"นามสกุล",Lname);
}
FullName("t1","t2");

function summation(x,y){
    let total = x+y;
    console.log("ผลรวม = ",total);
}
summation(8,7);

//Return
function getIP(){
    //return "1.2.3.4";
    let ipn = "128.0.0.1";
    return ipn
}
let myIP =getIP();
console.log("IP",myIP);


function getNumber(){
    return 100*5/2;
}
let totalnumber = getNumber();
console.log(totalnumber,totalnumber+5);

let salary = 35000;
let bonus;
let expenses = -3000;
function setSalary(){//setSalary(salary) 
    bonus = salary*0.2;
    return salary+bonus;
}
//let totalS = setSalary(10000);
let totalS = setSalary(salary);
totalS+=expenses;
console.log(salary,bonus,expenses,totalS);


function getA(city,address){
    return city+" "+address;
}
console.log(getA("a","b"));


function fullname(fname="a",lname="b",City="c"){
    console.log("Name = ",fname,"Lastname = ",lname,"City = ",City);
}
fullname();
fullname("d","e","f");


//array function
let color = ['red','blue','yellow'];
color.push('white');

let count = color.length;
console.log(count);
let result = color.sort();
console.log(result);
console.log(color.reverse());

let Cfirst = color[0];
console.log(Cfirst);
let Clast = color[color.length-1];
console.log(Clast);

let numbeR = [500,20,1,14];
console.log(numbeR);
console.log(numbeR.sort());
console.log(numbeR[0]);
console.log(numbeR[numbeR.length-1]);


//array forloop
let Nb = [8,51,65,74,89,67,82,11,56,87,12,44];
Nb.push(100);
for(i=0;i<Nb.length;i++){
    console.log('No = ',i+1,"Array",Nb[i]);
}

//array forEach *เหมือน forloop
let color1 = ['red','blue','black','white','yellow','green','gray'];
color1.forEach(mydata);
function mydata(item1){
    console.log("color1",item1);
}


//แปลง array เป็น sting
let color2 = ['red','blue','black','white','yellow','green','gray','orange'];
console.log(typeof(color2));
console.log(color2);
//console.log(color2.toString());

/*let x2 = color2.toString();
console.log(typeof(x2));*/

/*let x3 = color2.join(" ");
console.log(x3);*/


//pop เอาสุดท้ายออก
/*color2.pop();
console.log(color2);*/

x4 = color2.pop()
console.log(color2);
console.log('x4',x4);


//การรวม array
let m1 = [1,5,2,6,7];
let m2 = [11,13,14,19];
let m3 = [20,32,15,63];

m1 = m1.concat(m3);
console.log('allarray',m1);
/*let allM = m1.concat(m2,m3);
console.log(allM);*/


//เรียงลำดับ array แบบตัวเลข ติดลบและน้อยไปมาก
let points = [20,-5,-2,40,100,-500,150];
console.log(points);
//console.log(points.sort());
/*points.sort(function(a,b){ //เรียงน้อยไปมาก
    return a-b;
});
console.log(points);*/

points.sort(function(a,b){ //เรียงมากไปน้อย
    return b-a;
});
console.log(points);


//่JavaScript Object
let product1 = {
    name1 :'as565',
    prict1 : 1500 ,
    color1 : 'black',
    category1:'computer'
 };
 //object
 console.log(product1);
 console.log('product name = ',product1.name1);
 console.log('product name = ',product1['name1']);
 
 //array
 let array1 = ["as521",1500,"black","computer"];
 console.log(array1);
 console.log(array1[0]);
 console.log(array1[array1.length-1]);


 //Method
 let product2 = {
    name2 : 'as566',
    prict2 : 2000,
    color2 : 'white',
    category2 : 'computer',
    displayProduct:function(){
        return "name = "+ this.name2 +" "+"ราคา = "+this.prict2+" "+"category = "+this.category2
    },
    disCount:function(){
        return this.prict2-1000;
    },
    getColor2:function(){
        return "color = "+this.color2;
    }
 };
console.log(product2.displayProduct());
console.log(product2.disCount());

console.log(product2.getColor2());
console.log("color =",product2.color2);

document.write(product2.displayProduct())


//confirm()
function deleteData(){
    let result = confirm("Delete?");
    if(result){
        console.log("Del");
    }else{
        console.log("NoDel");
    }
}