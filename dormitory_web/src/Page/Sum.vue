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
        this.getOneDayMenu()
    },

    components: {
        Top,
        Bottom
    },

    methods: {
        getOneDayMenu(){
            var self = this

            axios.get('http://117.16.191.242:5630/read/date')
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
