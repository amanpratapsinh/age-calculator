const inputbtn =document.querySelector(".age-input");
const calculatebtn=document.querySelector(".Calculate-btn");
const ageresult = document.querySelector(".result");

calculatebtn.addEventListener("click",() =>{
    if(inputbtn.value === "")  {
        alert("please enter your date of birth");
    }
    else{
        console.log("input",inputbtn.value);
        const dob =new Date(inputbtn.value);
        console.log("dob",dob);
        const dob_year = dob.getFullYear();
        console.log("dob_year",dob_year);


        //currnet
        const now =new Date();
        console.log("now" ,now);
        const now_year=now.getFullYear();
        console.log("now_year",now_year);
        const age=now_year-dob_year
        console.log("age" ,age);
       alert("age "+age);

    }
});