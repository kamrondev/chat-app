import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/chats',
      component: () => import('@/layouts/ChatLayout.vue'),
      children: [
        {
          path: '/chats',
          name: 'Чаты',
          component: () => import('@/pages/ChatListPage.vue'),
          meta: {
            title: 'Список чатов'
          }
        },
        {
          path: '/chats/:id',
          component: () => import('@/pages/ChatPage.vue'),
          meta: {
            title: 'Чат'
          }
        }
      ]
    }
  ],
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string;
  next()
})

export default router
