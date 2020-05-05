import {Map,MapVisitor} from './01-Map'
import {Comparator} from '../04-树/Comparator'

class Node<K, V> {
    key : K;
    value : V;
    color : boolean = false;
    left : Node<K, V> = null;
    right : Node<K, V> = null;
    parent : Node<K, V>;
    public constructor(key : K,value : V, parent : Node<K, V>) {
        this.key = key;
        this.value = value;
        this.parent = parent;
    }
    
    isLeaf() : boolean {
        return this.left === null && this.right === null;
    }
    
    hasTwoChildren() : boolean {
        return this.left !== null && this.right !== null;
    }
    
    isLeftChild() : boolean {
        return this.parent !== null && this === this.parent.left;
    }
    
    isRightChild() : boolean {
        return this.parent !== null && this === this.parent.right;
    }
    
    sibling() : Node<K, V> {
        if (this.isLeftChild()) {
            return this.parent.right;
        }
        
        if (this.isRightChild()) {
            return this.parent.left;
        }
        return null;
    }
}

class TreeMap<K,V> implements Map<K,V> {
    private static RED : boolean = false;
	private static BLACK : boolean = true;
	private count : number;
	private root : Node<K, V>;
	private comparator : Comparator<K>;
	
	public constructor(comparator :Comparator<K> ) {
		this.comparator = comparator;
	}
	
    size() : number {
		return this.count;
	}

	isEmpty() : boolean {
		return this.count === 0;
	}

	clear() : void {
		this.root = null;
		this.count = 0;
    }
    
	put(key : K,value : V) : V {
		this.keyNotNullCheck(key);
		
		// 添加第一个节点
		if (this.root == null) {
			this.root = new Node<K,V>(key, value, null);
			this.count++;

			// 新添加节点之后的处理
			this.afterPut(this.root);
			return null;
		}
		
		// 添加的不是第一个节点
		// 找到父节点
		let parent = this.root;
		let node = this.root;
		let cmp = 0;
		do {
			cmp = this.compare(key, node.key);
			parent = node;
			if (cmp > 0) {
				node = node.right;
			} else if (cmp < 0) {
				node = node.left;
			} else { // 相等
				node.key = key;
				let oldValue = node.value;
				node.value = value;
				return oldValue;
			}
		} while (node != null);

		// 看看插入到父节点的哪个位置
		let newNode = new Node<K,V>(key, value, parent);
		if (cmp > 0) {
			parent.right = newNode;
		} else {
			parent.left = newNode;
		}
		this.count++;
		
		// 新添加节点之后的处理
		this.afterPut(newNode);
		return null;
	}

	get(key : K) : V {
		let node = this.node(key);
		return node !== null ? node.value : null;
	}

	containsKey(key : K) : boolean {
		return this.node(key) !== null;
	}

	containsValue(value : V) : boolean {
		if (this.root == null) return false;
		
		let queue = [this.root];

		while (queue.length > 0) {
            let node = queue.shift();
            
			if (this.valEquals(value, node.value)) return true;
			
			if (node.left != null) {
				queue.push(node.left);
			}
			
			if (node.right != null) {
				queue.push(node.right);
			}
		}
		return false;
	}

	traversal(visitor : MapVisitor<K, V> ) : void {
		if (visitor == null) return;
		this.traversals(this.root, visitor);
    }

    remove(key : K) : V {
		return this.removeNode(this.node(key));
    }
	
	private traversals(node : Node<K, V> , visitor : MapVisitor<K, V>) : void {
		if (node == null || visitor.stop) return;
		this.traversals(node.left, visitor);
		if (visitor.stop) return;
		visitor.visit(node.key, node.value);
		this.traversals(node.right, visitor);
	}
	
	private valEquals(v1 : V, v2 : V) : boolean {
        if (v1 instanceof Object) { 
            return this.isObjectValueEqual(v1,v2);
        } else {
            return v1 === v2;
        }
    }
    
    private isObjectValueEqual(a : Object, b : Object) : boolean {
        var aProps = Object.getOwnPropertyNames(a);
        var bProps = Object.getOwnPropertyNames(b);
         if (aProps.length != bProps.length) {
              return false;
         }
         for (var i = 0; i < aProps.length; i++) {
            var propName = aProps[i]
            var propA = a[propName]
            var propB = b[propName]
            if ((typeof (propA) === 'object')) {
                if (this.isObjectValueEqual(propA, propB)) {
                    return true
                } else {
                    return false
                }
            } else if (propA !== propB) {
                return false
            } else {}
        }
       return true
    }
    
	private removeNode(node : Node<K, V> ) : V {
		if (node == null) return null;
		
		this.count--;
		
		let oldValue = node.value;
		
		if (node.hasTwoChildren()) { // 度为2的节点
			// 找到后继节点
			let s = this.successor(node);
			// 用后继节点的值覆盖度为2的节点的值
			node.key = s.key;
			node.value = s.value;
			// 删除后继节点
			node = s;
		}
		
		// 删除node节点（node的度必然是1或者0）
		let replacement = node.left != null ? node.left : node.right;
		
		if (replacement != null) { // node是度为1的节点
			// 更改parent
			replacement.parent = node.parent;
			// 更改parent的left、right的指向
			if (node.parent == null) { // node是度为1的节点并且是根节点
				this.root = replacement;
			} else if (node == node.parent.left) {
				node.parent.left = replacement;
			} else { // node == node.parent.right
				node.parent.right = replacement;
			}
			// 删除节点之后的处理
			this.afterRemove(replacement);
		} else if (node.parent == null) { // node是叶子节点并且是根节点
			this.root = null;
		} else { // node是叶子节点，但不是根节点
			if (node == node.parent.left) {
				node.parent.left = null;
			} else { // node == node.parent.right
				node.parent.right = null;
			}
			
			// 删除节点之后的处理
			this.afterRemove(node);
		}
		return oldValue;
	}
	
	private afterRemove(node : Node<K, V>) : void {
		// 如果删除的节点是红色
		// 或者 用以取代删除节点的子节点是红色
		if (this.isRed(node)) {
			this.black(node);
			return;
		}
		
		let parent = node.parent;
		if (parent == null) return;
		
		// 删除的是黑色叶子节点【下溢】
		// 判断被删除的node是左还是右
		let left = parent.left === null || node.isLeftChild();
		let sibling = left ? parent.right : parent.left;
		if (left) { // 被删除的节点在左边，兄弟节点在右边
			if (this.isRed(sibling)) { // 兄弟节点是红色
				this.black(sibling);
				this.red(parent);
				this.rotateLeft(parent);
				// 更换兄弟
				sibling = parent.right;
			}
			
			// 兄弟节点必然是黑色
			if (this.isBlack(sibling.left) && this.isBlack(sibling.right)) {
				// 兄弟节点没有1个红色子节点，父节点要向下跟兄弟节点合并
				let parentBlack = this.isBlack(parent);
				this.black(parent);
				this.red(sibling);
				if (parentBlack) {
					this.afterRemove(parent);
				}
			} else { // 兄弟节点至少有1个红色子节点，向兄弟节点借元素
				// 兄弟节点的左边是黑色，兄弟要先旋转
				if (this.isBlack(sibling.right)) {
					this.rotateRight(sibling);
					sibling = parent.right;
				}
				
				this.color(sibling, this.colorOf(parent));
				this.black(sibling.right);
				this.black(parent);
				this.rotateLeft(parent);
			}
		} else { // 被删除的节点在右边，兄弟节点在左边
			if (this.isRed(sibling)) { // 兄弟节点是红色
				this.black(sibling);
				this.red(parent);
				this.rotateRight(parent);
				// 更换兄弟
				sibling = parent.left;
			}
			
			// 兄弟节点必然是黑色
			if (this.isBlack(sibling.left) && this.isBlack(sibling.right)) {
				// 兄弟节点没有1个红色子节点，父节点要向下跟兄弟节点合并
				let parentBlack = this.isBlack(parent);
				this.black(parent);
				this.red(sibling);
				if (parentBlack) {
					this.afterRemove(parent);
				}
			} else { // 兄弟节点至少有1个红色子节点，向兄弟节点借元素
				// 兄弟节点的左边是黑色，兄弟要先旋转
				if (this.isBlack(sibling.left)) {
					this.rotateLeft(sibling);
					sibling = parent.left;
				}
				
				this.color(sibling, this.colorOf(parent));
				this.black(sibling.left);
				this.black(parent);
				this.rotateRight(parent);
			}
		}
	}

	private  predecessor(node : Node<K, V> ) : Node<K, V> {
		if (node == null) return null;
		// 前驱节点在左子树当中（left.right.right.right....）
		let p = node.left;
		if (p != null) {
			while (p.right != null) {
				p = p.right;
			}
			return p;
		}
		// 从父节点、祖父节点中寻找前驱节点
		while (node.parent != null && node == node.parent.left) {
			node = node.parent;
		}
		// node.parent == null
		// node == node.parent.right
		return node.parent;
	}
	
	private successor(node : Node<K, V>) : Node<K, V> {
		if (node == null) return null;
		
		// 前驱节点在左子树当中（right.left.left.left....）
		let p = node.right;
		if (p != null) {
			while (p.left != null) {
				p = p.left;
			}
			return p;
		}
		
		// 从父节点、祖父节点中寻找前驱节点
		while (node.parent != null && node == node.parent.right) {
			node = node.parent;
		}
		return node.parent;
	}
	
	private node(key : K) : Node<K, V> {
		let node = this.root;
		while (node != null) {
			let cmp = this.compare(key, node.key);
			if (cmp == 0) return node;
			if (cmp > 0) {
				node = node.right;
			} else { // cmp < 0
				node = node.left;
			}
		}
		return null;
	}
	
	private afterPut(node : Node<K, V>) : void {
		let parent = node.parent;
		
		// 添加的是根节点 或者 上溢到达了根节点
		if (parent == null) {
			this.black(node);
			return;
		}
		
		// 如果父节点是黑色，直接返回
		if (this.isBlack(parent)) return;
		
		// 叔父节点
		let uncle = parent.sibling();
		// 祖父节点
		let grand = this.red(parent.parent);
		if (this.isRed(uncle)) { // 叔父节点是红色【B树节点上溢】
			this.black(parent);
			this.black(uncle);
			// 把祖父节点当做是新添加的节点
			this.afterPut(grand);
			return;
		}
		
		// 叔父节点不是红色
		if (parent.isLeftChild()) { // L
			if (node.isLeftChild()) { // LL
				this.black(parent);
			} else { // LR
				this.black(node);
				this.rotateLeft(parent);
			}
			this.rotateRight(grand);
		} else { // R
			if (node.isLeftChild()) { // RL
				this.black(node);
				this.rotateRight(parent);
			} else { // RR
				this.black(parent);
			}
			this.rotateLeft(grand);
		}
	}
	
	private rotateLeft(grand : Node<K, V>) : void {
		let parent = grand.right;
		let child = parent.left;
		grand.right = child;
		parent.left = grand;
		this.afterRotate(grand, parent, child);
	}
	
	private rotateRight(grand : Node<K, V>) : void {
		let parent = grand.left;
		let child = parent.right;
		grand.left = child;
		parent.right = grand;
		this.afterRotate(grand, parent, child);
	}
	
	private afterRotate(grand : Node<K, V>,parent : Node<K, V>, child : Node<K, V>) : void {
		// 让parent称为子树的根节点
		parent.parent = grand.parent;
		if (grand.isLeftChild()) {
			grand.parent.left = parent;
		} else if (grand.isRightChild()) {
			grand.parent.right = parent;
		} else { // grand是root节点
			this.root = parent;
		}
		
		// 更新child的parent
		if (child != null) {
			child.parent = grand;
		}
		
		// 更新grand的parent
		grand.parent = parent;
	}

	private color(node : Node<K, V> ,color : boolean ) : Node<K, V> {
		if (node == null) return node;
		node.color = color;
		return node;
	}
	
	private red(node : Node<K, V> ) : Node<K, V> {
		return this.color(node, TreeMap.RED);
	}
	
	private black(node : Node<K, V> ) : Node<K, V> {
		return this.color(node, TreeMap.BLACK);
	}
	
	private colorOf(node : Node<K, V> ) : boolean {
		return node === null ? TreeMap.BLACK : node.color;
	}
	
	private isBlack(node : Node<K, V> ) : boolean {
		return this.colorOf(node) === TreeMap.BLACK;
	}
	
	private isRed(node : Node<K, V> ) :boolean {
		return this.colorOf(node) === TreeMap.RED;
	}
	
	private compare(e1 : K, e2 : K) : number {
		return this.comparator.compare(e1, e2);
	}
	
	private keyNotNullCheck(key : K) : void {
		if (key == null) {
			throw new Error("key must not be null");
		}
	}
}

export {TreeMap}