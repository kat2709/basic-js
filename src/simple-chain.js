const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  head: new Node(),
  length: 0,

  getLength() {
    return this.length;
  },

  addLink(value) {
    // initialize head node
    if (!this.head) {
      this.head = new Node();
      this.length = 0;
    }

    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    node.next = new Node(value);
    this.length++;
    return this;
  },

  removeLink(position) {
    if (
      typeof position !== "number" ||
      position < 1 ||
      position >= this.length
    ) {
      this.clean();
      throw new Error("You can't remove incorrect link!");
    }
    let node = this.head;
    position--; // we need previous node
    while (node.next && position > 0) {
      node = node.next;
      position--;
    }
    if (node && node.next) {
      node.next = node.next.next;
      this.length--;
    }
    return this;
  },

  reverseChain() {
    if (!this.head) return this;
    let prev = null;
    let node = this.head.next;
    while (node) {
      const next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    this.head.next = prev;
    return this;
  },

  finishChain() {
    const arr = [];
    let node = this.head.next;
    while (node) {
      arr.push("( " + node.val + " )");
      node = node.next;
    }
    this.clean();
    return arr.join("~~");
  },

  clean() {
    this.head = null;
    this.length = 0;
  },
};

module.exports = {
  chainMaker,
};

function Node(val, next) {
  this.val = val !== undefined ? val : null;
  this.next = next || null;
}
