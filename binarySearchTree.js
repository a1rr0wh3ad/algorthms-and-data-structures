class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    // methods to implement:
    
    add(value) {
        let newNode = new Node(value);
        
        if (this.root === null) {
            this.root = newNode;
            return;
        } 
          
        let currentNode = this.root;
        let parentNode;

        while(currentNode !== null) {

            parentNode = currentNode;

            if (newNode.value < currentNode.value) {
                currentNode = currentNode.left;
            } 
            else if (newNode.value > currentNode.value) {
                currentNode = currentNode.right;
            } 
            else {
                return;
            }
        }

        if (newNode.value < parentNode.value) {
            parentNode.left = newNode;
        } else {
            parentNode.right = newNode;         
        }


    }
    
    findNodeMin(node) {
            if (node === null) {
            return null;
        }
        
        let currentNode = node;
        let parentNode;
        
        while(currentNode !== null) {
            parentNode = currentNode;
            currentNode = currentNode.left;
        }
        
        return parentNode.value;
    }
    
    findNodeMax(node) {
            if (node === null) {
            return null;
        }
        
        let currentNode = node;
        let parentNode;
        
        while(currentNode !== null) {
            parentNode = currentNode;
            currentNode = currentNode.right;
        }
        
        return parentNode.value;
    }
    
    findNode(value) {
        
         if (this.root === null) {
            return null;
        } 
          
        let currentNode = this.root;
        let parentNode;

        while(currentNode !== null) {

            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } 
            else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } 
            else {
                return currentNode;
            }
        }
        
        return null;
    }
    findMin() {
        
        if (this.root === null) {
            return null;
        }
        
        let currentNode = this.root;
        let parentNode;
        
        while(currentNode !== null) {
            parentNode = currentNode;
            currentNode = currentNode.left;
        }
        
        return parentNode.value;
    }
    
    findMax() {
        
        if (this.root === null) {
            return null;
        }
        
        let currentNode = this.root;
        let parentNode;
        
        while(currentNode !== null) {
            parentNode = currentNode;
            currentNode = currentNode.right;
        }
        return parentNode.value;
    }
    
    isPresent(value) {
        
        if (this.root === null) {
            return false;
        } 
          
        let currentNode = this.root;
        let parentNode;

        while(currentNode !== null) {

            parentNode = currentNode;

            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } 
            else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } 
            else {
                return true;
            }
        }
        
        return false;
    }
    
    remove(value) {
     
        if (this.root == null) {
            return null;
        }
        
        let currentNode = this.root;
        let parentNode;
        
        while(currentNode !== null) {

            parentNode = currentNode;

            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } 
            else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } 
            else {
                break;
            }
        }
        
        if (currentNode == null) {
            return null;
        }

        if (currentNode.left === null && currentNode.right === null) {
            console.log("REMOVING NODE WITH NO CHILDREN!");
            console.log(`DELETING ${currentNode.value}`);
            console.log(`PARENTNODE.LEFT ${currentNode.left}`);
            console.log(`PARENTNODE.RIGHT ${currentNode.right}`);
            
            if (parentNode.value < currentNode.value) {//left child
                parentNode.left = null;
            } else {
                parentNode.right = null;
            }
            
            if (this.root === currentNode) {
                this.root = null;
            }
        } else  if (currentNode.left === null || currentNode.right === null) {// one child
            if (parentNode.value < currentNode.value) {//left child
                
                if (currentNode.left !== null) {
                    parentNode.left = currentNode.left;
                } else {
                    parentNode.left = currentNode.right;
                } 
            } else {
                if (currentNode.left !== null) {
                    parentNode.right = currentNode.left;
                } else {
                    parentNode.right = currentNode.right;
                } 
            }
            
        } else { // have 2 childs
            let highestLeftChild = this.findNodeMax(currentNode);
            currentNode.value = highestLeftChild;
            this.remove(highestLeftChild);
        }
    }

    inOrder() {
        
        const inOrderRecursive = (root) => {
        
            let returnValue = [];
            
            if (root === null) {
                return null;
            }
            if (root.left !== null) {
                returnValue = [ ...inOrderRecursive(root.left) ];
            }
            returnValue = [...returnValue, root.value];
            
            if (root.right !== null) {
                returnValue = [ ...returnValue, ...inOrderRecursive(root.right) ];
            }
            
            return returnValue;
        }
        
        return inOrderRecursive(this.root);
    }

    preOrder() {
        
        const preOrderRecursive = (root) => {
        
            let returnValue = [];
            
            if (root === null) {
                return null;
            }
            
            returnValue = [root.value];
            
            if (root.left !== null) {
                returnValue = [...returnValue, ...preOrderRecursive(root.left) ];
            }
            
            
            if (root.right !== null) {
                returnValue = [ ...returnValue, ...preOrderRecursive(root.right) ];
            }
            
            return returnValue;
        }
        
        return preOrderRecursive(this.root);
        
    }

    postOrder() {
        const inOrderRecursive = (root) => {
        
            let returnValue = [];
            
            if (root === null) {
                return null;
            }
            
            if (root.left !== null) {
                returnValue = [...inOrderRecursive(root.left) ];
            }
            
            
            if (root.right !== null) {
                returnValue = [ ...returnValue, ...inOrderRecursive(root.right) ];
            }
            
            returnValue = [...returnValue, root.value];
            
            
            return returnValue;
        }
        
        return inOrderRecursive(this.root);
    }

    findMaxHeight() {
        
        const findMaxHeightRecursive = (root) => {
             
            if (root === null) {
                return -1;
            }
            
            return 1 + Math.max( findMaxHeightRecursive(root.left),
                                 findMaxHeightRecursive(root.right) );
             
            
        }
        
        return findMaxHeightRecursive(this.root);
    }

    findMinHeight() {
        
        const findMinHeightRecursive = (root) => {
             
            if (root === null) {
                return -1;
            }
            
            return 1 + Math.min( findMinHeightRecursive(root.left),
                                 findMinHeightRecursive(root.right) );
             
            
        }
        
        return findMinHeightRecursive(this.root);
    }

    isBalanced() {
        return (this.findMaxHeight() - this.findMinHeight()) <= 1;
    }
    // add(value)
    // remove(value)
    // findMin()
    // findMax()
    // isPresent(value)
    // findMaxHeight()
    // findMinHeight()
    // isBalanced()
    // inOrder()
    // preOrder()
    // postOrder()
    // levelOrder()
    // reverseLevelOrder()
    // invert()
}

const myBinarySearchTree = new BinarySearchTree();

myBinarySearchTree.add(4);
console.log(myBinarySearchTree.inOrder());

myBinarySearchTree.add(5);
console.log(myBinarySearchTree.inOrder());

myBinarySearchTree.add(2);
console.log(myBinarySearchTree.inOrder());

myBinarySearchTree.add(8);
console.log(myBinarySearchTree.inOrder());

myBinarySearchTree.remove(8);
console.log(myBinarySearchTree.inOrder());
