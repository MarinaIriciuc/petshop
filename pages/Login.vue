<script setup>
definePageMeta({
  middleware: ['auth']
})
import validator from "validator";

let formErrors = reactive({
  email: false,
  pass: false
})

let supabase = useSupabaseClient()
let user = useSupabaseUser()

async function handleLogin(event){

  // RESETAM ERORILE INAINTE DE A VERIFICA CAMPURILE
  formErrors.email = false
  formErrors.pass = false

  if (! validator.isEmail(event.target.elements.email.value)){
    formErrors.email = true
  }
  if(! validator.isStrongPassword(event.target.elements.pass.value)){
    formErrors.pass = true
  }
  if (formErrors.pass || formErrors.email) return

  const {data, error} = await supabase.auth.signInWithPassword({
    email: event.target.elements.email.value,
    password: event.target.elements.pass.value
  })
  if (data.user){
    await supabase.auth.refreshSession()
    navigateTo('/')
  }
}

</script>

<template>
  <Head>
    <title>Login page</title>
  </Head>
  <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-xl-5 col-lg-6 col-md-8 col-sm-10 col-12">
        <div class="card shadow p-3">
          <div class="card-body d-flex flex-column" style="height: 500px">
            <div class="flex-grow-1">
              <form @submit.prevent="handleLogin">
                <h4 class="d-flex justify-content-center">Login</h4>
                <h6>Email</h6>
<!--                <h6 class="text-danger d-xl-block d-none">Username</h6>-->
<!--                <h6 class="text-info d-xl-none d-block">Username</h6>-->
                <input name="email" type="email" :class="formErrors.email ? 'is-invalid': ''" class="form-control" placeholder="Type your email">
                <h6 class="mt-3">Password</h6>
                <input name="pass" type="password"  :class="formErrors.pass ? 'is-invalid': ''" class="form-control" placeholder="Type your password">
                <div class="d-flex justify-content-center ">
                  <button class="btn btn-outline-dark mt-4 w-25" type="submit">Login</button>
                </div>
              </form>
            </div>
            <h6 class="d-flex justify-content-center">Or Sign Up Using</h6>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>


<style scoped>

</style>
