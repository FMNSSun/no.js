window.onload = function() { removeScripts(); document.body.onload = removeScripts(); }

function removeScripts() {
  var elems = document.getElementsByTagName('script');
  var i = 0;
  for(i = 0; i < elems.length; i++) {
    elems[i].parentElement.removeChild(elems[i]);
  }
}

removeScripts();

