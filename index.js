(function () {
  const redInput = document.getElementById('redInput')
  const greenInput = document.getElementById('greenInput')
  const blueInput = document.getElementById('blueInput')
  const button = document.getElementById('button')
  const hexColorCode = document.getElementById('hexColor')
  const hexColorBox = document.getElementById('hexColorBox')

  function rgbToHex() {
    if (Number(redInput.value) > 255 || Number(greenInput.value) > 255 || Number(blueInput.value) > 255 || Number(redInput.value) < 0 || Number(greenInput.value) < 0 || Number(blueInput.value) < 0) {
      alert("數字超過0~255的範圍請重新輸入")
      redInput.value = ""
      greenInput.value = ""
      blueInput.value = ""
      hexColorCode.innerHTML = ""
      hexColorBox.style.backgroundColor = "white"
    }
    else {
      let redValue = Number(redInput.value).toString(16)
      let greenValue = Number(greenInput.value).toString(16)
      let blueValue = Number(blueInput.value).toString(16)
      hexColorCode.innerHTML = `#${redValue.padStart(2, '0')}${greenValue.padStart(2, '0')}${blueValue.padStart(2, '0')}`
      hexColorBox.style.backgroundColor = `#${redValue.padStart(2, '0')}${greenValue.padStart(2, '0')}${blueValue.padStart(2, '0')}`
    }


  }


  button.addEventListener('click', rgbToHex)

})()