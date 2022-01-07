
try {
    self.importScripts('/node_modules/firebase/firebase-app.js', '/node_modules/firebase/firebase-database.js') //firebase.app appears to work but the database one is not working so well.
    //I think it mightbe working...


    const firebaseConfig = {
        apiKey: "AIzaSyCGDZ5EFY58tXaGCVyFY-Of23pLZRwutlA",
        authDomain: "refrence-helper.firebaseapp.com",
        databaseURL: "https://refrence-helper-default-rtdb.firebaseio.com",
        projectId: "refrence-helper",
        storageBucket: "refrence-helper.appspot.com",
        messagingSenderId: "84252627285",
        appId: "1:84252627285:web:33aa83a0507f98a1e29fdc"
      };

     firebase.initializeApp(firebaseConfig);

     console.log(firebase)

     var db = firebase.firestore()
    }
 catch(err) {
    console.log(err)
}




