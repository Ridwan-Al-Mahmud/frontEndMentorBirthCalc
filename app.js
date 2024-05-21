const submitBtn=document.querySelector(".submit");
const userInput=document.querySelectorAll(".input");
const userOutput=document.querySelectorAll(".output");
const errorMsg=document.querySelectorAll(".error-msg");
let isValid=false;

userInput[0].addEventListener("input",()=>{
  if(+userInput[0].value > 31) {
    errorMsg[0].textContent="Must be a valid date";
    isValid=false;
    return;
  }else {
    isValid=true;
    errorMsg[0].textContent="";
  }
})

userInput[1].addEventListener("input",()=>{
  if(+userInput[1].value > 12) {
    errorMsg[1].textContent="Must be a valid date";
    isValid=false;
    return;
  }
  else{
    isValid=true;
    errorMsg[1].textContent="";
  }
})

userInput[2].addEventListener("input",()=>{
  if(+userInput[2].value > 2024) {
    errorMsg[2].textContent="Must be a valid date";
    isValid=false;
    return;
  }
  else{
    isValid=true;
    errorMsg[2].textContent="";
  }
}) 
 
submitBtn.addEventListener("click", () => {
  userInput.forEach((input, index) => {
    if (input.value.trim() === "") {
      errorMsg[index].textContent = "This field is required";
      isValid=false;
    } else {
      errorMsg[index].textContent = "";
    }
  });
});

const calcData = () => {
  if (isValid) {
    const day = parseInt(userInput[0].value, 10);
    const month = parseInt(userInput[1].value, 10) - 1;
    const year = parseInt(userInput[2].value, 10);
    const birthdayObj = new Date(year, month, day);
    const today = new Date();

    // Calculate age in years, months, and days
    let ageYear = today.getFullYear() - birthdayObj.getFullYear();
    let ageMonth = today.getMonth() - birthdayObj.getMonth();
    let ageDay = today.getDate() - birthdayObj.getDate();

    // Adjust for negative month or day difference
    if (ageDay < 0) {
      ageMonth--;
      ageDay += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // Days in the previous month
    }
    if (ageMonth < 0) {
      ageYear--;
      ageMonth += 12;
    }
    userOutput[0].textContent = ageYear;
    userOutput[1].textContent = ageMonth;
    userOutput[2].textContent = ageDay;
  }
};

submitBtn.addEventListener("click",calcData);
