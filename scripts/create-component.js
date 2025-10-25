#!/usr/bin/env node

/**
 * Interactive Component Scaffolding Script
 *
 * This script helps create new components with all the necessary boilerplate:
 * - Component file (.tsx)
 * - Storybook story file (.stories.tsx)
 * - Automatic export in src/index.ts
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import readline from 'readline'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function prompt(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve)
  })
}

function toPascalCase(str) {
  return str
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''))
    .replace(/^(.)/, (_, c) => c.toUpperCase())
}

function generateComponentTemplate(componentName) {
  return `import React from 'react'

export interface ${componentName}Props {
  children?: React.ReactNode
  className?: string
}

export const ${componentName}: React.FC<${componentName}Props> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <div className={\`\${className}\`} {...props}>
      {children}
    </div>
  )
}
`
}

function generateStoryTemplate(componentName) {
  return `import type { Meta, StoryObj } from '@storybook/react'
import { ${componentName} } from './${componentName}'

const meta = {
  title: 'Components/${componentName}',
  component: ${componentName},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ${componentName}>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: '${componentName} content',
  },
}
`
}

async function main() {
  console.log('🎨 Sketchbook Component Generator\n')
  console.log('This will create a new component with:')
  console.log('  ✓ Component file (.tsx)')
  console.log('  ✓ Storybook story file (.stories.tsx)')
  console.log('  ✓ Export in src/index.ts\n')

  const rawName = await prompt('Component name (e.g., Tooltip, Dropdown): ')
  const componentName = toPascalCase(rawName.trim())

  if (!componentName) {
    console.error('❌ Component name is required')
    rl.close()
    process.exit(1)
  }

  const componentsDir = path.join(__dirname, '../src/components')
  const componentFile = path.join(componentsDir, `${componentName}.tsx`)
  const storyFile = path.join(componentsDir, `${componentName}.stories.tsx`)
  const indexFile = path.join(__dirname, '../src/index.ts')

  // Check if component already exists
  if (fs.existsSync(componentFile)) {
    console.error(`❌ Component ${componentName} already exists!`)
    rl.close()
    process.exit(1)
  }

  console.log(`\n📝 Creating ${componentName} component...\n`)

  // Create component file
  fs.writeFileSync(componentFile, generateComponentTemplate(componentName))
  console.log(`✅ Created: src/components/${componentName}.tsx`)

  // Create story file
  fs.writeFileSync(storyFile, generateStoryTemplate(componentName))
  console.log(`✅ Created: src/components/${componentName}.stories.tsx`)

  // Update index.ts
  const indexContent = fs.readFileSync(indexFile, 'utf-8')
  const newExports = `
export { ${componentName} } from './components/${componentName}'
export type { ${componentName}Props } from './components/${componentName}'`

  fs.writeFileSync(indexFile, indexContent.trimEnd() + '\n' + newExports.trim() + '\n')
  console.log(`✅ Updated: src/index.ts with exports`)

  console.log(`\n🎉 Success! Component ${componentName} has been created!\n`)
  console.log('Next steps:')
  console.log(`  1. Edit src/components/${componentName}.tsx to add your component logic`)
  console.log(`  2. Update src/components/${componentName}.stories.tsx with examples`)
  console.log('  3. Run "npm run storybook" to see it in action')
  console.log('  4. When ready, create a PR for review\n')

  rl.close()
}

main().catch((err) => {
  console.error('❌ Error:', err.message)
  rl.close()
  process.exit(1)
})
