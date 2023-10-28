import ArticleList from "../pages/ArticleList/ArticleList"
import ArticleItem from "../pages/ArticleItem/ArticleItem"
import ModalSignUp from "../pages/ModalSignUp/ModalSignUp"
import ModalSignIn from "../pages/ModalSignIn/ModalSignIn"
import ModalEditProfile from "../pages/ModalEditProfile/ModalEditProfile"
import ModalCreateNewArticle from "../pages/ModalCreateNewArticle/ModalCreateNewArticle"
import ModalEditArticle from "../pages/ModalEditArticle/ModalEditArticle"

import { Navigate } from 'react-router-dom'


export const routes = [
  {
    path: '/articles',
    component: <ArticleList />
  },
  {
    path: "/articles/:slug",
    component: <ArticleItem />
  },
  {
    path: "/profile",
    component: <ModalEditProfile />
  },
  {
    path: "/sign-in",
    component: <ModalSignIn />
  },
  {
    path: "/sign-up",
    component: <ModalSignUp />
  },
  {
    path: "/new-article",
    component: <ModalCreateNewArticle />
  },
  {
    path: "/articles/{slug}/edit",
    component: <ModalEditArticle />
  },
  {
    path: "*",
    component: <Navigate to="/articles" replace />
  },
]