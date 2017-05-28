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