//Function to check the string palindrome or not
function palindromeTester()
{
  //let string = prompt("Please enter a string to test");	
  let string = document.getElementById("inpText").value;	
  let PalindromeResult = document.querySelector("#PalindromeResult");
  let lowerString = string.toLowerCase();

  let reverseString = Array.from(lowerString ).reverse().join("");

  //document.getElementById("PalindromeResult").innerHTML ="You Reached here";
  
  //PalindromeResult.innerHTML ="You reached here";


  
  if(lowerString == reverseString)
  {

	//document.write("Your string "+ string  + " is a palndrome");  
  PalindromeResult.innerHTML = "Your string "+ string  + " is a palndrome";
  }
  else
  {
	//document.write("Your string "+ string  + " is not a palndrome"); 
  PalindromeResult.innerHTML =  "Your string "+ string  + " is not a palndrome"
  
  } 
	
}

//Add event listener to the event DOMContentLoaded
document.addEventListener("DOMContentLoaded", function()
{

  //Identify the button using its id and then add event listener with a function call to palindromeTester()
 
let button = document.querySelector("#palindromeTestButton");
button.addEventListener("click", function()
				{          
					palindromeTester();
				});	

});