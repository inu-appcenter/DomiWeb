<template>

    <div id="Bottom" ref="capture">
        
        <h3 class="menutitle" data-html2canvas-ignore="true">식단 입력</h3>
        
        <!-- 식단 캘린더 -->
        <div id="calender">
            <button @click="WeekBtn_Event(-7)" class="btn-last" data-html2canvas-ignore="true">{{btn_lastweek}}</button>
            <span class="week">{{startDate}}_{{endDate}}</span>
            <button @click="WeekBtn_Event(7)" class="btn-next" data-html2canvas-ignore="true">{{btn_nextweek}}</button><br>
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
                <nav>
                    <h4>Sun</h4>
                    <textarea v-model="basic_sun_lunch"></textarea><br>
                    <textarea v-model="basic_sun_dinner"></textarea>
                </nav>
            </section>

        </div>

        <h3 class="memotitle" data-html2canvas-ignore="true">메모 작성</h3><br/>
        <textarea class="addinfo"></textarea>

        <div class="save">
            <button @click="imgsave()" class="imgsave" data-html2canvas-ignore="true">이미지로 저장하기</button>
            <button @click="svsave()" class="svsave" data-html2canvas-ignore="true">서버에 저장하기</button>
        </div>
    </div>

</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import html2canvas from 'html2canvas'
import {saveAs} from 'file-saver'


export default {
    name: 'Bottom',

    created() {
        this.today = new Date()
        this.setStartDate(this.today)
        this.setEndDate(this.today)
        this.getThisWeekMenu()
    },

    data: function() {
        return{
            how: 'logout',
            btn_lastweek: '< 지난주',
            btn_nextweek: '다음주 >',
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
            basic_sun_lunch: '',
            basic_mon_dinner: '',
            basic_tue_dinner: '',
            basic_wed_dinner: '',
            basic_thu_dinner: '',
            basic_fri_dinner: '',
            basic_sat_dinner: '',
            basic_sun_dinner: '',
            temporary_today: '',
            for_menu_date: '',

            go_back: '',
            for_mon: '',
            for_tue: '',
            for_wed: '',
            for_thu: '',
            for_fri: '',
            for_sat: '',
            for_sun: '',
        }
    },

    methods: {
        putWeekMenu(){
            var self = this

            axios.post('http://117.16.191.242:5630/create',
            {day: {
                monday: self.for_mon,
                tueday: self.for_tue,
                wenday: self.for_wed,
                thuday: self.for_thu,
                friday: self.for_fri,
                satday: self.for_sat,
                sunday: self.for_sun
            },
             monday: {
                LunchMenu: self.basic_mon_lunch.replace(/(?:\r\n|\r|\n)/g, '<br/>'),
		        DinnerMenu: self.basic_mon_dinner.replace(/(?:\r\n|\r|\n)/g, '<br/>')
             },
             tueday: {
                LunchMenu: self.basic_tue_lunch.replace(/(?:\r\n|\r|\n)/g, '<br/>'),
		        DinnerMenu: self.basic_tue_dinner.replace(/(?:\r\n|\r|\n)/g, '<br/>')
             },
             wenday: {
                LunchMenu: self.basic_wed_lunch.replace(/(?:\r\n|\r|\n)/g, '<br/>'),
		        DinnerMenu: self.basic_wed_dinner.replace(/(?:\r\n|\r|\n)/g, '<br/>')
             },
             thuday: {
                LunchMenu: self.basic_thu_lunch.replace(/(?:\r\n|\r|\n)/g, '<br/>'),
		        DinnerMenu: self.basic_thu_dinner.replace(/(?:\r\n|\r|\n)/g, '<br/>')
             },
             friday: {
                LunchMenu: self.basic_fri_lunch.replace(/(?:\r\n|\r|\n)/g, '<br/>'),
		        DinnerMenu: self.basic_fri_dinner.replace(/(?:\r\n|\r|\n)/g, '<br/>')
             },
             satday: {
                LunchMenu: self.basic_sat_lunch.replace(/(?:\r\n|\r|\n)/g, '<br/>'),
		        DinnerMenu: self.basic_sat_dinner.replace(/(?:\r\n|\r|\n)/g, '<br/>')
             },
             sunday: {
                LunchMenu: self.basic_sun_lunch.replace(/(?:\r\n|\r|\n)/g, '<br/>'),
		        DinnerMenu: self.basic_sun_dinner.replace(/(?:\r\n|\r|\n)/g, '<br/>')
             }
             })
            .then(function(response) {
                console.log(response)
                })
                .catch(function(error) {
                    console.log(error)
                    })
            alert("저장이 완료되었습니다.")
        },

        getThisWeekMenu(){
            var self = this
            axios.post('http://117.16.191.242:5630/read/all',
            {date: [self.for_mon, self.for_tue, self.for_wed, self.for_thu, self.for_fri, self.for_sat, self.for_sun]})
            .then(function(response) {
                self.basic_mon_lunch = response.data[0].LunchMenu.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, '\r\n')
                self.basic_mon_dinner = response.data[0].DinnerMenu.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, '\r\n')
                self.basic_tue_lunch = response.data[1].LunchMenu.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, '\r\n')
                self.basic_tue_dinner = response.data[1].DinnerMenu.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, '\r\n')
                self.basic_wed_lunch = response.data[2].LunchMenu.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, '\r\n')
                self.basic_wed_dinner = response.data[2].DinnerMenu.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, '\r\n')
                self.basic_thu_lunch = response.data[3].LunchMenu.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, '\r\n')
                self.basic_thu_dinner = response.data[3].DinnerMenu.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, '\r\n')
                self.basic_fri_lunch = response.data[4].LunchMenu.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, '\r\n')
                self.basic_fri_dinner = response.data[4].DinnerMenu.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, '\r\n')
                self.basic_sat_lunch = response.data[5].LunchMenu.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, '\r\n')
                self.basic_sat_dinner = response.data[5].DinnerMenu.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, '\r\n')
                self.basic_sun_lunch = response.data[6].LunchMenu.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, '\r\n')
                self.basic_sun_dinner = response.data[6].DinnerMenu.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, '\r\n')
                console.log(response)
                })
                .catch(function(error) {
                    console.log(error)
                    })
        },

        imgsave(){
            var self = this
            if(this.token == this.how){
                alert("로그인 해주세요")
            }
            else {
                html2canvas(document.querySelector("#Bottom")).then(function(canvas){
                    var img = canvas.toDataURL("image/ipg")
                    
                    var FileSaver = require('file-saver')
                    FileSaver.saveAs(img, self.startDate + '.jpg')
                })
                            
            }
        },

        svsave() {
            var self = this
            if(this.token == this.how){
                alert("로그인 해주세요")
            }
            else{
                self.putWeekMenu()
            }
        },

        //시작 날짜
        setStartDate(day){
            var month_compare = day.getDay() || 7
            this.lastWeekToday = day
            if(month_compare !== 1){
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

            var self = this

            for(var six=0 ; six <=6 ; six ++){
                switch(six){
                    case 0:{
                        self.for_mon = self.for_menu_date                        
                    }
                    case 1:{
                        self.for_tue = self.for_menu_date
                    }
                    case 2:{
                        self.for_wed = self.for_menu_date
                    }
                    case 3:{
                        self.for_thu = self.for_menu_date
                    }
                    case 4:{
                        self.for_fri = self.for_menu_date
                    }
                    case 5:{
                        self.for_sat = self.for_menu_date    
                    }
                    case 6:{
                        self.for_sun = self.for_menu_date       
                    }
                }
                self.syn_day(1)
            }

            self.syn_day(-7)

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
        WeekBtn_Event(go_back){
            var day = new Date(this.temporary_today)
            var current_day = new Date(day.getTime() + (go_back * 24 * 60 * 60 * 1000))
            var date = current_day.getDate()
            var month = current_day.getMonth() + 1
            var year = current_day.getFullYear()

            var standard_day = new Date(year + '/' + month + '/' + date)
            this.setStartDate(standard_day)
            this.setEndDate(standard_day)
            

            this.getThisWeekMenu()
        },

        syn_day(go_back){
            var day = new Date(this.temporary_today)
            var current_day = new Date(day.getTime() + (go_back * 24 * 60 * 60 * 1000))
                      
            var date = current_day.getDate()
            var month = current_day.getMonth() + 1
            var year = current_day.getFullYear()

            this.temporary_today = year + '/' + month + '/' + date  

            if(date<10) {
               date='0'+date
            }

            if(month<10) {
                month='0'+month
            }

            var standard_day = new Date(year + '/' + month + '/' + date)

            this.startDate = year+'.'+month+'.'+date
            this.for_menu_date = this.startDate.replace(/[.]/g,'')
        },
    },

    computed: {
        token: function() {
            return this.$store.state.token
        },
    }
}
</script>

