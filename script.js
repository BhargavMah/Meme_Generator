async function getMeme() {
    let res = await fetch('https://meme-api.com/gimme');
    let data = await res.json();
    document.getElementById('meme').src = data.url;
}

document.body.addEventListener('click', function(e) {
    let splash = document.createElement('div');
    splash.className = 'color-splash';
    splash.style.left = `${e.clientX - 25}px`;
    splash.style.top = `${e.clientY - 25}px`;
    document.body.appendChild(splash);
    setTimeout(() => splash.remove(), 500);
});

function moveButton() {
    let btn = document.getElementById('magicButton');
    btn.style.top = Math.random() * window.innerHeight + 'px';
    btn.style.left = Math.random() * window.innerWidth + 'px';
}

function checkLogin() {
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "index.html";
    }
}

function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
}
