/*
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
有效字符串需满足：
    左括号必须用相同类型的右括号闭合。
    左括号必须以正确的顺序闭合。

注意空字符串可被认为是有效字符串。
示例 1:
    输入: "()"
    输出: true

示例 2:
    输入: "()[]{}"
    输出: true

示例 3:
    输入: "(]"
    输出: false

示例 4:
    输入: "([)]"
    输出: false
    
示例 5:
    输入: "{[]}"
    输出: true

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
var isValid = function(s) {
    if (s.length % 2 !== 0) return false;
    let stack = [];
    for (let i = 0; i < s.length; i++) {
       if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
           stack.push(s[i]);
       } else {
           if (stack.length === 0) return false;
           let left = stack.pop();
           if (left === "(" && s[i] != ")") return false;
           if (left === "{" && s[i] != "}") return false;
           if (left === "[" && s[i] != "]") return false;
       }
    }
    return stack.length === 0;
};

var isValid1 = function(s) {
    if (s.length % 2 !== 0) return false;
    const map = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    }
    let stack = [];
    for (let i = 0; i < s.length; i++) {
       if (map[s[i]]) { //这一步之后,基本上stack里存的都是左括号
           stack.push(s[i]);
       } else {
           if (stack.left === 0) return false;
           if (map[ stack.pop()] !== s[i])  return false
       }
    }
    return stack.length === 0;
};


console.log(isValid1("({}})"));
