function getTimeSysdate(e) {

    var d = new Date();

    var s = d.getSeconds();

    var m = d.getMinutes() + s / 60;

    var h = d.getHours() + m / 60;

    var svg = e.target.ownerDocument;
    
    svg.getElementById("oSeconde").setAttribute("transform", "rotate(" + (s * 6) + ", 100, 100)");
    svg.getElementById("oMinute").setAttribute("transform", "rotate(" + (m * 6) + ", 100, 100)");
    svg.getElementById("oHeure").setAttribute("transform", "rotate(" + (h * 30) + ", 100, 100)");
  }
