// app.js
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const loginButton = document.getElementById("loginButton");
const logoutButton = document.getElementById("logoutButton");
const projectForm = document.getElementById("projectForm");
const submitProjectButton = document.getElementById("submitProjectButton");
const projectList = document.getElementById("projectList");
const projectTitle = document.getElementById("projectTitle");
const projectDescription = document.getElementById("projectDescription");
const projectMedia = document.getElementById("projectMedia");

loginButton.addEventListener("click", loginWithGoogle);
logoutButton.addEventListener("click", logout);
submitProjectButton.addEventListener("click", submitProject);

auth.onAuthStateChanged(user => {
  if (user) {
    loginButton.style.display = "none";
    logoutButton.style.display = "block";
    projectForm.style.display = "block";
    loadProjects();
  } else {
    loginButton.style.display = "block";
    logoutButton.style.display = "none";
    projectForm.style.display = "none";
  }
});

function loginWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
}

function logout() {
  auth.signOut();
}

function submitProject() {
  const title = projectTitle.value;
  const description = projectDescription.value;
  const file = projectMedia.files[0];

  if (!title || !description || !file) {
    alert("Fyll i alla fält!");
    return;
  }

  const storageRef = storage.ref('projects/' + file.name);
  const uploadTask = storageRef.put(file);

  uploadTask.on("state_changed", null, error => {
    console.error("Fel vid uppladdning:", error);
  }, () => {
    uploadTask.snapshot.ref.getDownloadURL().then(url => {
      const projectData = {
        title,
        description,
        mediaUrl: url
      };

      db.collection("projects").add(projectData).then(() => {
        loadProjects();
      }).catch(error => {
        console.error("Fel vid uppladdning av projekt:", error);
      });
    });
  });
}

function loadProjects() {
  db.collection("projects").get().then(snapshot => {
    projectList.innerHTML = "";
    snapshot.forEach(doc => {
      const project = doc.data();
      const projectDiv = document.createElement("div");
      projectDiv.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <img src="${project.mediaUrl}" alt="${project.title}" style="max-width: 100%;">
      `;
      projectList.appendChild(projectDiv);
    });
  }).catch(error => {
    console.error("Fel vid laddning av projekt:", error);
  });
}
