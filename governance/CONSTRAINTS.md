# Project Constraints

This document defines non-negotiable constraints.
Any change that violates these constraints must stop and be discussed explicitly.

---

## Technology Stack

The project is built with the following fixed technologies:

- Nuxt 4
- Vue 3 using the Composition API
- TypeScript with strict mode enabled
- Tailwind CSS

These choices are deliberate.
Alternative frameworks, languages, or styling approaches are out of scope unless explicitly revisited.

---

## Architecture Constraints

- This is a frontend-first, marketing-oriented system
- Content is file-based and structured
- The system favors static generation or hybrid rendering
- Server-side logic is minimal and justified only when it provides clear SEO or UX value

The architecture must remain understandable, inspectable, and maintainable.

---

## SEO Is Mandatory

- SEO must never regress
- Pages must remain indexable
- Metadata, structure, and semantics are first-class concerns
- Performance optimizations must not harm crawlability or content clarity

SEO considerations override convenience-based shortcuts.

---

## Accessibility Is Mandatory

- Accessibility is not optional
- Semantic HTML is required
- Accessibility regressions are unacceptable
- The project must align with modern accessibility best practices

If accessibility conflicts with design or implementation choices, accessibility wins.

---

## Performance Constraints

- Performance is a core requirement, not a later optimization
- Excessive JavaScript, unnecessary runtime logic, or heavy client-side computation is unacceptable
- Visual effects must be balanced against loading time and responsiveness

Performance must support, not undermine, the user experience.

---

## Code Quality

The following are mandatory:

- TypeScript strict mode must pass
- Linting must pass
- Code must be production-grade
- No placeholder logic in final output

Broken builds or ignored warnings are not acceptable.

---

## Dependency Discipline

- Dependencies must be justified
- No unnecessary libraries
- No overlapping functionality
- Updates must not introduce instability or bloat
- Reka UI is the approved library for accessible interactive primitives (menus, dialogs, tooltips, popovers, etc.)

Convenience alone is not a sufficient reason to add a dependency.

---

## Explicit Non-Constraints

The following are intentionally *not* defined here:

- Design style or visual language (see DESIGN.md)
- Product purpose or positioning (see PRODUCT.md)
- Workflow rules for agents (see AGENTS.md)
- Past issues and edge cases (see GOTCHAS.md)
