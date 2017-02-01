//this is my JS for Password exercise
var access = "shergill";
var wrongPasswords=[];
var i= wrongPasswords.length
var i = 0;

var correctPassword =[];

document.getElementById("myButton").addEventListener("click", checkPassword, false)

function checkPassword(){
    
    var userPassword = document.getElementById("userP").value;
    
    
    if (userPassword == access)
    {
        //alert("Password correct");
        document.getElementById("myMessages").innerHTML ="Password correct!";
        
    }
    
    else if (userPassword === "")
    {
        //alert("You MUST enter a password");
        document.getElementById("myMessages").innerHTML ="You MUST enter a password";
    }
    else 
    {
        wrongPasswords.push(userPassword);
        for (i=0; i>=3; i++){
            document.getElementById("myMessages").innerHTML ="Incorrect password. Attempt" + i + " of 3;
           
        }
        /*
            {
                document.getElementById("myMessages").innerHTML ="Incorrect password. Attempt 1 of 3";
            }
        else if (wrongPasswords.length==2)
            {
                document.getElementById("myMessages").innerHTML ="Incorrect password. Attempt 2 of 3";
            }
        else 
            {
                document.getElementById("myMessages").innerHTML ="Incorrect password. Attempt 3 of 3 " 
                    + "[" + wrongPasswords + "]" ;
                */
                
            }
        
        console.log(wrongPasswords)
        
           
                
                
        }
        
        /*document.getElementById("myMessages").innerHTML ="Incorrect password" + " " + wrongPasswords;*/
        
        
    }
   
    


checkPassword();