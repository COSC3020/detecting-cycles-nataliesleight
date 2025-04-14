function hasCycle(graph) {
    var visited = [];
    var parent = "null";
    for (var i = 0; i < graph.length; i++) {    // check each unvisited node, isolated ones too
        if (!visited.includes(i) && detectCycle(graph, i, visited, parent)) {  // if not visited and has cycle
            return true;
        }
    }
    return false;
}

function detectCycle(graph, node, visited, parent) {
    if (visited.includes(node)) {return true;}        // node already visited, cycle (check within recursion)
    visited.push(node);                         // node not visited, add to visited list
    for (var i = 0; i < graph[node].length; i++) {    // check each edge from node
        if (graph[node][i] != parent && detectCycle(graph,graph[node][i],visited,node)) {return true;}    // if descendant not parent
    }
    return false;
}
