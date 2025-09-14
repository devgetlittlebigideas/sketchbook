# Sketchbook

A lightweight React + Tailwind component library for little big ideas.

## Installation

```bash
npm install @devgetlittlebigideas/sketchbook
```

## Usage

Import the components and styles in your app:

```jsx
import { Button, Card, Input } from '@devgetlittlebigideas/sketchbook'
import '@devgetlittlebigideas/sketchbook/styles'

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

- **Badge** - A status indicator component with multiple variants and sizes
- **Button** - A versatile button component with multiple variants and sizes
- **Card** - A container component with header and content sections
- **Input** - A form input component with label, error, and helper text support

## Storybook

View the component documentation and playground at [GitHub Pages](https://devgetlittlebigideas.github.io/sketchbook/) (after deployment).

## Publishing & Releases

### Automated Release Process (Recommended)

The package is automatically published to npm when you create a GitHub release.

**Steps:**
1. Update version in package.json:
   ```bash
   npm version patch  # For bug fixes (0.0.1 → 0.0.2)
   npm version minor  # For new features (0.0.2 → 0.1.0)
   npm version major  # For breaking changes (0.1.0 → 1.0.0)
   ```

2. Push changes with tags:
   ```bash
   git push origin main --tags
   ```

3. Create a GitHub release (this triggers auto-publish):
   ```bash
   # Using GitHub CLI
   gh release create v0.0.3 --title "Version 0.0.3" --notes "Description of changes"

   # Or via GitHub UI: Go to Releases → "Create a new release"
   ```

4. The GitHub Action will automatically build and publish to npm!

### Manual Publishing

If you need to publish manually:

1. First authenticate to npm:
   ```bash
   npm login
   ```

2. Update version, build and publish:
   ```bash
   npm version patch  # Update version
   npm publish --access public
   ```

### NPM Token Setup

For automated publishing, you need to add your npm token as a GitHub secret:

1. Create an npm access token at [npmjs.com](https://www.npmjs.com/settings/tokens)
2. In your GitHub repository, go to Settings → Secrets and variables → Actions
3. Add a new secret named `NPM_TOKEN` with your npm token as the value

## GitHub Pages Setup (Already Configured)

The Storybook is automatically deployed to GitHub Pages when you push to main.
View it at: https://devgetlittlebigideas.github.io/sketchbook/

## License

MIT
