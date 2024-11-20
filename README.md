<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MAKS TÖRNER Portfolio</title>
    <style>
        body {
            background-color: #121212;
            color: white;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        header {
            text-align: center;
            padding: 100px;
        }
        header h1 {
            font-size: 5em;
            color: #00bcd4;
        }
        .projects {
            padding: 20px;
        }
        .project {
            background: #1f1f1f;
            margin: 20px 0;
            padding: 20px;
            border-radius: 8px;
        }
        .project h3 {
            margin: 0;
        }
        .project img, .project video {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
        }
    </style>
</head>
<body>
    <header>
        <h1>MAKS TÖRNER</h1>
    </header>
    <main class="projects">
        <div class="project">
            <h3>Project 1</h3>
            <img src="assets/project1.jpg" alt="Project 1">
            <p>Description for Project 1.</p>
        </div>
        <div class="project">
            <h3>Project 2</h3>
            <video controls>
                <source src="assets/project2.mp4" type="video/mp4">
            </video>
            <p>Description for Project 2.</p>
        </div>
    </main>
</body>
</html>
