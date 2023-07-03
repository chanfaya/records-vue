<template>
    <div class="common-layout">
      <el-container>
        <el-aside width="200px">
            <el-scrollbar>
                <el-menu :default-openeds="['1', '3']">
                <el-sub-menu index="1">
                    <template #title>
                    <el-icon><message /></el-icon>Navigator One
                    </template>
                    <el-menu-item-group>
                    <template #title>Group 1</template>
                    <el-menu-item index="1-1">Option 1</el-menu-item>
                    <el-menu-item index="1-2">Option 2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="Group 2">
                    <el-menu-item index="1-3">Option 3</el-menu-item>
                    </el-menu-item-group>
                    <el-sub-menu index="1-4">
                    <template #title>Option4</template>
                    <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
                    </el-sub-menu>
                </el-sub-menu>
                <el-sub-menu index="2">
                    <template #title>
                    <el-icon><icon-menu /></el-icon>Navigator Two
                    </template>
                    <el-menu-item-group>
                    <template #title>Group 1</template>
                    <el-menu-item index="2-1">Option 1</el-menu-item>
                    <el-menu-item index="2-2">Option 2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="Group 2">
                    <el-menu-item index="2-3">Option 3</el-menu-item>
                    </el-menu-item-group>
                    <el-sub-menu index="2-4">
                    <template #title>Option 4</template>
                    <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
                    </el-sub-menu>
                </el-sub-menu>
                <el-sub-menu index="3">
                    <template #title>
                    <el-icon><setting /></el-icon>Navigator Three
                    </template>
                    <el-menu-item-group>
                    <template #title>Group 1</template>
                    <el-menu-item index="3-1">Option 1</el-menu-item>
                    <el-menu-item index="3-2">Option 2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="Group 2">
                    <el-menu-item index="3-3">Option 3</el-menu-item>
                    </el-menu-item-group>
                    <el-sub-menu index="3-4">
                    <template #title>Option 4</template>
                    <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
                    </el-sub-menu>
                </el-sub-menu>
                </el-menu>
            </el-scrollbar>
        </el-aside>
        <el-container>
          <el-header>Header</el-header>
          <el-main>
            <el-scrollbar height="100%" style="background-color: aliceblue;">
                <div>小明</div>                <div>小明</div>
                <div>小明</div>
                <div>小明</div>
                <div>小明</div>
                <div>小明</div>
                <div>小明</div>
                <div>小明</div>
                <div>小明</div>
                <div>小明</div>
                <div>小明</div>
                <div>小明</div>
                <div>小明</div>

            </el-scrollbar>
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>
<style lang="less">
    .common-layout {
        height: 100%;
        .el-container {
            height: 100%;
            .el-aside {
                background-color: #545c64;
                color: #fff;
                text-align: center;
                line-height: 200px;
            }
            .el-header {
                background-color: #409EFF;
                color: #fff;
                text-align: center;
                line-height: 60px;
            }
            .el-main {
                background-color:antiquewhite;
                color: #333;
                text-align: center;
                line-height: 160px;
            }
        }
    }
</style>