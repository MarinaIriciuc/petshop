<script setup>
definePageMeta({
  middleware: ['auth']
})
const supabase = useSupabaseClient()



function handleRegister(event){
  supabase.auth.signUp({
    email: event.target.elements.email.value,
    password: event.target.elements.pass.value
  })
}

</script>

<template>
  <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-xl-5 col-lg-6 col-md-8 col-sm-10 col-12">
        <div class="card shadow p-3">
          <div class="card-body d-flex flex-column" style="height: 500px">
            <div class="flex-grow-1">
              <form @submit.prevent="handleRegister">
                <h4 class="d-flex justify-content-center">Register</h4>
                <h6>Name</h6>
                <input type="text" name="username" class="form-control" placeholder="Type your name">
                <h6 class="mt-3">Email</h6>
                <input name="email" type="email" class="form-control" placeholder="Type your email">
                <h6 class="mt-3">Password</h6>
                <input name="pass" type="password" class="form-control" placeholder="Type your password">
               <h6 class="mt-3">Confirm Password</h6>
                <input type="password" name="confirmPass" class="form-control">
                <div class="d-flex justify-content-center ">
                  <button class="btn btn-outline-dark mt-4 w-25" type="submit">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>


<style scoped>

</style>

