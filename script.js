let msg = new SpeechSynthesisUtterance();
let tags = document.querySelectorAll('h1,h2,h3,p,a');
tags.forEach( (tag) =>{
    tag.addEventListener('click', (e) => {
        msg.text = e.target.innerText;
        speechSynthesis.speak(msg);
    });
});