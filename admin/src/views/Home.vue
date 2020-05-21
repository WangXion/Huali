<template>
  <div class="backstage">
    <el-header>
      后台管理系统
      <i class="i" @click="iSon" :class="iSTrue?'el-icon-s-fold':'el-icon-s-unfold'"></i>
    </el-header>

    <el-container style="height: 600px;">
      <el-aside :width="iSTrue?'0':'200px'" style>
        <el-menu :default-openeds="[]"><!-- //默认打开标签 -->

          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <a href="/home">首页</a>
            </template>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>主页管理
            </template>
            <el-menu-item-group>
              <template slot="title">内容分类</template>
              <el-menu-item index="2-1">
                <a href="/banner">轮播</a>
              </el-menu-item>
              <el-menu-item index="2-2">
                <a href="/content">内容</a>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-menu"></i>分页管理
            </template>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="3-1">
                <a href="/hot">热门推荐</a>
              </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="3-2">
                <a href="/Flower">鲜花</a>
              </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="3-3">
                <a href="/Preserved"></a> 永生花
              </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="3-4">
                <a href="/Cake">蛋糕</a>
              </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="3-5">
                <a href="/Disclosure"></a> 特色礼品
              </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="3-6">
                <a href="/Gift">礼篮</a>
              </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="3-7">
                <a href="/Bonds">绿植花卉</a>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-shopping-cart-full"></i>订单详情
            </template>
            <el-menu-item-group>
              <template slot="title">订单明细</template>
              <el-menu-item index="4-1">
                <a href="/Underway">进行中</a>
              </el-menu-item>
              <el-menu-item index="4-2">
                <a href="/history">历史订单</a>
              </el-menu-item>
              <el-menu-item index="4-3">
                <a href="/Allorders">全部订单</a>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-s-custom"></i>网站信息管理
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1">
                <a href="/users">管理员信息</a>
              </el-menu-item>
              <el-menu-item index="5-2">
                <a href="/Information"></a> 会员信息
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-setting"></i>设置
            </template>
            <el-menu-item index="6-1" @click="loginOut()">
              <a href="" ></a> 退出
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
     <el-container>
       
        <el-main  id="biao">
    <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
    <div id="biao1">
      <div id="main" style="width: 600px;height:400px;"></div>
    <div id="main2" style="width: 600px;height:400px;"></div>
    </div>
    <div id="biao1">
      <!-- <div id="main3" style="width: 600px;height:400px;"></div> -->
      <div id="main3" style="width: 600px;height:400px;"></div>
      <div id="main4" style="width: 600px;height:400px;"></div>
    </div>
        </el-main>
      </el-container>
      
    </el-container>
  </div>
</template>
<script>
  export default {
    data() {
      return {
         tableData:[],
         iSTrue:false,
      }  
    },
    mounted () {
      this.drawLine();
      this.drawLine2();
      this.drawLine3();
      this.drawLine4();
    },
    //方法
    methods: {
      //echarts
       drawLine(){

               // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('main'))
        // 绘制图表
        myChart.setOption({
            title: { text: '花礼网后台数据' },
            tooltip: {},
            xAxis: {
                data: ["热门推荐","鲜花","永生花","蛋糕","特色礼品","礼篮","绿植花卉"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20,25]
            }]
        });

       },
       drawLine2(){
                     // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('main2'))
           myChart.setOption ({
    title: {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ["热门推荐","鲜花","永生花","蛋糕","特色礼品","礼篮","绿植花卉"]
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value: 335, name: '热门推荐'},
                {value: 310, name: '鲜花'},
                {value: 234, name: '永生花'},
                {value: 135, name: '蛋糕'},
                {value: 135, name: '特色礼品'},
                {value: 1548, name: '礼篮'},
                {value: 1548, name: '绿植花卉'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
                 });
  
       },
        drawLine3(){
                               // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('main3'))
            myChart.setOption({
              tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['利润', '支出', '收入']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'value'
        }
    ],
    yAxis: [
        {
            type: 'category',
            axisTick: {
                show: false
            },
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
    ],
    series: [
        {
            name: '利润',
            type: 'bar',
            label: {
                show: true,
                position: 'inside'
            },
            data: [200, 170, 240, 244, 200, 220, 210]
        },
        {
            name: '收入',
            type: 'bar',
            stack: '总量',
            label: {
                show: true
            },
            data: [320, 302, 341, 374, 390, 450, 420]
        },
        {
            name: '支出',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'left'
            },
            data: [-120, -132, -101, -134, -190, -230, -210]
        }
    ]
            })
        },
        drawLine4(){
                let myChart = this.$echarts.init(document.getElementById('main4'))
                myChart.setOption({
                  title: {
        text: '未来一周气温变化',
        subtext: '纯属虚构'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['最高气温', '最低气温']
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} °C'
        }
    },
    series: [
        {
            name: '最高气温',
            type: 'line',
            data: [11, 11, 15, 13, 12, 13, 10],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
        {
            name: '最低气温',
            type: 'line',
            data: [1, -2, 2, 5, 3, 2, 0],
            markPoint: {
                data: [
                    {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'},
                    [{
                        symbol: 'none',
                        x: '90%',
                        yAxis: 'max'
                    }, {
                        symbol: 'circle',
                        label: {
                            position: 'start',
                            formatter: '最大值'
                        },
                        type: 'max',
                        name: '最高点'
                    }]
                ]
            }
        }
    ]
                })
        },
      
        iSon(){
          this.iSTrue= !this.iSTrue
        },
        getData(){
          this.$axios.get('http://localhost:3000/banner')
          .then((res)=>{
              //  console.log(res.data)
               var shuju=res.data
              //  console.log(this.tableData)
                this.tableData=shuju
                  //控制台打印请求成功时返回的数据
               //bind(this)可以不用
          })
        }, 
        
            edit(index){
      console.log(this.list[index])
         },
           //退出登录
         loginOut(){
      
           this.$router.push("/")
         }
    },   
    created (){
      this.getData()
    },
  }
</script>

<style lang="less" scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  background: gray;
}
a {
  text-decoration: none;
  color: #303133;
  
}
.i {
  font-size: 24px;
  margin-left: 61px;
  text-align: center;
  background: gray;
}
.el-aside{
   background: gray;
   
}
.el-menu-item-group{
    background: gray;
}
.el-menu-item {
   background: gray;
}
.el-submenu{
  background: gray;

}
#biao1{
    width: 100%;
    display: flex;
    justify-content: space-around;
div{
 flex: 1;
}
   
}
</style>
