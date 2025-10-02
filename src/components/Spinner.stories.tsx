import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from './Spinner'

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'white'],
    },
    label: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Small: Story = {
  args: {
    size: 'sm',
  },
}

export const Medium: Story = {
  args: {
    size: 'md',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
  },
}

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
}

export const White: Story = {
  args: {
    variant: 'white',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner variant="primary" />
      <Spinner variant="secondary" />
      <div className="bg-gray-800 p-4 rounded">
        <Spinner variant="white" />
      </div>
    </div>
  ),
}

export const InlineLoading: Story = {
  render: () => (
    <p className="flex items-center gap-2">
      Fetching data...
      <Spinner size="sm" />
    </p>
  ),
}

export const ButtonLoadingState: Story = {
  render: () => (
    <button
      disabled
      className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
    >
      <Spinner size="sm" variant="white" />
      Creating...
    </button>
  ),
}

export const FullPageOverlay: Story = {
  render: () => (
    <div className="flex items-center justify-center w-96 h-64 bg-gray-50 rounded-lg">
      <div className="flex flex-col items-center gap-4">
        <Spinner size="lg" label="Loading chart..." />
        <p className="text-gray-600">Loading chart...</p>
      </div>
    </div>
  ),
}

export const CustomLabel: Story = {
  args: {
    label: 'Loading chart data...',
    size: 'lg',
  },
}
