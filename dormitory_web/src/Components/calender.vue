<template>
    <div id="calender">
        <button @click="lastweek()" class="btn-last" data-html2canvas-ignore="true">{{btn_lastweek}}</button>
        <span class="week">{{week1}}_{{week2}}</span>
        <button @click="nextweek()" class="btn-next" data-html2canvas-ignore="true">{{btn_nextweek}}</button><br>
        <section class="menu-area">
            <nav><h4>Mon</h4><textarea v-model="basic_mon_lunch"></textarea><br><textarea v-model="basic_mon_dinner"></textarea></nav>
            <nav><h4>Tue</h4><textarea v-model="basic_tue_lunch"></textarea><br><textarea v-model="basic_tue_dinner"></textarea></nav>
            <nav><h4>Wed</h4><textarea v-model="basic_wed_lunch"></textarea><br><textarea v-model="basic_wed_dinner"></textarea></nav>
            <nav><h4>Thu</h4><textarea v-model="basic_thu_lunch"></textarea><br><textarea v-model="basic_thu_dinner"></textarea></nav>
            <nav><h4>Fri</h4><textarea v-model="basic_fri_lunch"></textarea><br><textarea v-model="basic_fri_dinner"></textarea></nav>
            <nav><h4>Sat</h4><textarea v-model="basic_sat_lunch"></textarea><br><textarea v-model="basic_sat_dinner"></textarea></nav>
        </section>
    </div>
</template>

<script>

var today = new Date() // 0000.00.00 ~ 0000.00.00 앞부분
var after = new Date() // 0000.00.00 ~ 0000.00.00 뒷부분

export default {
    name: "menu-area",

    created(){        
        var dateOffset = (24*60*60*1000) * 6

        //today ==> 현재주의 월요일 날짜
        var mon_compare = today.getDay() || 7;
        if( mon_compare !== 1){
            today.setHours(-24 * (mon_compare-1));
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
            basic_mon_lunch: '',
            basic_tue_lunch: '',
            basic_wed_lunch: '',
            basic_thu_lunch: '',
            basic_fri_lunch: '',
            basic_sat_lunch: '',
            basic_mon_dinner: '',
            basic_tue_dinner: '',
            basic_wed_dinner: '',
            basic_thu_dinner: '',
            basic_fri_dinner: '',
            basic_sat_dinner: '',
        }
    },

    methods: {
        //지난주
        lastweek(){
            var dateOffset1 = (24*60*60*1000) * 6
            var dateOffset2 = (24*60*60*1000) * 7

            today.setTime(today.getTime() - dateOffset2)
                       
            var mon_compare = today.getDay() || 7;
            if( mon_compare !== 1){
                today.setHours(-24 * (mon_compare-1));
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
        },
        nextweek(){
            var dateOffset1 = (24*60*60*1000) * 6
            var dateOffset2 = (24*60*60*1000) * 7

            today.setTime(today.getTime() + dateOffset2)
                       
            var mon_compare = today.getDay() || 7;
            if( mon_compare !== 1){
                today.setHours(-24 * (mon_compare-1));
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
