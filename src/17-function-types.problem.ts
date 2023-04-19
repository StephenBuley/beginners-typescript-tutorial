import { Equal, Expect } from './helpers/type-utils'

/**
 * How do we type onFocusChange?
 */
type functionType = {
  (bool: boolean): void
}

const addListener = (onFocusChange: functionType) => {
  window.addEventListener('focus', () => {
    onFocusChange(true)
  })

  window.addEventListener('blur', () => {
    onFocusChange(false)
  })
}

addListener((isFocused) => {
  console.log({ isFocused })

  type tests = [Expect<Equal<typeof isFocused, boolean>>]
})
