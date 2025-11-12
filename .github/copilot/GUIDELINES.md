# Copilot Guidelines

This file provides additional context to GitHub Copilot about project conventions and best practices.

## Component Structure

- Use Shadow DOM (shadow: true)
- Avoid CSS classes, use :host selector
- Follow single-responsibility principle
- Keep files under 200 lines
- Use TypeScript strictly

## Code Organization

1. Imports (ordered):

   - Stencil core
   - External packages
   - Internal modules
   - Relative imports

2. Component structure:
   ```typescript
   @Component({
   	tag: "controvia-feature",
   	styleUrl: "style.css",
   	shadow: true,
   })
   export class Feature {
   	// Props first
   	@Prop() prop!: Type
   	// Then state
   	@State() state?: Type
   	// Methods last
   	render() {
   		return <Host>...</Host>
   	}
   }
   ```

## Naming Conventions

1. No abbreviations except:

   - "UI" (uppercase)
   - "Id" (regular casing)
   - "max"/"min"

2. Use descriptive names
3. Single letter variables only within 3 lines scope

## File Structure

```
components/feature/
├── index.tsx       # Component implementation
├── style.css      # Component styles
└── test.spec.tsx  # Component tests
```

## Testing Requirements

- 70% minimum coverage
- Use `it.each` for similar test cases
- One top-level describe per component
- Tests next to implementation
