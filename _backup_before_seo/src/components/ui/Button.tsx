import Link from 'next/link'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'gold' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: React.ReactNode
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: undefined
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string
  target?: string
  rel?: string
}

type ButtonProps = ButtonAsButton | ButtonAsLink

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary-700 text-white hover:bg-primary-600 active:bg-primary-800',
  secondary:
    'bg-white text-primary-700 border border-primary-200 hover:bg-primary-50 active:bg-primary-100',
  gold: 'bg-gold-500 text-white hover:bg-gold-600 active:bg-gold-700',
  outline:
    'bg-transparent text-gold-500 border border-gold-400 hover:bg-gold-50 active:bg-gold-100',
  ghost:
    'bg-transparent text-neutral-700 hover:bg-neutral-50 active:bg-neutral-100',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-ui font-medium tracking-wider transition-all duration-300 rounded-sm cursor-pointer'

  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className)

  if ('href' in props && props.href) {
    const { href, target, rel, ...rest } = props as ButtonAsLink
    return (
      <Link href={href} target={target} rel={rel} className={classes}>
        {children}
      </Link>
    )
  }

  const buttonProps = props as ButtonAsButton
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
