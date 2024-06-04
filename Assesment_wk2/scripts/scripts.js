document.addEventListener('DOMContentLoaded',  () => {
    function temperatureCheck(temperature) {
        if (temperature < 0) {
            console.log("It is freezing");
        } else if (temperature <= 10) {
            console.log("It is cold");
        } else if (temperature <= 25) {
            console.log("It is warm");
        } else {
            console.log("It is hot");
        }
    }

    // testing
    console.log(temperatureCheck(-1));
    console.log(temperatureCheck(10));
    console.log(temperatureCheck(25));
    console.log(temperatureCheck(26));
    
});