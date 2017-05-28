In de huidige vorm van deze game kan je alleen nog maar lopen, springen en schieten.

- Lopen doe je met A(links) en D(rechts)
- Springen doe je door op spatiebalk te drukken
- Schieten doe je met K

In dit project zijn alle eisen vanuit de lessen opgenomen.


<h3>Veranderingen van Sander</h3>

**Alle GameObject subclasses maken nu correct gebruik van inheritance.  x, y, width, height en hun getters/setters verplaatst naar GameObject.**

- Character en Enemy hebben vaste values voor width/height in hun
constructor.
- Voor een Weapon subclass (Axe/Bow) kan je deze values
doorgeven via de constructor (dus wanneer je een nieuwe Axe/Bow
instance maakt) (ik wist ook niet hoe groot een Bow (arrow?) object
moest zijn).
- Utils collision check maakt nu dus ook gebruik van GameObject
parameters (denk aan de les van dinsdag).

<h5>Uitleg</h5>
Inheritance is handig om te voorkomen dat je dezelfde code meerdere keren moet schrijven. Hierdoor voorkom je ook bugs wanneer je bijvoorbeeld moet checken voor collision tussen de verschillende objecten. In games is dit vaak dat je vergelijkt tussen verschillende GameObject subclasses. Alle GameObjects hebben een locatie en een grootte nodig om zichtbaar te kunnen zijn in een game. Als je deze waardes opslaat in GameObject, weet je zeker dat een subclass van GameObject deze waardes heeft, zodat je deze later kan opvragen en bijvoorbeeld kan vergelijken.

<h3>Review</h3>
V = Voldoende
X = Onvoldoende (of niet aanwezig)

<h5>Project</h5>
- Klassendiagram (X)
- Live pagina waar game te spelen is (X)
- Geen bugs (X -- springen bugged wanneer je spatie spammed)
- Installatie instructies in Readme (X)
- Waar zijn de programmeerprincipes toegepast is beschreven in de Readme (X)

<h5>Programmeerprincipes</h5>
- Interface (V)
- Static Utility Method (V)
- Singleton (X)
- Strategy Pattern (V)
- Encapsulation (V)
- Composition (V)
- Inheritance (V)