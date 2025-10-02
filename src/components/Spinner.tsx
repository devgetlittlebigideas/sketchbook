import React from 'react'

export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary' | 'white'
  className?: string
  label?: string
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  variant = 'primary',
  className = '',
  label = 'Loading...',
}) => {
  const sizes = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-2',
    lg: 'w-12 h-12 border-3',
  }

  const variants = {
    primary: 'border-blue-600 border-t-transparent',
    secondary: 'border-gray-600 border-t-transparent',
    white: 'border-white border-t-transparent',
  }

  return (
    <div
      className={`${sizes[size]} ${variants[variant]} rounded-full animate-spin ${className}`}
      role="status"
      aria-label={label}
    >
      <span className="sr-only">{label}</span>
    </div>
  )
}
