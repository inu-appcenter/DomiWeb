<template>
    <div id="Bottom">
<<<<<<< HEAD
        <h3 class="menutitle">식단 입력</h3>
        <calender></calender>
        <h3 class="memotitle">메모 작성</h3>
        <textarea class="addinfo"></textarea>
        <div class="save">
            <button class="imgsave">이미지로 저장하기</button>
            <button class="svsave">서버에 저장하기</button>
=======
        <div ref="capture">
            <h3 class="menutitle" data-html2canvas-ignore="true">식단 입력</h3>
            <calender></calender>
            <h3 class="memotitle" data-html2canvas-ignore="true">메모 작성</h3>
            <textarea class="addinfo"></textarea>
        </div>
        <div class="save">
            <button @click="imgsave()" class="imgsave">이미지로 저장하기</button>
            <button @click="svsave()" class="svsave">서버에 저장하기</button>
>>>>>>> 5628dd75ab8a8a36c95d9fee7224d72ea271c307
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
<<<<<<< HEAD
=======
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
>>>>>>> 5628dd75ab8a8a36c95d9fee7224d72ea271c307
}
</script>

