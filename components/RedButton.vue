<template>
  <button
    :type="props.type"
    class="red-button"
    :disabled="props.disabled"
    @click="onClick"
  >
    <slot>{{ props.label }}</slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  label: { type: String, default: 'Button' },
  disabled: { type: Boolean, default: false },
  type: { type: String, default: 'button' },
})

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

function onClick(e: MouseEvent) {
  if (!props.disabled) emit('click', e)
}
</script>

<style scoped>
.red-button {
  background-color: rgba(220, 38, 38, 1); /* 赤 */
  color: rgba(255, 255, 255, 1);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.15s ease, opacity 0.15s ease, transform 0.08s ease;
}

.red-button:hover {
  background-color: rgba(185, 28, 28, 1);
  transform: translateY(-1px);
}

.red-button:active {
  transform: translateY(0);
}

.red-button:disabled {
  background-color: rgba(220, 38, 38, 0.6);
  cursor: not-allowed;
  opacity: 0.85;
}
</style>
