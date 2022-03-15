<script lang="ts">
import { h, defineComponent } from 'vue'
import { Icon as IconifyIcon } from '@iconify/vue'
export default defineComponent({
  name: 'IconifyIcon',
  components: { IconifyIcon },
  props: {
    icon: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'ep:'
    }
  },
  render() {
    const attrs = this.$attrs
    return h(
      IconifyIcon,
      {
        icon: `${this.type}${this.icon}`,
        ...attrs
      },
      {
        default: () => []
      }
    )
  }
})
</script>

<style scoped></style>
