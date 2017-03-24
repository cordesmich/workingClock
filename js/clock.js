function Clock() {
    var time;
    var interval;
    var state = 'work'; // breakfast, lunch, end, home, work
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

        if (time.getHours() == 9 && (time.getMinutes() >= 00 && time.getMinutes() <= 15)) {// check  breakfast
            state = 'breakfast'

        } else if (time.getHours() == 12 && (time.getMinutes() >= 00 && time.getMinutes() <= 30)) {// check lunch
            state = 'lunch'
        } else if (time.getHours() == 16 && time.getMinutes() >= 30) {// check end of working day
            state = 'end'
        } else if (time.getHours() >= 17) {// at home
            state = 'home'
        } else if (time.getHours() >= 7 && time.getHours() <= 17) {// at home
            state = 'work'
        } else {
            state = 'none';
        }

        if (state != stateTemp) {
            switch (state) {
                case 'breakfast':
                    console.log('breakfast');

                    break;
                case 'lunch':
                    console.log('lunch');

                    break;
                case 'end':
                    console.log('end');

                    break;
                case 'home':
                    console.log('home');

                    break;
                case 'work':
                    console.log('work');

                    break;
                default:
                    break;
            }
            stateTemp = state;
        }
    }


    interval = setInterval(updateClock, 1000);

}