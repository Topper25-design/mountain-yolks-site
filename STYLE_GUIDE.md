# Mountain Yolks Website Style Guide

## Brand Colors

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| **Black** | `#000000` | Primary background |
| **White** | `#ffffff` | Primary text color |
| **Brand Orange** | `#ff8c00` | Primary accent, CTAs |
| **Brand Yellow** | `#fbbf24` | Secondary accent, highlights |
| **Dark Gray** | `#1a1a1a` | Subtle backgrounds |

## Typography

### Font Family
- **Primary**: Geist Sans (Next.js default)
- **Fallback**: System fonts (-apple-system, BlinkMacSystemFont, 'Segoe UI', etc.)

### Font Sizes
- **Hero**: `clamp(2.5rem, 5vw, 3.5rem)`
- **H1**: `clamp(2rem, 4vw, 3rem)`
- **H2**: `clamp(1.75rem, 3vw, 2.5rem)`
- **H3**: `clamp(1.5rem, 2.5vw, 2rem)`
- **Body**: `1rem` with `line-height: 1.7`

## Button Component

### Usage
```tsx
import Button from '@/components/Button';

// Primary button
<Button href="/products" variant="primary" size="lg">
  View Products
</Button>

// Outline button
<Button href="/contact" variant="outline" size="md">
  Contact Us
</Button>

// Button with custom classes
<Button 
  onClick={handleClick} 
  variant="secondary" 
  size="sm"
  className="custom-class"
>
  Click Me
</Button>
```

### Variants
- **primary**: Orange background, hover to yellow
- **secondary**: Yellow background, hover to orange
- **outline**: Yellow border, fills on hover

### Sizes
- **sm**: `py-2 px-4` - Small buttons
- **md**: `py-3 px-6` - Default size
- **lg**: `py-4 px-8` - Large CTAs

## Spacing

### Utility Classes
- **section-padding**: `py-20` - Consistent section spacing
- **container-padding**: `px-4 md:px-6 lg:px-8` - Container padding
- **card-padding**: `p-6 md:p-8` - Card internal padding

### Usage
```tsx
<section className="section-padding bg-brand-dark">
  <div className="container mx-auto container-padding">
    <div className="card card-padding">
      Content here
    </div>
  </div>
</section>
```

## Card Component

### Standard Card Class
```tsx
<div className="card">
  {/* Card uses:
    - Gradient background (brand-dark to black)
    - 2px border with orange accent on hover
    - Rounded corners (xl)
    - Smooth transitions
  */}
</div>
```

## CSS Utility Classes

### Buttons
- `.btn` - Base button styles
- `.btn-primary` - Primary button variant
- `.btn-secondary` - Secondary button variant
- `.btn-outline` - Outline button variant
- `.btn-sm`, `.btn-md`, `.btn-lg` - Size modifiers

### Layout
- `.section-padding` - Section vertical padding
- `.container-padding` - Container horizontal padding
- `.card-padding` - Card internal padding
- `.card` - Standard card styling

## Animation Guidelines

### Framer Motion
All animations use Framer Motion for smooth, performant transitions:

```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```

### Hover Effects
- Buttons: `hover:scale-105` with smooth transitions
- Cards: Border color change + subtle lift
- Links: Color change to brand orange/yellow

## Accessibility

### Focus States
All interactive elements have visible focus indicators:
```css
*:focus-visible {
  outline: 2px solid var(--accent-orange);
  outline-offset: 2px;
}
```

### Form Inputs
All form inputs include:
- Proper labels
- Focus states
- High contrast
- Clear error states

## Responsive Design

### Breakpoints (Tailwind defaults)
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px

### Grid Patterns
- **2 columns**: `grid-cols-1 md:grid-cols-2`
- **3 columns**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- **4 columns**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`

## Best Practices

1. **Always use the Button component** for consistency
2. **Use section-padding** for all page sections
3. **Keep card styles consistent** with the `.card` class
4. **Maintain color contrast** for accessibility
5. **Use motion animations** for engaging UX
6. **Follow the spacing system** (4, 6, 8, 12, 16, 20...)
7. **Test responsive layouts** at all breakpoints

