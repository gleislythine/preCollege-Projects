var res = document.getElementById("result");

ck1 = document.getElementById("ch1");
ck2 = document.getElementById("ch2");
ck3 = document.getElementById("ch3");
ck4 = document.getElementById("ch4");
ck5 = document.getElementById("ch5");

nm1 = document.getElementById("in1");
nm2 = document.getElementById("in2");
nm3 = document.getElementById("in3");
nm4 = document.getElementById("in4");
nm5 = document.getElementById("in5");

function clearAll() {
  nm1.value = 0;
  nm2.value = 0;
  nm3.value = 0;
  nm4.value = 0;
  nm5.value = 0;
  res.value = 0;
}

function zeTotal() {
  res.value = 0;
  if (ck1.checked == true) {
    res.value = parseInt(res.value) + parseInt(nm1.value);
  }
  if (ck2.checked == true) {
    res.value = parseInt(res.value) + parseInt(nm2.value);
  }
  if (ck3.checked == true) {
    res.value = parseInt(res.value) + parseInt(nm3.value);
  }
  if (ck4.checked == true) {
    res.value = parseInt(res.value) + parseInt(nm4.value);
  }
  if (ck5.checked == true) {
    res.value = parseInt(res.value) + parseInt(nm5.value);
  }
}