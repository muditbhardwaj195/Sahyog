function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
    location.reload();
    });
}
function onSignIn(googleUser) {
var profile = googleUser.getBasicProfile();
window.location = "http://sahyog.netlify.com";
document.querySelector('.signinbtn').setAttribute('style','display:none;');
document.querySelector('.pcontent').setAttribute('style','display:block;');
document.querySelector('.pcontent').innerHTML = profile.getName();
}
