<template>
    <div id="test">{{text}}</div>
</template>
<script>
export default {
    // 初始化数据 function
    data(){
        return{
            text: 'abc'
        }
    }
}
</script>
<style>
    #test{
        color: red;
    }
</style>
