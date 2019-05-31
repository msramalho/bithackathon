import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppHeaderLogout from "./layout/AppHeaderLogout";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import Lists from "./views/Lists.vue";
import Bundle from "./views/Bundle.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "components",
      components: {
        header: AppHeaderLogout,
        default: Components,
        footer: AppFooter
      }
    },
    {
      path: "/landing",
      name: "landing",
      components: {
        header: AppHeaderLogout,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeaderLogout,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      }
    },
    {
      path: "/lists",
      name: "lists",
      components: {
        header: AppHeader,
        default: Lists,
        footer: AppFooter
      }
    },
    {
      path: "/bundle/:id",
      name: "bundle",
      components: {
        header: AppHeader,
        default: Bundle,
        footer: AppFooter
      }
    }, 
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
