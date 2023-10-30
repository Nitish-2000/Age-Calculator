function calculateage(){
    const Dob= new Date(document.getElementById("date").value);
    const today = new Date();
    const age = today.getFullYear()-Dob.getFullYear()
    const month = today.getMonth()-Dob.getMonth();
    const date= today.getDate()-Dob.getDate()
    
    if(date>=0){
     var dat = date;
    }
    if(month>=0){
     var mnth= month;
    }
    if(month<0 || month ==0 && today.getDate()<Dob.getDate()) {
     age = age-1;
    }  
    if(age<0){
     return document.getElementById("result").innerHTML="Please Enter valid DOB"
    }
    else{
    return document.getElementById("result").innerHTML="your age is "+age +" years and " +mnth+" months "+"and "+dat+" days"
    }
 
 }
 