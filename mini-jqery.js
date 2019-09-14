const $ = str => {
  const node = document.querySelectorAll(str);
  if (node.length === 1) return node[0];
  else if (node.length === 0) return document;
  else return node;
}

const addHandler = function(el, ev, func) {
  el.addEventListener(ev, func)
}

Node.prototype.on = function(ev, func) {
  addHandler(this, ev, func)
}

document.on = function(ev, func) {
  addHandler(this, ev, func)
}