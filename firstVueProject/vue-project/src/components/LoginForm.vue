<template>
  <div>
    <b-card>
      <div>
        <b-form @submit="onSubmit" @reset="onReset">
          <b-form-group label="First name">
            <b-form-input v-model="form.firstName" placeholder="Ivan"></b-form-input>
          </b-form-group>          
          <b-form-group label="Last name">
            <b-form-input v-model="form.lastName" placeholder="Ivanov"></b-form-input>
          </b-form-group>
          <b-form-group label="Email address:">
            <b-form-input v-model="form.email" placeholder="ivan.ivanov@abv.bg"></b-form-input>
          </b-form-group>
          <b-form-group label="Password">
            <b-form-input v-model="form.pass" placeholder="at least 8 symbols"></b-form-input>
          </b-form-group>
          <b-form-group label="Repeat Password">
            <b-form-input v-model="form.repass" placeholder="repeat password"></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </div>
    </b-card>
  </div>
</template>

<script>
import {ref, computed, reactive, nextTick} from 'vue'

// const form = reactive({
//   firstName: '',
//   lastName: '',
//   email: '',
//   pass: '',
//   repass: ''
//   })

export default {
  data: () => {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        pass: '',
        repass: ''
      }
    }
  },
  methods: {
    onSubmit (e) {
      e.preventDefault()
      alert(JSON.stringify(form))
    },
    onReset () {
      console.log(form)
    }
  }
}
</script>

<style scoped>
.input {
  padding-right: 1rem;
}

.loginBtn {
  font-size: 1.25rem;
  background-color: greenyellow;
  text-align: center;
  border: 0.05rem;
  margin-top: 1rem;
  display: flex;
  border-radius: 0.25rem;
}

.loginBtn:hover {
  background-color: green;
  color: white;
}
</style>