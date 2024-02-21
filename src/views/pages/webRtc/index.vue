<template>
  <div class="page">
    <main class="video-wrapper">
      <video v-if="isOpenVideo" id="video" ref="videoRef" autoplay playsinline muted></video>
      <div class="tip" v-else>暂未开启摄像头</div>
    </main>
    <div class="audio">
      <audio ref="audioRef" autoplay controls></audio>
    </div>
    <div class="btns">
      <el-button type="primary" @click="onOpenVideo">打开音视频</el-button>
      <el-button type="primary" @click="onBack">返回</el-button>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { ElMessage } from "element-plus";
import { createWSClient } from "./ws";

const wsClient = createWSClient("ws://192.168.100.106:8001");


wsClient.onopen = () => {
  console.log("websocket open");
  // wsClient.send("usr1")
}

wsClient.onclose = () => {
  console.log("websocket close")
}

wsClient.onmessage = (e) => {
  const msg = JSON.parse(e.data);
  console.log("msg", msg);
}


let isOpenVideo = ref(false);
const videoRef = ref();

// 设置分辨率以及最小和最大限制的信息来改善视频
const constraints = {
  audio: true,
  video: {
    width: {
      min: 500,
      ideal: 1920,
      max: 1000,
    },
    height: {
      min: 250,
      ideal: 1080,
      max: 500,
    },
  },
};
const onOpenVideo = async () => {
  isOpenVideo.value = true;
  try {
    const videoStream = await navigator.mediaDevices.getUserMedia(constraints);
    console.log('videoStream', videoStream);
    videoRef.value.srcObject = videoStream;
  } catch (error) {
    isOpenVideo.value = false;
    console.error("getUserMedia" + error);
    ElMessage.error('音视频打开失败');
  }
};


const router = useRouter();
const onBack = () => {
  router.back();
}

</script>
<style lang="less" scoped>
.page {
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .video-wrapper {
    width: 1000px;
    height: 500px;
    margin: 100px auto 0;
    border: 1px solid #000;
  }

  .audio {
    margin: 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btns {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }

  .tip {
    margin: auto;
    width: 150px;
    font-size: 20px;
    font-weight: 600;
  }
}
</style>
