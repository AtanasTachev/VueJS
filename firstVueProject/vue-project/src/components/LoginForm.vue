<template>
  <div>
    <b-card>
      <div>
        <b-form @submit="onSubmit" @reset="onReset">
          <b-form-group label="First name" for="feedback-first-name">
            <b-form-input :state="firstNameValidation" id="feedback-first-name" v-model="form.firstName" placeholder="Ivan"></b-form-input>
            <b-form-invalid-feedback :state="firstNameValidation">
              First name has to be at least 3 symbols, but no more than 10
            </b-form-invalid-feedback>
            <b-form-valid-feedback :state="firstNameValidation"> Looks Good. </b-form-valid-feedback>
          </b-form-group>          
          <b-form-group label="Last name">
            <b-form-input v-model="form.lastName" placeholder="Ivanov" :state="lastNameValidation"></b-form-input>            
            <b-form-invalid-feedback :state="lastNameValidation">
              Last name has to be at least 5 symbols, but no more than 10
            </b-form-invalid-feedback>
            <b-form-valid-feedback :state="lastNameValidation"> Looks Good. </b-form-valid-feedback>
          </b-form-group>
          <b-form-group label="Email address:">
            <b-form-input :state="emailValidation" v-model="form.email" placeholder="ivan.ivanov@abv.bg"></b-form-input>
            <b-form-invalid-feedback :state="emailValidation">
              Email should be valid
            </b-form-invalid-feedback>
            <b-form-valid-feedback :state="emailValidation"> Looks Good. </b-form-valid-feedback>
          </b-form-group>
          <b-form-group label="Password">
            <b-form-input type="password" :state="passwordValidation" v-model="form.pass" placeholder="password"></b-form-input>
            <b-form-invalid-feedback :state="passwordValidation">
              Password should contain at least 8 symbols
            </b-form-invalid-feedback>
            <b-form-valid-feedback :state="passwordValidation"> Looks Good. </b-form-valid-feedback>
          </b-form-group>
          <b-form-group label="Repeat Password">
            <b-form-input type="password" :state="rePassValidation" v-model="form.repass" placeholder="repeat password"></b-form-input>
            <b-form-invalid-feedback :state="rePassValidation">
              Repeat password should be the same as password
            </b-form-invalid-feedback>
            <b-form-valid-feedback :state="rePassValidation">Looks good.</b-form-valid-feedback>
          </b-form-group>
          <div content-class="mr-3">
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </div>
        </b-form>
      </div>
    </b-card>
  </div>
</template>

<script setup>
import {ref, computed, reactive, nextTick} from 'vue'

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  pass: '',
  repass: ''
  })

  const firstNameValidation = computed(() => form.firstName.length > 2 && form.firstName.length < 10)
  const lastNameValidation = computed(() => form.lastName.length > 2 && form.lastName.length < 10)
  const emailValidation = computed(() => form.email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gmi) !== null)
  const passwordValidation = computed(() => form.pass.length >= 8)
  const rePassValidation = computed(() => form.repass === form.pass && form.repass.length !== 0)

  const onSubmit = (e) => {
    e.preventDefault()
    alert(JSON.stringify(form))
  } 

  const onReset = (e) => {
    e.preventDefault()
    alert(JSON.stringify(form))
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
