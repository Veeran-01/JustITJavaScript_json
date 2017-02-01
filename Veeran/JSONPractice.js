//This is just to practice JSON

/*var car ={
    "model": "Suzuki",
    "Price": 5000,
    "Engine": "Petrol"
}

console.log(car.model);

var F1drivers = ["Lewis", "Kimi", "Fernando"];
console.log(F1drivers[1]);*/

var F1 = {
    "data" : [
        
        {
            "car" : "BMW",
            "driver": "Lewis",
            "wins": 45
        },
        {
            "circuit":"Monaco",
            "pointSystem":[
                {
                    "firstPlace" : 25,
                    "secondPlace" : 23,
                    "thirdPlace" : 21
                }
                
            ],
            "teams" : 11
            
        }
        
    ]
}

console.log(F1.data[1].pointSystem[0].thirdPlace);