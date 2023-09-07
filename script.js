let container = document.getElementById("container");
let btn = document.getElementById("submit-btn");
let rateSection = document.getElementById("rate-section");
const rateValue = rateSection.children;

let note;

function takeValue() {
  for (let i = 0; i < rateValue.length; i++) {
    rateValue[i].onclick = (value) => {
      rateValue[i].style.backgroundColor = "var(--Orange)";
      for (value of rateValue) {
        if (rateValue[i].innerHTML !== value.innerHTML) {
          value.style.backgroundColor = "#262f38";
        }
      }
      note = rateValue[i].innerHTML;
    };
  }
}

function thankPage(firstPage, SecPage) {
  if (note == undefined) {
    return;
  }
  firstPage = container.firstElementChild;
  SecPage = container.lastElementChild;
  firstPage.style.display = "none";
  SecPage.style.display = "block";

  document.getElementById(
    "rate-number"
  ).innerHTML = `You selected ${note} of ${rateValue.length}`;
}

btn.onclick = thankPage;
rateSection.onmouseover = takeValue;
