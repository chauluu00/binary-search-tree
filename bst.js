class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export class Tree {
    constructor(array) {
        this.root = this.buildTree(this._clean(array));
    }
    _clean(array) {
        const uniq = [...new Set(array)]; //remove duplicates
        const sorted = uniq.sort(function(a, b){return a - b}); //sort numerically
        return sorted;
    }
    buildTree(array) {
        const start = 0;
        const end = array.length-1;
        if (start>end) {
            return null;
        }
        const mid = (start+end)/2 % 2 === 0 ? (start+end)/2 : Math.floor((start+end)/2); //round down mid index if even number of elements
        const root = new Node(array[mid]);
        root.left = this.buildTree(array.slice(start, mid));
        root.right = this.buildTree(array.slice(mid+1));
        return root;
    }
    insert(value, currentNode = this.root) {
        if (currentNode === null) return new Node(value); // Create new node
        if (currentNode.data === value) return currentNode; // Do not allow duplicate if value already exists
        if (value < currentNode.data) {
            currentNode.left = this.insert(value, currentNode.left);
        } else if (value > currentNode.data) {
            currentNode.right = this.insert(value, currentNode.right);
        }
        return currentNode;
    }
    deleteItem(value) {}
    find(value, currentNode = this.root) {
        if (currentNode === null) return null; // Base case: not found
        if (value === currentNode.data) return currentNode; //Base case: found
        // Recursive steps
        if (value < currentNode.data){
            return this.find(value, currentNode.left); // Find in left subtree
        } else {
            return this.find(value, currentNode.right); // Find in right subtree
        }
    }

    levelOrder(callback) {}
    inOrder(callback) {}
    preOrder(callback) {}
    postOrder(callback) {}
    height(node) {}
    depth(node) {}
    isBalanced() {

    }
    rebalance() {}
}

function makeArray() {
    const arr = [];
    for (let i=0; i<20; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
}

function log(x) {
    console.log(x);
}

//visualize the bst
const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};
const array = [1,2,3,4,5,6,7];
log(array.sort((function(a, b){return a - b})));
const tree = new Tree(array);
log(tree.insert(9));
log(tree.find(6));
prettyPrint(tree.root);