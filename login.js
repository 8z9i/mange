function login() {
    const username = document.getElementById("email").value;
    const password = document.getElementById("pass").value;

    const formData = new URLSearchParams();
    formData.append("username", username);
    formData.append("password", password);

    fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formData
    })
        .then(response => response.text())
        .then(token => {
            if (token && token.startsWith("ey")) {
                localStorage.setItem("token", token);
                window.location.href = "dashboard.html";
            } else {
                alert("Email or Password is incorrect");
            }
        })
        .catch(error => {
            alert("Error: " + error.message);
        });
}
// مصفوفة الفيديوهات
const videoList = [
    "raghoo.mp4",
    "raghoo1.mp4",
    "raghoo2.mp4",
    "raghoo4mp4"
    // أضف ما تريد من الفيديوهات
];

let videoIndex = 0;

function switchBackgroundVideo() {
    videoIndex = (videoIndex + 1) % videoList.length;
    const video = document.getElementById("background-video");
    const source = document.getElementById("video-source");
    source.src = videoList[videoIndex];
    video.load();
    video.play();
}

// كل دقيقة (60000ms)
setInterval(switchBackgroundVideo, 10000);

