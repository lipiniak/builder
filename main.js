var Wierzcholek = function (parent,child) {
  this.parent = parent;
  this.child = child;
};


Wierzcholek.prototype.Tree = function(){
	this.tree = new Array();
}

Wierzcholek.prototype.addGalaz = function(wierzcholek,poziom) {
	this.tree[poziom] = wierzcholek;
}



//przed push


Node.prototype.nodeID = function() {
  console.log(this.id);
};


var Tree = function(){
	this.branch = new Array()
};

Tree.prototype.addBranch(parent, child) {
	this.branch[parent] = child;
};

var tree = new Node(0);

tree.nodeID();

function addElement(parent, id) {
	

}
function removeElement(id){

}
function printTree(){

}