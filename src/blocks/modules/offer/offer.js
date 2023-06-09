const label = document.querySelector('.dropdown__filter-selected');
const options = Array.from(document.querySelectorAll('.dropdown__select-option'));

options.forEach((option) => {
  option.addEventListener('click', () => {
    label.textContent = option.textContent;
    let dropdownInput = document.querySelector('#dropdown__value');
    dropdownInput.value = option.textContent;
  });
});

document.addEventListener('click', (e) => {
  const toggle = document.querySelector('.dropdown__switch');
  const element = e.target;

  if (element == toggle) return;

  const isDropdownChild = element.closest('.dropdown__filter');    
  
  if (!isDropdownChild) {
    toggle.checked = false;
    
  }
});

var stepSlider = document.getElementById('slider-step');


noUiSlider.create(stepSlider, {
    start: [0],
    step: 1,
    range: {
        'min': [0],
        'max': [100]
    }
});

var stepSliderValueElement = document.getElementById('slider-step-value');

stepSlider.noUiSlider.on('update', function (values, handle) {
    stepSliderValueElement.value = values[handle];
});

let inputs = document.querySelectorAll('.offer__download');
Array.prototype.forEach.call(inputs, function (input) {
  let label = input.nextElementSibling,
    labelVal = label.querySelector('.offer__file-button-text').innerText;

  input.addEventListener('change', function (e) {
    let countFiles = '';
    if (this.files && this.files.length >= 1)
      countFiles = this.files.length;

    if (countFiles)
      label.querySelector('.offer__file-button-text').innerText = 'Выбрано файлов: ' + countFiles;
    else
      label.querySelector('.offer__file-button-text').innerText = labelVal;
  });
});