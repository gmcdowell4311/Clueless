document.addEventListener("DOMContentLoaded", event => {

    // const app = firebase.app();
    // console.log(app);

    const db = firebase.firestore();

    //const myPost = db.collection('post').doc('firstpost');

    //Retrieve data from firestore
    // myPost.get()
    //     .then(doc => {
    //         const data = doc.data();
    //         document.write(data.title + '</br>')
    //         console.log(data)
    //     })
    //     .catch(console.log)

    //Listen to data changes in really time.
    //All users will be notified at change.
    //Return real time stream we can listen to with call back function.  
    //Every time document changes it's giong to emit a new document to this function.
    // myPost.onSnapshot(doc => {
    //     const data = doc.data();
    //     document.write(data.title + '</br>')
    //     console.log(data) 
    // })
   
//    myPost.onSnapshot(doc => {
//         const data = doc.data();
//         document.querySelector('#title').innerHTML = data.title;
//         console.log(data) 
//     })
});

function googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
            .then(result => {
                const user = result.user;
                document.write('Logged in as ' + user.displayName)
                console.log(user)
            })
            .catch(console.log)
}

//Optistic update
function updatePost(e){
    const db = firebase.firestore();
    const myPost = db.collection('post').doc('firstpost');
    myPost.update({title : e.target.value});
}