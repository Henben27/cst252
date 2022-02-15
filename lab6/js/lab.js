/*
* Author: Henry Wilkinson <hwilkinson@csumb.edu>
* Created: Febuary 14th
* License: Public Domain
*/

//Define all Variables
myTransportation = ["Legs ", "Bike ", "Car "];
mainTransportation = {};
mainTransportation.color = "Blue";
mainTransportation.year = 2015;
mainTransportation.make = "Kona";

//output
document.writeln("My ways of Transportation: " + myTransportation + "<br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(mainTransportation, null, '\t'), "</pre>");
