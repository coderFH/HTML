import {BinaryTreeInfo} from './BinaryTreeInfo'

public abstract class Printer {	
	/**
	 * 二叉树的基本信息
	 */
	protected tree : BinaryTreeInfo;
	
	public Printer(tree : BinaryTreeInfo) {
		this.tree = tree;
	}
	
	/**
	 * 生成打印的字符串
	 */
	public abstract printString() : string;
	
	/**
	 * 打印后换行
	 */
	public println() : void {
		print();
		System.out.println();
	}
	
	/**
	 * 打印
	 */
	public void print() {
		System.out.print(printString());
	}
}
