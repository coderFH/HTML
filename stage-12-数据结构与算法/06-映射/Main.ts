import {MapVisitor} from './01-Map'
import {Comparator} from '../04-树/Comparator'
import {TreeMap} from './02-TreeMap'
import {TreeSet} from './03-TreeSet'

class keyComparator implements Comparator<string> {
    compare(e1: string, e2: string): number {
        if (e1 === e2) return 0;
        else {
            return e1 > e2 ? 1 : -1;
        }
    }
}

class MapVisitorClass extends MapVisitor<string,number> {
    visit(key: string, value: number): boolean {
        console.log(key + "_" + value);
        return false;
    }
}

function test1() {
    let map = new TreeMap<string,number>(new keyComparator());
    map.put("c", 2);
    map.put("a", 5);
    map.put("b", 6);
    map.put("a", 8);

    map.traversal(new MapVisitorClass());
    
    console.log(map.get("a"));
    console.log(map.remove("b"));

    console.log(map.containsKey("a"));
    console.log(map.containsKey("b"));

    console.log(map.containsValue(8));
    console.log(map.containsValue(6));
    
    map.traversal(new MapVisitorClass());
}

function test2() {
    let map = new TreeSet<string>(new keyComparator());
    map.add("c");
    map.add("a");
    map.add("b");
    map.add("a");
    // map.traversal(new MapVisitor());
}

test2();