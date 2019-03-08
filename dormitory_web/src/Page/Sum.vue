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

    components: {
        Top,
        Bottom
    }
}
</script>
