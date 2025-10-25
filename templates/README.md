# Component Templates

This directory contains example component templates to help you understand the expected structure and patterns for Sketchbook components.

## Templates

### 1. Simple Component (`simple-component.tsx`)
A basic component with minimal props. Great for:
- Labels, Badges, Tags
- Static containers
- Simple display components

**Features:**
- Basic props interface
- Simple className composition
- No complex variants

---

### 2. Component with Variants (`component-with-variants.tsx`)
A component with multiple visual variants and sizes. Great for:
- Buttons
- Alerts, Notifications
- Cards with different styles

**Features:**
- Variant system (primary, secondary, etc.)
- Size variants (sm, md, lg)
- Organized Tailwind classes
- Default prop values

---

### 3. Component with Sub-components (`component-with-subcomponents.tsx`)
A complex component with child components for composition. Great for:
- Modals, Dialogs
- Cards with Header/Body/Footer
- Accordion, Tabs
- Form Groups

**Features:**
- Main parent component
- Multiple sub-components
- Flexible composition
- Context sharing (if needed)

---

## How to Use These Templates

### 1. Choose the Right Template

Pick the template that best matches your component's complexity:

- **Simple?** Start with `simple-component.tsx`
- **Has variants?** Use `component-with-variants.tsx`
- **Has sections/parts?** Use `component-with-subcomponents.tsx`

### 2. Copy the Structure

Don't copy-paste directly! Instead:
- Read through the template
- Understand the pattern
- Apply the pattern to your generated code

### 3. Adapt to Your Needs

Every component is unique. Use templates as guides, not rigid rules:
- Add props specific to your component
- Adjust variants to match your design
- Include accessibility features relevant to your component

---

## Examples from Our Library

See these real components for reference:

| Component | Type | File |
|-----------|------|------|
| **Badge** | Simple | `src/components/Badge.tsx` |
| **Button** | With Variants | `src/components/Button.tsx` |
| **Input** | With Variants | `src/components/Input.tsx` |
| **Modal** | With Sub-components | `src/components/Modal.tsx` |
| **Card** | With Sub-components | `src/components/Card.tsx` |
| **Toast** | With Context | `src/components/Toast.tsx` |

---

## Pattern Checklist

When creating any component, make sure it has:

- [ ] TypeScript interface exported
- [ ] Props extend appropriate HTML attributes
- [ ] Default prop values where sensible
- [ ] `className` prop for customization
- [ ] Spread `...props` for flexibility
- [ ] Organized Tailwind classes
- [ ] Clear, semantic HTML
- [ ] Accessibility features

---

## Questions?

- Check [CONTRIBUTING.md](../CONTRIBUTING.md) for the full workflow
- See [REFINEMENT_CHECKLIST.md](../.github/docs/REFINEMENT_CHECKLIST.md) for detailed guidance
- Look at existing components in `src/components/` for real examples

---

Happy coding! 🚀
