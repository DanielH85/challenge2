/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus aus :

Alter 0-5 // Milch
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

*/

/* Getränke-Challenge */

var deinVorname = prompt("Vorname eingeben");
var deinAlter = prompt("Alter eingeben");

if (deinAlter <= 5)
    {
        console.log("Hallo "+ deinVorname + ", du solltest Milch trinken.");
    }
else if (deinAlter <= 12)
    {
        console.log("Hallo "+ deinVorname + ", du solltest Saft trinken.");
    }
else if (deinAlter <= 17)
    {
        console.log("Hallo "+ deinVorname + ", du solltest Cola trinken.");
    }
else 
    {
        console.log("Hallo "+ deinVorname + ", du solltest Wein trinken.");
    }