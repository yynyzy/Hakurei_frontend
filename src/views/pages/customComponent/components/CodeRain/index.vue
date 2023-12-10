<template>
  <canvas id="canvas" ref="canvasRef"/>
</template>

<script setup lang='ts'>
import { ref,  onMounted, onBeforeUnmount } from 'vue';

const canvasRef = ref<HTMLCanvasElement | null>();
let timer: ReturnType<typeof setInterval>;

const rainStart = (): void => {
    const canvas = canvasRef.value;
    const width = canvas!.width = window.innerWidth;
    const height = canvas!.height = window.innerHeight;

    const ctx = canvas!.getContext('2d');
    const arr = Array(Math.ceil(width/10)).fill(0);

    const str = '✧☹︎☠︎☸︎☣︎☢︎☯︎♾♲✰❤︎✦⚛︎☭☮︎⚔︎⚒︎☄︎✵⚰︎☘︎⚘♨︎✞☺︎♘♞☆☃︎★☼☀︎☾◎☽☁︎™Ω℞№ℹ︎❂❁✡︎✣✶✺✷◦◉⦿☒✗☐☞◇☛⚙︎☑︎⌘✘✔︎'.split('');
    ctx!.font = "10px优设标题黑";
    const rain = () => {
        ctx!.fillStyle = 'rgba(0, 0, 20, 0.05)';
        ctx!.fillRect(0, 0, width, height);
        ctx!.fillStyle = 'green';
        arr.forEach(function (value, index) {
            // 根据数组的索引值来绘制文字，x 坐标为索引值 * 10，y 坐标为 value + 10。
            ctx!.fillText(str[Math.floor(Math.random() * str.length)], index * 10, value + 10);

            // 从上一次绘制的位置开始，将数组值设置为下一次绘制位置。
            arr[index] = value >= height || value > 8888 * Math.random() ? 0 : value + 10;
        });
    }
    timer = setInterval(() => {
        rain();
    }, 30);
};
const rainStop = (): void => {
    if (timer) {
        timer && clearInterval(timer);
    }
    const canvas = canvasRef.value;
    const ctx = canvas!.getContext('2d');
    ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

}
onMounted(() => {
    rainStart();
});
onBeforeUnmount(() => {
    rainStop();
})
</script>
<style lang="less" scoped>
#canvas {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
}
</style>
