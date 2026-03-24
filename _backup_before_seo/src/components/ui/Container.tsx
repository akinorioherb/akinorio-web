import { cn } from '@/lib/utils'

interface ContainerProps {
  className?: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
}

const sizeStyles = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-7xl',
}

export default function Container({
  className,
  children,
  size = 'lg',
}: ContainerProps) {
  return (
    <div className={cn('mx-auto px-5 md:px-8', sizeStyles[size], className)}>
      {children}
    </div>
  )
}
