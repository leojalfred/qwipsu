import { component$, useStylesScoped$ } from '@builder.io/qwik'
import style from './input.scss?inline'
import Icon from '~/components/icon/icon'

interface InputProps {
  id: string
  label: string
  type: 'text' | 'password'
  value: string
  onInput: any
  icon: string
}

export default component$(
  ({ id, label, type, value, onInput, icon }: InputProps) => {
    const { scopeId } = useStylesScoped$(style)

    return (
      <div class="input">
        <label for={id} class="input__label">
          {label}
        </label>
        <div class="input__wrapper">
          <input
            id={id}
            class="input__input"
            type={type}
            value={value}
            // eslint-disable-next-line qwik/valid-lexical-scope
            onInput$={onInput}
          />
          <Icon class={`${scopeId} input__icon`} icon={icon} />
        </div>
      </div>
    )
  }
)
