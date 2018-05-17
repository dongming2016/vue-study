import Point from './point';
import Node from './node';
import Util from './Util';

class Line {
    // 全局变量
    private static width = 1;
    private pointList: Point[];  // 当前连线的结点构成。
    constructor (private parentNode: Node, private childNode: Node) {
        this.createLine();
    }


    static setWidth (width) {
        Line.width = width;
    }

    private createLine () {
        this.generateMediumPoint();
    }

    /**
     * 根据父节点和子节点在父节点中的位置计算中间节点。
     * 并修正先前连线的形状。
     */
    generateMediumPoint () {
        const lineList = this.parentNode.getLineList();
        this.pointList.push(this.parentNode.getPosition());
        if (lineList.length) {

        }
        this.pointList.push(this.childNode.getPosition());
    }

    /**
     * 对点进行排序
     */
    private sortPoints () {
        Util.sortPoints(this.pointList, true);
    }

    setMediumPoint () {

    }
}

export default Line;