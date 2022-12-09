import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return <div></div>
})

export const head: DocumentHead = {
  title: 'Qwipsu',
  meta: [
    {
      name: 'description',
      content: 'Kipsu chat rebuilt with Qwik'
    }
  ]
}
