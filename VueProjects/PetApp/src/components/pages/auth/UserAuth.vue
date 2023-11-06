<template>
    <base-card>
    <form>
        <div class="form-control">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email">
        </div>
        <div class="form-control">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password">
        </div>
        <base-button>{{submitButtonCaption}}</base-button>
        <base-button @click="switchAuthMode" type="button" mode="flat" >{{ switchModeButtonCaption }}</base-button>
    </form>
    </base-card>
</template>

<script>
export default {
    data(){
        return { 
            email: '',
            password: '',
            mode: 'login'
        }
    },
    computed: {
        submitButtonCaption(){
            if(this.mode === 'login'){
               return 'Login'
            }else {
                return 'Signup'
            }
        },
        switchModeButtonCaption(){
            if(this.mode === 'login'){
                return 'Signup instead'
            } else {
                return 'Login instead'
            }
        }
    },
    methods: {
        switchAuthMode(){
            if(this.mode === 'login'){
              this.mode = 'signup'
            }else {
              this.mode = 'login'
            }
        }
    }
}
</script>