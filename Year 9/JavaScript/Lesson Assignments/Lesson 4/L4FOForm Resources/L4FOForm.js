function byId(id) {
  return document.getElementById(id);
}

function byTag(tag) {
  return document.getElementsByTagName(tag);
}

var ShelvingCfg = {
  enabler: byId("shelf"),
  items: [byId("shelf1"), byId("shelf2"), byId("shelf3")],
  total: byId("shelfCost")
};

var DrawerCfg = {
  enabler: byId("drawer"),
  items: [byId("drawer1"), byId("drawer2"), byId("drawer3")],
  total: byId("drawerCost")
};

var DeskCfg = {
  enabler: byId("desk"),
  items: [byId("desk1"), byId("desk2"), byId("desk3")],
  total: byId("deskCost")
};

var tTotal = byId("taxCost");
var ckShip = byId("shiptax"),
  shTotal = byId("shipCost");
var gTotal = byId("totalCost");
var totalInputs = [ShelvingCfg.total, DrawerCfg.total, DeskCfg.total, shTotal, tTotal, gTotal];

function clearAll() {
  var unchk = byTag("input");
  for (var i = 0; i < unchk.length; i++)
    unchk[i].checked = false;
  totalInputs.map(
    function(control) {
      control.value = null;
    });
}

function ckCheckedRow(Enabler, Controls, Target) {
  if (Enabler.checked) {
    var FirstOn = Controls.findIndex(function(C) {
      return C.checked;
    });
    Target.value = (FirstOn !== -1) ? Controls[FirstOn].value : ("$" + (0).toFixed(2));
  } else {
    Target.value = null;
  }
}

function ckChecked() {
  [ShelvingCfg, DrawerCfg, DeskCfg].map(
    function(Cfg) {
      ckCheckedRow(Cfg.enabler, Cfg.items, Cfg.total);
    }
  );
}

function addTax() {
  function taxOne(Target, Val1) {
    Target.value = ("$" + ((Number((Val1.value).replace(/^\$/, ''))) * (0.12)).toFixed(2));
  }

  function taxTwo(Target, Val1, Val2) {
    Target.value = ("$" + ((Number((Val1.value).replace(/^\$/, '')) + Number((Val2.value).replace(/^\$/, ''))) * (0.12)).toFixed(2));
  }

  function taxThree(Target, Val1, Val2, Val3) {
    Target.value = ("$" + ((Number((Val1.value).replace(/^\$/, '')) + Number((Val2.value).replace(/^\$/, '')) + Number((Val3.value).replace(/^\$/, ''))) * (0.12)).toFixed(2));
  }

  if (ShelvingCfg.enabler.checked) {
    taxOne(tTotal, ShelvingCfg.total);
  } else {
    tTotal.value = null;
  }
  if (DrawerCfg.enabler.checked) {
    taxOne(tTotal, DrawerCfg.total);
  }
  if (DeskCfg.enabler.checked) {
    taxOne(tTotal, DeskCfg.total);
  }

  if ((ShelvingCfg.enabler.checked) && (DrawerCfg.enabler.checked)) {
    taxTwo(tTotal, ShelvingCfg.total, DrawerCfg.total);
  }
  if ((ShelvingCfg.enabler.checked) && (DeskCfg.enabler.checked)) {
    taxTwo(tTotal, ShelvingCfg.total, DeskCfg.total);
  }
  if ((DrawerCfg.enabler.checked) && (DeskCfg.enabler.checked)) {
    taxTwo(tTotal, DrawerCfg.total, DeskCfg.total);
  }

  if ((ShelvingCfg.enabler.checked) && (DeskCfg.enabler.checked) && (DrawerCfg.enabler.checked)) {
    taxThree(tTotal, ShelvingCfg.total, DrawerCfg.total, DeskCfg.total);
  }
}

function grandTotal() {
  if ((ShelvingCfg.enabler.checked) || (DrawerCfg.enabler.checked) || (DeskCfg.enabler.checked) || (ckShip.checked)) {
    gTotal.value = ("$" + (0).toFixed(2));
  } else {
    gTotal.value = null;
  }

  function grandOne(Target, Tax, Val1) {
    Target.value = ("$" + ((Number((Tax.value).replace(/^\$/, '')) + Number((Val1.value).replace(/^\$/, '')))).toFixed(2));
  }

  function grandTwo(Target, Tax, Val1, Val2) {
    Target.value = ("$" + ((Number((Tax.value).replace(/^\$/, '')) + Number((Val1.value).replace(/^\$/, '')) + Number((Val2.value).replace(/^\$/, '')))).toFixed(2));
  }

  function grandThree(Target, Tax, Val1, Val2, Val3) {
    Target.value = ("$" + ((Number((Tax.value).replace(/^\$/, '')) + Number((Val1.value).replace(/^\$/, '')) + Number((Val2.value).replace(/^\$/, '')) + Number((Val3.value).replace(/^\$/, '')))).toFixed(2));
  }

  if (ShelvingCfg.enabler.checked) {
    grandOne(gTotal, tTotal, ShelvingCfg.total);
  }
  if (DrawerCfg.enabler.checked) {
    grandOne(gTotal, tTotal, DrawerCfg.total);
  }
  if (DeskCfg.enabler.checked) {
    grandOne(gTotal, tTotal, DeskCfg.total);
  }

  if ((ShelvingCfg.enabler.checked) && (DrawerCfg.enabler.checked)) {
    grandTwo(gTotal, tTotal, ShelvingCfg.total, DrawerCfg.total);
  }
  if ((ShelvingCfg.enabler.checked) && (DeskCfg.enabler.checked)) {
    grandTwo(gTotal, tTotal, ShelvingCfg.total, DeskCfg.total);
  }
  if ((DrawerCfg.enabler.checked) && (DeskCfg.enabler.checked)) {
    grandTwo(gTotal, tTotal, DrawerCfg.total, DeskCfg.total);
  }
  if ((ShelvingCfg.enabler.checked) && (DrawerCfg.enabler.checked) && (DeskCfg.enabler.checked)) {
    grandThree(gTotal, tTotal, ShelvingCfg.total, DrawerCfg.total, DeskCfg.total);
  }

  function withShip(Target, Grand, Ship) {
    Target.value = ("$" + (Number((Grand.value).replace(/^\$/, '')) + Number((Ship.value).replace(/^\$/, ''))).toFixed(2));
  }

  function shipFee(Target, Val1, Val2) {
    Target.value = ("$" + (Number((Val1.value).replace(/^\$/, '')) + Number((Val2.value).replace(/^\$/, ''))).toFixed(2));
  }

  if (ckShip.checked) {
    shTotal.value = ("$" + (0).toFixed(2));

    if (ShelvingCfg.enabler.checked) {
      shTotal.value = ShelvingCfg.enabler.value;
      withShip(gTotal, gTotal, shTotal);
    }
    if (DrawerCfg.enabler.checked) {
      shTotal.value = DrawerCfg.enabler.value;
      withShip(gTotal, gTotal, shTotal);
    }
    if (DeskCfg.enabler.checked) {
      shTotal.value = DeskCfg.enabler.value;
      withShip(gTotal, gTotal, shTotal);
    }

    if ((ShelvingCfg && DrawerCfg).enabler.checked) {
      shipFee(shTotal, ShelvingCfg.enabler, DrawerCfg.enabler);
    }
    if ((ShelvingCfg && DeskCfg).enabler.checked) {
      shipFee(shTotal, ShelvingCfg.enabler, DeskCfg.enabler);
    }
    if ((DrawerCfg && DeskCfg).enabler.checked) {
      shipFee(shTotal, DrawerCfg.enabler, DeskCfg.enabler);
    }
    if ((ShelvingCfg && DrawerCfg.enabler.checked && DeskCfg).enabler.checked) {
      shTotal.value = ("$" + (Number((ShelvingCfg.enabler.value).replace(/^\$/, '')) + Number((DrawerCfg.enabler.value).replace(/^\$/, '')) + Number((DeskCfg.enabler.value).replace(/^\$/, ''))).toFixed(2));
    }
  } else {
    shTotal.value = null;
  }
}