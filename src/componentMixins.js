import Actions from '@/components/actions'
export var componentMixins = {
  data () {
    return {
    
    }
  },
  components: {
    Actions
  },
  methods : {
    editField () {
      if(!this.field.editing){
        this.$emit('emitchild', {
          type : 'select',
          fieldData: this.field
        })
      }
    },

    actionEvent (type) {
        this.$emit('emitchild', {
          type : type,
          fieldData: this.field
        })
    },

    del () {
        this.$emit('emitchild', {
          type : 'del',
          fieldData: this.field
        })
    },

    copy () {
        this.$emit('emitchild', {
          type : 'copy',
          fieldData: this.field
        })
    }
  }

}
