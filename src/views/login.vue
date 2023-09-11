<template>
  <div>
     111
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
  
    };
  },
  created() {
      this.testAPI()
  },
  methods: {
    testAPI(){
      this.$http({
        methods: "GET",
        url: "/users/",
      }).then((res) => {
        if (res.data.code != 401) {
          console.log('test');
        } else {
        }
      });
      // axios.get("http://localhost:3000/users/").then(
      //   res=>{
      //     console.log('test');
      //   }
      // )
    }
  },
};
</script>

