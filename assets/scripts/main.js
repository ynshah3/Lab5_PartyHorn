function changeVolumeIcon(volume) {
  let obj = document.getElementById("volume-image");
  if (volume <= 100 && volume >= 67) {
    obj.src = "./assets/media/icons/volume-level-3.svg";
    document.getElementById("honk-btn").disabled = false;
  } else if (volume <= 66 && volume >= 34) {
    obj.src = "./assets/media/icons/volume-level-2.svg";
    document.getElementById("honk-btn").disabled = false;
  } else if (volume <= 33 && volume >= 1) {
    obj.src = "./assets/media/icons/volume-level-1.svg";
    document.getElementById("honk-btn").disabled = false;
  } else {
    obj.src = "./assets/media/icons/volume-level-0.svg";
    document.getElementById("honk-btn").disabled = true;
  }
}

document.getElementById("volume-number").addEventListener("input", function updateVolumeSlider() {
  let x = document.getElementById("volume-number").value;
  document.getElementById("volume-slider").value = x;
  document.getElementById("horn-sound").volume = x/100;
  changeVolumeIcon(x);
}
);

document.getElementById("volume-slider").addEventListener("input", function updateVolumeNumber() {
  let x = document.getElementById("volume-slider").value;
  document.getElementById("volume-number").value = x;
  document.getElementById("horn-sound").volume = x/100;
  changeVolumeIcon(x);
});

let objList = document.getElementsByName("radio-sound");

for (let i = 0; i < objList.length; i++) {
  objList[i].addEventListener("click", function checkAndUpdate() {
    let chkAirHorn = document.getElementById("radio-air-horn").checked;
    let chkCarHorn = document.getElementById("radio-car-horn").checked;
    if (chkAirHorn) {
      updateImageAndAudio("./assets/media/images/air-horn.svg", "./assets/media/audio/air-horn.mp3");
    } else if (chkCarHorn) {
      updateImageAndAudio("./assets/media/images/car.svg", "./assets/media/audio/car-horn.mp3");
    } else {
      updateImageAndAudio("./assets/media/images/party-horn.svg", "./assets/media/audio/party-horn.mp3");
    }
  });
}

function updateImageAndAudio(imageURL, audioURL) {
  let imageObj = document.getElementById("sound-image");
  let audioObj = document.getElementById("horn-sound");
  imageObj.src = imageURL;
  audioObj.src = audioURL;
}

document.getElementById("honk-btn").addEventListener("click", function doNotReload() {
  document.getElementById("honk-btn").type = "button";
  document.getElementById("horn-sound").play();
});