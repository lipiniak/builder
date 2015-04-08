var Wierzcholek = function (id) {
  this.id = id;
  this.dzieci = new Array();
};


Wierzcholek.prototype.addWierzcholek = function(child) {

	this.dzieci.push(child);
}

Wierzcholek.prototype.WriteTree = function () {
	console.log(this.id,this.dzieci);
}

var root = new Wierzcholek(0);
var w1 = new Wierzcholek(1);
var w2 = new Wierzcholek(2);
var w3 = new Wierzcholek(3);
var w4 = new Wierzcholek(4);
var w5 = new Wierzcholek(5);

w1.addWierzcholek(w2);
w1.addWierzcholek(w3);

w3.addWierzcholek(w4);

root.addWierzcholek(w1);
root.addWierzcholek(w5);

