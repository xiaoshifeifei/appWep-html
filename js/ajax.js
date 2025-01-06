function myAjax(method, url, methods, data, callback, type) {
  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.onreadystatechange = function () {
    if (xhr.status == 200 && xhr.readyState == 4) {
      if (type == "json") {
        var res = JSON.parse(xhr.responseText);
      } else if (type == "xml") {
        var res = responseXML;
      } else {
        var res = xhr.responseText;
      }
      callback(res);
    }
  };
  var myParms = {
    gsid: "afb-3G4PN62XKUL9",
    jsonrpc: "2.0",
    id: "1",
    method: methods,
    params: data,
  };
  myParms = JSON.stringify(myParms);
  xhr.open(method, url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(myParms);
}
