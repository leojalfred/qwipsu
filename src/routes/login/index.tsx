import {
  component$,
  useStylesScoped$,
  useStore,
  useWatch$,
  $
} from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import style from './login.scss?inline'
import Icon from '~/components/icon/icon'
import Input from '~/components/input/input'
import Button from '~/components/button/button'

export default component$(() => {
  const { scopeId } = useStylesScoped$(style)

  const login = useStore({
    username: '',
    password: '',
    disabled: true
  })

  useWatch$(({ track }) => {
    track(() => login.username)
    track(() => login.password)

    login.disabled = !(login.username.length > 0 && login.password.length > 0)
  })

  return (
    <div
      class="login"
      preventdefault:submit
      onSubmit$={() => {
        console.log(login.username, login.password)
      }}
    >
      <Icon class={`${scopeId} login__icon`} icon="login" />
      <form class="login__main">
        <h1 class="login__heading">Log In to Kipsu</h1>
        <Input
          id="username"
          label="Username"
          type="text"
          value={login.username}
          onInput={$((event: Event) => {
            login.username = (event.target as HTMLInputElement).value
          })}
          icon="input"
        />
        <Input
          id="password"
          label="Password"
          type="password"
          value={login.password}
          onInput={$((event: Event) => {
            login.password = (event.target as HTMLInputElement).value
          })}
          icon="password"
        />
        <Button
          className={`${scopeId} login__button`}
          disabled={login.disabled}
          text="Log In"
        />
      </form>
    </div>
  )
})

export const head: DocumentHead = {
  title: 'Qwipsu Login',
  meta: [
    {
      name: 'description',
      content: 'Kipsu chat rebuilt with Qwik'
    }
  ]
}
