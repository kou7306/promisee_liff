liff.init({
    liffId: '2002096181-Ryql27BY', // Use own liffId
    withLoginOnExternalBrowser: true, // Enable automatic login process
}).then(() => {
    // Start to use liff's api
    runApp();
});


function runApp() {
    liff.getProfile().then(profile => {
            const userName = profile.displayName;
            document.getElementById('userName').innerText = `User: ${userName}`;
        })
        .catch(error => {
            console.error('Error getting location', error);
        });
    }