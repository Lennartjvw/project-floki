/**
 * Utils
 */
class Utils {
    //
    // kijk of twee objecten elkaar raken
    // dit moeten objecten zijn die een public x, y, width en height hebben
    // met overerving kunnen we gaan zorgen dat je hier ook andere objecten behalve ball en paddle aan kan geven
    //

    hasOverlap(c1: GameObject, c2: GameObject): boolean {
        return !(
          c2.getX() > c1.getX() + c1.width ||
          c2.getX() + c2.width < c1.getX() ||
          c2.getY() > c1.getY() + c1.height ||
          c2.getY() + c2.height < c1.getY()
        );
    }
}