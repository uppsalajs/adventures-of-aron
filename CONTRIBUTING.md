# Contributing to Adventures of Aron

## Project Setup

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm start
```

3. Build the project:

```bash
npm run build
```

4. Run tests:

```bash
npm test
```

## Coding Standards

### General Guidelines

1. All code must be written in TypeScript
2. No abbreviations except:
   - "UI" (uppercase for two-letter abbreviation)
   - "Id" (regular casing)
   - "max"
   - "min"
3. Functions should have single return points
4. Use `result` as the variable name for function return values
5. Prefer fewer lines of code over shorter lines
6. Prefer expressions over statements
7. Use strict equality (`===` and `!==`)
8. Follow TypeScript's type system for type checking

## Component Development Guidelines

### 1. Component Structure

Components should be organized in the `src/components/` directory using feature-based folders. Each component should follow these conventions:

```typescript
@Component({
	tag: "aron-{feature}", // Use controvia- prefix
	styleUrl: "style.css", // Prefer style.css over index.css
	shadow: true, // Always use Shadow DOM
})
export class FeatureName {
	// Props first
	@Prop() requiredProp!: Type
	@Prop() optionalProp = "default"

	// Then state
	@State() internalState?: Type

	// Methods last
	render() {
		return <Host>...</Host>
	}
}
```

### 2. Styling Guidelines

- Use Shadow DOM (`shadow: true`) for style encapsulation
- Create styles in a separate `style.css` file
- Use `:host` selector instead of classes:

```css
:host {
	display: inline-block;
	/* Root element styles */
}
```

### 3. Code Style

- Use double quotes for strings
- Use tabs for indentation
- Omit trailing semicolons
- Use `<Host>` component instead of wrapper elements
- Remove unused interfaces (like empty `ComponentWillLoad`)

### 4. File Organization

```
src/components/feature-name/
├── index.tsx        # Component implementation
├── style.css       # Component styles
└── test.spec.tsx   # Component tests (if applicable)
```

### 5. Props and State

- Mark required props with `!`
- Provide defaults for optional props
- Use `@State()` for internal component state
- Use TypeScript types/interfaces

### 6. Best Practices

- Keep components focused and single-purpose
- Use Shadow DOM for style encapsulation
- Leverage TypeScript's type system
- Follow the component lifecycle appropriately
- Document public APIs and props

### 7. Testing

## Testing Guidelines

1. Test file naming:

   - Test files should match the component name with `.spec.tsx` extension
   - Place tests next to the component file

2. Test organization:

   - One top-level `describe` block per component
   - Group related test cases
   - Use clear, focused test descriptions

3. Test coverage requirements:

   - Minimum 70% coverage for:
     - Statements
     - Branches
     - Functions
     - Lines

4. Test cases should cover:
   - Component rendering
   - Props and state changes
   - Event handlers
   - Edge cases

Example:

```typescript
import { newSpecPage } from "@stencil/core/testing"
import { MyComponent } from "./my-component"

describe("my-component", () => {
	it.each([
		["case1", { input: "value1", expected: "result1" }],
		["case2", { input: "value2", expected: "result2" }],
	])("should handle %s correctly", async (_, { input, expected }) => {
		const page = await newSpecPage({
			components: [MyComponent],
			html: `<my-component value="${input}"></my-component>`,
		})
		expect(page.root.textContent).toBe(expected)
	})
})
```

## Development Workflow

1. Run tests in watch mode during development:

```bash
npm test -- --watch
```

2. Use the coverage command to check test coverage:

```bash
npm run coverage
```

3. Fix linting issues:

```bash
npm run fix
```

### 8. Performance

- Minimize state updates
- Use memoization for expensive computations
- Implement proper cleanup in lifecycle methods

### 9. Session Management

Use the Session singleton for global state:

```typescript
componentWillLoad() {
    Session.session.listen("key", value => this.value = value)
}
```

### File Length Recommendations

1. Component files:

   - Keep files under 200 lines of code
   - Split large components into smaller, focused components
   - Each component should have a single responsibility
   - Component files that exceed 300 lines should be refactored

2. Test files:

   - Keep test cases focused and concise
   - Use `it.each` for similar test cases
   - Test files may be longer than component files
   - Split test files if they exceed 400 lines

3. File organization:
   - Group related components in feature directories
   - Use index files to re-export functionality
   - Keep directory structure shallow (max 3 levels deep)

### Import Order

Imports should be grouped and ordered as follows:

1. Stencil core imports
2. External packages
3. Internal modules/components
4. Relative imports

Example:

```typescript
import { Component, h, Host, Prop } from "@stencil/core"
import { isoly } from "isoly"
import { Session } from "../../Session"
import { MyType } from "./types"
```

## Build and Development

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm start
```

3. Build for production:

```bash
npm run build
```

4. Run linting:

```bash
npm run lint
```

## Pull Request Process

1. Follow the coding guidelines above
2. Update documentation if needed
3. Add tests for new features
4. Ensure all tests pass
5. Update CHANGELOG.md if applicable
