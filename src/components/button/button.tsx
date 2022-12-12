import { component$, useStyles$ } from '@builder.io/qwik'
import style from './button.scss?inline'

interface ButtonProps {
  className: string
  disabled?: boolean
  text: string
}

export default component$(({ className, disabled, text }: ButtonProps) => {
  useStyles$(style)

  let classes = 'button'
  if (className) classes = `${className} ${classes}`

  return (
    <button class={classes} disabled={disabled}>
      {text}
    </button>
  )
})
