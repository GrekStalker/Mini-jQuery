const $ = str => {
  const node = document.querySelectorAll(str);
  if (node.length === 1) return node[0];
  else if (node.length === 0) return document;
  else return node;
}

const addHandler = function(el, ev, func) {
  el.addEventListener(ev, func)
}

const changeHTML = function(el, str) {
  el.innerHTML = str
}

const appendHTML = function(el, str) {
  el.innerHTML += str
}

Node.prototype.on = function(ev, func) {
  addHandler(this, ev, func)
}

document.on = function(ev, func) {
  addHandler(this, ev, func)
}

Node.prototype.html = function(str) {
  changeHTML(this, str)
}

document.html = function(str) {
  changeHTML(this, str)
}

Node.prototype.append = function(str) {
  appendHTML(this, str)
}

document.append = function(str) {
  appendHTML(this, str)
}