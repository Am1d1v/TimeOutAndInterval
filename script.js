

/*

let timerId = setTimeout(logger(){
    alert("Hello");
}, 2000);

*/


/*

let btn = document.querySelector(".btn");
let timerId,
    i = 0;

btn.addEventListener("click", ()=>{
    let timerId = setTimeout(logger, 2000);
});


//clearInterval(timerId);

function logger(){
    if(i === 2){
        clearInterval(timerId);
    }
    alert("timer");
    i++;
}


/*

let inter = setInterval(function(){
    console.log("Interval Hello");
}, 1000);

*/

/*

let t = setTimeout(function tim(){
    console.log("Hello");
    t = setTimeout(tim, 1000);
}, 1000);

*/

let btn = document.querySelector(".btn");

function Animation(){
    let elem = document.querySelector(".box");
    let pos = 0;

    let id = setInterval(frame, 10);
    function frame(){
        if(pos == 300){
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}

btn.addEventListener("click", Animation);