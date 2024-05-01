<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    type?: 'button' | 'submit' | 'reset' | undefined
    variant?: 'primary' | 'secondary'
  }>(),
  {
    type: undefined,
    variant: 'primary'
  }
)
const emit = defineEmits(['handle-click'])
const getVariantStyle: () => string = () => {
  return {
    primary:
      'bg-gray-900 text-slate-50 hover:bg-slate-100 hover:text-slate-600 border-2 border-gray-900',
    secondary: 'bg-red-600 border-2 border-red-600 hover:shadow-lg'
  }[props.variant]
}
</script>
<template>
  <button
    @click="emit('handle-click')"
    :type="props.type"
    :class="`${getVariantStyle()} p-2 rounded-md min-w-28 font-bold border-0 transition-all duration-75 tracking-wider ${
      $props.class
    }`"
  >
    <slot />
  </button>
</template>
