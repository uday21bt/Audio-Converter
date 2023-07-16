'use strict';

let speech=new SpeechSynthesisUtterance();



let voices=[];

//functions

//to updating the voices

 let voiceSelect=document.querySelector("select");

 window.speechSynthesis.onvoiceschanged=()=>{
     voices=window.speechSynthesis.getVoices();
     speech.voices =voices[6];

     voices.forEach((voice,i)=> (voiceSelect.options[i]=new Option(voice.name,i)))
 }




//addEventListeners



//to spell the typing
document.querySelector("button").addEventListener("click",()=>{
       
    speech.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech)

});

// to change the voice
voiceSelect.addEventListener("change",()=>{
    speech.voice=voices[voiceSelect.value]
})
