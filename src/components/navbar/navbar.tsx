import { component$, useStylesScoped$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'
import style from './navbar.scss?inline'
import logo from './logo.png'
import Icon from '~/components/icon/icon'

export default component$(() => {
  const { scopeId } = useStylesScoped$(style)

  return (
    <nav class="navbar">
      <div class="navbar__wrapper">
        <Link class={`${scopeId} navbar__logo-link`} href="/">
          <img
            class="navbar__logo"
            src={logo}
            width="96"
            height="27.42"
            alt="Kipsu Logo"
          />
        </Link>
        <Icon class={`${scopeId} navbar__account`} icon="account_circle" />
      </div>
    </nav>
  )
})
