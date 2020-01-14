/*
 * @Description: js实现栈类
 * @Date: 2020-01-14 18:53:44
 * @LastEditors: phoebus
 * @LastEditTime: 2020-01-14 20:28:13
 */

function Stack() {
	// 私有变量 items，用于记录数组，对象不能直接操作
	var items = [];
	// 类方法 push，在数组末尾添加项，对象可直接调用
	this.push = function(element) {
		items.push(element);
	};
	// 删除数据尾项，并返回剩余项数据
	this.pop = function() {
		return items.pop();
	};
	// 将数组转化为字符串返回
	this.toString = function() {
		return items.toString();
	};
	// 查看数组最后一项
	this.peek = function() {
		return items[items.length - 1];
	};
	// 判断数组是否为空
	this.isEmpty = function() {
		return items.length === 0;
	};
	// 清空数组
	this.clear = function() {
		items = [];
	};
	// 返回数组的长度
	this.size = function() {
		return items.length;
	}
}

module.exports = Stack;
