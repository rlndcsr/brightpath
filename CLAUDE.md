# BrightPath — Claude Code Guide

Operational guide for Claude Code in this repository. It complements, and never overrides,
the project constitution.

## 1. Source of Truth and Instruction Hierarchy

Read [.specify/memory/constitution.md](.specify/memory/constitution.md) (v1.0.0) before
project work. It is the authoritative engineering governance; this file only operationalizes it.

Project precedence when instructions conflict:

1. The constitution.
2. Approved product requirements and feature specifications (`specs/`, once created).
3. Approved technical plans, tasks, and design documentation.
4. Application-level instructions, e.g. [frontend/AGENTS.md](frontend/AGENTS.md).
5. This file.
6. Skill recommendations and template defaults — never above the constitution.

Application-level instructions take precedence over this file only within their technical scope
(e.g. `frontend/AGENTS.md` for Next.js usage in `frontend/`). They never override the
constitution, approved product and feature requirements, shared security and privacy
requirements, the mandatory testing safeguards (§4), or developer authorization and Git
restrictions (§8). Report material conflicts to the developer.

This hierarchy is a project governance policy for resolving conflicting project guidance; it
does not modify Claude Code's underlying instruction-priority mechanisms.

- Report material conflicts between instructions or artifacts; do not resolve them silently.
- Obtain developer approval before significant decisions or deviations.
- **Deferred decisions** (constitution, "Deferred decisions" section) — e.g. auth packages,
  payment providers, database schemas, testing frameworks, hosting, CI/CD — MUST NOT be selected
  or finalized without explicit developer approval through a spec, plan, or approved config.

**Existing docs**: the constitution, this file, `frontend/AGENTS.md`. `frontend/README.md` is
unmodified create-next-app boilerplate, not project documentation.
**Planned, not yet present**: `backend/`, `specs/`, `docs/`, `PRODUCT.md`, `DESIGN.md`. Do not
reference or rely on them until they exist.

## 2. Project Overview

BrightPath is a Philippines-first tutoring and learning marketplace connecting learners and
tutors across academic subjects, professional skills, hobbies, and other categories. It is built
by a solo full-stack developer with AI assistance, responsive-web first.

Current status: technical and documentation foundations are being established. A responsive
frontend prototype exists, and its visual direction is approved by the CEO/PM; incremental
improvements are allowed under the constitution. Prototype content — sample tutor data
(`frontend/src/data/`), placeholder routes, simulated interactions — is **not** an approved
business requirement and must not be presented as real user information.

## 3. Stack and Repository

Approved stack: Next.js, React, TypeScript, Tailwind CSS (frontend) · Laravel, PHP, REST API
(backend) · MySQL · Git + GitHub · Claude Code · GitHub Spec Kit · Taste Skill + Impeccable.
Do not introduce or select other technologies. Exact versions live in `frontend/package.json`;
note Next.js is v16 and may differ from your training data (see `frontend/AGENTS.md`).

```text
brightpath/                 single Git repository (GitHub)
├── CLAUDE.md               this guide
├── .specify/               Spec Kit config, scripts (PowerShell), templates, constitution
├── .claude/                Skills (speckit-*, design-taste-frontend, impeccable) and agents
├── skills-lock.json        Taste Skill install lock
├── frontend/               Next.js app (App Router, src/app, src/components, npm)
├── backend/                PLANNED — Laravel app, not initialized
├── specs/                  PLANNED — created by /speckit-specify
└── docs/                   PLANNED — shared documentation
```

Frontend and backend are separate applications in one repository. Inspect the relevant
application's files and instructions before changing it.

## 4. Development Workflow

Decide first whether the work is **significant** (new feature, major enhancement, architectural
change, business-rule change) or **minor**. If unsure, ask. Never use the simplified path to
avoid full SDD for significant work.

### Full Specification-Driven Development

1. `/speckit-specify` — creates `specs/<###-short-name>/spec.md`.
2. Create the feature branch (see §8): no Spec Kit git extension is installed, so specify does
   **not** create one.
3. `/speckit-clarify` — when requirements are materially ambiguous.
4. `/speckit-plan` — must pass the constitution's Constitution Check.
5. `/speckit-tasks`
6. `/speckit-analyze` — **mandatory** before implementation.
7. `/speckit-implement`
8. Verification and final review (§7, Definition of Done).
9. Git operations only with developer authorization (§8).

Invoke these commands individually and sequentially. Do **not** use the bundled automated
workflow (`.specify/workflows/speckit/workflow.yml`): it runs specify → plan → tasks → implement
and omits the mandatory `/speckit-analyze` gate. Any future use of it requires separate developer
approval and verified alignment with the constitution.

**Testing safeguards (constitution, Principle V).** The installed `tasks-template.md` and the
`speckit-tasks` Skill treat tests as optional by default. The constitution overrides that:

- Every formal feature spec MUST explicitly state its applicable testing requirements,
  including testing the constitution mandates.
- Generated `tasks.md` MUST include testing tasks wherever the constitution mandates coverage,
  regardless of optional-testing defaults.
- `/speckit-analyze` MUST run after task generation and before implementation.
- Missing mandatory testing tasks and other unresolved critical constitutional inconsistencies
  MUST be corrected before affected implementation proceeds.

These are process rules you must apply; no tooling enforces them automatically.

Throughout: stay within approved scope; significant deviations need explicit developer approval
and must be recorded in the feature's artifacts.

### Simplified Workflow (minor fixes, UI refinements, docs, maintenance)

1. Inspect relevant files and `git status`.
2. Understand and confirm the scope.
3. Identify affected behavior and the appropriate verification.
4. Make focused changes.
5. Run applicable validation (§7).
6. Inspect the final diff.
7. Report results and limitations (§9).
8. Get authorization before restricted Git operations (§8).

Changes to existing business rules must still be reflected in the affected specs and plans.

## 5. Skills

Use Skills contextually, not on every task. Read a Skill's instructions before relying on it,
weigh its recommendations against the constitution and approved requirements, and never let a
Skill expand scope. Do not install additional Skills without developer approval.

**Side effects need prior approval.** Inspect a Skill's instructions before invoking it. Get
explicit developer approval before any Skill operation that automatically registers hooks,
modifies persistent project or Claude configuration, creates files outside the approved task
scope, or introduces assets or dependencies outside that scope. If a Skill cannot run without
unauthorized side effects, do not invoke it: explain the limitation, then ask for approval or use
an appropriate alternative. Disclosing a side effect afterwards does not replace prior approval.

- **GitHub Spec Kit** (`speckit-*`): primary workflow for significant work. Where its defaults
  conflict with the constitution, the constitution wins.
- **Taste Skill** (`design-taste-frontend`): design inspiration, visual direction, UI execution,
  within BrightPath's approved visual identity. Its default run conflicts with this project —
  do not, without developer approval: switch Next.js to static export (`output: 'export'`),
  copy its kit into `frontend/public/assets`, apply randomly dealt palettes/fonts, or add stock
  imagery without confirmed usage rights. Invoking it registers a Stop "finish gate" hook and
  may create `.taste-skill/`, so it MUST NOT be invoked without prior developer approval.
- **Impeccable** (`impeccable`): UI/UX critique, accessibility review, visual refinement. Follow
  its installed instructions. Project initialization has **not** been done (no `PRODUCT.md`,
  `DESIGN.md`, or `.impeccable/`); do not run `init`, `document`, or other commands that create
  or reconfigure them without developer approval. Narrow refinements of existing code may
  proceed without init.

## 6. Implementation Guidelines

**General**
- Inspect existing implementations before creating alternatives; follow framework and project
  conventions; reuse existing components, utilities, and services.
- Prefer simple, readable solutions (KISS, YAGNI, DRY, separation of concerns, pragmatically).
  No premature abstractions or speculative features.
- Keep changes focused; no unrelated refactoring. Preserve existing developer changes.
- Justify and evaluate every new dependency; significant dependencies, infrastructure, or
  architectural changes need developer approval. Use npm (`package-lock.json`).
- Document non-obvious decisions and known technical debt.

**Frontend** (`frontend/`)
- Follow `frontend/AGENTS.md`: read the relevant guide in `frontend/node_modules/next/dist/docs/`
  before writing Next.js code, and heed deprecation notices.
- Follow existing App Router, TypeScript (strict, `@/*` → `src/*`), and Tailwind CSS
  conventions. Tailwind is wired through `next.config.ts`; there is no Tailwind config file.
- Maintain the approved visual direction; reuse components in `src/components/`. Major
  redesigns or visual identity changes need explicit approval.
- Provide responsive layouts and loading, empty, error, and success states.
- Consider accessibility throughout, targeting WCAG 2.2 Level AA. Never claim verified
  accessibility compliance without evidence.
- No authoritative business logic, authorization, or database access in the frontend.
- No unapproved architectural patterns, state management libraries, or component frameworks.

**Backend** (planned — not yet initialized; do not initialize without approval)
- Follow Laravel conventions in a single pragmatic modular monolith, organized by business
  domain; no unnecessary layers or microservices.
- Backend owns business logic, authentication, authorization, resource ownership, and
  authoritative validation.
- Maintain documented REST API contracts reusable by future clients (including mobile).
- Manage schema changes only through Laravel migrations.

**Security** (constitution, Principle IV — read it for the full rules)
- Never hardcode, commit, expose, or needlessly paste secrets into prompts.
- Treat all external input as untrusted; enforce authorization and validation in the backend.
- Protect sensitive and personal information, including in logs, errors, and API payloads.
- No production credentials or personal data in development or testing.
- Evaluate dependencies, Skills, and installation scripts for security risks.
- On a suspected security incident, stop affected work and report it; investigate and contain
  before that work resumes.

## 7. Testing and Verification

Follow Principle V and the constitution's Definition of Done.

| Check | Directory | Command | Source |
|---|---|---|---|
| Dev server | `frontend/` | `npm run dev` (http://localhost:3000) | package.json script |
| Lint | `frontend/` | `npm run lint` | package.json script (`eslint`) |
| Type check | `frontend/` | `npx tsc --noEmit` | installed TypeScript; no script |
| Production build | `frontend/` | `npm run build` | package.json script |
| Serve build | `frontend/` | `npm run start` | package.json script |
| Automated tests | — | none configured | testing framework is a deferred decision |
| Diff whitespace | repo root | `git diff --check` | Git; tracked files only |
| Backend checks | — | none yet | backend not initialized |

`npm run dev` may re-add its block to `frontend/AGENTS.md` (see that file); report such a
change rather than reverting it. Do not add scripts, test frameworks, or config without approval.

Verification rules:
- New or modified business logic needs meaningful automated tests; scale testing to risk.
  Prefer test-first for critical or security-sensitive logic and reproducible regressions; add
  regression tests to bug fixes where practical.
- Cover relevant success, failure, boundary, and unauthorized scenarios, using isolated test
  environments and test data.
- User-facing changes need browser, responsive, and accessibility verification.
- Never weaken, remove, or bypass existing tests to make code pass.
- Applicable tests, lint, type check, and build must pass before work is complete. A passing
  build does not prove functional correctness.
- Inspect final changes against the approved scope; disclose skipped checks and limitations.
- Features must satisfy their applicable Definition of Done.

## 8. Git and Developer Permissions

Follow Principle VII. Before implementation, inspect `git status` and relevant diffs, and
preserve uncommitted developer work. Keep `main` stable and reviewed. Use Conventional Commits.
Inspect the final diff before recommending a commit.

**Allowed without asking:** read-only inspection (`status`, `diff`, `log`, `show`, branch
listing), and `git fetch` (non-integrating).

**Feature branches:** Spec Kit does not create branches here, and its optional git extension
must not be installed. Immediately after `/speckit-specify`, create and switch to a new branch
named after the generated spec directory (e.g. `git switch -c 001-short-name`). Before doing so:

- Confirm it is authorized under Principle VII: the developer explicitly invoked and approved
  the full SDD workflow for this feature.
- Verify the current branch is the intended development baseline (normally `main`).
- Inspect `git status` and existing changes. Uncommitted changes carry over to the new branch,
  so unrelated changes must not be pulled into the feature; preserve all developer work.
- Verify the name is unused (`git branch -a --list "*001-short-name"`).
- If any check fails or anything is unclear, stop and ask the developer.

The new spec files normally carry over to the new branch, but they are not isolated in its
history until committed. Minor work may use a simplified branching workflow (e.g. on `main`)
only with developer approval.

**Requires explicit developer authorization:** switching to existing branches, staging,
committing, pushing, pulling, merging, rebasing, stashing, resetting, cleaning, and any other
state-changing Git operation. A request to implement something is **not** permission to commit
or push.

**Prohibited by default** (exceptional explicit authorization only): force pushing, destructive
history rewriting, destructive file operations.

Keep secrets, dependencies, caches, build output, and temp files out of version control.
Note: there is no root `.gitignore`; only `frontend/.gitignore` exists.

## 9. Communication and Reporting

- Understand the task before implementing; ask focused questions when material requirements
  are ambiguous.
- Distinguish verified facts from assumptions; surface blockers, risks, and conflicts.
- Explain significant decisions and trade-offs; avoid scope expansion.
- Never fabricate test results, browser verification, or successful execution.

For significant implementation tasks, end with a structured report:

1. Summary of changes.
2. Requirements / acceptance criteria addressed.
3. Files created, modified, or removed.
4. Key implementation decisions.
5. Validation commands run and their results.
6. Security, regression, responsive, and accessibility considerations, where applicable.
7. Limitations, skipped checks, and required manual verification.
8. Final `git status`.
9. Recommended next action.

Statuses: **Passed** (executed successfully) · **Failed** (executed, unsuccessful) · **Not run**
(state why) · **Not applicable** (explain if needed) · **Manual verification required** (state
what remains). Scale report length to the task; minor changes need brief reports.
