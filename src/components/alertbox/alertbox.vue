<template>
  <div>
      <div class="mask"></div>
      <div class="alertbox">
          <div class="alertbox-content">
            <div class="alertbox-title" v-if="alertbox.title.show">{{alertbox.title.content}}</div>
            <slot name="content"></slot>
            <div class="alertbox-footer"></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: ['alertbox']
}
</script>

<style lang="postcss" scoped>
    .alertbox-title {
        border-left: palegreen 8px solid;
        background: seashell;
        height: 24px;
    }
    .alertbox-content {
        margin-left: -50%;
        min-width: 140px;
        background: #fff;
        box-shadow: 4px 4px 8px 0 grey
    }
    .mask {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 9998;
        left: 0;
        top: 0;
        background-attachment: scroll;
        background: #767676;
        opacity: 0.4;
    }
    .alertbox {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 9999;
    }
</style>
