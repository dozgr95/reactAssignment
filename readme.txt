Fragen:

Was mag ich an meiner Lösung?
 - Dass ich von der Aufgabe alle grundlegenden Anforderungen erfüllt habe (Inputfeld, Resultate von Github, Tastatur steuerung, ...)
 - Dass ich mich relativ schnell in react zu recht gefunden habe (ohne bisherige Erfahrung). 

Was magst du nicht an deiner Lösung?
 - Das markieren des ausgewählten Resultats funktioniert nicht richtig. 
 - Die App hat kein Layout resp. Styling sondern wirklich nur die grundlegende Funktionalität. 
 - Es ist die "faule" Variante material-ui zu verwenden und ich bin keine faule Person. (konnte ich wenigsten zeigen, dass ich apis/manuals lesen kann? :P)

Wenn du noch mehr Zeit hättest, was würdest du verbessern?
 - Styling allgemein z.B. avatare usw. 
 - Eventhandling z.B beim tab öffnen wird der input gelöscht (vorschläge geleert)
 - Code qualität (Komponenten, Namensgebung, etc)

Wenn du nochmals komplett von vorne beginnen könntest, was würdest du anders machen?
 - ich habe relativ spontant entschieden material-ui zu nutzen, da ich es schon ein wenig kannte (von vuetify). Von daher würde ich Alternativen (auch Eigenimplementation) überdenken.
 - Ich würde wohl ein mächtigeren/schöneren API-Client anstatt fetch verwenden, da ich den get query string zusammen stellen mühsam fand. 
 - ich würde mich am anfang noch ein wenig mehr über react informieren. Ich denke da gibt es sinnvolle methoden z.B. um den API call nicht so in der Komponente

--------------------------
ToDo:
 - sample app grobem layout
 - input field
  - marterial autocomplete with dummy content 	
 - api client: https://api.github.com/search/users
  - input an api schicken
  - antwort in liste darstellen
  - ...