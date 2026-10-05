// Import the functions you need from the SDKs you need
importScripts(
    'https://www.gstatic.com/firebasejs/9.17.2/firebase-app-compat.js'
);
importScripts(
    'https://www.gstatic.com/firebasejs/9.17.2/firebase-messaging-compat.js'
);
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

firebase.initializeApp({
    apiKey: 'AIzaSyC5sShLqF1NT2TqHgcWUMWn3V9gKpVlgT4',
    authDomain: 'gmbr-20171.firebaseapp.com',
    projectId: 'gmbr-20171',
    storageBucket: 'gmbr-20171.appspot.com',
    messagingSenderId: '649087805743',
    appId: '1:649087805743:web:03cb5dfef4e118cba499da',
});

const messaging = firebase.messaging();
