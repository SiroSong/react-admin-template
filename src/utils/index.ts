import { redirect } from "react-router-dom"
import { StorageKeys } from "../types"

export const checkUser = () => {
  const localStoryUser = localStorage.getItem(StorageKeys.USER)
  let jsonUser = null

  try {
    jsonUser = JSON.parse(localStoryUser || "")
  } catch (error) {
    console.log(error)
  }

  if (!jsonUser) {
  }

  return jsonUser
}

export const checkAuth = () => {}
