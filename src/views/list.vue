// 微信扫码登录页
<template>
  <div  class="indexBody" id="page-wrapper">
    <audio :src="currentUrl" class="q-player" id="reply_1" ></audio>

    <audio :src="currentUrl2" class="q-player" id="reply_2" ></audio>

    <audio :src="currentUrl3" class="q-player" id="reply_3" ></audio>

    <el-button type="primary" @click="play1" size="small">直接播放</el-button>

    <el-button type="danger" @click="play2" size="small">请求播放</el-button>

    <el-button type="danger" @click="play3" size="small">延时播放</el-button>

    <br><br><br><br><br><br>
    <audio :src="currentUrl4" class="q-player" id="reply_4" ></audio>
    <el-button type="danger" @click="play4" size="small">IPone专用网络处理</el-button>
  </div>
</template>
<script>
  import { globalMixins } from '@/mixins.js'
  import api from '@/api/index'
  export default {
    mixins: [globalMixins],
    name: 'index',
    data () {
      return {
        currentUrl: 'http://dev.phpmvc.com/5.mp3',
        currentUrl2: '',
        currentUrl3: '',
        currentUrl4: ''
      }
    },

    created () {
      this.$store.dispatch('setLayout', 'login')

    },
    methods : {
      addTeacher () {
          this.dialogFormVisible = true
      },
      play1 () {
        document.getElementById('reply_1').play()
      },
      play2 () {
        var self = this
        document.getElementById('reply_2').addEventListener('canplay', () => {
          // alert('canplay2')
          self.$message('canplay2'); 
        })
        api.music({}).then(this.filterCallback).then(function (r) {
          // console.log()
          self.$message('ajax success')
          self.currentUrl2 = 'http://dev.phpmvc.com/3.mp3';
          setTimeout(() => {
            document.getElementById('reply_2').play()
          }, 200)
        })
      },
      play3 () {
          var self = this
          document.getElementById('reply_3').addEventListener('canplay', () => {
            self.$message('canplay3')
          })
          setTimeout(() => {
            self.currentUrl3 = 'http://dev.phpmvc.com/5.mp3'
          }, 1000)
          
          setTimeout(() => {
            document.getElementById('reply_3').play()
          }, 1200)
      },
      play4 () {
          var self = this
          document.getElementById('reply_4').addEventListener('canplay', () => {
            self.$message('canplay4');
            document.getElementById('reply_4').play()
          })
          if(this.currentUrl4){
            document.getElementById('reply_4').play()
            return;
          }
          api.music({}).then(this.filterCallback).then(function (r) {
            self.$message('ajax success')
            self.currentUrl4 = 'http://dev.phpmvc.com/3.mp3';
            setTimeout(() => {

            document.getElementById('reply_4').play()
            }, 100)
            // setTimeout(() => {
            //   self.currentUrl4 = ''
            //   setTimeout(() => {
            //     self.currentUrl4 = 'http://dev.phpmvc.com/3.mp3'
            //     setTimeout(() =>{
            //       self.$message({
            //         message: '警告哦，这是一条警告消息',
            //         type: 'warning'
            //       });
            //     document.getElementById('reply_4').play()
            //     })
            //   }, 500)
            // }, 1200)
          })
        }
    }
  }
</script>
<style lang="stylus" scoped>
  .indexBody
    margin-left 250px
    padding 0px 0 0 10px

  .table-list
    width 98%
  .el-button
    margin-top 50px
    font-size 30px
    margin-right 30px

  .el-notification{top:0}
</style>
