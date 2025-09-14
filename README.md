# Sketchbook

A lightweight React + Tailwind component library for little big ideas.

## Installation

This package is published to GitHub Packages as a private package.

### First-time setup (once per machine):

1. Create a GitHub Personal Access Token:
   - Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Generate new token with `read:packages` scope
   - Save the token securely

2. Authenticate to GitHub Packages:
```bash
npm login --scope=@devgetlittlebigideas --registry=https://npm.pkg.github.com
# Username: YOUR_GITHUB_USERNAME
# Password: YOUR_GITHUB_TOKEN
# Email: YOUR_EMAIL
```

3. Install the package:
```bash
npm install @devgetlittlebigideas/sketchbook
```

### For CI/CD environments:

Create a `.npmrc` file in your project:
```
@devgetlittlebigideas:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

Then set `NODE_AUTH_TOKEN` environment variable with your GitHub token.

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

The package is automatically published to GitHub Packages when you create a GitHub release.

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
   gh release create v0.0.2 --title "Version 0.0.2" --notes "Description of changes"

   # Or via GitHub UI: Go to Releases → "Create a new release"
   ```

4. The GitHub Action will automatically build and publish to GitHub Packages!

### Manual Publishing

If you need to publish manually:

1. First authenticate to GitHub Packages:
   ```bash
   npm login --scope=@devgetlittlebigideas --registry=https://npm.pkg.github.com
   ```

2. Update version, build and publish:
   ```bash
   npm version patch  # Update version
   npm publish        # Build happens automatically via prepublishOnly
   ```

## GitHub Pages Setup (Already Configured)

The Storybook is automatically deployed to GitHub Pages when you push to main.
View it at: https://devgetlittlebigideas.github.io/sketchbook/

## License

MIT
