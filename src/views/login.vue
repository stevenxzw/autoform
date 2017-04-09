// 微信扫码登录页
<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col :span="7" :offset="8">
        <div class="panle login">
          <div class="panle-title">自定义表单</div>
          <div class="panle-body">
<!--             <el-input v-model="username" placeholder="请输入帐号"></el-input>
            <el-input type="password" v-model="password" placeholder="请输入密码"></el-input> -->
            <el-form ref="loginForm" :model="loginForm" label-width="0px">
              <el-form-item 
                prop="username"
                :rules="[
                  { required: true, message: '请填写帐号'}
                ]">
                <el-input v-model="loginForm.username" placeholder="请填写帐号" ></el-input>
              </el-form-item>
              <el-form-item
                prop="password"
                :rules="[
                  { required: true, message: '请填写密码'}
                ]">
                <el-input v-model="loginForm.password" placeholder="请填写密码" type="password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" class="login-btn" :loading=lg @click="login('loginForm')">登 录</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import { globalMixins } from '@/mixins.js'
  import api from '@/api/index'
  export default {
      mixins: [globalMixins],
      name: 'login',
      data () {
        return {
          lg: false,
          loginForm: {
            username: 'admin',
            password: '123456789',
            desc: ''
          }
        }
      },


      created () {
        console.log('login---')
        this.$store.dispatch('setLayout', 'login');
        // this.setLayout('admin');
      },
      methods : {
        login (formName) {
          var _this = this;
          this.$refs[formName].validate((valid) => {
            // console.log(valid)
          if (valid) {
            // alert('submit!');
            _this.lg = !_this.lg;
            // console.log('this',this)
            api.login({
              username: this.loginForm.username,
              pwd: this.loginForm.password
            }).then(this.filterCallback).then(function (r) {
              // console.log('this',this)
              if(r.err === 0 ){
                console.log(r.rst);
                if(r.rst.token){
                  localStorage.setItem('token', r.rst.token);
                }
                // _this.user = {
                //   username: r.rst.username,
                //   nickname: r.rst.nickname,
                //   headImg: r.rst.headImg,
                //   uid: r.rst.uid
                // }
                _this.$store.dispatch('setUserInfo', {
                  username: r.rst.username,
                  nickname: r.rst.nickname,
                  headImg: r.rst.headImg,
                  uid: r.rst.uid
                });
                // _this._user = r.rst.username;
                // console.log(_this.user);
                _this.$router.replace('/index');
              }else{
                _this.lg = false;
                _this.$message({
                  showClose: true,
                  message: r.msg,
                  type: 'error'
                });
              }
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });

          // setTimeout(() => {
          //   this.$router.replace('/index')
          // }, 1000)
        }
      }
  }
</script>
<style lang="stylus" scoped>
  .panle
    border 1px solid #c0ccda
    background: #fff
    border-radius: 4px;
    min-height: 136px;
  .login
    margin-top: 100px
  .panle-title
    padding 10px 0 10px 10px
    font-size 16px
    color #000
    border-bottom 1px solid #c0ccda
    font-weight 700
  .panle-body
    padding 15px
  .login-btn
    width 100%


</style>
