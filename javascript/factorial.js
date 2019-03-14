document.write("<h2>Table of Factorials</h2>");
for(i = 1, fact = 1; i < 10; i++, fact *= i) {
    alert(i + "! = " + fact);
    alert("<br>");
}