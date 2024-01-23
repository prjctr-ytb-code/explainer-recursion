import { familyTree } from './data.mjs';

const names = [];

function traverseTree(node, arr) {
    if (node.children.length === 0) {
        arr.push(node.name);
        return;
    }

    arr.push(node.name);

    node.children.forEach((child) => {
        traverseTree(child, arr);
    });
}

traverseTree(familyTree, names);

console.log(names.sort());
