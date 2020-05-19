import { createHashHistory } from 'history'

export const history = createHashHistory()
let _pathnameBeforeSignIn = window.localStorage.getItem('pathnameBeforeSign') || ''
export const pathBeforeSignIn = Object.defineProperty({ value: '' }, 'value', {
  get() {return _pathnameBeforeSignIn},
  set(v: string) {
    _pathnameBeforeSignIn = v;
    window.localStorage.setItem('pathnameBeforeSign', v)
  }
})