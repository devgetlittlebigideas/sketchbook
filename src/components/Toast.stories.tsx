import type { Meta, StoryObj } from '@storybook/react'
import { ToastProvider, useToast } from './Toast'
import { Button } from './Button'

const meta = {
  title: 'Components/Toast',
  component: ToastProvider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
} satisfies Meta<typeof ToastProvider>

export default meta
type Story = StoryObj<typeof meta>

const ToastDemo = () => {
  const { success, error, warning, info, toast } = useToast()

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold mb-4">Click buttons to show toasts</h3>
      <div className="flex flex-col gap-2">
        <Button onClick={() => success('Task created successfully!')}>
          Show Success Toast
        </Button>
        <Button onClick={() => error('Failed to save. Please try again.')}>
          Show Error Toast
        </Button>
        <Button onClick={() => warning('You have unsaved changes')}>
          Show Warning Toast
        </Button>
        <Button onClick={() => info('Copied to clipboard')}>
          Show Info Toast
        </Button>
      </div>
    </div>
  )
}

export const Interactive: Story = {
  render: () => <ToastDemo />,
}

const SuccessDemo = () => {
  const { success } = useToast()

  return (
    <Button onClick={() => success('Task created successfully!')}>
      Show Success Toast
    </Button>
  )
}

export const Success: Story = {
  render: () => <SuccessDemo />,
}

const ErrorDemo = () => {
  const { error } = useToast()

  return (
    <Button onClick={() => error('Failed to save. Please try again.')}>
      Show Error Toast
    </Button>
  )
}

export const Error: Story = {
  render: () => <ErrorDemo />,
}

const WarningDemo = () => {
  const { warning } = useToast()

  return (
    <Button onClick={() => warning('You have unsaved changes')}>
      Show Warning Toast
    </Button>
  )
}

export const Warning: Story = {
  render: () => <WarningDemo />,
}

const InfoDemo = () => {
  const { info } = useToast()

  return (
    <Button onClick={() => info('Copied to clipboard')}>
      Show Info Toast
    </Button>
  )
}

export const Info: Story = {
  render: () => <InfoDemo />,
}

const WithActionDemo = () => {
  const { toast } = useToast()

  const handleUndo = () => {
    alert('Undo clicked!')
  }

  return (
    <Button
      onClick={() =>
        toast({
          message: 'Changes saved',
          variant: 'success',
          duration: 10000,
          action: {
            label: 'Undo',
            onClick: handleUndo,
          },
        })
      }
    >
      Show Toast with Action
    </Button>
  )
}

export const WithAction: Story = {
  render: () => <WithActionDemo />,
}

const PersistentDemo = () => {
  const { toast, dismiss } = useToast()
  let toastId: string

  return (
    <div className="flex gap-2">
      <Button
        onClick={() => {
          toastId = toast({
            message: 'Processing... This will not auto-dismiss',
            variant: 'info',
            duration: 0,
          })
        }}
      >
        Show Persistent Toast
      </Button>
      <Button variant="secondary" onClick={() => toastId && dismiss(toastId)}>
        Dismiss
      </Button>
    </div>
  )
}

export const Persistent: Story = {
  render: () => <PersistentDemo />,
}

const MultipleToastsDemo = () => {
  const { success, error, warning, info } = useToast()

  const showMultiple = () => {
    success('First task completed')
    setTimeout(() => error('An error occurred'), 300)
    setTimeout(() => warning('Warning: Check your input'), 600)
    setTimeout(() => info('New update available'), 900)
  }

  return (
    <Button onClick={showMultiple}>
      Show Multiple Toasts
    </Button>
  )
}

export const MultipleToasts: Story = {
  render: () => <MultipleToastsDemo />,
}

const LongMessageDemo = () => {
  const { info } = useToast()

  return (
    <Button
      onClick={() =>
        info(
          'This is a very long notification message that demonstrates how the toast component handles longer text content. It should wrap properly and maintain good readability.'
        )
      }
    >
      Show Long Message
    </Button>
  )
}

export const LongMessage: Story = {
  render: () => <LongMessageDemo />,
}

const CustomDurationDemo = () => {
  const { success } = useToast()

  return (
    <div className="flex gap-2">
      <Button onClick={() => success('Short (2s)', 2000)}>
        2 Second Toast
      </Button>
      <Button onClick={() => success('Long (10s)', 10000)}>
        10 Second Toast
      </Button>
    </div>
  )
}

export const CustomDuration: Story = {
  render: () => <CustomDurationDemo />,
}

const DismissAllDemo = () => {
  const { success, error, warning, info, dismissAll } = useToast()

  const showMany = () => {
    success('Success 1')
    error('Error 1')
    warning('Warning 1')
    info('Info 1')
    setTimeout(() => success('Success 2'), 200)
    setTimeout(() => error('Error 2'), 400)
  }

  return (
    <div className="flex gap-2">
      <Button onClick={showMany}>
        Show Many Toasts
      </Button>
      <Button variant="secondary" onClick={dismissAll}>
        Dismiss All
      </Button>
    </div>
  )
}

export const DismissAll: Story = {
  render: () => <DismissAllDemo />,
}
