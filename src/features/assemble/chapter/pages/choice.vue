<template>
  <div style="height:100%">
  <view-box ref="viewBox" body-padding-top="46px">
      <div slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:1;">
        <x-header :left-options="{backText: '精选练习'}">
          <!-- <div slot="right" @click="$router.push({name: 'download'})"><i class="icon iconfont icon-download_link"></i></div> -->
        </x-header>
      </div>
      <div>
        <card v-for="(item, index) in list" :key="index">
          <div slot="content" @click="$router.push({name:'example', params: {subjectId: item.subject_id, grade: item.grade, id: item.exercisesId, type: 'lxexercises'}})">
            <div v-html="item.stem"></div>
            <div v-if="item.opt.hasOwnProperty('A')">
              <div v-for="(value, key) in item.opt" :key='value' style="padding-top:5px;">{{ key }}： <p v-html="value" style="display:inline-block"></p></div>
            </div>
          </div>
          <div slot="footer">
            <div class="weui-cell weui-cell_link" style='padding:5px 15px'>
              <div class="weui-cell__bd">
                <flexbox :gutter='0'>
                  <flexbox-item :span="3">难度: {{item.degree}}</flexbox-item>
                  <flexbox-item :span="7">更新: {{item.time | ymd}}</flexbox-item>
                  <flexbox-item :span="2" @click.native="setAssemble({id: item.exercisesId, index: index, form: 2})" style='text-align:right'>
                    <!--<i class="icon iconfont icon-jinrulianxi" style="font-size:18px"></i>-->
                    <i v-if='item.isAssembly' class="icon iconfont icon-correct" style="color:#4cc0be"></i>
                    <i v-else class="icon iconfont icon-icon073102" style="color:#4cc0be" ></i>
                  </flexbox-item>
                </flexbox>
              </div>
            </div>
          </div>
        </card>
        <div style="text-align:center;padding:20px 0;">
          <spinner v-if="loading" type="lines"></spinner>
          <div>
            <p style="font-size:16px;color:#4cc0be" v-if="loadingNoData">已经加载全部练习题~</p>
            <p style="font-size:16px;color:#4cc0be" v-if="!loadingNoData && !loading" @click="_getData">点我加载更多</p>
          </div>
        </div>
      </div>
    </view-box>
    <div class='assembleCount'
      @click="$router.push({name: 'download'})">
      已选<br/>{{AssembleChoice.count}}
    </div>
  </div>
</template>

<script>
import {XHeader, ViewBox, Card, Spinner, Flexbox, FlexboxItem} from 'vux'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'choice',
  components: {
    XHeader, ViewBox, Card, Spinner, Flexbox, FlexboxItem
  },
  computed: {
    ...mapGetters(['Route', 'AssembleChoice']),
    list () {
      return this.AssembleChoice.list
    }
  },
  data () {
    return {
      loading: true,
      loadingNoData: false
    }
  },
  methods: {
    ...mapActions(['getAssembleChoice', 'setAssembleChoiceScroll', 'setAssemble', 'clearAssembleChoice']),
    _getData () {
      this.loading = true
      this.getAssembleChoice().then((res) => {
        if (res.data.data.list.length < 10) {
          this.loadingNoData = true
        }
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // 不来自题目详情全部清除数据
      if (from.name === 'example' || from.name === 'download') {
        vm.loadingNoData = false
        vm.clearAssembleChoice()
        vm._getData()
      }
      vm.$refs.viewBox.scrollTo(vm.AssembleChoice.scroll)
    })
  },
  beforeRouteLeave (to, from, next) {
    this.setAssembleChoiceScroll(this.$refs.viewBox.getScrollTop())
    next()
  }
}
</script>
<style lang="less" scoped>
.assembleCount{
  position: fixed;
  background:#4cc0be;
  color:#fff;
  font-size: .9rem;
  height: 4rem;
  width: 4rem;
  box-sizing: border-box;
  padding:.5rem .75rem;
  border-radius: 50%;
  bottom: 10%;
  right: 5%;
  box-shadow: 2px 2px 7px #4cc0be;
  text-align: center;
}
</style>
