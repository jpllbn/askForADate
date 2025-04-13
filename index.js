function dateUs() {
    askCrush = prompt("Can I date you? (yes/no)")
    if (askCrush == "yes") {
        document.getElementById('container').innerHTML = `
        <h1> Congrats, You are now dating </h1>
        <p> Proceed with this link: <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Click Me</a> </p>
        `;
    } else {
        document.getElementById('container').innerHTML = `
        <h1> Sorry, you are not dating </h1>
        <p> Proceed with this link: <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Click Me</a> </p>
        `;
    }
}

dateUs()



