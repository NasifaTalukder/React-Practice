import React from "react";

let currentDate=new Date(2023,4,6,10);
let currentTime=currentDate.getHours();
console.log(currentTime)

let Greeting="";
let greetingStyle={

}
//

if(currentTime>=1 && currentTime<=12){
    Greeting="Morning";
    greetingStyle.color="green";
}
else if(currentTime>=13 && currentTime<=16){
    Greeting="Afternoon";
    greetingStyle.color="brown";
}
else{
    Greeting="Good night"
    greetingStyle.color="red";
}
const Clock=()=>{
    return(
        <>
        <div>
            <h1 style={greetingStyle}>{Greeting}</h1>
        </div>
        </>
    )
}
export default Clock;