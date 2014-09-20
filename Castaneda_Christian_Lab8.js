/*
  Christian Castaneda
  September 20th, 2014
  SDI
  Lab 8
*/

// Problem 1

    var userEmail = prompt("Enter a valid E-Mail address: ");

    var emailFunct = function(email)
    {
        var userInput = userEmail;
        
        for(var i = 0; i < userInput.length; i++)
        {
          if(userInput.indexOf("@") != 0  && userInput.lastIndexOf("@") != (userInput.length - 1) && userInput.indexOf("@") == userInput.lastIndexOf("@"),
             userInput.indexOf(".") != 0  && userInput.lastIndexOf(".") != (userInput.length - 1) && userInput.indexOf(".") == userInput.lastIndexOf("."),
             userInput.indexOf("@") != -1 && userInput.indexOf(".") != -1)
          {
            console.log("You entered a valid email!");
            break;          
          }
          else
          {
             console.log("The E-mail address you entered is invald.");
             break;
          };           
        };
    };






// Problem 2






// MAIN

   
    





