function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
}
function onSignIn(googleUser) {
var profile = googleUser.getBasicProfile();
console.log(profile.getName());
document.querySelector('.signinbtn').setAttribute('style','display:none;');
document.querySelector('.pcontent').setAttribute('style','display:block;');
document.querySelector('.pcontent').innerHTML = profile.getName();
}
