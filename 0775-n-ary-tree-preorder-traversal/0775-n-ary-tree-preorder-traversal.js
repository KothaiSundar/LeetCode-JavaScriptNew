/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    const result=[];
    helper(root,result);
    return result;
};

function helper(root,result)
{
    if(root!=null)
    {  result.push(root.val);
    for(let child of root.children)
        helper(child,result);
    }
}