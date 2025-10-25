# Contributing to Sketchbook

Welcome! This guide will help you contribute new components to the Sketchbook library, even if you're not a developer. We've set up a workflow that lets designers create components using Figma and AI tools.

## Who This Guide Is For

This guide is designed for:
- **Designers** who work primarily in Figma
- **Non-technical contributors** who want to learn basic React concepts
- **Anyone** who wants to contribute components with help from AI tools

You don't need to be an expert coder - we'll walk you through each step!

## Overview: The Component Creation Workflow

```
1. Design in Figma
   ↓
2. Export code with FigmaToCode plugin
   ↓
3. Refine code with AI assistance (Claude, ChatGPT, etc.)
   ↓
4. Use scaffold script to set up files
   ↓
5. Test in Storybook
   ↓
6. Create Pull Request
   ↓
7. Developer reviews and merges
```

---

## Prerequisites

Before you start, make sure you have:

- [ ] **Figma account** (free plan works great!)
- [ ] **FigmaToCode plugin** installed ([Setup Guide](.github/docs/FIGMA_SETUP.md))
- [ ] **Git** and **Node.js** installed on your computer
- [ ] **VS Code** (or any code editor)
- [ ] This repository cloned to your machine
- [ ] Dependencies installed (`npm install`)

---

## Step-by-Step Guide

### Step 1: Design Your Component in Figma

1. **Create your component design** in Figma
2. Use **Auto Layout** for best results (makes responsive code)
3. Name layers clearly (helps with code generation)
4. Keep structure simple initially (you can add complexity later)

**Tips:**
- Use consistent spacing (multiples of 4px or 8px)
- Design mobile and desktop variants if needed
- Create component variants in Figma for different states (hover, active, disabled)

📖 **See detailed tips:** [Figma Setup Guide](.github/docs/FIGMA_SETUP.md)

---

### Step 2: Export Code from Figma

1. **Select your component** frame in Figma
2. **Open FigmaToCode plugin** (Plugins menu → FigmaToCode)
3. **Select "Tailwind" as output** format
4. **Copy the generated code**

The plugin will generate React code with Tailwind CSS classes.

---

### Step 3: Refine the Code

The generated code is a great starting point but usually needs refinement. You can use AI tools to help!

#### Using AI (Claude, ChatGPT, etc.):

**Prompt example:**
```
I have this React component code generated from Figma. Can you help me:
1. Make it a proper React component with TypeScript
2. Add proper props with types
3. Make the classNames follow our pattern (see Button.tsx example)
4. Add accessibility attributes (ARIA labels, etc.)

Here's the code:
[paste generated code]

And here's an example component from our library:
[paste Button.tsx for reference]
```

The AI will help you:
- Convert to proper React component structure
- Add TypeScript types
- Improve code organization
- Add accessibility features

---

### Step 4: Scaffold Your Component

Once you have refined code, use our script to create the component files:

```bash
npm run new-component
```

This will:
- Ask for your component name
- Create `ComponentName.tsx` file
- Create `ComponentName.stories.tsx` file
- Add exports to `src/index.ts`

**Now replace the template code** in the `.tsx` file with your refined code.

---

### Step 5: Create Storybook Stories

Stories show your component in different states and configurations.

Edit `ComponentName.stories.tsx` to add examples:

```typescript
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Click me',
  },
}

export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Disabled',
  },
}
```

**Test it:**
```bash
npm run storybook
```

Visit `http://localhost:6006` to see your component!

---

### Step 6: Run the Build

Make sure everything compiles:

```bash
npm run build
```

Fix any TypeScript errors that appear. If you get stuck, ask AI or a developer for help!

---

### Step 7: Create a Pull Request

1. **Create a new branch:**
   ```bash
   git checkout -b add-your-component-name
   ```

2. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Add YourComponent with variants and stories"
   ```

3. **Push to GitHub:**
   ```bash
   git push origin add-your-component-name
   ```

4. **Create PR on GitHub:**
   - Go to the repository on GitHub
   - Click "Pull requests" → "New pull request"
   - Select your branch
   - Fill in the PR template
   - Mark as "Draft" if not ready for review
   - Tag a developer for review when ready!

---

## Code Quality Checklist

Before submitting, check that your component has:

- [ ] **TypeScript types** for all props
- [ ] **Accessibility features** (ARIA labels, keyboard navigation)
- [ ] **Responsive design** (works on mobile and desktop)
- [ ] **Storybook stories** showing different variants
- [ ] **Clean Tailwind classes** (organized, no duplicates)
- [ ] **Exports** in `src/index.ts`
- [ ] **Builds without errors** (`npm run build` succeeds)

📋 **Full checklist:** [Code Refinement Checklist](.github/docs/REFINEMENT_CHECKLIST.md)

---

## Component Examples

Look at existing components for patterns:

- **Simple component:** `Badge.tsx` - Basic component with variants
- **Form component:** `Input.tsx` - Component with form integration
- **Complex component:** `Modal.tsx` - Component with sub-components and state
- **Context component:** `Toast.tsx` - Component with provider pattern

---

## Getting Help

### Stuck? Try these:

1. **AI Assistance:**
   - Use Claude, ChatGPT, or GitHub Copilot
   - Share your code and ask specific questions
   - Reference existing components as examples

2. **Documentation:**
   - [Figma Setup Guide](.github/docs/FIGMA_SETUP.md)
   - [Refinement Checklist](.github/docs/REFINEMENT_CHECKLIST.md)
   - [Component Templates](./templates/)

3. **Ask a Developer:**
   - Create a draft PR with questions in comments
   - Open an issue for discussion
   - Ask in team chat

---

## Tips for Success

### DO:
- ✅ Start simple - add complexity gradually
- ✅ Look at existing components for patterns
- ✅ Test in Storybook frequently
- ✅ Use AI tools to help with code refinement
- ✅ Ask questions early and often
- ✅ Create draft PRs to get early feedback

### DON'T:
- ❌ Worry about perfection - we'll help refine it!
- ❌ Hesitate to ask for help
- ❌ Commit directly to main branch
- ❌ Skip the Storybook stories
- ❌ Forget accessibility features

---

## Learning Resources

### React & TypeScript:
- [React Docs](https://react.dev) - Official React documentation
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

### Tailwind CSS:
- [Tailwind Docs](https://tailwindcss.com/docs) - All Tailwind classes
- [Tailwind Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)

### Accessibility:
- [WAI-ARIA Practices](https://www.w3.org/WAI/ARIA/apg/) - Accessibility patterns
- [WebAIM](https://webaim.org/) - Accessibility guidelines

### AI Tools:
- [Claude](https://claude.ai) - AI assistant for code help
- [ChatGPT](https://chat.openai.com) - Another great AI assistant

---

## Thank You!

Your contributions make Sketchbook better for everyone. We appreciate your time and creativity!

If you have ideas for improving this guide, please open an issue or PR.

Happy building! 🎨✨
