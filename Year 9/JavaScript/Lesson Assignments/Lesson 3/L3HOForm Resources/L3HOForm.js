var unchk = document.getElementsByTagName('input');
for (i = 0; i < unchk.length; i++) {
  unchk[i].onclick = function(e) {
    if (e.shiftKey) {
      this.checked = false;
    }
  }
}
var res = document.getElementById("result");

hck1 = document.getElementById("ham1");
hck2 = document.getElementById("ham2");
hck3 = document.getElementById("ham3");
hck4 = document.getElementById("ham4");

fck1 = document.getElementById("fry1");
fck2 = document.getElementById("fry2");
fck3 = document.getElementById("fry3");
fck4 = document.getElementById("fry4");

dck1 = document.getElementById("dry1");
dck2 = document.getElementById("dry2");
dck3 = document.getElementById("dry3");
dck4 = document.getElementById("dry4");

function zeTotal() {
  res.value = 0;
  if (hck1.checked == true) {
    res.value = parseInt(res.value) + parseInt(hck1.value);
  }
  if (hck2.checked == true) {
    res.value = parseInt(res.value) + parseInt(hck2.value);
  }
  if (hck3.checked == true) {
    res.value = parseInt(res.value) + parseInt(hck3.value);
  }
  if (hck4.checked == true) {
    res.value = parseInt(res.value) + parseInt(hck4.value);
  }

  if (fck1.checked == true) {
    res.value = parseInt(res.value) + parseInt(fck1.value);
  }
  if (fck2.checked == true) {
    res.value = parseInt(res.value) + parseInt(fck2.value);
  }
  if (fck3.checked == true) {
    res.value = parseInt(res.value) + parseInt(fck3.value);
  }
  if (fck4.checked == true) {
    res.value = parseInt(res.value) + parseInt(fck4.value);
  }

  if (dck1.checked == true) {
    res.value = parseInt(res.value) + parseInt(dck1.value);
  }
  if (dck2.checked == true) {
    res.value = parseInt(res.value) + parseInt(dck2.value);
  }
  if (dck3.checked == true) {
    res.value = parseInt(res.value) + parseInt(dck3.value);
  }
  if (dck4.checked == true) {
    res.value = parseInt(res.value) + parseInt(dck4.value);
  }
}