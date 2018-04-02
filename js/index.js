var xhr = new XMLHttpRequest();
let bitcoin = document.getElementById("bitcoin");
function Update() {
  xhr.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json", true);
  xhr.onload = function() {
    console.log(JSON.parse(xhr.responseText).bpi.USD.rate);
    bitcoin.innerHTML = JSON.parse(xhr.responseText).bpi.USD.rate;
  };
  xhr.send();
}
Update();