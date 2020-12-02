const recorderContainer = document.getElementById("jsRecordContainer");
const recordBtn = document.getElementById("jsRecordBtn");
const videoPreview = document.getElementById("jsVideoPreview");

let streamObject;

const handleVideoData = event => {
  console.log(event);
};

const startRecording = () => {
  const videoRecorder = new MediaRecorder(streamObject);
  videoRecorder.start();
  videoRecorder.addEventListener("dataavailable", handleVideoData);
};

const getVideo = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({   // getUserMedia : 녹화 권한주기
      audio: true,
      video: { width: 1280, height: 720 }
    });
    videoPreview.srcObject = stream;  // srcObject : 비디오는 파일이 아닌 객체이기 때문에 사용
    videoPreview.muted = true;  //녹화하면서 내 목소리 들리지 않게 하기
    videoPreview.play(); 
    recordBtn.innerHTML = "Stop recording";
    streamObject = stream;
    startRecording();
  } catch (error) {
    recordBtn.innerHTML = "☹️ Cant record";
  } finally {
    recordBtn.removeEventListener("click", getVideo);
  }
};

function init() {
  recordBtn.addEventListener("click", startRecording);
  recordBtn.addEventListener("click", getVideo);
}

if (recorderContainer) {
  init();
}