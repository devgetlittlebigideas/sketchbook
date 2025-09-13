import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardHeader, CardTitle, CardContent } from './Card'

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    padding: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>
          This is the card content. You can put any content here.
        </CardContent>
      </>
    ),
  },
}

export const SimpleCard: Story = {
  args: {
    children: 'Simple card with just text content',
  },
}

export const SmallPadding: Story = {
  args: {
    padding: 'sm',
    children: (
      <>
        <CardHeader>
          <CardTitle>Small Padding</CardTitle>
        </CardHeader>
        <CardContent>
          This card has small padding.
        </CardContent>
      </>
    ),
  },
}

export const LargePadding: Story = {
  args: {
    padding: 'lg',
    children: (
      <>
        <CardHeader>
          <CardTitle>Large Padding</CardTitle>
        </CardHeader>
        <CardContent>
          This card has large padding for more spacious content.
        </CardContent>
      </>
    ),
  },
}