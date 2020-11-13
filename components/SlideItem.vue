<template>
  <div class="glass-block__item">
    <p>{{ item.glass_name }}</p>
    <img
      class="glass-image"
      :src="require(`~/assets/images/glass/glass-${item.glass_id}.png`)"
      :alt="`glass_${item.glass_id}`"
    />
    <img
      class="glass-bg"
      :src="
        require(`~/assets/images/glass/glass-bg/glass-bg-${item.glass_id}.png`)
      "
      :alt="'glass_bg_' + item.glass_id"
    />
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'

export default {
  directives: {
    clickOutside: vClickOutside,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>
