function clickTiger(){
    if(document.querySelector("#tiger_speech_bubble").className === "hidden"){
        document.querySelector("#tiger_speech_bubble").className = "";
    }else{
        document.querySelector("#tiger_speech_bubble").className = "hidden";
    }
}