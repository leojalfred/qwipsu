import { component$ } from '@builder.io/qwik'

interface IconProps {
  class?: string
  icon: string
}

export default component$((props: IconProps) => {
  let classes = 'material-symbols-outlined'
  if (props.class) classes = `${props.class} material-symbols-outlined`

  return <span class={classes}>{props.icon}</span>
})
