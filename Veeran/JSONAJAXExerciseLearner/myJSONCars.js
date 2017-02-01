//This is my JS for the luxury car practice

//"survey" is id of the dropdown list in html
var mySurvey = document.getElementById("survey");

//use change for dropdown list instead of click
mySurvey.addEventListener("change", loadData, false);

var myManufacturer = document.getElementById("manufacturer");

myManufacturer.addEventListener("change", loadData, false);

function loadData()
{
    var manufacturerStored = myManufacturer.options[myManufacturer.selectedIndex].value;
    
    //console.log(manufacturerStored);


//XMLHttpRequest is the main object to establish communication between the server and browser- create an instanc eof it called myRequest
var myRequest = new XMLHttpRequest;

//The open method recieves three parameters the first one is either GET or POST. The second one is the link to the JSON file can be from GitHub (raw data link). 
myRequest.open("GET", "https://raw.githubusercontent.com/biatoSalo/Training/master/JSONAJAXExerciseLearner/expensiveLuxuryCars.json", true);

//We need a condition to check if the data has arrived
    myRequest.onload = function() {
        
        if(myRequest.readyState == 4 && myRequest.status == 200)
        {
            //JSON.parse METHOD turnS JSON format of the data into javascript
            var myData = JSON.parse(myRequest.responseText);
            //console.log(myData);
            
            if(manufacturerStored === "")
            {
                function clearAll()
                {
                    var hideText = document.getElementsByClassName("data");
                    for(var i=0; i < hideText.length; i++)
                        {
                            hideText[i].innerHTML= "";
                        }
                }
                
                clearAll();
                //need to select a car first then get message
                document.getElementById("messageAlert").innerHTML = "You must choose a car manufacurer to load data";
            }
            else
            {
                document.getElementById("manufacturerC").innerHTML =myData.data[manufacturerStored].manufacturer;
                
                document.getElementById("modelC").innerHTML =myData.data[manufacturerStored].model;
                
                //manufacturerStored is a number of the choice from dropdown list
                //console.log(manufacturerStored);
            }
        }
    }
    
    
myRequest.send();
    
//console.log(myRequest);

}


























