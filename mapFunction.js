var map;
var marker;

var locations = [
    {lat: 59.324173, lng: 18.070550},
    {lat: 59.347172, lng: 18.060795},
    {lat: 59.340491, lng: 18.057951},
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

    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: {lat: 59.3498092, lng: 18.0684758}
    });
    marker.addListener('click', toggleBounce);

    markers = locations.map(function(location, i){
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, {imagepath:'/markerClustersIcon'});
}

function toggleBounce(){
    //Bounce animation on the marker
    if (marker.getAnimations() !== null){
        marker.setAnimation(null);
    } else{
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

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
