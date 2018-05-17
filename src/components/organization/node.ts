import Point from './point';
import Line from './Line';

class Node {
    private isFold = true;
    private childrenList: Node[];
    private connectLineList: Line[];
    /**
     * 节点实体类
     * @param {父节点id唯一} parentId
     * @param {节点id唯一} id 
     * @param {是否为叶子节点} isLeaf 
     * @param {是否为根节点} isRoot 
     */
    constructor(private parentNode: Node, private id: string, private isLeaf: boolean, private isRoot: boolean, private position: Point) {
    }

    getChildList () {
        // create方法是浅复制，深复制应用?
        return Object.create(this.childrenList);
    }

    getLineList () {
        return Object.create(this.connectLineList);
    }

    /**
     * 获得当前节点的位置。
     */
    getPosition() {
        return this.position;
    }

    switchFoldStatus() {
        this.isFold = !this.isFold
    }

    addChild(ele: Node) {
        if (ele) {
            this.childrenList.push(ele);
        }
    }

    addConnectLine(line) {
        if (line) {
            this.connectLineList.push(line);
        }
    }

    removeChild (childId: string) {
        this.childrenList = this.childrenList.filter(ele => {
            return ele.id !==  childId;
        });
    }

    removeChildren (childIds: string[]) {
        if (!childIds.length) {
            return;
        }
        
        for (var i = 0, length = childIds.length; i < length; i++) {
            this.removeChild(childIds[i]);
        }
    }

    copy(node: Node, id: string, parentNode: Node) {
        const newNode = Object.create(node);
        newNode.id = id;
        newNode.parentNode = parentNode;
        return node;
    }

    /**
     * 移动节点
     * @param {被移动的元素} theEle 
     * @param {移动后的父元素} newParent
     */
    moveNode(theEle: Node, newParent: Node) {
        const parentNode = theEle.parentNode;
        parentNode.removeChild(theEle.id);
        theEle.parentNode = newParent;
        newParent.addChild(theEle);
    }
}

export default Node;