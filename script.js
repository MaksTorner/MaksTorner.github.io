/* Konfiguration för partiklar */
particlesJS('particles-js', {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: { value: "#ffffff" },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
        },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});

fetch("projects.json")
  .then(response => response.json())
  .then(projects => {
    const projectContainer = document.getElementById("projects");
    projects.forEach(project => {
      const projectElement = document.createElement("div");
      projectElement.classList.add("project-card");

      let mediaContent = "";
      if (project.type === "video") {
        mediaContent = `<video controls src="${project.media}" width="300"></video>`;
      } else if (project.type === "image") {
        mediaContent = `<img src="${project.media}" alt="${project.title}" width="300"/>`;
      }

      projectElement.innerHTML = `
        <h3>${project.title}</h3>
        ${mediaContent}
        <p>${project.description}</p>
      `;
      projectContainer.appendChild(projectElement);
    });
  });
