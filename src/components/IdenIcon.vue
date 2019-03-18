<template>
  <div class="border">
    <canvas class="avatar" ref="canvas" :width="size" :height="size"></canvas>
  </div>
</template>

<script>
export default {
  name: "IdenIcon",
  props: {
    size: Number,
    hash: String
  },
  methods: {
    draw() {
      let canvas = this.$refs.canvas
      let colors = ['000000', '3C3C3C', '818181', 'B6B6B6',
                    '905E31', '5C2C09', '10600A', '1EA717',
                    '1D91FB', '0600C3', '2B008F', 'F80092',
                    'D40013', 'F95B1D', 'FFFF32', '292929']
      let blockLen = this.size / 7
      if (canvas.getContext) {
        let ctx = canvas.getContext('2d')
        let colorIndex = parseInt(this.hash[0], 16)
        for (var i = 0; i < 4; ++i) {
          for (var j = 0; j < 7; ++j) {
            let colored = this.hash[i * 7 + j] % 2 == 0
            ctx.fillStyle = 'white'
            if (colored) {
              ctx.fillStyle = '#' + colors[colorIndex]
            }
            ctx.fillRect(i * blockLen, j * blockLen, blockLen, blockLen)
            if (i < 3) {
              ctx.fillRect((6 - i) * blockLen, j * blockLen, blockLen, blockLen)
            }
          }
        }
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.draw()
    })
  }
}
</script>

<style scoped>
.border {
  margin: 0;
  padding: 0;
}
.avatar{
  border: solid 1px #DCDFE6;
}
</style>
