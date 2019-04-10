/**
 * Created by marcelo on 01/05/15.
 */

function submitButton(){
    var input = document.getElementById('coordinates').value;
    var latLons = input.split(';');

    var locations = [];
    var result = "";

    var inputOk = true;
    var errorMessage = "";

    for (var i = 0; i < latLons.length; i++){
        var latLon = latLons[i];

        if(latLon == ""){
            inputOk = false;
            errorMessage = "Empty input values (maybe extra ';' at end).";
        }

        var separatedLatLon = latLon.split(',');
        var lat = parseFloat(separatedLatLon[0]);
        var lon = parseFloat(separatedLatLon[1]);

        if(isNaN(lat) || isNaN(lon)){
            inputOk = false;
            errorMessage = "Not number values on input data.";
        }

        var elevator;
        elevator = new google.maps.ElevationService();

        var myLatLon = new google.maps.LatLng(lat, lon);
        locations.push(myLatLon);
    }

    // Create a LocationElevationRequest object using the array's one value
    var positionalRequest = {
        'locations': locations
    }

    if(inputOk) {
        // Initiate the location request
        elevator.getElevationForLocations(positionalRequest, function (results, status) {
            if (status == google.maps.ElevationStatus.OK) {

                for (var i = 0; i < results.length; i++) {
                    if (results[i]) {
                        if (i == (results.length - 1)) {
                            result += results[i].elevation;
                        } else {
                            result += results[i].elevation + ";\n";
                        }
                    } else {
                        result = "Error on input data.";
                        break;
                    }
                }

                document.getElementById('result').value = result;

            } else {
                alert('Elevation service failed due to: ' + status);
            }
        });
    }else {
        document.getElementById('result').value = "Error on input data. \n" + errorMessage;
    }
}