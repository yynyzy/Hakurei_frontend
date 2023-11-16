<template>
  <section class="wrapper">
    <header class="header">
      <div class="content">
        <div class="profile">
          <img :src="authorInfo.avatar" />
        </div>
        <div class="info">
          <div class="name" v-text="authorInfo.nick_name"></div>
          <div class="desc">
            <p v-text="authorInfo.desc"></p>
          </div>
        </div>
      </div>
      <a class="pid" target="_blank" :href="`https://www.pixiv.net/users/${authorInfo.user_id}`" >
        {{ i18n.PID }} {{ authorInfo.user_id }}
      </a>
    </header>
  </section>
</template>

<script setup lang='ts'>
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
import { Yixiv } from '@/views/engine';

const i18n = {
  PID: 'P站：'
}
const route = useRoute();

const getRouteParams = () => {
  const { userId } = route.params;
  return Array.isArray(userId) ? userId[0] : userId;
};

// 作者
interface AuthorInfo {
  avatar: string
  nick_name: string
  user_id: string
  desc: string
};
const authorInfo = reactive<AuthorInfo>({
  avatar: '',
  nick_name: '',
  user_id: '',
  desc: '',
});

const getAuthorInfo = async() => {
  const user_Id= getRouteParams();
  try {
    const { rows } = await Yixiv.searchUser(user_Id);
    const author = rows[0];
    console.log('author', author);
    authorInfo.avatar = author.avatar;
    authorInfo.desc = author.desc;
    authorInfo.nick_name = author.nick_name;
    authorInfo.user_id = author.user_id;
  } catch (error) {
    /** */
  }
};

const init = async() => {
  getAuthorInfo();
}

init();

</script>
<style lang="less" scoped>
.wrapper {
  position: relative;
}
.header {
  width: 100%;
  margin-top: 55px;

  .content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 1224px;
    position: relative;

    .profile {
      display: flex;
      align-items: center;
      width: 100px;
      height: 100px;
      margin-right: 24px;

      img {
        display: block;
        width: 85px;
        height: 85px;
        border-radius: 50%;
        object-fit: cover;
      }
    }

    .info {
      // background: #a24747;
      flex: 1;

      .name {
        padding-top: 24px;
        font-size: 20px;
        font-weight: 700;
        line-height: 28px;
        color: rgba(0,0,0,.88);
      }

      .desc {
        display: flex;
        align-items: center;
        margin-top: 2px;
        color: rgba(0,0,0,.32);
        font-size: 16px;

        p {
          max-width: 850px;
        }
      }
    }
  }

  .pid {
    width: 100%;
    margin: 0 auto;
    width: 1224px;
    position: relative;
    font-size: 13px;
    color: #999;
    display: block;
  }
}
</style>
