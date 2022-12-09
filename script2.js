//if
let age1 = 24;
if(age1 >= 15 && age1 <= 25){
    console.log('true');
}

//if else
let balance = 1000;
let withDraw = 1200;
if(withDraw <= balance){
    console.log('ดำเนินการถอนเงิน = ',withDraw);
    balance-=withDraw;
    console.log('เงินคงเหลือ = ',balance);
}else{
    console.log('ไม่สามารถถอนเงินได้');
    console.log('เงินคงเหลือ = ',balance);
}

//else if
let score1 = 105;
if(score1<=100 && score1>=80){
    console.log('A',score1);
}else if(score1>=70 && score1<=79){
    console.log('B',score1);
}else if(score1>=60 && score1<=69){
    console.log('C',score1);
}else if(score1>=50 && score1<=59){
    console.log('D',score1);
}else if(score1>=0 && score1<=49){
    console.log('F',score1);
}else{
    console.log('error',score1);
}

//การลดรูป
let score2 = 52;
let pass;
if(score2>60){
    pass = 'ผ่าน';
}else{
    pass = 'ไม่ผ่าน';
}
console.log(pass,score2);

score2+=70; 
pass = score2>60 ? 'ผ่าน' : 'ไม่ผ่าน';
console.log(pass,score2);

//if ซ้อน if
let age2 = 12;
let pass2;
if(age2<=15){
    if(age2==15){
        pass2 = 'M3';
    }else if(age2==14){
        pass2 = 'M2';
    }else if (age2==13){
        pass2 = 'M1';
    }else{
        pass2 = 'P' 
    }   
}else if(age2>=16 && age2<=18){
    pass2 = 'ML';
}else{
    pass2 = 'error';
    }
console.log(pass2)


//switch
let status1 = 1;
let light;
/*if(status1==0){
    light='ปิด';
}else if(status1==1){
    light='เปิด';
}else{
    light='erorr'
}
console.log(light);*/

/*light = status1<1 ? 'off' : 'on' ;
console.log(light);*/

switch(status1){
    case 0: light = 'off';
    break;
    case 1: light = 'on';
    break;
    default:light = 'null'
}
console.log(light);

let month = 5;
let name1;
switch(month){
    case 1 : name1 = 'Jan';
    break;
    case 2 : name1 = 'Feb';
    break;
    case 3 : name1 = 'Mar';
    break;
    case 4 : name1 = 'Apr';
    break;
    case 5 : name1 = 'May';
    break;
    case 6 : name1 = 'Jun';
    break;
    case 7 : name1 = 'Jul';
    break;
    case 8 : name1 = 'Aug';
    break;
    case 9 : name1 = 'Sep';
    break;
    case 10 : name1 = 'Oct';
    break;
    case 11 : name1 = 'Nov';
    break;
    case 12 : name1 = 'Dec';
    break;
    default: name1 = 'erorr';
}
console.log(name1);

//เลขคู่ เลขคี่
let y1 = 50;
if(y1%2 == 0){
    console.log('เลขคู่');
}else{
    console.log('เลขคี่');
}

//เปรียบเทียบตัวเลข
let r1 = 200, r2 = 200, ra ;
if(r1>r2){
    ra="r1 more";
}else if(r1<r2){
    ra="r2 more";
}else{
    ra ="tantamount";
}
console.log(ra)

//while loop
let count1 = 1;
while(count1<=5){
    console.log('hello world',count1);
    if(count1==3){
        break;
    }
    count1++;//1>2>3>4 stop
}

//for loop
for(let count2 = 0;count2<=10;count2+=2){
    console.log('test',count2);
}

//do..while loop
let count3 = 1; 
do{//จะลอกทำก่อนที่ครั้งถ้าเงื่อนไขเป็นเท็จก็จะไม่ทำงาน
    console.log('dw',count3);
    count3++;
}while(count3<=5); 

count3 = 0;
while(count3<=200){
    console.log('w',count3);
    count3+=100;
}
//break loop
for(let count4 = 2 ; count4<=10;count4+=2){
    if(count4>=5)break;
    console.log('f',count4)
}
//continue loop
for(let count5 = 0; count5<=10;count5+=2){
    if(count5==4 || count5==8)continue;
    console.log('f2',count5);
}

//undefined
let n1;
console.log(n1);

//null
let n2=null;
if(!n2){
    console.log('n2 is null',n2);
}else{
    console.log('n2 not null',n2);
}

//NaN
let n3 = 10*'h5'
console.log(n3);