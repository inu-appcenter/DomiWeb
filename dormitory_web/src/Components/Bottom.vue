<template>

    <div id="Bottom">
        
        <h3 class="menutitle">식단 입력</h3>
        
        <!-- 식단 캘린더 -->
        <div id="calender">
            <button @click="lastWeekEvent()" class="btn-last" data-html2canvas-ignore="true">{{btn_lastweek}}</button>
            <span class="week">{{startDate}}_{{endDate}}</span>
            <button @click="nextWeekEvent()" class="btn-next" data-html2canvas-ignore="true">{{btn_nextweek}}</button><br>
            <section class="menu-area">
                <nav>
                    <h4>Mon</h4>
                    <textarea v-model="basic_mon_lunch"></textarea><br>
                    <textarea v-model="basic_mon_dinner"></textarea>
                </nav>
                <nav>
                    <h4>Tue</h4>
                    <textarea v-model="basic_tue_lunch"></textarea><br>
                    <textarea v-model="basic_tue_dinner"></textarea>
                </nav>
                <nav>
                    <h4>Wed</h4>
                    <textarea v-model="basic_wed_lunch"></textarea><br>
                    <textarea v-model="basic_wed_dinner"></textarea>
                </nav>
                <nav>
                    <h4>Thu</h4>
                    <textarea v-model="basic_thu_lunch"></textarea><br>
                    <textarea v-model="basic_thu_dinner"></textarea>
                </nav>
                <nav>
                    <h4>Fri</h4>
                    <textarea v-model="basic_fri_lunch"></textarea><br>
                    <textarea v-model="basic_fri_dinner"></textarea>
                </nav>
                <nav>
                    <h4>Sat</h4>
                    <textarea v-model="basic_sat_lunch"></textarea><br>
                    <textarea v-model="basic_sat_dinner"></textarea>
                </nav>
            </section>

        </div>

        <h3 class="memotitle">메모 작성</h3>
        <textarea class="addinfo"></textarea>

        <div class="save">
            <button @click="imgsave()" class="imgsave">이미지로 저장하기</button>
            <button @click="svsave()" class="svsave">서버에 저장하기</button>
        </div>

    </div>

</template>

<script>
import Vue from 'vue'
import axios from 'axios'

export default {
    name: 'Bottom',

    created() {
        this.today = new Date()
        this.setStartDate(this.today)
        this.setEndDate(this.today)
        this.getOneDayMenu()
    },

    data: function() {
        return{
            how: 'logout',
            btn_lastweek: '<   지난주',
            btn_nextweek: '다음주   >',
            today: '',
            startDate: '',
            endDate: '',
            lastWeekToday: '',
            lastWeekBool: true,
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
            temporary_today: '',
            for_menu_date: '',
        }
    },

    methods: {
        getOneDayMenu(){
            var self = this

            axios.get('http://117.16.191.242:5630/read/date',
            {date: this.for_menu_date})
            .then(function(response) {
                alert(response.data[0].TITLE)
                console.log(response)
                })
                .catch(function(error) {
                    console.log(error)
                    })
        },

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

        //시작 날짜
        setStartDate(day){
            var month_compare = day.getDay() || 7
            this.lastWeekToday = day
            if( month_compare !== 1){
                day.setHours(-24 * (month_compare-1))}


            var date = day.getDate()
            var month = day.getMonth()+1
            var year = day.getFullYear()

            this.temporary_today = year + '/' + month + '/' + date

            if(date<10) {
                date='0'+date
            }
            if(month<10) {
                month='0'+month
            }

            this.startDate = year+'.'+month+'.'+date
            this.for_menu_date = this.startDate.replace(/[.]/g,'')

        },

        //마지막 날짜
        setEndDate(day){
            var dateOffset = (24*60*60*1000) * 6

            day.setTime(day.getTime() + dateOffset)
            var date = day.getDate();
            var month = day.getMonth() +1
            var year = day.getFullYear()

            if(date<10) {
               date='0'+date
            }

            if(month<10) {
                month='0'+month
            }

            this.endDate = year+'.'+month+'.'+date
            
        },

        //지난주 버튼 이벤트
        lastWeekEvent(){
            var day = new Date(this.temporary_today)
            var current_day = new Date(day.getTime() - (7 * 24 * 60 * 60 * 1000))
            var date = current_day.getDate()
            var month = current_day.getMonth() + 1
            var year = current_day.getFullYear()

            var standard_day = new Date(year + '/' + month + '/' + date)
            this.setStartDate(standard_day)
            this.setEndDate(standard_day)
            this.for_menu_date = this.startDate.replace(/[.]/g,'')

            this.getOneDayMenu()
        },

        //다음주 버튼 이벤트
        nextWeekEvent(){
            var day = new Date(this.temporary_today)
            var current_day = new Date(day.getTime() + (7 * 24 * 60 * 60 * 1000))
            var date = current_day.getDate()
            var month = current_day.getMonth() + 1
            var year = current_day.getFullYear()

            var standard_day = new Date(year + '/' + month + '/' + date)
            this.setStartDate(standard_day)
            this.setEndDate(standard_day)
            this.for_menu_date = this.startDate.replace(/[.]/g,'')

            this.getOneDayMenu()
        }
    },

    computed: {
        token: function() {
            return this.$store.state.token
        },
    }
}
</script>

