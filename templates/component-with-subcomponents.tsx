import React from 'react'

/**
 * COMPONENT WITH SUB-COMPONENTS TEMPLATE
 *
 * Use this pattern for complex components composed of multiple parts.
 * Examples: Modal, Card, Accordion, Tabs, Form
 *
 * Key Features:
 * - Main parent component
 * - Multiple sub-components for composition
 * - Flexible, composable API
 * - Clear component hierarchy
 *
 * Usage Example:
 * <ParentComponent>
 *   <ComponentHeader>Title</ComponentHeader>
 *   <ComponentBody>Content</ComponentBody>
 *   <ComponentFooter>Actions</ComponentFooter>
 * </ParentComponent>
 */

// ============================================================================
// 1. MAIN PARENT COMPONENT
// ============================================================================

export interface ParentComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Whether the component is open/visible
   * (Use for components like modals, accordions)
   */
  isOpen?: boolean

  /**
   * Callback when component requests to close
   */
  onClose?: () => void

  /**
   * Size variant
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl'

  /**
   * Child components to render
   */
  children: React.ReactNode

  /**
   * Additional CSS classes
   */
  className?: string
}

export const ParentComponent: React.FC<ParentComponentProps> = ({
  isOpen = true,
  onClose,
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  // If this is a modal/dialog, handle open state
  if (!isOpen) return null

  // Define size variants
  const sizes = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
  }

  // Define base styles
  const baseStyles = 'bg-white rounded-lg shadow-xl overflow-hidden'

  return (
    // Optional: Backdrop/Overlay for modals
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Main Component */}
      <div
        className={`relative ${baseStyles} ${sizes[size]} w-full ${className}`}
        role="dialog"
        aria-modal="true"
        {...props}
      >
        {children}
      </div>
    </div>
  )
}

// ============================================================================
// 2. SUB-COMPONENT: HEADER
// ============================================================================

export interface ComponentHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Header content (usually title)
   */
  children: React.ReactNode

  /**
   * Optional close button
   */
  onClose?: () => void

  /**
   * Additional CSS classes
   */
  className?: string
}

export const ComponentHeader: React.FC<ComponentHeaderProps> = ({
  children,
  onClose,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`flex items-center justify-between px-6 py-4 border-b border-gray-200 ${className}`}
      {...props}
    >
      {/* Title/Content */}
      <div className="flex-1">{children}</div>

      {/* Optional Close Button */}
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="ml-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  )
}

// ============================================================================
// 3. SUB-COMPONENT: BODY
// ============================================================================

export interface ComponentBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Body content
   */
  children: React.ReactNode

  /**
   * Additional CSS classes
   */
  className?: string
}

export const ComponentBody: React.FC<ComponentBodyProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <div className={`px-6 py-4 ${className}`} {...props}>
      {children}
    </div>
  )
}

// ============================================================================
// 4. SUB-COMPONENT: FOOTER
// ============================================================================

export interface ComponentFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Footer content (usually action buttons)
   */
  children: React.ReactNode

  /**
   * Additional CSS classes
   */
  className?: string
}

export const ComponentFooter: React.FC<ComponentFooterProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-200 bg-gray-50 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

// ============================================================================
// 5. EXPORTS
// ============================================================================

// Export all components together
// This allows users to import like:
// import { ParentComponent, ComponentHeader, ComponentBody, ComponentFooter } from 'library'

export {
  ParentComponent,
  ComponentHeader,
  ComponentBody,
  ComponentFooter,
}

// In src/index.ts, add:
// export {
//   ParentComponent,
//   ComponentHeader,
//   ComponentBody,
//   ComponentFooter
// } from './components/ParentComponent'
//
// export type {
//   ParentComponentProps,
//   ComponentHeaderProps,
//   ComponentBodyProps,
//   ComponentFooterProps
// } from './components/ParentComponent'

// ============================================================================
// USAGE EXAMPLE
// ============================================================================

/**
 * Basic Usage:
 *
 * ```tsx
 * <ParentComponent isOpen={isOpen} onClose={() => setIsOpen(false)} size="md">
 *   <ComponentHeader onClose={() => setIsOpen(false)}>
 *     <h2 className="text-xl font-semibold">Dialog Title</h2>
 *   </ComponentHeader>
 *
 *   <ComponentBody>
 *     <p>This is the main content of the component.</p>
 *   </ComponentBody>
 *
 *   <ComponentFooter>
 *     <button onClick={() => setIsOpen(false)}>Cancel</button>
 *     <button onClick={handleSubmit}>Confirm</button>
 *   </ComponentFooter>
 * </ParentComponent>
 * ```
 *
 * Flexible Composition:
 *
 * ```tsx
 * <ParentComponent>
 *   <ComponentHeader>Just a header</ComponentHeader>
 *   <ComponentBody>No footer needed!</ComponentBody>
 * </ParentComponent>
 * ```
 */

// ============================================================================
// TIPS FOR SUB-COMPONENTS:
// ============================================================================

/**
 * 1. Keep sub-components simple and focused
 * 2. Each sub-component should handle ONE section/responsibility
 * 3. Make composition flexible - users should be able to:
 *    - Use all sub-components
 *    - Use only some sub-components
 *    - Pass custom className to any part
 * 4. Common sub-component names:
 *    - Header/Title
 *    - Body/Content
 *    - Footer/Actions
 *    - Section/Panel
 * 5. Export all sub-components together
 * 6. Document usage examples in JSDoc
 * 7. Consider adding a compound component pattern for shared state
 */
