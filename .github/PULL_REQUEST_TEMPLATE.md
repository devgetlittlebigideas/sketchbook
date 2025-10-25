# Component Pull Request

## Component Name

<!-- Name of the component you're adding (e.g., Tooltip, Dropdown, Tabs) -->

**Component:** [ComponentName]

---

## Summary

<!-- Brief description of what this component does and why it's useful -->

**Purpose:**


**Key Features:**
-
-
-

---

## Changes Made

<!-- Check all that apply -->

### Files
- [ ] Created `src/components/[ComponentName].tsx`
- [ ] Created `src/components/[ComponentName].stories.tsx`
- [ ] Updated `src/index.ts` with exports
- [ ] Added documentation (if applicable)

### Component Features
- [ ] TypeScript types defined and exported
- [ ] Props interface extends appropriate HTML attributes
- [ ] Accepts custom `className` prop
- [ ] Has default prop values where appropriate
- [ ] Includes variants (if applicable)
- [ ] Responsive design implemented

---

## Code Quality Checklist

### TypeScript
- [ ] Component props interface exported
- [ ] Extends appropriate HTML element attributes
- [ ] All props have clear JSDoc comments
- [ ] No TypeScript errors (`npm run build` passes)

### Styling
- [ ] Uses Tailwind CSS classes
- [ ] Follows variant pattern (baseStyles + variants + sizes)
- [ ] Organized classes (not long inline strings)
- [ ] Responsive classes used where needed
- [ ] Focus states included

### Accessibility
- [ ] Semantic HTML elements used
- [ ] ARIA labels added where needed
- [ ] Keyboard navigation works
- [ ] Focus visible on interactive elements
- [ ] Screen reader friendly
- [ ] Color contrast meets WCAG AA standards

### Storybook
- [ ] Default/Primary story created
- [ ] All variants shown in stories
- [ ] All sizes shown in stories (if applicable)
- [ ] Disabled/Loading states shown (if applicable)
- [ ] Real-world usage examples included
- [ ] Stories render without errors

### Testing
- [ ] Component displays correctly in Storybook
- [ ] All variants work as expected
- [ ] Responsive on mobile/tablet/desktop
- [ ] No console errors or warnings
- [ ] Build succeeds (`npm run build`)

---

## Design Source

<!-- Link to Figma file or design reference -->

**Figma:** [Link to design]

**Generated Code Source:**
- [ ] FigmaToCode plugin
- [ ] AI-assisted (Claude/ChatGPT)
- [ ] Manual coding
- [ ] Other: ___________

---

## Screenshots

<!-- Add screenshots of your component in different states -->

### Default State
<!-- Screenshot or description -->


### Variants
<!-- Show different variants if applicable -->


### Mobile View
<!-- Show responsive behavior -->


---

## Usage Example

<!-- Show how developers will use this component -->

```tsx
import { ComponentName } from '@littlebigideas/sketchbook'

function Example() {
  return (
    <ComponentName variant="primary" size="md">
      Example content
    </ComponentName>
  )
}
```

---

## Breaking Changes

<!-- Does this PR introduce any breaking changes? If yes, describe them -->

- [ ] No breaking changes
- [ ] Yes, breaking changes (describe below):


---

## Additional Notes

<!-- Any additional context, concerns, or questions for reviewers -->



---

## Review Checklist for Maintainers

<!-- For maintainer use only -->

- [ ] Code follows project patterns
- [ ] Component is properly typed
- [ ] Accessibility requirements met
- [ ] Storybook stories are comprehensive
- [ ] Documentation is clear
- [ ] No unnecessary dependencies added
- [ ] Component is exported correctly
- [ ] Build succeeds
- [ ] Ready to merge

---

## Related Issues

<!-- Link any related issues -->

Closes #
Related to #

---

**Thank you for contributing to Sketchbook!** 🎨✨

Your contribution helps make this library better for everyone.
