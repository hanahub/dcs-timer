// Works as simple wrapper around async storage

const APP_ID = 'ET_'

export const setItem = (key, data) => {
  localStorage.setItem(APP_ID + key, JSON.stringify(data))
}

export const getItem = (key, defaultVal) => {
  try {
    return JSON.parse(localStorage.getItem(APP_ID + key)) || defaultVal
  } catch (e) {
    return defaultVal || false
  }
}

export const removeItem = key => {
  localStorage.removeItem(APP_ID + key)
}

export const shop = () => getItem('USER_ID', false) || 'ember-tribe.myshopify.com';
export const getUserId = () => getItem('USER_ID', false)
export const setUserId = data => setItem('USER_ID', data)
export const removeUserId = () => removeItem('USER_ID')

export const getToken = () => getItem('TOKEN', false)
export const setToken = data => setItem('TOKEN', data)
export const removeToken = () => removeItem('TOKEN')

export const getPageInfo = () => getItem('PAGE_INFO', false)
export const setPageInfo = data => setItem('PAGE_INFO', data)
export const removePageInfo = () => removeItem('PAGE_INFO')

export const clearInfo = () => {
  removeItem('USER');
  removeToken();
  removeUserId();
  removePageInfo();
}

export default {
  set: setItem,
  get: getItem,
  remove: removeItem,
  getToken,
  setToken,
};
