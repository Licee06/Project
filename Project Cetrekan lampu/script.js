// function saklar() {
//   let toggle1 = document.getElementById("default-toggle1");
//   let toggle2 = document.getElementById("default-toggle2");
//   let toggle3 = document.getElementById("default-toggle3");
//   let toggle4 = document.getElementById("default-toggle4");
//   let toggle5 = document.getElementById("default-toggle5");
//   let toggle6 = document.getElementById("default-toggle6");
//   let toggle7 = document.getElementById("default-toggle7");
//   let toggle8 = document.getElementById("default-toggle8");
//   let toggle9 = document.getElementById("default-toggle9");
//   let toggle10 = document.getElementById("default-toggle10");

//   let lampu1 = document.getElementById("lampu1");
//   let lampu2 = document.getElementById("lampu2");
//   let lampu3 = document.getElementById("lampu3");
//   let lampu4 = document.getElementById("lampu4");
//   let lampu5 = document.getElementById("lampu5");
//   let lampu6 = document.getElementById("lampu6");
//   let lampu7 = document.getElementById("lampu7");
//   let lampu8 = document.getElementById("lampu8");
//   let lampu9 = document.getElementById("lampu9");
//   let lampu10 = document.getElementById("lampu10");

//   // toggle.checked ? console.log("nyala") : console.log("mati")
//   // console.log("test", toggle.checked)
//   if (toggle1.checked){
//       lampu1.src = "assets/images/on.png";
//     }else{
//       lampu1.src = "assets/images/off.png";
//     }

//   if (toggle2.checked){
//       lampu2.src = "assets/images/on.png";
//     }else{
//       lampu2.src = "assets/images/off.png";
//     }

//   if (toggle3.checked){
//       lampu3.src = "assets/images/on.png";
//     }else{
//       lampu3.src = "assets/images/off.png";
//     }

//   if (toggle4.checked){
//       lampu4.src = "assets/images/on.png";
//     }else{
//       lampu4.src = "assets/images/off.png";
//     }

//   if (toggle5.checked){
//       lampu5.src = "assets/images/on.png";
//     }else{
//       lampu5.src = "assets/images/off.png";
//     }

//   if (toggle6.checked){
//       lampu6.src = "assets/images/on.png";
//     }else{
//       lampu6.src = "assets/images/off.png";
//     }

//   if (toggle7.checked){
//       lampu7.src = "assets/images/on.png";
//     }else{
//       lampu7.src = "assets/images/off.png";
//     }

//   if (toggle8.checked){
//       lampu8.src = "assets/images/on.png";
//     }else{
//       lampu8.src = "assets/images/off.png";
//     }

//   if (toggle9.checked){
//       lampu9.src = "assets/images/on.png";
//     }else{
//       lampu9.src = "assets/images/off.png";
//     }

//   if (toggle10.checked){
//       lampu10.src = "assets/images/on.png";
//     }else{
//       lampu10.src = "assets/images/off.png";
//     }


// }

function saklarGrup(ruangan) {
  let grupToggle;
  let toggles = [];
  let lamps = [];

  switch (ruangan) {
    case 'keluarga':
      grupToggle = document.getElementById("grup-keluarga");
      toggles = [
        document.getElementById("default-toggle1"),
        document.getElementById("default-toggle2"),
        document.getElementById("default-toggle3")
      ];
      lamps = [
        document.getElementById("lampu1"),
        document.getElementById("lampu2"),
        document.getElementById("lampu3")
      ];
      break;

    case 'makan':
      grupToggle = document.getElementById("grup-makan");
      toggles = [document.getElementById("default-toggle4")];
      lamps = [document.getElementById("lampu4")];
      break;

    case 'tidur':
      grupToggle = document.getElementById("grup-tidur");
      toggles = [
        document.getElementById("default-toggle5"),
        document.getElementById("default-toggle6")
      ];
      lamps = [
        document.getElementById("lampu5"),
        document.getElementById("lampu6")
      ];
      break;

    case 'tamu':
      grupToggle = document.getElementById("grup-tamu");
      toggles = [
        document.getElementById("default-toggle7"),
        document.getElementById("default-toggle8"),
        document.getElementById("default-toggle9"),
        document.getElementById("default-toggle10")
      ];
      lamps = [
        document.getElementById("lampu7"),
        document.getElementById("lampu8"),
        document.getElementById("lampu9"),
        document.getElementById("lampu10")
      ];
      break;
  }

  // Mengubah status semua toggle dan lampu berdasarkan grup toggle
  for (let i = 0; i < toggles.length; i++) {
    toggles[i].checked = grupToggle.checked; // Set semua toggle sesuai dengan grup toggle
    if (grupToggle.checked) {
      lamps[i].src = "assets/images/on.png";
    } else {
      lamps[i].src = "assets/images/off.png";
    }
  }
}

function saklar(ruangan) {
  let toggles = [];
  let lamps = [];

  switch (ruangan) {
    case 'keluarga':
      toggles = [
        document.getElementById("default-toggle1"),
        document.getElementById("default-toggle2"),
        document.getElementById("default-toggle3")
      ];
      lamps = [
        document.getElementById("lampu1"),
        document.getElementById("lampu2"),
        document.getElementById("lampu3")
      ];
      break;

    case 'makan':
      toggles = [document.getElementById("default-toggle4")];
      lamps = [document.getElementById("lampu4")];
      break;

    case 'tidur':
      toggles = [
        document.getElementById("default-toggle5"),
        document.getElementById("default-toggle6")
      ];
      lamps = [
        document.getElementById("lampu5"),
        document.getElementById("lampu6")
      ];
      break;

    case 'tamu':
      toggles = [
        document.getElementById("default-toggle7"),
        document.getElementById("default-toggle8"),
        document.getElementById("default-toggle9"),
        document.getElementById("default-toggle10")
      ];
      lamps = [
        document.getElementById("lampu7"),
        document.getElementById("lampu8"),
        document.getElementById("lampu9"),
        document.getElementById("lampu10")
      ];
      break;
  }

  // Mengubah status lampu berdasarkan toggle
  for (let i = 0; i < toggles.length; i++) {
    if (toggles[i].checked) {
      lamps[i].src = "assets/images/on.png";
    } else {
      lamps[i].src = "assets/images/off.png";
    }
  }

  // Update status grup toggle berdasarkan status toggle individu
  let grupToggle = document.getElementById(`grup-${ruangan}`);
  grupToggle.checked = toggles.every(toggle => toggle.checked);
}