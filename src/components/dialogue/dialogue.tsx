import { component$, useStylesScoped$ } from '@builder.io/qwik'
import style from './dialogue.scss?inline'
import Message, { MessageProps, MessageType } from './message/message'

export default component$(() => {
  useStylesScoped$(style)

  const messageData: MessageProps[] = [
    {
      type: MessageType.Reply,
      name: 'Rizzo',
      text: 'Cupidatat aute ut exercitation dolor culpa',
      date: new Date()
    },
    {
      type: MessageType.Message,
      name: 'Zoe',
      text: 'Voluptate irure veniam voluptate esse enim',
      date: new Date()
    },
    {
      type: MessageType.Message,
      name: 'Zoe',
      text: 'Aliquip qui mollit ad excepteur anim laboris esse eiusmod aute ipsum aliqua magna eiusmod. Anim enim et ut sint occaecat do est. Incididunt deserunt mollit aute quis ullamco non esse qui. Pariatur culpa anim qui et nisi esse non incididunt culpa elit laboris labore voluptate.\nQuis aliqua ullamco proident mollit id nulla aute irure laboris. Tempor dolore consequat cupidatat nulla ad dolor anim occaecat id elit sint deserunt. Enim est quis duis esse anim occaecat nostrud tempor veniam enim dolor tempor voluptate ex.\n',
      date: new Date()
    }
  ]
  const messages = messageData.map((props, i) => <Message key={i} {...props} />)

  return <div class="dialogue">{messages}</div>
})
