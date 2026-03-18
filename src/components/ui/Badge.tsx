import { cn } from '@/lib/utils'

type BadgeVariant = 'default' | 'gold' | 'success' | 'warning' | 'free'

interface BadgeProps {
  variant?: BadgeVariant
  className?: string
  children: React.ReactNode
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-primary-50 text-primary-700 border border-primary-200',
  gold: 'bg-gold-50 text-gold-800 border border-gold-300',
  success: 'bg-success-light text-success',
  warning: 'bg-warning-light text-warning',
  free: 'bg-gold-500 text-white',
}

export default function Badge({
  variant = 'default',
  className,
  children,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 text-xs font-ui font-medium tracking-wide rounded-sm',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
