import axios from 'axios'
import moment from 'moment'
import { BASE_API_PATH } from '~/helpers/constants'

export const authToken = () => {
  if (localStorage.getItem('access_token')) {
    const token = JSON.parse(localStorage.getItem('access_token'))
    return {
      headers: { Authorization: `Bearer ${token}` },
    }
  } else {
    return null
  }
}

export const refreshTokenRequest = () => {
  if (localStorage.getItem('refresh_token')) {
    const token = JSON.parse(localStorage.getItem('refresh_token'))
    return axios.post(
      `${BASE_API_PATH}/user/refresh`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    )
  } else {
    return null
  }
}

export const refreshTokenAction = (dispatch, action) => {
  return refreshTokenRequest()
    .then((res) => {
      localStorage.setItem(
        'access_token',
        JSON.stringify(res.data.access_token)
      )
      return dispatch(action)
    })
    .catch((err) => {
      const status = err.response.status
      if (status === 409) {
        dispatch('logOut')
      }
    })
}

export const phoneValidator = (phone) => {
  return /^\+38\(0[0-9]{2}\)-[0-9]{3}-[0-9]{2}-[0-9]{2}$/.test(phone)
}

export const nameValidator = (name) =>
  /^[A-Z,',\-,А-Я,a-z,а-я,ё,Ё,\s,а-я,А-Я,Ї,ї,Є,є,І,і,ґ,Ґ]+$/i.test(name)

export const fullnameValidator = (name) =>
  /^[A-Z,',\-,А-Я,a-z,а-я,ё,Ё,\s,а-я,А-Я,Ї,ї,Є,є,І,і,ґ,Ґ]+\s+[A-Z,',\-,А-Я,a-z,а-я,ё,Ё,\s,а-я,А-Я,Ї,ї,Є,є,І,і,ґ,Ґ]+$/i.test(
    name
  )

export const emailValidator = (email) => !/\w*ru\b/i.test(email)

export const dateParser = (date) => {
  moment.locale('uk')
  return moment(date).format('DD.MM.YY')
}
