import { mapGetters, mapActions } from 'vuex'
export var globalMixins = {
  computed: mapGetters([
    'evenOrOdd',
    'layout',
    'userInfo'
  ]),
  // methods: mapActions([
  //   'increment',
  //   'decrement',
  //   'incrementIfOdd',
  //   'incrementAsync',
  //   'setLayout'
  // ]),
  methods: {
    filterCallback (res) {
      console.log('filterCallback', res.body)
      if (res.body.err === -1) { // 先登录
        
      } else{
        // if (res.body.rst === null || res.data.rst === undefined) return res.body
        // else return this.toJson(res.data)
        return res.body;
      }
    },
    clone : function(obj) {
      if (typeof (obj) != 'object')
        return obj;

      var re = {};
      if (obj.constructor==Array)
        re = [];

      for ( var i in obj) {
        re[i] = this.clone(obj[i]);
      }

      return re;
    },
    createFieldId (){
      var code = [], codeLength = 5,//验证码的长度   
      selectChar = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];//所有候选组成验证码的字符，当然也可以用中文的             
      for(var i=0;i<codeLength;i++){    
        var charIndex = Math.floor(Math.random()*36);   
        code.push(selectChar[charIndex]);    
      }   
      return 'field_'+code.join('');
    }
  },
  data () {
    return {
      debug: process.env.NODE_ENV !== 'production',
      backurl: '#',
      nowurl: '#',
      routeName: '',
      machineType: 'pc'
    }
  },

  created () {
    // console.log('in-global', this.$options.name, this)
    // 切换布局
    var layout = this.$options.layout
    if (layout) {
      // console.log('globalMixins', layout)
      // this.setLayout(layout)
    }
  },

  route: {
    data (_route) {
      if (_route.from.path) {
        this.backurl = _route.from.path
      }
      this.nowurl = _route.to.path
      this.routeName = this.$options.name
    }
  }
}
