<template>

    <div id="Top">

        <h1 class="INU-Appcenter">INU Appcenter</h1>
        <h2 class="info">제 2기숙사 급식 관리 페이지입니다<br/>식단 작성 및 수정을 원하시면 관리자 비밀번호를 입력해주세요</h2>

        <!-- 로그인 구현 -->
        <div class="form-group" id="passwordForm">

            <template v-if="login">

                <input v-model="input" type="password" class="form-control" placeholder="패스워드"><br>
                
                <button @click="loginValidate()" type="submit" class="btn-primary">{{btn_text}}</button>

            </template>

            <template v-else>

                <button @click="loginValidate()" type="submit" class="btn-primary">{{btn_text}}</button>
                
            </template>

        </div>

    </div>

</template>

<script>
export default {
    name: "Top",

    //create 시 실행됨
    created(){
        this.btn_text = this.btn_longin //최초 버튼은 '로그인' 을 가짐
    },

    //전역변수 선언
    data: function(){
        return{
            btn_text: '', //버튼 텍스트
            btn_longin: 'LOG IN', //로그인 상수
            btn_logout: 'LOG OUT', //로그아웃 상수
            input: '', //패스워드 입력 부분
            password: 'appcen', //패스워드 상수
            // token: 'token', //아직 사용하지 않음
            login: true //로그인이 필요한 경우 true 반환(로그인을 안했거나, 로그아웃 했을 때)
        }
    },

    //함수 선언
    methods: {
        loginStatus(){ //로그인 상태
            this.login = false //로그인 필요가 없음, 이미 로그인 중임
            this.btn_text = this.btn_logout //버튼 텍스트 체인지
            alert("로그인 성공")
            this.sub_explain = "어서오세요! 인천대학교 학식 관리 페이지 입니다."

            this.$store.commit('setToken','login') // 현재 로그인 상태 변환
        },
        logoutStatus(){ //로그아웃 상태
            this.login = true //로그인 필요가 있음
            switch(this.btn_text){
                case this.btn_longin: //로그인을 시 비밀번호 틀렸을 경우
                break

                case this.btn_logout: //로그아웃 했을 경우
                this.btn_text = this.btn_longin
                break

            }
            this.$store.commit('setToken','logout') // 현재 로그인 상태 변환
        },
        loginValidate(){ //로그인 
            var self = this
            if(self.input == self.password){ //로그인 성공시 로그인상태 반환
            self.loginStatus()
            self.input="" //로그인 성공 시 이전 입력한 패스워드 초기화 시켜버림, 남을 수 있으니까!!
            }
            else{
            self.logoutStatus() //로그아웃 상태 시 상태 반환(1. 아예 로그인 안한 상태 2. 로그아웃을 한 상태)
            }
        }
    },

    //watcher
    watch: {

    },

    //computed
    computed: {

    }
}
</script>
