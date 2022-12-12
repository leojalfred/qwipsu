import {
  component$,
  useSignal,
  useStore,
  useStylesScoped$,
  useWatch$
} from '@builder.io/qwik'
import style from './dialogue.scss?inline'
import Message, { MessageProps } from './message/message'
import Button from '~/components/button/button'

export default component$(() => {
  const { scopeId } = useStylesScoped$(style)

  const messageData = useStore<MessageProps[]>([
    {
      type: 'reply',
      name: 'Rizzo',
      text: 'Cupidatat aute ut exercitation dolor culpa',
      date: new Date()
    },
    {
      type: 'message',
      name: 'Zoe',
      text: 'Voluptate irure veniam voluptate esse enim',
      date: new Date()
    },
    {
      type: 'message',
      name: 'Zoe',
      text: 'Aliquip qui mollit ad excepteur anim laboris esse eiusmod aute ipsum aliqua magna eiusmod. Anim enim et ut sint occaecat do est. Incididunt deserunt mollit aute quis ullamco non esse qui. Pariatur culpa anim qui et nisi esse non incididunt culpa elit laboris labore voluptate.\nQuis aliqua ullamco proident mollit id nulla aute irure laboris. Tempor dolore consequat cupidatat nulla ad dolor anim occaecat id elit sint deserunt. Enim est quis duis esse anim occaecat nostrud tempor veniam enim dolor tempor voluptate ex.\n',
      date: new Date()
    }
  ])

  const input = useStore({
    text: '',
    count: '160',
    disabled: true
  })
  const textarea = useSignal<HTMLTextAreaElement>()
  const counter = useSignal<HTMLSpanElement>()

  useWatch$(({ track }) => {
    track(() => input.text)

    const { length } = input.text
    if (length > 1120) {
      counter.value?.classList.add('dialogue__counter--over')
      input.count = (1120 - length).toString()
      input.disabled = true

      return
    }

    counter.value?.classList.remove('dialogue__counter--over')
    input.disabled = false

    if (length <= 160) {
      input.count = (160 - length).toString()
      if (length === 0) input.disabled = true

      return
    }

    const remainingLetters = 159 - ((length - 1) % 160)
    const totalMessages = Math.floor((length - 1) / 160) + 1
    input.count = `${remainingLetters} (${totalMessages})`
  })

  return (
    <div class="dialogue">
      {messageData.map((props, i) => (
        <Message key={i} {...props} />
      ))}

      <form
        class="dialogue__form"
        preventdefault:submit
        onSubmit$={() => {
          messageData.push({
            type: 'message',
            name: 'Zoe',
            text: input.text,
            date: new Date()
          })

          input.text = ''
          if (textarea.value) textarea.value.value = ''
        }}
      >
        <textarea
          class="dialogue__input"
          ref={textarea}
          aria-label="Message input"
          rows={3}
          onInput$={event => {
            input.text = (event.target as HTMLInputElement).value
          }}
        ></textarea>

        <div class="dialogue__bottomline">
          <p class="dialogue__counter" ref={counter}>
            {input.count}
          </p>
          <Button
            className={`${scopeId} dialogue__send`}
            disabled={input.disabled}
            text="Send"
          />
        </div>
      </form>
    </div>
  )
})
