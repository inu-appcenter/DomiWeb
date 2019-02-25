<template>
    <div id='Sum'>
        <Top></Top>
        <Bottom></Bottom>
    </div>
</template>

<script>
import Top from '../Components/Top'
import Bottom from '../Components/Bottom'
import axios from 'axios'

export default {
    name: 'Sum',

    created: function(){
        this.putWeekendMenu()
        this.getOneDayMenu()
        this.getTodayMenu()
        this.getThisWeekendMenu()
    },

    components: {
        Top,
        Bottom
    },

    methods: {
        getOneDayMenu(){
            var self = this

            axios.get('http://117.16.191.242:5630/read/date',
            {date: 20190207})
            .then(function(response) {

                console.log(response)
                })
                .catch(function(error) {
                    console.log(error)
                    })
        },

        getTodayMenu(){
            var self = this

            axios.get('http://117.16.191.242:5630/read',
            {date: 20190207})
            .then(function(response) {

                console.log(response)
                })
                .catch(function(error) {
                    console.log(error)
                    })
        },

        getThisWeekendMenu(){
            var self = this
            axios.post('http://117.16.191.242:5630/read/all',
            {date: [20190204, 20190205, 20190206, 20190207, 20190208, 20190209]})
            .then(function(response) {
                console.log(response)
                })
                .catch(function(error) {
                    console.log(error)
                    })
        },

        putWeekendMenu(){
            var self = this

            axios.post('http://117.16.191.242:5630/create',
            {day: {
                monday: 20190204,
                tueday: 20190205,
                wenday: 20190206,
                thuday: 20190207,
                friday: 20190208,
                satday: 20190209
            },
             monday: {
                LunchMenu: "밥1",
		        DinnerMenu: "저녁밥"
             },
             tueday: {
                LunchMenu: "밥1",
		        DinnerMenu: "저녁밥"
             },
             wenday: {
                LunchMenu: "밥1",
		        DinnerMenu: "저녁밥"
             },
             thuday: {
                LunchMenu: "밥1",
		        DinnerMenu: "저녁밥"
             },
             friday: {
                LunchMenu: "밥1",
		        DinnerMenu: "저녁밥"
             },
             satday: {
                LunchMenu: "밥1",
		        DinnerMenu: "저녁밥"
             }})
            .then(function(response) {
                console.log(response)
                })
                .catch(function(error) {
                    console.log(error)
                    })
        }
    }
}
</script>
