<script setup lang="ts">
import {computed, ref, toRefs} from "vue";
import { useChatStore } from "@/stores/chat";
import { useRoute } from "vue-router";

const store = useChatStore()
const route = useRoute()

const { chatList } = toRefs(store)
const search = ref<string>('')

const filteredChatList = computed(() => {
  if (!search.value) return chatList.value;
  return chatList.value.filter((chat) =>
      chat.name.toLowerCase().includes(search.value.toLowerCase())
  );
});

const isActiveChat = (chatId: string) => {
  return route.path.includes(chatId);
};
</script>

<template>
  <div class="chat-list">
    <div class="chat-list__search">
      <input
          type="text"
          placeholder="Поиск"
          v-model="search"
          class="search-input"
      />
    </div>
    <RouterLink
        :to="`/chats/${chat.id}`"
        class="user chat-list__users"
        :class="{ active: isActiveChat(chat.id) }"
        v-for="(chat, idx) in filteredChatList" :key="idx"
    >
      <div class="user__item">
        <div class="user__img">
          <img :src="`/${chat.image}.png`" :alt="`profile-${idx + 1}`">
        </div>
        <div class="user__details">
          <h2 class="user__details-name">{{ chat.name }}</h2>
          <p class="user__details-message">Ассалому алайкум. Кредит бўйича маълумот...</p>
        </div>
      </div>
      <div class="user__time">14:30</div>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/_variables";

.chat-list {
  display: flex;
  flex-direction: column;
  padding: 0 12px;
  gap: 12px;
  overflow-y: auto;
  height: 90vh;

  &__search {
    margin-top: 12px;
    .search-input {
      width: 100%;
      padding: 12px 24px;
      font-size: 14px;
      color: $gray-secondary;
      border: 2px solid #EEEEEE;
      border-radius: 10px;
      outline: none;
    }
  }

  .active {
    background-color: $active!important;
  }

  .user {
    display: flex;
    justify-content: space-between;
    align-items: start;
    background-color: $gray-primary;
    border-radius: 10px;
    padding: 14px 12px;
    cursor: pointer;

    &__item {
      display: flex;
      justify-content: start;
      align-items: center;
    }

    &__img {
      width: 70px;
      height: 70px;
      border-radius: 100px;
      overflow: hidden;
      flex-shrink: 0;
      margin-right: 12px;
    }

    &__details {

      &-name {
        font-size: 16px;
        font-weight: 500;
        line-height: 120%;
        margin-bottom: 8px;
      }

      &-message {
        font-size: 14px;
        font-weight: 500;
        line-height: 120%;
        color: $gray-secondary;
      }
    }

    &__time {
      color: $gray-secondary;
    }
  }
}

</style>