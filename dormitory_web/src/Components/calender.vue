<template>
    <div id="calender">
        <button @click="lastweek()" class="btn-last">{{btn_lastweek}}</button>
        <span class="week">{{week1}}_{{week2}}</span>
        <button @click="nextweek()" class="btn-next">{{btn_nextweek}}</button><br>
    </div>
</template>

<script>
export default {
    name: "calender",

    created(){
        var today = new Date() // 0000.00.00 ~ 0000.00.00 앞부분
        var after = new Date() // 0000.00.00 ~ 0000.00.00 뒷부분
        var dateOffset = (24*60*60*1000) * 6

        //현재주의 월요일 날짜
        var mon = today.getDay() || 7;
        if( mon !== 1){
            today.setHours(-24 * (mon-1));
        }

        var dd1 = today.getDate()
        var mm1 = today.getMonth()+1
        var yyyy1 = today.getFullYear()

        //yyyy.mm.dd
        if(dd1<10) {
            dd1='0'+dd1
        }
        if(mm1<10) {
            mm1='0'+mm1
        }

        this.week1 = yyyy1+'.'+mm1+'.'+dd1

        // yyyy1.mm1.dd1 ~ yyyy2.mm2.dd2
        after.setTime(today.getTime() + dateOffset)
        var dd2 = after.getDate();
        var mm2 = after.getMonth() +1
        var yyyy2 = after.getFullYear()

        if(dd2<10) {
            dd2='0'+dd2
        }
        if(mm2<10) {
            mm2='0'+mm2
        }

        this.week2 = yyyy2+'.'+mm2+'.'+dd2

    },

    data: function(){
        return{
            btn_lastweek: '<   지난주',
            btn_nextweek: '다음주   >',
            week1: '',
            week2: '',
        }
    },

    methods: {
        //지난주
        lastweek(){
            var dateOffset1 = (24*60*60*1000) * 6
            var dateOffset2 = (24*60*60*1000) * 7

            today.setTime(today.getTime() - dateOffset2)
                       
            var mon = today.getDay() || 7;
            if( mon !== 1){
                today.setHours(-24 * (mon-1));
            }

            var dd1 = today.getDate()
            var mm1 = today.getMonth()+1
            var yyyy1 = today.getFullYear()

            //yyyy.mm.dd
            if(dd1<10) {
                dd1='0'+dd1
            }
            if(mm1<10) {
                mm1='0'+mm1
            }

            this.week1 = yyyy1+'.'+mm1+'.'+dd1
            

            after.setTime(today.getTime() + dateOffset1)
            var dd2 = after.getDate();
            var mm2 = after.getMonth() +1
            var yyyy2 = after.getFullYear()

            if(dd2<10) {
                dd2='0'+dd2
            }
            if(mm2<10) {
                mm2='0'+mm2
            }

            this.week2 = yyyy2+'.'+mm2+'.'+dd2
        }
        
    }
}
</script>
