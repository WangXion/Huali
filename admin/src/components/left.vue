<template>
    <div>
       <el-header>后台管理系统</el-header>
    <el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>商品分页管理</template>
        <el-menu-item-group>
          <el-menu-item index="1-1">主页轮播</el-menu-item>
          <el-menu-item index="1-2">主页内容</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>商品分页管理</template>
        <el-menu-item-group>
          <template slot="title">热门推荐</template>
          <el-menu-item index="2-1">分页首图</el-menu-item>
          <el-menu-item index="2-2">分页内容</el-menu-item>
        </el-menu-item-group>
         <el-menu-item-group>
          <template slot="title">鲜花</template>
          <el-menu-item index="2-1">分页首图</el-menu-item>
          <el-menu-item index="2-2">分页内容</el-menu-item>
        </el-menu-item-group>
         <el-menu-item-group>
          <template slot="title">永生花</template>
          <el-menu-item index="2-1">分页首图</el-menu-item>
          <el-menu-item index="2-2">分页内容</el-menu-item>
        </el-menu-item-group>
         <el-menu-item-group>
          <template slot="title">蛋糕</template>
          <el-menu-item index="2-1">分页首图</el-menu-item>
          <el-menu-item index="2-2">分页内容</el-menu-item>
        </el-menu-item-group>
         <el-menu-item-group>
          <template slot="title">特色礼品</template>
          <el-menu-item index="2-1">分页首图</el-menu-item>
          <el-menu-item index="2-2">分页内容</el-menu-item>
        </el-menu-item-group>
         <el-menu-item-group>
          <template slot="title">礼篮</template>
          <el-menu-item index="2-1">分页首图</el-menu-item>
          <el-menu-item index="2-2">分页内容</el-menu-item>
        </el-menu-item-group>
         <el-menu-item-group>
          <template slot="title">绿植花卉</template>
          <el-menu-item index="2-1">分页首图</el-menu-item>
          <el-menu-item index="2-2">分页内容</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-shopping-cart-full"></i>订单详情</template>
        <el-menu-item-group>
          <template slot="title">订单明细</template>
          <el-menu-item index="3-1">历史订单</el-menu-item>
          <el-menu-item index="3-2">全部订单</el-menu-item>
          <el-menu-item index="3-2">进行中</el-menu-item>
        </el-menu-item-group>
    
      </el-submenu>
         <el-submenu index="4">
        <template slot="title"><i class="el-icon-s-custom"></i>管理员信息</template>
        <el-menu-item-group>
          <el-menu-item index="3-1">管理员信息</el-menu-item>
          <el-menu-item index="3-2">会员信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

       <el-submenu index="5">
        <template slot="title"><i class="el-icon-setting"></i>设置</template>
         <el-menu-item index="3-2">退出</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>  
    </div>
</template>