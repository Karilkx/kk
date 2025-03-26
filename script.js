document.getElementById("no").addEventListener("click", function() {
    let hackerEffect = document.getElementById("hacker-effect");
    hackerEffect.style.display = "block";

    let fakeErrors = [
        "System Error: Access Denied!",
        "WARNING: Unauthorized action detected!",
        "HACKER DETECTED: Initiating security protocols...",
        "System Breach! Self-destruct sequence initiated...",
        "Error Code: 0x000FATAL"
    ];

    let i = 0;
    let interval = setInterval(function() {
        if (i < fakeErrors.length) {
            hackerEffect.innerHTML += fakeErrors[i] + "\n";
            i++;
        } else {
            clearInterval(interval);
            setTimeout(() => {
                document.body.innerHTML = "<h1 style='color:red;'>SYSTEM FAILURE</h1>";
            }, 2000);
        }
    }, 1000);
});

document.getElementById("yes").addEventListener("click", function() {
    let video = document.getElementById("scary-video");
    video.style.display = "block";
    video.play();
});
