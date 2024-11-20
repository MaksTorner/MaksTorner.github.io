// Firebase konfiguration
const firebaseConfig = {
    apiKey: "din-api-key",
    authDomain: "ditt-projekt.firebaseapp.com",
    databaseURL: "https://ditt-projekt.firebaseio.com",
    projectId: "ditt-projekt",
    storageBucket: "ditt-projekt.appspot.com",
};

// Initiera Firebase
firebase.initializeApp(firebaseConfig);

// Logga in
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            document.getElementById('login-form').style.display = 'none';
            document.getElementById('admin-panel').style.display = 'block';
        })
        .catch(error => alert(error.message));
}

// Ladda upp projekt
function addProject() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const mediaFile = document.getElementById('media').files[0];
    const type = document.getElementById('type').value;

    const storageRef = firebase.storage().ref(`media/${mediaFile.name}`);
    storageRef.put(mediaFile).then(snapshot => {
        storageRef.getDownloadURL().then(url => {
            firebase.database().ref('projects').push({
                title,
                description,
                media: url,
                type
            });
            alert('Project added successfully!');
        });
    });
}
