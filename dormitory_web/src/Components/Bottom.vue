<template>
    <div id="Bottom">
        <h3 class="menutitle">식단 입력</h3>
        <calender></calender>
        <h3 class="memotitle">메모 작성</h3>
        <textarea class="addinfo"></textarea>
        <div class="save">
            <button class="imgsave">이미지로 저장하기</button>
            <button class="svsave">서버에 저장하기</button>

        </div>
    </div>
</template>

<script>
import calender from './calender'
import Vue from 'vue'
import VueHtml2Canvas from 'vue-html2canvas' // package vue-html2canvas

Vue.use(VueHtml2Canvas)



export default {
    name: 'Bottom',

    data: function() {
        return{
            how: 'logout',
        }
    },
    components: {
        calender
    },

    methods: {
        imgsave() {
            if(this.token == this.how){
                alert("로그인 해주세요")
            }
            else {
                
            }
        },

        svsave() {
            if(this.token == this.how){
                alert("로그인 해주세요")
            }
        },
    },

    computed: {
        token: function() {
            return this.$store.state.token
        }
    }
}
</script>

