<script setup lang="ts">
import {computed, nextTick, onMounted, ref, toRefs} from "vue";
import { useRoute } from "vue-router";
import { useChatStore } from "@/stores/chat";
import SendIcon from "@/components/icons/SendIcon.vue";

const route = useRoute();
const store = useChatStore();
const { chatList } = toRefs(store);

const chatId = computed(() => route.params.id.toString());
const selectedChat = computed(() => chatList.value.find(chat => chat.id === chatId.value));

const newMessage = ref("");
const chatBodyRef = ref(null);

const scrollToBottom = () => {
  if (chatBodyRef.value) {
    chatBodyRef.value.scrollTop = chatBodyRef.value.scrollHeight;
  }
};

onMounted(() => {
  scrollToBottom()
})

const sendMessage = () => {
  console.log(newMessage.value)
  if (newMessage.value.trim() === "") {
    return;
  }

  store.addMessage(chatId.value, "Камрон Фозилов", newMessage.value);
  newMessage.value = "";

  nextTick(() => {
    scrollToBottom()
  })
};

const getLastOnlineText = (lastOnline) => {
  const currentTime = new Date();
  const diffInMinutes = Math.floor((currentTime - lastOnline) / (1000 * 60));

  if (diffInMinutes < 5) {
    return 'Онлайн';
  } else if (diffInMinutes < 60) {
    return `был(а) ${diffInMinutes} минут назад`;
  } else {
    const diffInHours = Math.floor(diffInMinutes / 60);
    return `был(а) ${diffInHours} часов назад`;
  }
};
</script>

<template>
  <div v-if="selectedChat" class="chat">
    <div class="chat__header">
      <h2 class="chat__header-name">{{ selectedChat.name }}</h2>
      <p class="chat__header-time">{{ getLastOnlineText(selectedChat.lastOnline) }}</p>
    </div>
    <div class="chat__body" ref="chatBodyRef">
      <div
          v-for="message in selectedChat.messages"
          :key="message.id"
          :class="['chat__message', {'chat__message--user': message.sender === 'Камрон Фозилов', 'chat__message--operator': message.sender !== 'Камрон Фозилов'}]"
      >
        <p class="chat__message-sender">{{ message.sender }}</p>
        <p class="chat__message-text" v-html="message.text"></p>
      </div>
    </div>
    <form @submit.prevent="sendMessage" class="chat__input">
      <input type="text" placeholder="Сообщение" v-model="newMessage">
      <SendIcon class="chat__input-icon" @click.prevent="sendMessage" />
    </form>
  </div>
</template>

<style lang="scss">
@import "@/assets/_variables";

.chat {
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 12px 12px 24px 0;
  height: 90vh;

  &__header {
    background-color: $gray-primary;
    padding: 12px 16px;
    border-radius: 10px;

    &-name {
      font-size: 16px;
      font-weight: 500;
    }

    &-time {
      font-size: 14px;
      font-weight: 500;
      color: $gray-secondary;
    }
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: 16px;
    overflow-y: auto;
    padding-top: 16px;
    padding-bottom: 24px;
  }

  &__message {
    display: inline-block;
    padding: 12px;
    border-radius: 8px;
    font-size: 14px;
    max-width: 450px;

    &-text > a {
      text-decoration: underline!important;
      color: blue!important;
    }

    &--user {
      align-self: flex-start;
      background-color: $green-primary;
      color: #000;
    }

    &--operator {
      align-self: flex-end;
      background-color: $gray-primary;
      color: #000;
    }

    .chat__message-sender {
      font-weight: 700;
    }

    .chat__message-text {
      margin-top: 8px;
    }
  }

  &__input {
    position: relative;
    width: 100%;
    height: 56px;
    input {
      width: 100%;
      height: 100%;
      padding: 0 24px;
      border: 2px solid #EEEEEE;
      border-radius: 10px;
      outline: none;
    }
    &-icon {
      cursor: pointer;
      width: 40px;
      height: 40px;
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
    }
  }
}
</style>