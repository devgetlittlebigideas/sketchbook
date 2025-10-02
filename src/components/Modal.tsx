import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

export interface ModalProps {
  open: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showCloseButton?: boolean
  closeOnOverlayClick?: boolean
  closeOnEscape?: boolean
  className?: string
}

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  children,
  size = 'md',
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  className = '',
}) => {
  const modalRef = useRef<HTMLDivElement>(null)

  // Handle ESC key
  useEffect(() => {
    if (!open || !closeOnEscape) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, closeOnEscape, onClose])

  // Handle body scroll lock
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Focus management
  useEffect(() => {
    if (open && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      if (focusableElements.length > 0) {
        focusableElements[0].focus()
      }
    }
  }, [open])

  if (!open) return null

  const sizes = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
  }

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 animate-fade-in"
      onClick={closeOnOverlayClick ? onClose : undefined}
    >
      <div
        ref={modalRef}
        className={`bg-white rounded-lg shadow-xl w-full ${sizes[size]} ${className} animate-scale-in`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
      >
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between p-4 border-b">
            {title && (
              <h2 id="modal-title" className="text-lg font-semibold">
                {title}
              </h2>
            )}
            {showCloseButton && (
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        )}
        <div className="p-4">{children}</div>
      </div>
    </div>,
    document.body
  )
}

export interface ModalHeaderProps {
  children: React.ReactNode
  className?: string
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({ children, className = '' }) => (
  <div className={`border-b p-4 ${className}`}>{children}</div>
)

export interface ModalBodyProps {
  children: React.ReactNode
  className?: string
}

export const ModalBody: React.FC<ModalBodyProps> = ({ children, className = '' }) => (
  <div className={`p-4 ${className}`}>{children}</div>
)

export interface ModalFooterProps {
  children: React.ReactNode
  className?: string
}

export const ModalFooter: React.FC<ModalFooterProps> = ({ children, className = '' }) => (
  <div className={`border-t p-4 flex justify-end gap-2 ${className}`}>{children}</div>
)
