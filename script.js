async function initializeLiff() {
    await liff.init({ liffId: '2002096181-bo2n93zQ' });
    if (liff.isLoggedIn()) {
        runApp();
    } else {
        liff.login();
    }
}

function runApp() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 0, lng: 0 },
        zoom: 2,
    });

    liff.getProfile().then(profile => {
        const userName = profile.displayName;
        const userId = profile.userId;

        liff.getGeolocation()
            .then(location => {
                const userLocation = new google.maps.Marker({
                    position: { lat: location.latitude, lng: location.longitude },
                    map: map,
                    title: userName,
                });

                map.setCenter({ lat: location.latitude, lng: location.longitude });
            })
            .catch(error => {
                console.error('Error getting location', error);
            });
    });
}

initializeLiff();