const $ = str => {
  const node = document.querySelectorAll(str);
  if (node.length === 1) return node[0];
  else if (node.length === 0) return document;
  else return node;
}

const addHandler = function(el, ev, func) {
  el.addEventListener(ev, func)
}
const removeItem = function(el) {
  el.parentNode.removeChild(el);
}

Node.prototype.on = function(ev, func) {
  addHandler(this, ev, func)
}

NodeList.prototype.on = function(ev, func) {
  for (let i = 0; i < this.length; i++) {
    addHandler(this[i], ev, func)
  }
}

Node.prototype.remove = function() {
  removeItem(this)
}

NodeList.prototype.remove = function() {
  for (let i = 0; i < this.length; i++) {
    removeItem(this[i])
  }
}