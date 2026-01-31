# Styling Contract

This document defines the **authoritative styling system** for this project.
It is binding for humans and agents.

This codebase prioritizes **visual identity, scalability, and compositional clarity**.
Rules below describe **what exists**, **where it lives**, and **how it may evolve**.

If an instruction conflicts with this document, stop and discuss.

---

## Core Principles

- The site’s **visual identity is intentional and expressive**, not generic.
- Tailwind is a **structural and compositional tool**, not the design language.
- Custom CSS is **not a fallback**; it is a first-class system where appropriate.
- Reuse happens through **named primitives**, not reinvention.
- Agents must prefer **existing systems over invention**.

---

## The Four Styling Layers

All styling in this project belongs to exactly one of the following layers.

### 1. Identity & Atmosphere Layer (Highest Stability)

**Purpose**
- Defines brand identity: gradients, lighting, depth, textures, motion.
- Encodes the visual soul of the site.

**Location**
- `app/assets/css/primitives.css`
- Shared identity classes referenced across pages and components.

**Characteristics**
- Handwritten CSS
- Complex gradients, masks, pseudo-elements, keyframes
- High reuse, high impact, high risk to change

**Rules**
- Identity effects must live here.
- New visual systems must be added as named primitives.
- Do not recreate identity effects in templates or sections.
- Renaming or removing primitives requires coordinated refactors.

**Examples**
- Atmospheres, glass surfaces, hero typography, nav visuals.

---

### 2. Structural & Composition Layer (Tailwind)

**Purpose**
- Layout, spacing, responsiveness, typography scale, alignment.
- Boring by design. Predictable. Replaceable.

**Location**
- Vue templates (`app/pages/**`, `app/components/**`, `app/layouts/**`)
- Tailwind utilities only.

**Characteristics**
- Grid and flex layouts
- Spacing and sizing
- Responsive variants
- Minor state utilities

**Rules**
- Tailwind is the default for structure and composition.
- Prefer utilities over custom CSS for layout.
- Do not implement identity visuals using Tailwind.
- Absence of Tailwind for layout must be intentional.

---

### 3. Component Composition Layer (Glue)

**Purpose**
- Composes identity primitives with structural layout.
- Bridges CSS primitives and page structure.

**Location**
- Vue components (`app/components/**`)
- Class composition in templates.

**Characteristics**
- Combines Tailwind utilities with named primitives.
- No component-scoped `<style>` blocks.

**Rules**
- Components must **consume existing primitives**, not recreate them.
- Components must allow external composition via class attributes.
- Do not introduce new global classes from components.
- Styling logic belongs in templates, not hidden CSS.

---

### 4. Section / Scene Layer (Page-Specific)

**Purpose**
- Page-bound storytelling, scenes, and one-off visuals.
- Expressive but intentionally non-reusable.

**Location**
- `app/assets/css/sections/*.css`

**Characteristics**
- Dense visuals
- Tight coupling to markup
- Animations and layout unique to a page

**Rules**
- Section CSS must remain page-specific.
- Do not extract section styles into primitives unless reuse is proven.
- Do not reference section styles outside their page.
- Section CSS must not redefine global identity primitives.

---

## Token and Color Usage

**Current State**
- CSS variables exist in `base.css`.
- Identity colors and effects are not fully tokenized.
- Tailwind default colors and arbitrary values are in use.

**Rules**
- Do not assume full token enforcement.
- Follow existing patterns consistently.
- Introducing new token systems requires explicit agreement.
- Do not silently replace raw values with tokens.

Tokenization is a **future migration**, not a current rule.

---

## Prohibited Patterns

- Reinventing gradients, glows, or atmospheres outside primitives.
- Creating new global classes for one-off use.
- Introducing component-scoped `<style>` blocks.
- Reimplementing existing primitives under new names.
- Flattening identity visuals into generic utilities.

---

## Decision Guide

When styling something:

1. Is this **layout or structure**?
   → Use Tailwind in the template.

2. Is this a **known visual effect**?
   → Use an existing primitive.

3. Is this a **new identity-level effect**?
   → Add it to `primitives.css`.

4. Is this **page-specific storytelling**?
   → Use section CSS under `app/assets/css/sections`.

If none apply, stop and discuss.

---

## Governance Notes

- This document describes **current reality**.
- Future refactors must align with this contract first.
- Agents must prefer reuse over invention.
- Expressiveness is allowed only where explicitly scoped.

This system is designed to protect both **brand identity** and **long-term scalability**.
