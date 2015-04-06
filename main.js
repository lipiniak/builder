var Node = function (id) {
  this.id = id;
};

Node.prototype.nodeID = function() {
  console.log(this.id);
};

var Tree = function(){
	this.branch = new Array()
};

var tree = new Node(0);

tree.nodeID();

function addElement(parent, id) {
	

}
function removeElement(id){

}
function printTree(){

}