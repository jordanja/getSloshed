/**
 * Created by Jordie on 24/6/18.
 */

var map;
var autocomplete;
var service;
var geocoder;
// Initialize and add the map
function initMap() {

    var a = {lat: -29.344, lng: 131.036};

    autocomplete = new google.maps.places.Autocomplete(
        (document.getElementById('value')), {
            types: ['geocode']
        }
    );

    map = new google.maps.Map(document.getElementById('map'), {});

    var centerPoint;
    if (window.location.search) {
        centerPoint = getParameterByName('location');
    } else {
        centerPoint = "ChIJ4zCVB4itEmsRl6iSDZ3DyLo";
    }
    querySearch(centerPoint);

}


function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}



function querySearch(placeId) {
    var latlang;
    geocoder = new google.maps.Geocoder;
    map.setZoom(14);
    geocoder.geocode({'placeId': placeId}, function(results, status) {
        if (status === 'OK') {
            if (results[0]) {
                map.setCenter(results[0].geometry.location);
                latlang = results[0].geometry.location;
                console.log("latlang = " + latlang);

                var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location
                });



                var request = {
                    location: results[0].geometry.location,
                    radius: '50000',
                    //types: ['natural_feature'],

                    name: 'Beach'

                };

                service = new google.maps.places.PlacesService(map);
                service.nearbySearch(request, callback);



            } else {
                window.alert('No results found');
            }
        } else {
            window.alert('Geocoder failed due to: ' + status);
        }
    });


}

function callback(results, status) {
    var infoWindow = new google.maps.InfoWindow();

    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            console.log(results[i].name);

            console.log(results[i]);

            var place = results[i];
            var marker = new google.maps.Marker({
                map: map,
                title: place.name,
                position: place.geometry.location,
                clickable: true,
                icon: {
                    size: new google.maps.Size(20, 20),
                    scaledSize: new google.maps.Size(20, 20),
                    url: results[i].icon

        }
            });



            var content = "<a href=/bar?id=" + place.id + ">" +  String(place.name) + "" ;
            google.maps.event.addListener(marker,'click', (function (marker, content, infoWindow) {
                return function() {
                    infoWindow.setContent(content);
                    infoWindow.open(map, marker);
                };
            })(marker, content, infoWindow));

        }
    }
}

function updateMap() {

    if (autocomplete.getPlace().place_id) {
        var val = document.getElementById('value').value;
        document.location.href = "?location=" + autocomplete.getPlace().place_id;
        console.log(autocomplete.getPlace().place_id);
    }




}





















