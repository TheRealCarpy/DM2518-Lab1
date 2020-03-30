var map;
var marker;

var locations = [
    {lat: 59.324173, lng: 18.070550},
    {lat: 59.347172, lng: 18.060795},
    {lat: 59.332414, lng: 18.067970},
    {lat: 59.334054, lng: 18.068339},
    {lat: 59.340838, lng: 18.040068},
]

function initMap() {
    //Create maps and markers with its positions etc.
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 59.3498092, lng: 18.0684758},
        zoom: 15,
        mapTypeId: 'roadmap',
        disableDefaultUI: true,
        gestureHandling: 'cooperative'
    });
    map.setTilt(45);

    //Information about my favorite place
    var contentString = 'Here is Chatalk, A bubble tea cafe with delicious egg waffles. Although it is a small cafe, it is very cozy atmosphere when there is not too many people';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    //Marker that does the animation
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: {lat: 59.3498092, lng: 18.0684758}
    });
    marker.addListener('click', toggleBounce);

    //Marker that shows my favorite place
    marker1 = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        position: {lat: 59.340972, lng: 18.057812},
        icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}
    });

    marker1.addListener('click', function(){map.setCenter({lat: 59.340972, lng: 18.057812}); infowindow.open(map, marker1)});

    //creating more markers to code the clusterings
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    markers = locations.map(function(location, i){
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerClusters = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}

function toggleBounce(){
    //Bounce animation on the marker
    if (marker.getAnimations() !== null){
        marker.setAnimation(null);
    } else{
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

//Function of the buttons
function recenterMap(){
    //Function to recenter map
    map.setCenter({lat:59.3498092, lng: 18.0684758})
}

function zoomIn(){
    var zoomLvl = map.getZoom();
    zoomLvl += 1;
    map.setZoom(zoomLvl);
}

function zoomOut(){
    var zoomLvl = map.getZoom();
    zoomLvl -= 1;
    map.setZoom(zoomLvl);
}

$('.enter_link').click(function () {
    $(this).parent('#splashscreen').fadeOut(500);
    window.location.href = "index.html";
});