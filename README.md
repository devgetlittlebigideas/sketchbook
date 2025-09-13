# Sketchbook

A lightweight React + Tailwind component library for little big ideas.

## Installation

```bash
npm install @littlebigideas/sketchbook
```

## Usage

Import the components and styles in your app:

```jsx
import { Button, Card, Input } from '@littlebigideas/sketchbook'
import '@littlebigideas/sketchbook/styles'

function App() {
  return (
    <Card>
      <Button variant="primary">Click me!</Button>
      <Input label="Enter your name" />
    </Card>
  )
}
```

## Development

### Install dependencies
```bash
npm install
```

### Run Storybook for development
```bash
npm run storybook
```

### Build the library
```bash
npm run build
```

### Build Storybook for production
```bash
npm run build-storybook
```

## Components

- **Button** - A versatile button component with multiple variants and sizes
- **Card** - A container component with header and content sections
- **Input** - A form input component with label, error, and helper text support

## Storybook

View the component documentation and playground at [GitHub Pages](https://devgetlittlebigideas.github.io/sketchbook/) (after deployment).

## Publishing

The package is automatically published to npm when a new release is created on GitHub.

### Manual publishing
```bash
npm run build
npm publish --access public
```

## Setup for GitHub Pages

1. Go to your repository settings on GitHub
2. Navigate to Pages section
3. Under "Build and deployment", select "GitHub Actions" as the source
4. The Storybook will automatically deploy when you push to main

## NPM Token Setup

To enable automatic publishing:
1. Create an npm access token at npmjs.com
2. Add it as `NPM_TOKEN` in your GitHub repository secrets

## License

MIT
