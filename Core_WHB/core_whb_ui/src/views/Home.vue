<template>
  <div class="home">
    <div class="leftmenu">
      <!-- <a href class="cur">最新文章</a> -->
      <a
        :class="['nav-item',item.nav]"
        v-for="(item,index) in lists"
        @click="line_active(index)"
        :key="index"
      >{{item.name}}</a>
    </div>
    <div class="r">
      <!-- 最新文章 -->
      <ul v-if="this.num==0">
        <li v-for="(n,index) in poinfoA1" :key="index">
          <div class="top">
            <img src="../components/imgs/touxiang.png" alt>
            <p>{{n}}</p>
            <p>2018年9月1日</p>
          </div>
          <img src="../components/imgs/pic.jpg">
          <h3>
            <!-- 路由传参 -->
            <router-link :to="'/page/new/'+index">又多了一个锁币渠道——IBO时代来临</router-link>
          </h3>
          <p class="desc">EOS这周反弹，似乎在走独立行情，但是各个群的成员并没有激动，因为按照往常惯例，恐怕过几天还要跌回去，大家都差不多麻木了</p>
          <p class="bot">
            <i class="iconfont icon-zan"></i>
            6666
          </p>
        </li>
      </ul>
      <ul v-if="this.num==1">
        <li v-for="(n,index) in poinfoB1" :key="index">
          <div class="top">
            <img src="../components/imgs/touxiang.png" alt>
            <p>{{n}}</p>
            <p>2018年9月1日</p>
          </div>
          <img src="../components/imgs/pic.jpg">
          <h3>
            <router-link :to="'/page/hot/'+index">又多了一个锁币渠道——IBO时代来临</router-link>
          </h3>
          <p class="desc">EOS这周反弹，似乎在走独立行情，但是各个群的成员并没有激动，因为按照往常惯例，恐怕过几天还要跌回去，大家都差不多麻木了</p>
          <p class="bot">
            <i class="iconfont icon-zan"></i>
            6666
          </p>
        </li>
      </ul>
      <ul v-if="this.num==2">
        <li v-for="(n,index) in tablists" :key="index">
          <div class="top">
            <img src="../components/imgs/touxiang.png" alt>
            <p>{{n}}</p>
            <p>2018年9月1日</p>
          </div>
          <img src="../components/imgs/pic.jpg">
          <h3>
            <a @click="routerTo(index)">又多了一个锁币渠道——IBO时代来临</a>
          </h3>
          <p class="desc">EOS这周反弹，似乎在走独立行情，但是各个群的成员并没有激动，因为按照往常惯例，恐怕过几天还要跌回去，大家都差不多麻木了</p>
          <p class="bot">
            <i class="iconfont icon-zan"></i>
            6666
          </p>
        </li>
      </ul>
      <div class="pagelist">
        <PagingNav></PagingNav>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ArticleList from "@/components/ArticleList.vue";
import PagingNav from "@/components/PagingNav.vue";
import { log } from "util";

export default {
  name: "home",
  components: {
    ArticleList,
    PagingNav
  },
  props: {
    poinfoA1: {
      type: Array
    },
    poinfoB1: {
      type: Array
    }
  },
  data() {
    return {
      msg: String,
      num: 0,
      lists: [
        { name: "最新文章", nav: "cur" },
        { name: "热门资讯", nav: "" },
        { name: "收藏排行", nav: "" }
      ],
      tablists: ["内容一02", "内容二02", "内容三02"]
    };
  },
  methods: {
    line_active: function(index) {
      this.lists.forEach((item, i) => {
        item.nav = "";
      });
      this.lists[index].nav = "cur";
      this.num = index;
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../components/css/base.less");
// 主体
.home {
  width: 1000px;
  margin: 0 auto;
  margin-top: 30px; // border: 1px solid blue;
  overflow: hidden;
  .leftmenu {
    width: 120px;
    float: left;
    a {
      font-size: 14px;
      display: block;
      height: 40px;
      color: #3b4651;
      text-align: center;
      line-height: 40px;
      border-radius: 3px;
      margin-bottom: 3px;
      .tran;
      &.cur {
        background: @gblue;
        color: white;
      }
      &:hover {
        background: @gblue;
        color: white;
      }
    }
  } // leftmenu end
  .r {
    overflow: hidden;
    width: 850px;
    float: right;
    > ul {
      background: white;
      li {
        border-bottom: 1px solid #f6f8f9;
        padding: 20px 30px 30px;
        box-sizing: border-box;
        margin: 0 auto;
        overflow: hidden;
        .top {
          overflow: hidden;
          margin-bottom: 20px;
          img {
            float: left;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 12px;
          }
          p:nth-of-type(1) {
            color: @wcolor;
            font-size: 14px;
            line-height: 20px;
          }
          p:nth-of-type(2) {
            color: #ccc;
            font-size: 12px;
            line-height: 20px;
          }
        } // top end
        > img {
          width: 232px;
          height: 128px;
          float: left;
          margin-right: 30px;
        }
        h3 {
          a {
            color: #212529;
            font-size: 20px;
            line-height: 26px;
            font-weight: 400;
          }
          height: 26px;
          margin-bottom: 10px;
        }
        .desc {
          color: #999;
          line-height: 20px;
          font-size: 13px;
          height: 128-10-26-20px;
        }
        .bot {
          height: 20px;
          line-height: 20px;
          color: #c5c5c5;
          font-size: 12px;
          display: flex;
          align-items: center;
          i {
            margin-right: 3px;
          }
        }
      } // li end
    } // ul end
    .pagelist {
      margin-top: 20px;
      background: white;
      overflow: hidden;
      padding: 20px 20px 20px;
      box-sizing: border-box;
      span,
      a {
        display: block;
        float: left;
        margin-right: 5px;
        padding: 3px 10px;
        color: @wcolor;
        border-radius: 3px;
        margin-right: 10px;
      }
      span {
        background: @gblue;
        color: white;
      }
    }
  } // .r end
}
// 主体结束
</style>
