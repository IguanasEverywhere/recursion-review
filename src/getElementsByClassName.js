// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here

  // I - string representing a class name
  // O - collection of html elements
  // C - can't use built in methods
  // E - no elements found, empty document

  // start with document.body as current root
  // check if it has the className
  // check if element has child nodes
  // if it does, iterate through the child nodes, and pass each one back in for same checks
  // and make it current root

  var currentRoot = document.body;
  var matchingNodes = [];

  var isMatch = function(currentNode) {

    for (var j = 0; j < currentNode.classList.length; j++) {
      if (currentNode.classList[j] === className) {
        matchingNodes.push(currentNode);
      }
    }
    var children = currentNode.children;
    if (children.length > 0) {
      for (var i = 0; i < children.length; i++) {
        isMatch(children[i]);
      }
    }
  };

  isMatch(currentRoot);

  return matchingNodes;
};
