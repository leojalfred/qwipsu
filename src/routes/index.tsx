import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import Dialogue from '~/components/dialogue/dialogue'

export default component$(() => {
  return <Dialogue />
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
