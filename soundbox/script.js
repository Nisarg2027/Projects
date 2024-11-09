document.addEventListener('keydown', (event)=> {
    // console.log(`Key pressed: ${event.key}`);
    
    if (event.key === ';') {
        document.querySelector(".sc_audio").currentTime =0;
        document.querySelector(".sc_audio").play();
        return;
    }
    else if (event.key === ' ') {
        document.querySelector(".space_audio").currentTime =0;
        document.querySelector(".space_audio").play();
        return;
    }
    else if (event.key != 'a' && event.key != 's' && event.key != 'd' && event.key != 'f' && event.key != 'j' && event.key != 'k' && event.key != 'l'  ) {
        return;
    }

    document.querySelector(`.${event.key}_audio`).currentTime =0;
    document.querySelector(`.${event.key}_audio`).play();
    
});
