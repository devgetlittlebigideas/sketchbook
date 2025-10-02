import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from './Modal'
import { Button } from './Button'
import { Input } from './Input'

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    showCloseButton: {
      control: 'boolean',
    },
    closeOnOverlayClick: {
      control: 'boolean',
    },
    closeOnEscape: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} title="Default Modal">
          <p>This is a basic modal with default settings.</p>
        </Modal>
      </>
    )
  },
}

export const Small: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Small Modal</Button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} title="Small Modal" size="sm">
          <p>This is a small modal.</p>
        </Modal>
      </>
    )
  },
}

export const Large: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Large Modal</Button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} title="Large Modal" size="lg">
          <p>This is a large modal with more content space.</p>
        </Modal>
      </>
    )
  },
}

export const ExtraLarge: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open XL Modal</Button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} title="Extra Large Modal" size="xl">
          <p>This is an extra large modal for extensive content.</p>
        </Modal>
      </>
    )
  },
}

export const WithoutCloseButton: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          title="No Close Button"
          showCloseButton={false}
        >
          <p className="mb-4">This modal has no close button in the header.</p>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </Modal>
      </>
    )
  },
}

export const WithCustomLayout: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} size="lg">
          <ModalHeader>
            <h2 className="text-xl font-bold">Custom Layout</h2>
            <p className="text-sm text-gray-500">Using sub-components</p>
          </ModalHeader>
          <ModalBody>
            <p>This modal uses ModalHeader, ModalBody, and ModalFooter components.</p>
          </ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsOpen(false)}>Confirm</Button>
          </ModalFooter>
        </Modal>
      </>
    )
  },
}

export const FormExample: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Add Task</Button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} title="Add New Task" size="md">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setIsOpen(false)
            }}
          >
            <div className="space-y-4">
              <Input placeholder="Task name" />
              <Input placeholder="Description" />
              <div className="flex justify-end gap-2 pt-4">
                <Button type="button" variant="secondary" onClick={() => setIsOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">Add Task</Button>
              </div>
            </div>
          </form>
        </Modal>
      </>
    )
  },
}

export const ConfirmationDialog: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Delete Item</Button>
        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          title="Confirm Deletion"
          size="sm"
        >
          <p className="mb-4">Are you sure you want to delete this item? This action cannot be undone.</p>
          <div className="flex gap-2 justify-end">
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                // Handle delete
                setIsOpen(false)
              }}
            >
              Delete
            </Button>
          </div>
        </Modal>
      </>
    )
  },
}

export const LongContent: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} title="Long Content" size="md">
          <div className="max-h-96 overflow-y-auto">
            <p className="mb-4">
              This modal contains long content that requires scrolling within the modal body.
            </p>
            {Array.from({ length: 20 }).map((_, i) => (
              <p key={i} className="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            ))}
          </div>
          <div className="flex justify-end gap-2 pt-4 border-t mt-4">
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </div>
        </Modal>
      </>
    )
  },
}

export const NoOverlayClose: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          title="Click Outside Disabled"
          closeOnOverlayClick={false}
        >
          <p className="mb-4">
            This modal cannot be closed by clicking the overlay. Use the close button or ESC key.
          </p>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </Modal>
      </>
    )
  },
}

export const NoEscapeClose: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          title="ESC Key Disabled"
          closeOnEscape={false}
        >
          <p className="mb-4">
            This modal cannot be closed with the ESC key. Use the close button or click outside.
          </p>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </Modal>
      </>
    )
  },
}
