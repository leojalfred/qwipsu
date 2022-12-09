import { component$, useStylesScoped$ } from '@builder.io/qwik'
import style from './message.scss?inline'

export enum MessageType {
  Message = 'message',
  Reply = 'reply'
}

export interface MessageProps {
  type: MessageType
  name: string
  text: string
  date: Date
}

export default component$(({ type, name, text, date }: MessageProps) => {
  useStylesScoped$(style)

  const classes = `message message--${type}`
  const time = date
    .toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      hour12: true,
      minute: 'numeric'
    })
    .replace(',', '')

  return (
    <div class={classes}>
      <div class="message__main">
        <span class="message__name">
          <b>{name}: </b>
        </span>
        <span class="message__text">{text}</span>
      </div>
      <p class="message__time">{time}</p>
    </div>
  )
})
