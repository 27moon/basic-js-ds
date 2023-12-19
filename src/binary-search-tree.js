const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootV = null; //root value
  }
  root() {
    return this.rootV;
  }

  add(data) {
    this.rootV = addTreeValue(this.rootV, data);

    function addTreeValue(node, data) {

    if (node === null) {
      return new Node(data);
    }

     else if (node.data === data) {
      return node;

    } else if (data < node.data) {
      node.left = addTreeValue(node.left, data);

    } if (data > node.data) {
      node.right = addTreeValue(node.right, data);
    }

      return node;
    }
  }


  has(data) {
    return searchTreeValue(this.rootV, data);

    function searchTreeValue(node, data) {

      if (node === null) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

    else if (data < node.data) {
      return searchTreeValue(node.left, data);
    } if (data > node.data) {
      return searchTreeValue(node.right, data);
    }
    }
    }

  find(data) {
    return findTreeValue(this.rootV, data);

    function findTreeValue(node, data) {

      if (node === null) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

    else if (data < node.data) {
      return findTreeValue(node.left, data);
    } if (data > node.data) {
      return findTreeValue(node.right, data);
    }
    }
  }

  remove(data) {
    this.rootV = removeTreeValue(this.rootV, data);

    function removeTreeValue(node, data) {
      if (node === null) {
        return null;
      }

      if (data < node.data) {
        node.left = removeTreeValue(node.left, data);
        return node;
      } if (data > node.data) {
        node.right = removeTreeValue(node.right, data);
        return node;

      } else {
    
            if (node.right === null && node.left === null) { //лист
              return null;
            }
            if (node.right  === null) { //no right children
              node = node.left;
              return node;
            }
            if (node.left  === null) { //no left children
              node = node.right;
              return node;
        }

        //an element has both children
        let temporaryValueNode = node.right;
        while (temporaryValueNode.left !== null) {
          temporaryValueNode = temporaryValueNode.left; //доходим по левой саб ветке до листа
        }
        node.data = temporaryValueNode.data; //помещаем значение листа вместо значения удаляемого нода

        //удаляем узел с мин значением, обновяем правое поддерево
        node.right = removeTreeValue(node.right, temporaryValueNode.data);

        return node;
      }
    }
  }

  min() {
    if (this.rootV === null) {
      return;
    }
    let nodeValue = this.rootV;
    while (nodeValue.left !== null) {
      nodeValue = nodeValue.left;
    }
    return nodeValue.data;
  }

  max() {
    if (this.rootV === null) {
      return;
    }
    let nodeValue = this.rootV;
    while (nodeValue.right !== null) {
      nodeValue = nodeValue.right;
    }
    return nodeValue.data;
  }
}

module.exports = {
  BinarySearchTree
};