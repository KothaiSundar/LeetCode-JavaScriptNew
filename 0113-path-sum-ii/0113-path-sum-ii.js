/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const result=[];
    dfs(root,0,targetSum,result,[]);
    return result;
};
function dfs(root,sum,targetSum,result,path)
{
    if(root==null)
    return ;

    sum=sum+root.val;
    path.push(root.val);


    if(root.left==null && root.right==null && sum===targetSum)
    result.push([...path]);


dfs(root.left,sum,targetSum,result,[...path]);
dfs(root.right,sum,targetSum,result,[...path]);
}

