<template>
    <div id="Top">
        <h1 class="INU-Appcenter">INU Appcenter</h1>
        <h2 class="info">제 2기숙사 급식 관리 페이지입니다<br/>식단 작성 및 수정을 원하시면 관리자 비밀번호를 입력해주세요</h2>
        <form @submit="onSubmit">
            <input placeholder="Enter your password" v-model="password" class="pass">
            <button v-on:click="login" class="login" type="submit">LON IN</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Top'
}
</script>
