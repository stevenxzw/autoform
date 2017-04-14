// 微信扫码登录页
<template>
  <div  class="indexBody" id="page-wrapper">
<!--       <div  @click="add(1)">add-compoents1</div>
      <br>
      <div  @click="add(2)">add-compoents2</div>
      <br>
      <div @click="setComp()">修改属性</div>
      <br>
      <div @click="getCompData()">保存</div> -->
      <div class="form-nav">
        <div class="nav-body">
          <div class="fl">新建表单</div>
          <div class="nav-tabs fl">
            <ul>
              <li class="active"><router-link to="/index">编 辑</router-link></li>
              <li><router-link to="/index">规 则</router-link></li>
              <li><router-link to="/index">发 布</router-link></li>
              <li><router-link to="/index">数 据</router-link></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="form-design">
        <div class="preview-container">
          <div class="preview-btn">preview-btn</div>
          <div class="preview with-shadow">
            <div class="form-header">
              <div class="field editing">
                <div class="form-group form-lg">
                  <Input v-model="form.name" placeholder="未命名表单" class="form-control"></Input>
                </div>
                <div class="form-group form-lg form-last">
                  <Input v-model="form.description" placeholder="详细描述" type="textarea" :row=4 class="form-control"></Input>
                </div>
              </div>

              <div class="field editing time-zindex">
                <div class="form-group form-lg">
                  <label class="control-label" id="title_txt">报名时间</label>
                  <Row>
                      <Col span="12">
                          <span>开始时间</span>
                          <Date-picker v-model="form.startTime" type="datetime" confirm placeholder="选择日期" style="width: 200px"></Date-picker>
                      </Col>
                      <Col span="12">
                          <span class="ml20">结束时间</span>
                          <Date-picker v-model="form.endTime" type="datetime" confirm placement="bottom-end" placeholder="选择日期" style="width: 200px"></Date-picker>
                      </Col>
                  </Row>
                </div>
              </div>

              <div class="field editing">
                <div class="form-group form-lg">
                  <label class="control-label" id="number_txt">报名人数上限</label>
                  <div data-v-84b0bc22="" class="help-block"></div>
                  <el-input v-model="form.sign_number" placeholder="请填写人数" class="form-control"></el-input>
                  <!-- <el-checkbox v-model="form.can_repeat">可以重复报名</el-checkbox> -->
                   <Checkbox v-model="form.can_repeat">可以重复报名</Checkbox>
                </div>
              </div>
            </div>
            <draggable v-model="allComponents" @start="drag=true" @end="onEnd" class="form-body fields ui-sortable">
                <template  v-for="o in allComponents" >
                   <component :is="o.type" :field="o" v-on:emitchild='emitchild'>
                    <!-- <h1 slot="header">这里可能是一个页面标题</h1> -->
                   </component>
                </template>
            </draggable>

          </div>
        </div>
        <div class="sidebar"></div>
      </div>
  </div>
</template>
<script>
  import { globalMixins } from '@/mixins.js'
  import Single_line_text from '@/components/single_line_text'
  import Phone_mobile_text from '@/components/phone_mobile_text'
  import Single_choice_text from '@/components/single_choice_text'
  import Multiple_choice_text from '@/components/multiple_choice_text'
  import Drop_down_text from '@/components/drop_down_text'
  import Join_number_text from '@/components/join_number_text'
  import Email_text from '@/components/email_text'
  import Hello2 from '@/components/NewPage'
  import draggable from 'vuedraggable'
  import {createFieldId, getCls} from '@/base'

  export default {
    mixins: [globalMixins],
    name: 'index',
    data () {
      return {
        allComponents: [
          getCls({
            type: 'email_text'
          }),
          getCls({
            type: 'join_number_text',
            tips_value:'信息',
            errorMsg:'错误信息'
          }),
          // getCls({
          //   type: 'phone_mobile_text'
          // }),
          // getCls({
          //   type: 'single_choice_text',
          //   items:[{name:'apple',checked:false},{name:'android',checked:false}],
          //   checked: 'apple'
          // }),
          // getCls({
          //   type: 'multiple_choice_text',
          //   vertical: true,
          //   items:[{name:'apple',checked:false},{name:'android',checked:false}],
          //   checked: 'apple'
          // }),
          // getCls({
          //   type: 'drop_down_text',
          //   vertical: true,
          //   items:[{value:'北京',label:'北京',child:[]},{value:'上海',label:'上海',child:[
          //     {value:'浦东',name:'浦东',child:[{
          //       value:'东1',child:[]
          //     },{
          //       value:'东2',child:[]
          //     }]},
          //     {value:'浦西',name:'浦西',child:[{
          //       value:'上',child:[]
          //     },{value:'下',child:[]}]}
          //   ]}],
          //   checkSelect:[]
          //   // checkSelect: [{name:'上海',checked: '1浦西',child:[{label: '1浦东',value:'浦东'},{value:'浦西',label:'1浦西'}]},{name:'1浦西',checked: '2下',child:[{label: '2上',value:'上'},{value:'下',label:'2下'}]}]
          // })
          ],
        which_to_show:'first',
        activeName: "first",
        myArray:[{id:1,name:'drag1----'},{id:2,name:'drag2--------'},{id:3,name:'drag3--------'}],
        form: {
          name: '测试表单',
          description: '',
          startTime: '',
          endTime: '',
          sign_number: '',
          can_repeat: true
        }
      }
    },

    components: {
     Single_line_text: Single_line_text,
     Single_choice_text,
     Phone_mobile_text,
     Multiple_choice_text,
     Drop_down_text,
     Join_number_text,
     Email_text,
     Hello2: Hello2,
     third: { //第三个子组件
     template: "<div>这里是子组件3</div>"
     },
     draggable
    },
    created () {
      this.$store.dispatch('setLayout', 'admin')
      // this.setLayout('admin');
      // console.log('index-page', this.userInfo);
      // console.log(this)
      // console.log(getCls({
      //   type: 'Single_line_text',
      //   a: 1,
      //   b: 2
      // }))
      // console.log(getCls({
      //   type: 'Single_line_text',
      //   a: 12323,
      //   b: 223223
      // }))
      console.log(this.allComponents)
    },
    methods : {
      handleClick () {},
      add (type) {
        // console.log(type)
        switch(type){
          case 1:
                this.allComponents.push({componentName:'Single_line_text', data: {
                  cid : +new Date
                }})
          break;
          case 2:
                this.allComponents.push({componentName:'Hello2', data: {
                  cid : +new Date
                }})

          break;
        }
        // console.log(this.allComponents)
      },
      // setComp () {
      //   for(var i =0,len = this.allComponents.length;i<len;i++){
      //     this.allComponents[i].data = {
      //       cid : +new Date
      //     }
      //   }
      // },
      // getCompData () {
      //   console.log(this.allComponents)
      // },
      onEnd () {
        // console.log(arguments, this.allComponents)
      },
      emitchild (obj) {
        switch(obj.type){
          case 'select':
            this.setallunEdit()
            obj.fieldData.editing = true
          break;
          case 'del':
            // this.$confirm('确定要删除?', '提示', {
            //   confirmButtonText: '确定',
            //   cancelButtonText: '取消',
            //   type: 'warning'
            // }).then(() => {
            //   this.delComponent(obj.fieldData)
            // }).catch(() => {
          
            // });

            this.$Modal.confirm({
                title: '提示',
                content: '确定要删除？',
                onOk: () => {
                    this.delComponent(obj.fieldData);
                }
            });
          break;
          case 'copy':
            var newField = this.clone(obj.fieldData)
            var index = this.getComponentIndex(obj.fieldData)
            newField.title_value = '复制' + newField.title_value
            if(newField.choics){
              newField.choics.isNumber = false
            }
            newField.editing = false
            this.allComponents.splice(index+1,0,newField)
            // this.allComponents.push( newField )

            // console.log(this.allComponents.find({
            //   componentName: newField.type,
            //   data : newField
            // }))
            // console.log([1,2].indexOf(2))
            // console.log([1,2].find(2))

            // console.log(this.allComponents)
          break;
        }
        // console.log('emitchild', arguments)
      },
      setallunEdit () {
        for(var i = 0 , len = this.allComponents.length;i< len;i++){
          this.allComponents[i].editing = false
        }
      },
      delComponent (obj) {
        for(var i = 0 , len = this.allComponents.length;i< len;i++){
          if(this.allComponents[i] === obj){
            this.allComponents.splice(i, 1);
          }
        }
      },
      getComponentIndex (field) {
        var index = 0
        this.allComponents.forEach((obj, i) => {
          if(obj.field_id === field.field_id){
            index = i
          }
        })
        return index
      }
    },

  }
</script>
<style lang="stylus">
  @import './../assets/stylus/design'
</style>
