<template>
    <div id="Bottom">
        <h3 class="menutitle">식단 입력</h3>
        <calender></calender>
        <h3 class="memotitle">메모 작성</h3>
        <textarea v-model="addinfo" class="addinfo"></textarea>
        <div class="save">
            <button v-on:click="imgsave" class="imgsave">이미지로 저장하기</button>
            <button v-on:click="svsave" class="svsave">서버에 저장하기</button>
        </div>
    </div>
</template>

<script>
import calender from './calender'

export default {
    name: 'Bottom',

    components: {
        calender
    }
}
</script>

