var Node = function (id) {
  this.id = id;
};
//push 
Node.prototype.nodeID = function() {
  console.log(this.id);
};

var Tree = function(){
	this.branch = new Array()
};

Tree.prototype.addBranch(parent, branch) {
	this.branch[parent] = branch;
};
var tree = new Node(0);

tree.nodeID();

function addElement(parent, id) {
	

}
function removeElement(id){

}
function printTree(){

}