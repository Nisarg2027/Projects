document.addEventListener('DOMContentLoaded', () => {
    const assistBtn = document.getElementById('assist-btn');
    const audio = document.querySelector('audio');
    const alertBox = document.querySelector('.alert');
    const alertMessage = alertBox.querySelector('p');
    const okButton = alertBox.querySelector('.ok');

    assistBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const issue = document.getElementById('issue').value;
        const location = document.getElementById('location').value;

        if (issue && location) {
            showAlert(`Request received! Issue: ${issue}, Location: ${location}`);
        } else {
            showAlert('Please fill out all fields before submitting.');
        }
    });

    document.querySelector('.emergencybutton').addEventListener('click', () => {
        audio.play();
        showAlert('Emergency button activated! Notifying nearby responders.');
    });

    okButton.addEventListener('click', () => {
        alertBox.classList.remove('show');
    });

    document.querySelectorAll('.action-btn').forEach(button => {
        button.addEventListener('click', () => {
            const action = button.dataset.action;
            handleQuickAction(action);
        });
    });

    function showAlert(message) {
        alertMessage.textContent = message;
        alertBox.classList.add('show');
    }

    function handleQuickAction(action) {
        switch (action) {
            case 'police':
                showAlert('Calling police...');
                setTimeout(() => showAlert('Message sent to police!'), 2000);
                break;
            case 'ambulance':
                showAlert('Calling ambulance...');
                setTimeout(() => showAlert('Message sent to ambulance!'), 2000);
                break;
            case 'message':
                showAlert('Sending emergency messages...');
                setTimeout(() => showAlert('Messages sent to emergency contacts!'), 2000);
                break;
            case 'location':
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        position => {
                            const { latitude, longitude } = position.coords;
                            showAlert(`Location shared! Latitude: ${latitude}, Longitude: ${longitude}`);
                        },
                        () => showAlert('Unable to retrieve location.')
                    );
                } else {
                    showAlert('Geolocation is not supported by this browser.');
                }
                break;
            default:
                showAlert('Action not recognized.');
                break;
        }
    }
});
