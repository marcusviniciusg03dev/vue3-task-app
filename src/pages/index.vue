<script setup lang="ts">
useHead({
  title: 'Redirecionando...',
  meta: [
    { name: 'robots', content: 'noindex,nofollow' }
  ]
})
definePageMeta({
    redirect: '/en'
})
</script>