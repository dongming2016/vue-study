import Point from "./point";

class Util {
    private static ascend = true; // 默认升序
    /**
     * 对节点进行排序
     * @param prePoint 前面的节点
     * @param laterPoint 后面的节点
     */
    private static compareNode (prePoint: Point, laterPoint: Point): number {
        const compare = (): number => {
            const deltaY = prePoint.getY() - laterPoint.getY() ;
            // 前面的节点比后面的节点低则排在后面节点
            // 或者一样高时，更靠右则排在后面
            if (deltaY < 0 || deltaY === 0 && prePoint.getX() - laterPoint.getX() < 0) {
                return -1;
            }

            return 1;
        }
        
        let result = compare();
        return Util.ascend ? result : - result;
    }

    /**
     * 对节点列表进行排序
     * @param pointList 节点列表
     * @param ascend 排序方式true升序，false降序
     */
    static sortPoints (pointList: Point[], ascend: true) : void {
        Util.ascend = ascend;
        pointList.sort(Util.compareNode);
    }
}

export default Util;