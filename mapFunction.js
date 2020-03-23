var map;
var marker;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 59.3498092, lng: 18.0684758},
        zoom: 15,
        mapTypeId: 'satellite',
        disableDefaultUI: true,
        gestureHandling: 'cooperative'
    });
    map.setTilt(45);

    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: {lat: 59.340994, lng: 18.057983}
    });
    marker.addListener('click', toggleBounce);

    marker = new google.maps.Marker({
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP,
        position: {lat: 59.3498092, lng: 18.0684758}
    });
}

function toggleBounce(){
    if (marker.getAnimations() !== null){
        marker.setAnimation(null);
    } else{
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

function recenterMap(){
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
