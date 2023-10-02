var SpeechRecognition = window.webkitSpeechRecognition
var recognition = new SpeechRecognition()

function start() {
    document.getElementById("textbox").innerHTML = ""
    recognition.start()
}
recognition.onresult = function (e) {
    console.log(e);
    content = e.results[0][0].transcript
    document.getElementById("textbox").innerHTML = content
    if (content == "selfie") {

        while (count <= 3) {
            speak(count)

            count++
        }
    }
}
count = 1
function speak(count) {
    synth = window.speechSynthesis
    speak_data = "Taking your selfie in five seconds"
    utterthis = new SpeechSynthesisUtterance(speak_data)
    synth.speak(utterthis)
    Webcam.attach(camera)
    setTimeout(function () {
        takesnapshot(count)
        save(count)
    }, 5000)

}
function takesnapshot(count) {
    Webcam.snap(function (data) {
        document.getElementById("result" + count).innerHTML = "<img id='selfie'" + count + " src='" + data + "'>"
    })
}

Webcam.set({
    width: 350,
    height: 250,
    Image_format: "png",
    png_quality: 90
})
camera = document.getElementById("camera")

function save(count) {
    link = document.getElementById("link")
    image = document.getElementById("selfie" + count).src
    link.href = image
    link.click()
}