function leapYear(year){
             return (year%4===0  && year%100!==0) || (year%400===0);
}

function ages(){
    let da=document.getElementById('dd').value;
    let ma=document.getElementById('mm').value;
    let ya=document.getElementById('yy').value;

    let date=new Date();
    let d2=date.getDate();
    let m2=1+date.getMonth();
    let y2=date.getFullYear();
    let month=[31,28,31,30,31,30,31,31,30,31,30,31];

    
    //leap year so change the month days in month array
    if(leapYear(ya))
    {
        month[1]=29;
    }
    //days should not less than 0 and not greater than 31
    if(da<=0 || da>31)
    {
        document.getElementById('result').innerHTML="Enter valid Date"
    }

    //months should not less than 0 and not greater than 12
    else if(ma<=0 ||ma>12){
        document.getElementById('result').innerHTML="Enter valid Month"
    }
    //year not less than 0 and year1 greter than year 2 
    else if(ya<=0 ||ya>y2){
        document.getElementById('result').innerHTML="Enter valid year"
    }

    //month 2(feburary) la days not greater than month[2]or 29  same like as month 4,6,9,11 not greater than 30
    else if((ma==2 && da>month[1]) || (ma==4||ma==6||ma==9||ma==11) && (da>30))
    {
        document.getElementById('result').innerHTML="Enter Valid Date and month"
    }
    //year 1 and year 2 will be equal and month 1,month2 will be equal and date should be differenet
    else if((ya==y2 && ma>m2) || (ya==y2 && ma==m2 && da>d2))
    {
        document.getElementById('result').innerHTML="Enter valid month and year"

    }

    else{
        document.getElementById('result').innerHTML='';
        if(da>d2){
            d2=d2+month[m2]
            m2=m2-1;
        }
        if(ma>m2){
            m2=m2+12;
            y2=y2-1;
        }
        let dy=d2-da;
        let my=m2-ma;
        let ys=y2-ya;
         
        document.getElementById('dayss').innerHTML=dy+" Days";
         

        document.getElementById('monthss').innerHTML=my+" Monthss";
        document.getElementById('yearss').innerHTML=ys+" Years";
        // document.getElementById('main').style.color="red";
        // result.innerHTML=" ";
        // console.clear();
    }

}