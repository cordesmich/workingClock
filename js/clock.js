function Clock() {
    var time;
    var interval;
    var state = 'work'; // breakfast, lunch
    var stateTemp;

    function updateClock() {
        time = new Date();
        var hh = time.getHours().toString();
        var mm = time.getMinutes().toString();
        var ss = time.getSeconds().toString();

        if (hh.length < 2) {
            hh = '0' + hh;
        }
        if (mm.length < 2) {
            mm = '0' + mm;
        }
        if (ss.length < 2) {
            ss = '0' + ss;
        }

        var timeformat = hh + ':' + mm + ':' + ss;

        document.getElementById('clock').innerHTML = timeformat;

        checkClock();
    };

    function checkClock() {

        //Check Time 
        if (time.getHours() == 9 && (time.getMinutes() >= 00 && time.getMinutes() <= 15)) {// check  breakfast
            state = 'breakfast';

        } else if (time.getHours() == 12 && (time.getMinutes() >= 00 && time.getMinutes() <= 30)) {// check lunch
            state = 'lunch';
        } else {
            state = 'none';
        }

        //set value and icon
        if (state != stateTemp) {
            switch (state) {
                case 'breakfast':
                    document.getElementById('text').innerHTML = "It's time for breakfast    &#9749";
                    console.log('breakfast');
                    break;
                case 'lunch':
                    document.getElementById('text').innerHTML = "It's time for lunch    &#127837";
                    console.log('lunch');
                    break;

                default:
                    document.getElementById('text').innerHTML = "You have to work    &#9757";
                    break;
            }
            stateTemp = state;
        }
    }


    interval = setInterval(updateClock, 1000);

}