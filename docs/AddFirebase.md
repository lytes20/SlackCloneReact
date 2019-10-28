# How to add Firebase
#### Steps
- Head over to https://firebase.google.com/
- Click on Go to console
- Click on new Project
- Give Project a name
- Add to web
- Install firebase ->  `$ yarn add firebase`
- Add firebase SDK

### Fetching Data from firebase firestore
```
var docRef = db.collection("cities");

docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
```

### Writing Data to the Firebase Firestore
```
db.collection("cities").doc("LA").set({
    name: "Los Angeles",
    state: "CA",
    country: "USA"
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});
```