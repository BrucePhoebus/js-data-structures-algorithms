// 导入Stack文件用于测试
var Stack = require('../src/Stack');

test('Stack', function() {
	// 实例化一个Stack对象
	var stack = new Stack();

	stack.push(5);
	stack.push(8);

	// 期望stack转化为字符串为：5,8
	expect(stack.toString()).toBe('5,8');

	// 期望 stack 删除并返回的是8
	expect(stack.pop()).toBe(8);
	// 期望 stack 转化成的字符串为'5'
	expect(stack.toString()).toBe('5');

	stack.push(8);

	// 期望 stack 最后一项是8
	expect(stack.peek()).toBe(8);
	// 期望 stack 的长度为2
	expect(stack.size()).toBe(2);
	// 期望 stack 不为空
	expect(stack.isEmpty()).toBeFalsy();
	// 清空数组
	stack.clear();
	// 期望 stack 长度为0
	expect(stack.size()).toBe(0);
})
