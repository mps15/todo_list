let todo = [];

let request = prompt("Please , Enter your request");

// console.log(request);


while(true){

    if(request == "quit"){

        console.log("qutting app");
        break;
        
    }
    if(request == "list"){

        console.log("--------");
        for(task of todo){

            console.log(task);
        }

        console.log("-----------");
        
    }
}