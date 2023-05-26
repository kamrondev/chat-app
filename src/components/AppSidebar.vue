<script setup lang="ts">
import HomeIcon from "@/components/icons/HomeIcon.vue";
import ChatIcon from "@/components/icons/ChatIcon.vue";
import SettingsIcon from "@/components/icons/SettingsIcon.vue";

const sidebarMenu = [
  {
    name: 'Главный экран',
    icon: HomeIcon,
  },
  {
    name: 'Чат',
    icon: ChatIcon
  },
  {
    name: 'Настройки',
    icon: SettingsIcon
  }
]
</script>

<template>
  <div class="sidebar">
    <div class="sidebar__top">
      <div class="profile sidebar__top-profile">
        <div class="profile__img">
          <img src="/avatar.jpeg" alt="avatar">
        </div>
        <h4 class="profile__name">Камрон Фозилов</h4>
      </div>
      <ul class="menu sidebar__top-menu">
        <li class="menu__item" v-for="(menu, idx) in sidebarMenu" :key="idx">
          <a href="#" class="menu__item-link">
            <span class="menu__item-link-icon">
              <component :is="menu.icon" />
            </span>
            <span class="menu__item-link-name">{{ menu.name }}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="sidebar__bottom"></div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/_variables";

.sidebar {
  border-right: 1px solid $gray-primary;
  padding: 32px 16px;

  &__top {
    display: flex;
    flex-direction: column;

    .profile {
      display: flex;
      flex-direction: column;
      align-items: center;
      &__img {
        width: 100px;
        height: 100px;
        border-radius: 100px;
        overflow: hidden;
      }

      &__name {
        margin-top: 8px;
        font-size: 14px;
        line-height: 120%;
        color: $gray-secondary;
        font-weight: 500;
      }
    }

    .menu {
      margin-top: 30px;

      &__item {

        &:not(:first-child) {
          margin-top: 12px;
        }

        &-link {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          border-radius: 8px;

          &:hover {
            background-color: $gray-primary;
          }

          .menu__item-link-icon {
            width: 24px;
            height: 24px;
            margin-right: 16px;
          }

          .menu__item-link-name {
            font-size: 16px;
          }
        }
      }
    }
  }

  &__bottom {

  }
}
</style>