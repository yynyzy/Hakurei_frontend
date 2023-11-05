  <template>
    <div v-if="visible" class="default-mask mask-class" @click="onMaskTap">
      <div class="default-content content-class" @click="onContentTap">
        <slot></slot>
      </div>
    </div>
  </template>

  <script setup lang='ts'>

  interface Props {
    visible: boolean;
    maskClass: string;
    contentClass: string;
  };
  interface Emits {
    (event: 'contentTap'): void;
    (event: 'maskTap'): void;
  };

  defineProps<Props>();
  const emits = defineEmits<Emits>();

  const onContentTap = (e: Event): void => {
    e.stopPropagation();
    emits('contentTap');
  };

  const onMaskTap = (): void => {
    emits('maskTap');
  };

  </script>
  <style lang="less" scoped>
  .default-mask {
    position: fixed;
    z-index: 99999;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    overflow: hidden;
    align-items: center;
    justify-content: center;
  }

  .default-content {
    display: flex;
    flex-direction: column;
    animation: popup 0.2s ease;
  }

  @keyframes popup {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.1);
    }

    100% {
      transform: scale(1);
    }
  }
  </style>
