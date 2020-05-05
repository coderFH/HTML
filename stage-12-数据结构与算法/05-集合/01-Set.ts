abstract class Visitor<E> {
    stop : boolean;
    abstract  visit(element : E) : boolean;
}

interface Set<E> {
    size() : number;
	isEmpty() : boolean;
	clear() : void;
	contains(element : E) : boolean;
	add(element : E) : void;
	remove(element : E) : void;
	traversal(visitor : Visitor<E>) : void;
}

export {Set,Visitor}