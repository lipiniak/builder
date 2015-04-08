var Wierzcholek = function (id) {
  this.id = id;
  this.child;
};


Wierzcholek.prototype.addWierzcholek = function(child) {
	this.child = child;
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