import React from 'react'

/**
 * COMPONENT WITH VARIANTS TEMPLATE
 *
 * Use this pattern for components with multiple visual styles and sizes.
 * Examples: Button, Alert, Notification, Input
 *
 * Key Features:
 * - Multiple variant types (visual style, size, state)
 * - Organized Tailwind classes by category
 * - Flexible and customizable
 * - Type-safe props with unions
 */

// 1. Define Props Interface
// - Export for external use
// - Extend appropriate HTML element
// - Use union types for variants
export interface ComponentWithVariantsProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual style variant
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'

  /**
   * Size of the component
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg'

  /**
   * Whether the component is in a loading state
   * @default false
   */
  loading?: boolean

  /**
   * Content to display
   */
  children: React.ReactNode

  /**
   * Additional CSS classes
   */
  className?: string
}

// 2. Create the Component
export const ComponentWithVariants: React.FC<ComponentWithVariantsProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  children,
  className = '',
  disabled,
  ...props
}) => {
  // 3. Define Base Styles
  // These apply to ALL variants
  // Include common properties: layout, transitions, focus states
  const baseStyles = [
    'inline-flex items-center justify-center',
    'font-medium rounded-lg',
    'transition-colors duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50',
  ].join(' ')

  // 4. Define Variant Styles
  // Each variant should handle: base, hover, focus, disabled states
  const variants = {
    primary: [
      'bg-blue-600 text-white',
      'hover:bg-blue-700',
      'focus:ring-blue-500',
      'disabled:bg-blue-300',
    ].join(' '),

    secondary: [
      'bg-gray-600 text-white',
      'hover:bg-gray-700',
      'focus:ring-gray-500',
      'disabled:bg-gray-300',
    ].join(' '),

    outline: [
      'border-2 border-gray-300 text-gray-700 bg-transparent',
      'hover:bg-gray-50',
      'focus:ring-gray-500',
      'disabled:border-gray-200 disabled:text-gray-400',
    ].join(' '),

    ghost: [
      'text-gray-700 bg-transparent',
      'hover:bg-gray-100',
      'focus:ring-gray-500',
      'disabled:text-gray-400',
    ].join(' '),
  }

  // 5. Define Size Variants
  // Control padding, text size, icon size
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  // 6. Combine All Classes
  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  // 7. Handle Loading State
  // You might want to show a spinner or disable interaction
  const isDisabled = disabled || loading

  // 8. Render the Component
  return (
    <button
      className={combinedClassName}
      disabled={isDisabled}
      aria-busy={loading}
      {...props}
    >
      {/* Optional: Add loading indicator */}
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  )
}

/**
 * TIPS FOR USING THIS PATTERN:
 *
 * 1. Organize classes into arrays with join(' ') for readability
 * 2. Always include focus states for accessibility
 * 3. Handle disabled state with opacity and cursor
 * 4. Use transition-colors for smooth hover effects
 * 5. Consider all interactive states: hover, focus, active, disabled
 * 6. Make loading state visually clear
 * 7. Use semantic HTML (button for buttons, not div!)
 * 8. Spread ...props for maximum flexibility
 */

// 9. Export
// In src/index.ts, add:
// export { ComponentWithVariants } from './components/ComponentWithVariants'
// export type { ComponentWithVariantsProps } from './components/ComponentWithVariants'
