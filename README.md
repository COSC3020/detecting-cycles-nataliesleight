# Detecting Cycles in Graphs

Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not. 

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

Rather than looking through the runtimes of for loops and recurisive calls, I will be looking at what the program does do determine the runtime. The for loop in the first function searches for an unvisited vertex and then starts a DFS search from that node. While this for loop can run up to V times, that would mean that none of the vertices are connected by edges and all are isolated from each other. The runtime in this case would only be V.

When an unvisited vertex is found, it enters a recursive function that explores through the edges of the nodes it finds. The worst case scenario for this case would be the source node has edges connecting to every other node. The recursive call will travel to the first descendent node, then because that node has no descendents, it has to backtrack to the source node to then travel to the next descendant. This would be 2E runtime to make it to the last vertex and back to the source to see that there are no more descendents left to explore. It is 2E because it has to travel each edge twice. It is also traveling each vertex during this so V is added to the runtime. 

The for loop in the first function will travel all isolated graphs as well, making all the edges and vertices traveled in the end. Thus the runtime is $\Theta (|V| + 2|E|)$.


### Sources

I used the provided notes slides to deduce the conditions for Kruskal's Algorithm.

I used this link to see how to use DFS (Depth First Search) to search an undirected graph and to detect cycles. I also used the code provided as a template for my own code. I am also using an example graph for my test code: https://yuminlee2.medium.com/detect-cycle-in-a-graph-4461b6000845#10ff

“I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.” - Natalie Sleight
