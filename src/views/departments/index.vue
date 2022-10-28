<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card class="tree-card">
        <!-- 用了一个行列布局 -->
        <TreeTools :tree-node="company" :is-root="true" />
        <el-tree :data="departs" :props="defaultProps" default-expand-all>
          <!-- 说明el-tree里面的这个内容 就是插槽内容 => 填坑内容  => 有多少个节点循环多少次 -->
          <!-- slot-scope="{ data }" 是 tree组件传给每个节点的(:data="departs")插槽的内容的数据 -->
          <!-- 顺序一定是 执行slot-scope的赋值 才去执行 props(:tree-node)的传值 -->
          <TreeTools slot-scope="{ data }" :tree-node="data" />
        </el-tree>
      </el-card>
    </div>
  </div>
</template>

<script>
import TreeTools from './components/TreeTools.vue'
import { getDepartments } from '@/api/user'
import { tranListToTreeData } from '@/utils'

export default {
  components: {
    TreeTools
  },
  data() {
    return {
      company: {},
      defaultProps: {
        label: 'name'
      },
      departs: []
    }
  },
  created() {
    this.getDepartments()
  },
  methods: {
    async getDepartments() {
      const result = await getDepartments()
      this.company = { name: result.data.companyName, manager: '负责人' }
      const list = result.data.depts.slice(0, 30)
      this.departs = tranListToTreeData(list)
    }
  }
}
</script>

<style scoped>
.tree-card {
  padding: 30px 140px;
  font-size: 14px;
}
</style>
