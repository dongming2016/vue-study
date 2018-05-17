<template>
    <div>

    </div>
</template>

<script>
import Node from 'node';
export default {
    data () {
        return new Node('', '', true, true);
    },
    methods: {
        switchChildrenState: function() {
            const childrenList = this.childrenList;
            const connectLineList = this.connectLineList;
            // 只修改直接子节点的收拢状态
            childrenList.forEach(element => {
                element.switchFoldStatus();
            });
            connectLineList.forEach(element => {
                element.isFold = true;
            });
        },
        addnode: function(ele) {
            if (!this.childrenList.length) {
                this.isLeaf = false;
            }
            this.childrenList.push(ele);
        },
        createNode: function(parentId, id) {
            return new Node(parentId, id, true, true);
        }
    }
}
</script>

