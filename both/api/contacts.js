import { HTTP } from 'meteor/http';
import { Tracker } from 'meteor/tracker';



if (Meteor.isClient) {
  Tracker.autorun((computation) => {
    if (!Meteor.user()) {
      return;
    }


    computation.stop()



    function initClient() {
      gapi.client.init({
        // clientId and scope are optional if auth is not required.
        'apiKey': 'AIzaSyDUEqz188meqgU77_ir6cJZefGDsM8ONGM',
        'clientId': '1087941511441-vbg8naukooft9llagnvv80cg7t1gq527.apps.googleusercontent.com',
        'scope': 'https://www.googleapis.com/auth/contacts',
      }).then(function () {
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

        // Handle the initial sign-in state.
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      });
    }
    function updateSigninStatus(isSignedIn) {
      // When signin status changes, this function is called.
      // If the signin status is changed to signedIn, we make an API call.
      if (isSignedIn) {
        makeApiCall();
      }
    }

    function makeApiCall() {
      // Make an API call to the People API, and print the user's given name.
      gapi.client.request({
        'path': 'https://www.google.com/m8/feeds/contacts/default/full',
        'method': 'GET'        
      }).then(function(response) {
        console.log('Hello, ' + response.result);
      }, function(reason) {
        console.log('Error: ' + reason.result.error.message);
      });
    }

    gapi.load('client:auth2', initClient);
    makeApiCall();
  })
}