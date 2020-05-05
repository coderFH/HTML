abstract class MapVisitor<K,V> {
    stop : boolean;
    abstract visit(key : K,value : V) : boolean;
}

interface Map<K,V> {
    size() : number;
	isEmpty() : boolean;
    clear() : void;
    put(key : K,value : V) : V;
    get(key : K) : V;
    remove(key : K) : V
    containsKey(key : K) : boolean;
    containsValue(value : V) : boolean;
	traversal(visitor : MapVisitor<K,V>) : void;
}

export {Map,MapVisitor}