fetch('https://your-database-url.firebaseio.com/projects.json')
  .then((response) => response.json())
  .then((projects) => {
    const projectList = document.getElementById('project-list');
    for (let id in projects) {
      const project = projects[id];
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        ${project.type === 'video' ? 
          `<video controls src="${project.media}" width="100%"></video>` : 
          `<img src="${project.media}" width="100%" />`}
      `;
      projectList.appendChild(card);
    }
  });
