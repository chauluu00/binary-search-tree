class Node {
    left;
    right;
    constructor(data) {
        this.data = data;
    }
}

export class Tree {
    constructor() {}

    buildTree(array) {
        const uniq = [...new Set(array)]; //remove duplicates
        const sorted = uniq.sort(function(a, b){return a - b}); //sort numerically
        const index = (sorted.length-1)/2 % 2 === 0 ? (sorted.length-1)/2 : Math.floor((sorted.length-1)/2); //round down index if even number of elements
        const root = new Node(sorted[index]);
        return root;
    }
    insert(value) {}
    deleteItem(value) {}
    find(value) {}
    levelOrder(callback) {}
    inOrder(callback) {}
    preOrder(callback) {}
    postOrder(callback) {}
    height(node) {}
    depth(node) {}
    isBalanced() {}
    rebalance() {}
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
 