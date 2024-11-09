document.addEventListener('DOMContentLoaded', () => {
  const assistBtn = document.getElementById('assist-btn');
  assistBtn.addEventListener('click', (event) => {
      event.preventDefault();
      const issue = document.getElementById('issue').value;
      const location = document.getElementById('location').value;

      if (issue && location) {
          alert(`Request received!\nIssue: ${issue}\nLocation: ${location}`);
      } else {
          alert('Please fill out all fields before submitting.');
      }
  });
  document.querySelector(".emergencybutton").addEventListener("click",()=>{
    
    document.querySelector("audio").play();
  })

  let present = false;
setInterval(()=>{

    let embut = document.querySelector(".emergencybutton");
    if(present == true){
        embut.classList.remove("what");
        present=false;
    } 
    else{
        embut.classList.add("what");
        present=true;
    }

    
},800)
let ok = document.querySelector(".ok") ;
ok.addEventListener("click",()=>{
    console.log("wha");
    // document.querySelector(".alert").classList.remove("show");
    // document.querySelector(".alert").classList.add("dontshow");
});
  const quickActions = document.querySelectorAll('.action-btn, .emergencybutton');
  quickActions.forEach((button) => {
      button.addEventListener('click', () => {
          const action = button.innerText;
          let alert = document.querySelector(".alert");
          switch (action) {
              case 'Emergency button':
                  
                  alert.innerHTML =`Calling nearby people  <button class="ok">
                                                                    Ok
                                                                    </button>`;
                  alert.classList.add("show");
                  
                  break;
              case 'Call Police':
                  alert('Calling police...');
                  setTimeout(() => {
                      alert('Message sent to police!');
                  }, 2000); // Reduced delay for realism
                  break;

              case 'Call ambulance':
                  alert('Calling ambulance...');
                  setTimeout(() => {
                      alert('Message sent to ambulance!');
                  }, 2000);
                  break;

              case 'Emergency call and message':
                  alert('Message sent to emergency contacts...');
                  setTimeout(() => {
                      alert('Messages sent to contacts!');
                  }, 2000);
                  break;

              case 'Share Location':
                  if (navigator.geolocation) {
                      navigator.geolocation.getCurrentPosition(
                          (position) => {
                              const { latitude, longitude } = position.coords;
                              alert(`Location shared!\nLatitude: ${latitude}\nLongitude: ${longitude}`);
                              setTimeout(() => {
                                  alert('Location message sent!');
                              }, 2000);
                          },
                          () => {
                              alert('Unable to retrieve location.');
                          }
                      );
                  } else {
                      alert('Geolocation is not supported by this browser.');
                  }
                  break;

              default:
                  alert('Action not recognized.');
                  break;
          }
      });
  });
});
