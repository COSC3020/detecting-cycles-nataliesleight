function hasCycle(graph) {
    var visited = [];
    var parent = "null";
    for (var i = 0; i < graph.length; i++) {    // check each unvisited node, isolated ones too
        if (!checkVisit(i,visited) && detectCycle(graph, i, visited, parent)) {  // if not visited and has cycle
            return true;
        }
    }
    return false;
}

function checkVisit(node, visited) {
    if (visited.length == 0) {return false;}
    for (var i = 0; i < visited.length; i++) {
        if (node == visited[i]) {return true;}
    }
    return false;
}

function detectCycle(graph, node, visited, parent) {
    if (checkVisit(node, visited)) {return true;}        // node already visited, cycle (check within recursion)
    visited.push(node);                         // node not visited, add to visited list
    for (var i = 0; i < graph[node].length; i++) {    // check each edge from node
        if (graph[node][i] != parent && detectCycle(graph,graph[node][i],visited,node)) {return true;}    // if descendant not parent
    }
    return false;
}
