import { buildClassName } from '@/utils/buildClassName'

interface ButtonProps {
    handleClick: () => void
    type?: 'button' | 'submit' | 'reset'
    className?: string
    children?: JSX.Element
}

export function Button({
    handleClick,
    type = 'button',
    className,
    children,
}: ButtonProps): JSX.Element {
    return (
        <button
            onClick={handleClick}
            type={type}
            className={buildClassName(className, 'button')}
        >
            {children}
        </button>
    )
}
