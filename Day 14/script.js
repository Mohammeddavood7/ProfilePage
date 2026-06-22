

let checkCaptacha = false



function formSubmit(event){
        let inputValue = document.querySelector(".dateinput");
        let outputValue = document.querySelector(".dateforcon");

        if(inputValue.value && checkCaptacha){
               console.log(inputValue.value);
               let inputlocalValue = new Date(inputValue.value).toLocaleDateString("en-US");
               outputValue.value = inputlocalValue;
           }
           else{
                outputValue.value = "";
                checkCaptacha = false;
                event.preventDefault();
                alert("Please select a date before submitting the form.");
           }

}


function checkCaptchaFromAddCallaback(){
    checkCaptacha = true;
    console.log("Captcha checked");
}