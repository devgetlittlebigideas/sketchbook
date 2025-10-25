# Figma Setup Guide for Sketchbook

This guide will help you set up Figma and the FigmaToCode plugin to create components for the Sketchbook library.

## Table of Contents

1. [Setting Up Figma](#setting-up-figma)
2. [Installing FigmaToCode Plugin](#installing-figmatocode-plugin)
3. [Structuring Components in Figma](#structuring-components-in-figma)
4. [Exporting Code](#exporting-code)
5. [Best Practices](#best-practices)
6. [Troubleshooting](#troubleshooting)

---

## Setting Up Figma

### 1. Create a Figma Account

1. Go to [figma.com](https://www.figma.com)
2. Sign up for a free account
3. The **Starter (Free) plan** is perfect for our needs!

### 2. Create Your Component Library File

1. Click **"New design file"**
2. Name it **"Sketchbook Component Library"**
3. Organize with pages:
   - Buttons & Actions
   - Forms & Inputs
   - Feedback & Overlays
   - Data Display
   - Navigation
   - Layout

**Pro tip:** One file can hold all your components! No need to worry about file limits.

---

## Installing FigmaToCode Plugin

### Installation Steps

1. In Figma, go to **Menu → Plugins → Find more plugins**
2. Search for **"Figma to Code"**
3. Look for: **"Figma to Code (HTML, Tailwind, Flutter, SwiftUI)"**
   - Creator: bernaferrari
   - 100% FREE, no in-app purchases
4. Click **"Install"**

**Plugin ID for verification:** 842128343887142055

### First Time Setup

1. Open your component design
2. **Right-click** on a frame
3. Select **Plugins → Figma to Code**
4. The plugin will open in a panel on the right

---

## Structuring Components in Figma

For the best code generation results, follow these guidelines:

### Use Auto Layout

Auto Layout makes components responsive and generates better code.

**Enable Auto Layout:**
1. Select your frame
2. Press `Shift + A` (or Menu → Add auto layout)
3. Set spacing, padding, and direction

**Benefits:**
- ✅ Generates responsive Tailwind flex/grid classes
- ✅ Better spacing control
- ✅ Easier to maintain

### Naming Conventions

Clear names help with code generation:

**Good names:**
- `Button`
- `Icon`
- `Label`
- `Container`

**Avoid:**
- `Rectangle 1`
- `Frame 234`
- `Group`

**Pro tip:** Name your layers like you'd name variables in code!

### Component Structure

Follow this hierarchy for best results:

```
ComponentFrame (Auto Layout)
├── Container (Auto Layout)
│   ├── Icon
│   ├── Label
│   └── Badge
└── Actions (Auto Layout)
    ├── Button
    └── Button
```

### Use Figma Components

1. Create your design
2. Select it
3. Press `Ctrl/Cmd + Alt + K` to create a component
4. Add **variants** for different states:
   - Default
   - Hover
   - Active
   - Disabled

**Why?** FigmaToCode recognizes Figma components and can generate better code structure.

---

## Exporting Code

### Step-by-Step Export

1. **Select the component** frame you want to export
2. **Open FigmaToCode plugin:**
   - Right-click → Plugins → Figma to Code
   - Or use keyboard: `Ctrl/Cmd + /` then search "Figma to Code"

3. **Choose settings:**
   - **Format:** Select **"Tailwind"**
   - **Platform:** Select **"React"** (if available)

4. **Review the code** in the plugin panel

5. **Copy the code:**
   - Click the copy button
   - Or select all and copy

### What You'll Get

The plugin generates:
- HTML/JSX structure
- Tailwind CSS classes
- Basic component markup

**Example output:**
```jsx
<div className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg">
  <span className="text-white font-medium">Button</span>
</div>
```

---

## Best Practices

### Design Tips

#### 1. Keep It Simple Initially
- Start with basic layouts
- Add complexity after the basic structure works
- Test one variant before creating many

#### 2. Use Consistent Spacing
- Multiples of 4px or 8px
- Aligns with Tailwind's spacing scale:
  - 4px = `p-1` or `gap-1`
  - 8px = `p-2` or `gap-2`
  - 16px = `p-4` or `gap-4`
  - 24px = `p-6` or `gap-6`

#### 3. Design Mobile-First
- Start with mobile size (375px width)
- Then adapt for desktop
- Use responsive Auto Layout settings

#### 4. Use Figma's Design Systems Features
- **Styles** for colors (creates consistent color names)
- **Text styles** for typography
- **Components** for reusable elements

### Color Usage

Use colors that match Tailwind's palette when possible:

**Tailwind Colors:**
- Blue: `#3B82F6` (blue-600)
- Gray: `#6B7280` (gray-600)
- Red: `#EF4444` (red-600)
- Green: `#10B981` (green-600)

**Reference:** [Tailwind Color Palette](https://tailwindcss.com/docs/customizing-colors)

### Typography

Use fonts available in web:
- Inter (default in Tailwind)
- System fonts
- Google Fonts

**Font sizes** that match Tailwind:
- 12px = `text-xs`
- 14px = `text-sm`
- 16px = `text-base`
- 18px = `text-lg`
- 20px = `text-xl`

---

## Component-Specific Tips

### Buttons
- Use Auto Layout with horizontal padding
- Include hover and active states
- Add focus ring in designs
- Consider size variants (sm, md, lg)

### Forms (Inputs, Textareas)
- Design label + input combination
- Show error and success states
- Include placeholder text
- Add helper text areas

### Cards
- Use Auto Layout for flexible content
- Design with sample content
- Include header/body/footer sections
- Consider shadow/border styles

### Modals & Overlays
- Design at actual viewport size
- Include backdrop/overlay layer
- Show close button clearly
- Consider mobile responsive behavior

### Icons
- Use consistent size (16px, 20px, 24px)
- Keep as vectors or SVG
- Consider creating as Figma components

---

## Troubleshooting

### Plugin Not Generating Good Code?

**Check these:**
- ✅ Are you using Auto Layout?
- ✅ Are layers named clearly?
- ✅ Is "Tailwind" selected as output?
- ✅ Is the component properly contained in a frame?

### Missing Elements in Output?

- Make sure all elements are inside the selected frame
- Check layer visibility (hidden layers won't export)
- Try selecting a parent frame instead

### Classes Look Wrong?

This is normal! The generated code is a **starting point**. You'll refine it with:
- Better organization
- Adding variants as props
- Adding TypeScript types
- Improving accessibility

See: [Refinement Checklist](./REFINEMENT_CHECKLIST.md)

### Colors Not Converting Well?

- Use exact Tailwind colors when possible
- Document custom colors for manual conversion
- Plugin may use arbitrary values like `bg-[#123456]`
- Replace with proper Tailwind classes during refinement

---

## Advanced Tips

### Creating Component Variants

1. **Create a component** (`Ctrl/Cmd + Alt + K`)
2. **Click "+" next to Properties** in right panel
3. **Add variant property** (e.g., "Variant" with options: primary, secondary, outline)
4. **Design each variant**
5. When exporting, plugin recognizes these as different states

### Reusing Components

- Create a "Building Blocks" page
- Store reusable icons, buttons, etc.
- Use instances in your component designs
- Keeps consistency across components

### Responsive Design

Design multiple frames for breakpoints:
- Mobile: 375px
- Tablet: 768px
- Desktop: 1440px

Export each separately and use as reference for responsive Tailwind classes.

---

## Resources

### Figma Learning
- [Figma's Auto Layout Guide](https://help.figma.com/hc/en-us/articles/360040451373)
- [Figma Components Guide](https://help.figma.com/hc/en-us/articles/360038662654)
- [Figma Best Practices](https://www.figma.com/best-practices/)

### FigmaToCode
- [GitHub Repository](https://github.com/bernaferrari/FigmaToCode)
- [Plugin Page](https://www.figma.com/community/plugin/842128343887142055)

### Tailwind CSS
- [Tailwind Documentation](https://tailwindcss.com/docs)
- [Tailwind Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)

---

## Need Help?

- **Figma questions?** Check [Figma Help Center](https://help.figma.com/)
- **Plugin issues?** Open an issue on the [FigmaToCode GitHub](https://github.com/bernaferrari/FigmaToCode/issues)
- **Component questions?** Ask in your team chat or create a draft PR!

---

**Next Step:** Once you've exported code, head to the [Refinement Checklist](./REFINEMENT_CHECKLIST.md) to learn how to polish your component code!
