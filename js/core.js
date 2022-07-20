
function buttonAnimation(key){

}

var instruments = document.querySelectorAll('.instruments button');


// play instruments based on instrument click 
instruments.forEach(instrument => {
    instrument.addEventListener('click', function(e){
        var audioPath = 'sounds/',
            audio;
        switch(e.target.textContent){
            case 'a':
                audioPath += 'tom-1.mp3';
                break;
            case 's':
                audioPath += 'tom-2.mp3';
                break;
            case 'd':
                audioPath += 'snare.mp3';
                break;
            case 'f':
                audioPath += 'crash.mp3';
                break;
            case 'j':
                audioPath += 'tom-3.mp3';
                break;
            case 'k':
                audioPath += 'kick-bass.mp3';
                break;
            case 'l':
                audioPath += 'tom-4.mp3';
                break;

            
        }
        audio = new Audio(audioPath);
        audio.play();
    },false);
});

// play the instruments based on the keyboard press

document.addEventListener('keypress', function(e){
    var audioPath = 'sounds/',
        audio;

    switch(e.key){
        case 'a':
            audioPath += 'tom-1.mp3';
            break;
        case 's':
            audioPath += 'tom-2.mp3';
            break;
        case 'd':
            audioPath += 'snare.mp3';
            break;
        case 'f':
            audioPath += 'crash.mp3';
            break;
        case 'j':
            audioPath += 'tom-3.mp3';
            break;
        case 'k':
            audioPath += 'kick-bass.mp3';
            break;
        case 'l':
            audioPath += 'tom-4.mp3';
            break;
    }

    audio = new Audio(audioPath);
    audio.play();
});
