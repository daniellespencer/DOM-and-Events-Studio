// Write your JavaScript code here.
// Remember to pay attention to page loading!

// Write your JavaScript code here.
function init () {
    buttonTakeOff = document.getElementById('takeoff'); 
    paragraphStatus = document.getElementById('flightStatus'); 
    divShuttleBackground = document.getElementById('shuttleBackground');
    paragraphHeight = document.getElementById('spaceShuttleHeight');
    buttonLand = document.getElementById('landing');
    buttonAbortMission = document.getElementById('missionAbort');
    imageRocket = document.getElementById('rocket');
    buttonDirections = document.getElementById('directionButtons');
    buttonRight = document.getElementById('right');
    buttonLeft = document.getElementById('left');
    buttonUp = document.getElementById('up');
    buttonDown = document.getElementById('down');

    buttonTakeOff.addEventListener('click', function(){
        let takeOffTrue = confirm('Confirm that the shuttle is ready for takeoff.');
        if(takeOffTrue){
            paragraphStatus.innerHTML = 'Shuttle in flight.';
            divShuttleBackground.style.backgroundColor = 'blue';
            paragraphHeight.innerHTML = '10,000';
        };
    });

    buttonLand.addEventListener('click', function(){
        alert('The shuttle is landing. Landing gear engaged.');
        paragraphStatus.innerHTML = 'The shuttle has landed.';
        divShuttleBackground.style.backgroundColor = 'green';
        paragraphHeight.innerHTML = '0';
    });

    buttonAbortMission.addEventListener('click', function(){
        missionTrue = confirm('Confirm that you want to abort the mission.');
        if(missionTrue){
            paragraphStatus.innerHTML = 'Mission aborted.';
            divShuttleBackground.style.backgroundColor = 'green';
            paragraphHeight.innerHTML = '0';
        };
    });

    buttonUp.addEventListener('click', function(){
        imageRocket.style.paddingBottom = '10px';
        paragraphHeight.innerHTML = '10,000'
    });

    buttonDown.addEventListener('click', function(){
        imageRocket.style.paddingTop = '10px';
        paragraphHeight.innerHTML = '0'
    });

    buttonLeft.addEventListener('click', function(){
        imageRocket.style.paddingLeft = '10px';
    });

    buttonRight.addEventListener('click', function(){
        imageRocket.style.paddingRight = '10px';
    });


}

window.onload = init;
// Remember to pay attention to page loading!