<script setup>
definePageMeta({
  middleware: ['guest']
})


const supabase = useSupabaseClient()
const user = useSupabaseUser();
try {
  const { error } = await supabase.auth.signOut()
  if(error) throw error
  user.value = null
} catch (e) {
  
}
</script>

<template>

</template>


<style scoped>

</style>

