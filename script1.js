/*document.write("<h1>text</h1>");
document.write("<p>JAVAScript</p>");//text

alert("test");
console.log("Hello World");
console.error("error1");
console.warn("example")*/


//let สามารถเปลี่ยนแปลงค่าได้ตลอดเวลา
let ea1; //สร้างตัวแปรแต่ไม่มีการกำหนดค่า
ea1 = "<p>texteasddsafd</p>";//กำหนดข้อความลงไปเก็บในตัวแปร name
console.log(ea1);
document.write(ea1);
let age = 20;
console.log(age);
document.write("age =",age); 
let $else = 'earth', _for = 20, Name = "<hr>";
console.log(Name);
document.write(Name);

let _for1 = "b1"
console.log("Before",_for1);
_for1 = "a1"
console.log("After",_for1);

//const เป็นค่าคงที่ไม่สามารถเปลียนแปลงได้ 
const vat = 0.07;//ค่าคงที่
console.log("Before",vat);

let money = 500+500;//number(integer)
let price = 99.99;//number(float)
let checkName = false;
console.log(money);
console.log(typeof(price));
console.log(typeof(checkName));

let a = ('20.1');
let b = ('20.1');
let c = ('20.1');
let d = (20.1);
let e = (20.1);
// number float
a = parseFloat('20.1');
console.log(a);
console.log(typeof(a));
// number int
b = parseInt('20.1');
console.log(b);
console.log(typeof(b));
// number float
c = +'20.1';
console.log(c+100);
console.log(typeof(c));
//sting
d = 20.1.toString();
console.log(d);
console.log(typeof(d));

e = 20.1+"";
console.log(e);
console.log(typeof(e));

//array
let numberA = Array(12.5,true,false,40,50,"60");
console.log(numberA);
//indexเริ่มต้นที่เลข 0
console.log('ตัวแรก = ',numberA[0]);
console.log('ตัวสุดท้าย = ',numberA[5]);
//เปลี่ยนค่าในArray
let colors = Array('red','blue','yellow','white');
colors[1] = 'green'
console.log(colors);
console.log(colors[1]);
 
//operator
console.log('ผลบวก = ',20+1);
console.log('ผลลบ = ',20-1);
console.log('ผลคูณ = ',2*5);
console.log('ผลหาร = ',10/5);
console.log('ผลเศษ = ',20%3);
console.log('ยกกำลัง = ',5**2);

let an1 = 20,bn1 = 10;
console.log('abผลบวก = ',an1+bn1);
console.log('abผลลบ = ',an1-bn1);
console.log('abผลคูณ = ',an1*bn1);
console.log('abผลหาร = ',an1/bn1);
console.log('abผลเศษ = ',an1%bn1);

//boolean
let ab1 = 5 ,bb1 = 5.5;
console.log(ab1==bb1);
console.log(ab1!=bb1);
console.log(ab1>bb1);
console.log(ab1<bb1);
console.log(ab1>=bb1);
console.log(ab1<=bb1);

let ckeck = false;
console.log(!ckeck);

//&&(and) ||(or) !(not)
//ตัดเกรด
// 80-100 = A
// 75-79 = B+
// 70-74 = B
// 65-69 = C+
// 60-64 = C
// 55-59 = D+
// 50-54 = D
// 0-49 = F
let score = 74;
console.log('A  ',score<=100 && score>=80);
console.log('B+ ',score>=85 && score<=79);
console.log('B  ',score>=70 && score<=74);
console.log('C+ ',score>=65 && score<=69);
console.log('C  ',score>=60 && score<=64);
console.log('D+ ',score>=55 && score<=59);
console.log('D  ',score>=50 && score<=54);
console.log('F  ',score>=0 && score<=49);


let p1 = 5 , p2 = 10 ;
//เพิ่มค่า ++prefix
console.log("default = ", p1);
console.log("แบบ prefix = ", ++p1);
console.log("current = ", p1);
//เพิ่มค่า ++postfix
p1 = 5;
console.log("default = ", p1);
console.log("แบบ postfix = ", p1++);
console.log("current = ", p1);
//ลดค่า --prefix
console.log("default = ", p2);
console.log("แบบ prefix = ", --p2);
console.log("current = ", p2);
//ลดค่า --postfix
console.log("default = ", p2);
console.log("แบบ prefix = ", p2--);
console.log("current = ", p2);

//Compound Assignment
let x1 = 10,x2 = 20;
console.log("ก่อน =",x1);
x1+=x2;
console.log("หลัง = ",x1);

x1 = 10,x2 = 20;
console.log("ก่อน =",x1);
x1-=x2;
console.log("หลัง = ",x1);

x1 = 10,x2 = 20;
console.log("ก่อน =",x1);
x1*=x2;
console.log("หลัง = ",x1);

x1 = 10,x2 = 20;
console.log("ก่อน =",x1);
x1/=x2;
console.log("หลัง = ",x1);

x1 = 10,x2 = 20;
console.log("ก่อน =",x1);
x1%=x2;
console.log("หลัง = ",x1); 


console.log(7+8/2+25);
console.log(5*2-40/5);




