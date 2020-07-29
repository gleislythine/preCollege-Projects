//I DON'T CARE ABOUT MY UGLY MESSY CODE, AND I DO HATE IT.
function byId(id) {
  return document.getElementById(id);
}

var dropList = byId("vgCompany");
var photoInfo = byId("gameInfo");
var ascTitle = byId("ascGames");

var bethGame = byId("Bethesda");
var blizGame = byId("Blizzard");
var sonyGame = byId("Sony");
var valvGame = byId("Valve");

function pcmrHome() {
  dropList.selectedIndex = "0";
  photoInfo.innerHTML = null;
  ascTitle.innerHTML = null;
  bethGame.style.display = "none";
  blizGame.style.display = "none";
  sonyGame.style.display = "none";
  valvGame.style.display = "none";
}

function theCompany() {
  if (dropList.value == "Bethesda Softworks") {
    photoInfo.innerHTML = "<img src='L5VGForm Resources/BSW.jpg' class='pcmrhome'>";
    ascTitle.innerHTML = "Associated Games <br>";
    bethGame.style.display = "block";
    if (bethGame.value == "F4") {
      photoInfo.innerHTML = "<img src='L5VGForm Resources/F4.jpg'> <br> <h2>Fallout 4</h2> <br> ESRB Rating <input value='M' readonly> <br> Initial Release Date <input value='November 10, 2015' readonly> <br> Platforms <input value='Windows PC, PlayStation 4, Xbox One' readonly>";
    }
    if (bethGame.value == "TESVS") {
      photoInfo.innerHTML = "<img src='L5VGForm Resources/TESVS.jpg'> <br> <h2>The Elder Scrolls V: Skyrim</h2> <br> ESRB Rating <input value='M' readonly> <br> Initial Release Date <input value='November 11, 2011' readonly> <br> Platforms <input value='Windows PC, PlayStation 3, Xbox 360' readonly>";
    }
    if (bethGame.value == "DSHNRD") {
      photoInfo.innerHTML = "<img src='L5VGForm Resources/Dishonored.jpg'> <br> <h2>Dishonored</h2> <br> ESRB Rating <input value='M' readonly> <br> Initial Release Date <input value='October 09, 2012' readonly> <br> Platforms <input value='Windows PC, PlayStation 4, PlayStation 3, Xbox One, Xbox 360' readonly>";
    }
    if (bethGame.value == "TEW") {
      photoInfo.innerHTML = "<img src='L5VGForm Resources/TEW.jpg'> <br> <h2>The Evil Within</h2> <br> ESRB Rating <input value='M' readonly> <br> Initial Release Date <input value='October 2014' readonly> <br> Platforms <input value='Windows PC, PlayStation 4, Xbox One' readonly>";
    }
  } else {
    bethGame.style.display = "none";
  }

  if (dropList.value == "Blizzard Entertainment") {
    photoInfo.innerHTML = "<img src='L5VGForm Resources/BE.jpg' class='pcmrhome'>";
    ascTitle.innerHTML = "Associated Games <br>";
    blizGame.style.display = "block";
    if (blizGame.value == "S2") {
      photoInfo.innerHTML = "<img src='L5VGForm Resources/S2.jpg'> <br> <h2>Starcraft 2</h2> <br> ESRB Rating <input value='T' readonly> <br> Initial Release Date <input value='July 27, 2010' readonly> <br> Platforms <input value='Windows PC, Macintosh' readonly>";
    }
    if (blizGame.value == "WOW") {
      photoInfo.innerHTML = "<img src='L5VGForm Resources/WoW.png'> <br> <h2>World of Warcraft</h2> <br> ESRB Rating <input value='T' readonly> <br> Initial Release Date <input value='November 23, 2004' readonly> <br> Platforms <input value='Windows PC, Macintosh' readonly>";
    }
    if (blizGame.value == "D3") {
      photoInfo.innerHTML = "<img src='L5VGForm Resources/D3.jpg'> <br> <h2>Diablo 3</h2> <br> ESRB Rating <input value='M' readonly> <br> Initial Release Date <input value='May 15, 2012' readonly> <br> Platforms <input value='Windows PC, Macintosh, PlayStation 4, PlayStation 3, Xbox One, Xbox 360' readonly>";
    }
    if (blizGame.value == "HOTS") {
      photoInfo.innerHTML = "<img src='L5VGForm Resources/HotS.jpg'> <br> <h2>Heroes of the Storm</h2> <br> ESRB Rating <input value='T' readonly> <br> Initial Release Date <input value='June 02, 2015' readonly> <br> Platforms <input value='Windows PC, Macintosh' readonly>";
    }
  } else {
    blizGame.style.display = "none";
  }

  if (dropList.value == "Sony Computer Entertainment") {
    photoInfo.innerHTML = "<img src='L5VGForm Resources/SCE.jpg' class='pcmrhome'>";
    ascTitle.innerHTML = "Associated Games <br>";
    sonyGame.style.display = "block";
    if (sonyGame.value == "MC") {
      photoInfo.innerHTML = "<img src='L5VGForm Resources/MC.jpg'> <br> <h2>Minecraft</h2> <br> ESRB Rating <input value='E' readonly> <br> Initial Release Date <input value='October 07, 2011' readonly> <br> Platforms <input value='Windows PC, Macintosh, Linux, Android, PlayStation 4, PlayStation 3, PlayStation Vita, Xbox One, Xbox 360, Wii U, Web Browsers, FireTV, Java' readonly>";
    }
    if (sonyGame.value == "U4") {
      photoInfo.innerHTML = "<img src='L5VGForm Resources/U4.jpg'> <br> <h2>Uncharted 4</h2> <br> ESRB Rating <input value='M' readonly> <br> Initial Release Date <input value='April 26, 2016' readonly> <br> Platforms <input value='PlayStation 4' readonly>";
    }
    if (sonyGame.value == "TLOU") {
      photoInfo.innerHTML = "<img src='L5VGForm Resources/TLoU.jpg'> <br> <h2>The Last of Us</h2> <br> ESRB Rating <input value='M' readonly> <br> Initial Release Date <input value='June 14, 2013' readonly> <br> Platforms <input value='PlayStation 4, PlayStation 3' readonly>";
    }
    if (sonyGame.value == "SOTC") {
      photoInfo.innerHTML = "<img src='L5VGForm Resources/SotC.jpg'> <br> <h2>Shadow of the Colossus</h2> <br> ESRB Rating <input value='T' readonly> <br> Initial Release Date <input value='October 18, 2005' readonly> <br> Platforms <input value='PlayStation 3, PlayStation 2' readonly>";
    }
  } else {
    sonyGame.style.display = "none";
  }

  if (dropList.value == "Valve Corporation") {
    photoInfo.innerHTML = "<img src='L5VGForm Resources/VC.jpg' class='pcmrhome'>";
    ascTitle.innerHTML = "Associated Games <br>";
    valvGame.style.display = "block";
    if (valvGame.value == "HL2") {
      photoInfo.innerHTML = "<img src='L5VGForm Resources/HL2.jpg'> <br> <h2>Half-Life 2</h2> <br> ESRB Rating <input value='M' readonly> <br> Initial Release Date <input value='November 16, 2004' readonly> <br> Platforms <input value='Windows PC, Macintosh, Linux, IBM, PlayStation 3, Xbox 360, Xbox, Shield Portable' readonly>";
    }
    if (valvGame.value == "CSGO") {
      photoInfo.innerHTML = "<img src='L5VGForm Resources/CSGO.jpeg'> <br> <h2>Counter-Strike: Global Offensive</h2> <br> ESRB Rating <input value='M' readonly> <br> Initial Release Date <input value='August 21, 2012' readonly> <br> Platforms <input value='Windows PC, Macintosh, Linux, PlayStation 3, Xbox 360' readonly>";
    }
    if (valvGame.value == "P2") {
      photoInfo.innerHTML = "<img src='L5VGForm Resources/P2.jpg'> <br> <h2>Portal 2</h2> <br> ESRB Rating <input value='E' readonly> <br> Initial Release Date <input value='April 18, 2011' readonly> <br> Platforms <input value='Windows PC, Macintosh, Linux, PlayStation 3, Xbox 360' readonly>";
    }
    if (valvGame.value == "D2") {
      photoInfo.innerHTML = "<img src='L5VGForm Resources/D2.jpg'> <br> <h2>Defense of the Ancients 2</h2> <br> ESRB Rating <input value='T' readonly> <br> Initial Release Date <input value='July 09, 2013' readonly> <br> Platforms <input value='Windows PC, Macintosh, Linux' readonly>";
    }
  } else {
    valvGame.style.display = "none";
  }
}