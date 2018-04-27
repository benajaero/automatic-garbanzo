function getLoc() {
    if (!navigator.geolocation) {
        console.log('Unable to retrieve location')
        return
    } 

    function success(pos) {
        console.log(pos.coords.latitude + ', ' + pos.coords.longitude)
    }

    function error() {
        console.log("Unable to retrieve location")
    }
    navigator.geolocation.getCurrentPosition(success, error)

}
