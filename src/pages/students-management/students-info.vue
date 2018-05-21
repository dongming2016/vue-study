<template>
    <div>
        <el-button plain icon="el-icon-download" @click="exportDatas()">导出</el-button>
        <el-button plain>过滤</el-button>
         <el-cascader
            :options="options"
            v-model="selectedOptions"
            @change="handleChange">
        </el-cascader>
         <el-checkbox v-model="checkedMan" @change="handleChecked(checkedMan)">男</el-checkbox>
         <el-checkbox v-model="checkedWoman" @change="handleChecked(checkedWoman)">女</el-checkbox>
         <el-input v-model="input" placeholder="请输入内容" @change="searchData(input)">
              <el-button slot="append" icon="el-icon-search"></el-button>
         </el-input>
    </div>
</template>

<style>
 .el-input-group {
    width: 200px;
  }
</style>

<script>
import { exportStudentsInfo } from '@/service/students'
export default {
    data: function() {
        return { 
                options: [
                {
                    value: 1,
                    label: '一年级',
                    children: [
                        {
                            value: 2,
                            label: '1班'
                        }
                    ]
                }
            ],
            selectedOptions: [],
            checkedMan: false,
            checkedWoman: false,
            input: ''
        }
    },
    methods: {
        exportDatas: function(selectedItems) {
            exportStudentsInfo(selectedItems)
        },
        handleChange: function(data) {
            console.log(data)
        },
        handleChecked(value) {
            console.log(value)
        },
        searchData(value) {
            console.log(value)
        }
    }

}
</script>

