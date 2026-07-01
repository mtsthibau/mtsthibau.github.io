# Design System

## Colors

### Neutral Palette
Used for text, backgrounds, and borders. Provides contrast and hierarchy.

```
50:   #f9f9f9  (Almost white)
100:  #f3f3f3  (Light background)
200:  #e8e8e8  (Subtle borders)
300:  #d4d4d4
400:  #9d9d9d
500:  #808080  (Medium gray)
600:  #5a5a5a
700:  #4a4a4a  (Strong text)
800:  #2d2d2d  (Dark text)
900:  #000000  (Black)
```

### Primary Accent
Used for interactive elements, links, and emphasis.

```
50:   #f0f9ff  (Lightest)
500:  #0ea5e9  (Primary)
600:  #0284c7  (Hover state)
900:  #0c3d66  (Darkest)
```

## Typography

### Font Stack
```
Sans: InterVariable
  → Apple system fonts
  → Falls back to system default

Mono: JetBrains MonoVariable
  → Used for code blocks
  → Falls back to system monospace
```

### Scale
```
h1: 2.25rem (36px) / sm: 3rem (48px) / lg: 3.75rem (60px)
h2: 1.875rem (30px) / sm: 2.25rem (36px) / lg: 3rem (48px)
h3: 1.5rem (24px) / sm: 1.875rem (30px)
h4: 1.25rem (20px)
body: 1rem (16px)
caption: 0.875rem (14px)
label: 0.75rem (12px)
```

### Weight
```
Regular: 400
Medium: 500
Semibold: 600
Bold: 700
```

## Spacing

Consistent spacing scale using rem units:
```
xs: 0.5rem  (8px)
sm: 1rem    (16px)
md: 1.5rem  (24px)
lg: 2rem    (32px)
xl: 3rem    (48px)
2xl: 4rem   (64px)
3xl: 6rem   (96px)
```

## Breakpoints

```
sm:  640px   (Small phones)
md:  768px   (Tablets)
lg:  1024px  (Small laptops)
xl:  1280px  (Desktops)
2xl: 1536px  (Large screens)
```

## Components

### Button States
```
Default: bg-primary-600, text-white
Hover:   bg-primary-700
Focus:   outline-2 outline-offset-2 outline-primary-500
```

### Link States
```
Default: text-primary-600
Hover:   text-primary-700
Focus:   outline-2 outline-offset-2 outline-primary-500
```

### Cards
```
bg-white
border: 1px solid neutral-200
border-radius: 8px (rounded-lg)
```

## Animations

### Duration
```
Fast:  150ms
Base:  200ms
Slow:  350ms
```

### Easing
```
cubic-bezier(0.4, 0, 0.2, 1)  (Material Design standard)
```

### Keyframes
- `fadeIn`: opacity 0 → 1
- `slideUp`: translateY(20px) → 0 with opacity fade
- `slideDown`: translateY(-20px) → 0 with opacity fade
- `bounce`: slight vertical oscillation

## Responsive Design Strategy

1. **Mobile-first**: Start with mobile styles, then add complexity
2. **Natural breakpoints**: Use breakpoints where content requires layout changes
3. **Accessibility**: Ensure touch targets are at least 44x44px
4. **Performance**: Use Tailwind's JIT compiler for optimized CSS

## Accessibility

- All interactive elements have visible focus states
- Color contrasts meet WCAG AA standard
- Typography is readable at all sizes
- Semantic HTML structure

## Dark Mode (Future)

Framework ready for dark mode via CSS variables and Tailwind's `dark:` prefix.
