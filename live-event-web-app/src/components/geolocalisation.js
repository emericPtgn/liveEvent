var GPS = navigator.geolocation.getCurrentPosition(
    function (position) {
        for (var key in position.coords) {
            document.write(key + ': ' + position.coords[key]);
            document.write('<br>');
        }
    },
    function (error) {
        console.error("Error getting geolocation:", error);
    }
);

export default GPS