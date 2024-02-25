<template>
  <div class="page">
    <aside class="left">
      <div>ROOM</div>
      <ul>
        <li v-for="(item, index) in Rooms" :key="index">{{ item }}</li>
      </ul>
    </aside>
    <section class="right">
      <div class="top">
        <input
          class="input"
          type="text"
          v-model="roomIdSearch"
          placeholder="请输入一个已有的房间号或者创建一个房间号"
        >
        <div class="btn">
          <el-button type="primary" @click="onJoinRoom">加入</el-button>
        <el-button type="danger" @click="onLeaveRoom">离开</el-button>
        <el-button type="warning" @click="onBack">返回主站</el-button>
        </div>

      </div>
      <main class="video-wrapper">
        <video class="localVideo" id="localVideo" ref="localVideoRef" autoplay playsinline muted >本地</video>
        <video class="remoteVideo" id="remoteVideo" ref="RemoteVideoRef" autoplay playsinline >远程</video>
      </main>
      <div class="audio">
        <audio ref="audioRef" autoplay controls></audio>
      </div>
      <!-- <div class="btns">
        <el-button type="primary" @click="onOpenVideo">打开音视频</el-button>
        <el-button type="primary" @click="onBack">返回</el-button>
      </div> -->
    </section>

    <el-dialog
    v-model="isShowRoomCreateDialog"
    title="Tips"
    width="500"
  >
    <span>房间不存在，是否需要创建一个房间</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="onCancelCreateRoom">Cancel</el-button>
        <el-button type="primary" @click="onConfirmCreateRoom">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { ElMessage } from "element-plus";
import { Media } from "@/utils";
import ZeroRTCEngine from "./ZeroRTCEngine";
// import Member from '@/utils/member';

interface JoinMsgStruct {
  cmd: string,
  roomId: string,
  uid: string
}

const uid = ref<string>('');
const getUid = async () => {
  // try {
  //   const user = await Member.getUserInfo();
  //   uid.value = user?.id;
  // } catch (error) {
    uid.value = Math.random().toString(36).substr(2);
  // }
}
getUid();

// ZeroRTCEngine init
const WS_Address: string = "ws://192.168.100.106:8001";
const zeroRTCEngine = new ZeroRTCEngine(WS_Address);
zeroRTCEngine.createWebSocket();

const doJoin = (roomId: string) => {
 const msg: JoinMsgStruct = {
  'cmd': 'join',
  'roomId': roomId,
  'uid': uid.value,
 }
 zeroRTCEngine.sendMessage(JSON.stringify(msg));
 console.info('doJoin message:' + JSON.stringify(msg));
}


const roomIdSearch = ref<string>();
// 询问是否创建房间
const isShowRoomCreateDialog = ref<boolean>(false);
const onCancelCreateRoom = () => isShowRoomCreateDialog.value = false;
const onConfirmCreateRoom = () => {
  isShowRoomCreateDialog.value = false;
  onCreateRoom();
};
// 创建房间
const onCreateRoom = () => {
  Rooms.set(roomIdSearch.value, 'assss');
}

// 保存所有房间
const Rooms = new Map();
const onLeaveRoom = () => {
  console.log('离开房间');
  onCloseVideoStream();
}
const onJoinRoom = async () => {
  if (!roomIdSearch.value) {
    ElMessage.error("请输入一个房间号来加入或者创建！")
    return;
  }
  // 查看房间是否存在
  const isRoomExisted = Rooms.has(roomIdSearch.value);
  console.log('isRoomExisted', isRoomExisted);

  if (isRoomExisted) {
    await initLocalVideoStream();
  } else {
    isShowRoomCreateDialog.value = true;
  }
  return;
}

const localVideoRef = ref();
const RemoteVideoRef = ref();
const constraints = {
  audio: true,
// 设置分辨率以及最小和最大限制的信息来改善视频
  video: {
    width: {
      min: 200,
      max: 600,
      ideal: 1920,
    },
    height: {
      min: 100,
      max: 300,
      ideal: 1080,
    },
  },
};
// 初始化 VideoStream
const initLocalVideoStream = async() => {
  try {
    const stream = await Media.getUserMedia(constraints);
    openLocalVideoStream(stream);
  } catch (error) {
    ElMessage.error("加入房间失败" + error);
  }
}
const openLocalVideoStream = (stream: MediaStream) => {
  doJoin(roomIdSearch.value!);
  localVideoRef.value.srcObject = stream;
}
// 关闭 VideoStream
const onCloseVideoStream = () => {
  const allTracks: MediaStreamTrack[] = localVideoRef.value.srcObject.getTracks();
  allTracks.forEach((track: MediaStreamTrack) => {
    track.stop();
  });
}


// other function
const router = useRouter();
const onBack = () => {
  router.back();
}

</script>
<style lang="less" scoped>
.page {
  width: 100vw;
  height: 100vh;
  padding: 0 30px;
  overflow: hidden;
  display: flex;


  .left {
    width: 300px;
    padding: 20px 10px;
    background-color: #8a919f;
    border: 1px solid #8a919f;
  }

  .right {
    flex: 1;
    padding: 0 50px;
  }

  .top {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    .input {
      height: 30px;
      line-height: 30px;
      width: 400px;
      border: 1px solid #000000;
    }

      .btn {
        margin-left: 50px;
      }
  }

  .video-wrapper {
    box-sizing: border-box;
    margin-top: 50px;
    width: 1200px;
    height: 600px;
    border: 1px solid #000;
    background-color: aqua;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .audio {
    margin: 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.localVideo {
  box-sizing: border-box;
  border: 1px solid red;
  width: 600px;
}

.remoteVideo {
  box-sizing: border-box;
  width: 600px;
  border: 1px solid red;
}
</style>
