var app = new Vue({
  el: '.container',
  data: {
    cases: [],
    inputModel: ''
},
  methods: {
    addCase(){
      if(!this.inputModel ==''){
        this.cases.push(this.inputModel);
        this.inputModel = '';
      };
      },
    del(e){
      console.log(e);
      var a = e.path[2].id;
      this.cases.splice(a,1);
    },
    parked(e){
      var a = e.path[2].childNodes[0];
      if(a.style.textDecoration == "line-through"){
        a.style.textDecoration = "none";
      }else{
        a.style.textDecoration = "line-through"
      }
    }
  }
})