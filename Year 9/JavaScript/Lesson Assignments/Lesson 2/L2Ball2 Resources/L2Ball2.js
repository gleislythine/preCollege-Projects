var bBalls = document.getElementById("balls");
wallE = document.getElementById("wallz");
callIt = document.getElementById("userPref");

function movesTo(whereAt) {
  var l = Number(bBalls.style.left.replace("px", "")),
    u = Number(bBalls.style.top.replace("px", ""));

  switch (whereAt) {
    case 'L':
      l -= callIt.value;
      break;
    case 'U':
      u -= callIt.value;
      break;
    case 'D':
      u += Number(callIt.value);
      break;
    case 'R':
      l += Number(callIt.value);
      break;
  }

  ballLedge = l
  ballRedge = l + Number(bBalls.style.width.replace("px", ""));
  ballDedge = u + Number(bBalls.style.height.replace("px", ""));
  ballUedge = u

  wallWidth = Number(wallE.style.width.replace("px", ""));
  wallHeight = Number(wallE.style.height.replace("px", ""));

  var newtop = ballUedge,
    newleft = ballLedge
  if (ballRedge > wallWidth)
    newleft = wallWidth - Number(bBalls.style.width.replace("px", ""))
  if (ballLedge < 0)
    newleft = 0
  if (ballDedge > wallHeight)
    newtop = wallHeight - Number(bBalls.style.height.replace("px", ""))
  if (ballUedge < 0)
    newtop = 0

  bBalls.style.left = newleft + "px"
  bBalls.style.top = newtop + "px"
};