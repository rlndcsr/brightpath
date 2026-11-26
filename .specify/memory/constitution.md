# BrightPath Constitution

BrightPath is a Philippines-first tutoring and learning marketplace connecting learners and tutors
across academic subjects, professional skills, hobbies, and other learning categories. It is
built by a solo full-stack developer using AI-assisted programming. "The developer" below means
the project developer, who holds approval authority under this constitution.

## Core Principles

### I. Specification-Driven Development

- GitHub Spec Kit MUST be the primary methodology for new features, major enhancements, and
  architectural changes, which MUST follow the specify → plan → tasks → implement → verify
  workflow as applicable.
- Ambiguous or materially incomplete business requirements MUST be clarified with the developer,
  not assumed.
- Specifications, plans, tasks, and acceptance criteria MUST remain mutually consistent;
  changes to existing business rules MUST be reflected in the affected specs and plans.
- Implementation MUST stay within the approved feature scope. Significant deviations MUST
  receive explicit developer approval and be documented in the feature's artifacts.
- Completed features MUST satisfy their acceptance criteria.
- Minor bug fixes, UI refinements, documentation updates, and routine maintenance MAY use a
  simplified workflow when the scope is understood and appropriate validation is performed.

**Rationale**: A solo developer working with AI agents needs written, agreed intent to keep
generated work correct, in scope, and reviewable.

### II. Architectural Boundaries

- The architecture is a pragmatic modular monolith. Next.js (React) with TypeScript and
  Tailwind CSS MUST serve as the primary web frontend. Laravel (PHP) MUST serve as the backend
  framework and REST API provider. MySQL MUST serve as the primary relational database.
- Frontend and backend MUST remain separate applications within a single monorepo.
- Laravel MUST be the authoritative source of business logic, authentication, authorization,
  resource ownership, and server-side validation. Frontend validation and UI visibility MUST NOT
  substitute for backend enforcement.
- The frontend MUST NOT access the database directly; frontend–backend communication MUST
  follow documented API contracts.
- APIs MUST be designed for reuse by future clients, including mobile applications.
- Database schema changes MUST be managed through Laravel migrations.
- The backend MUST remain one Laravel application organized by clear business-domain boundaries,
  following established Laravel conventions.
- Microservices, complex modular frameworks, unnecessary architectural layers, and significant
  changes to core technologies MUST NOT be introduced without justification and explicit
  developer approval.

**Rationale**: A single authoritative backend keeps security and business rules enforceable in
one place and lets future clients reuse the same API.

### III. Simplicity and Maintainability

- Prefer the simplest solution that correctly satisfies approved functional and non-functional
  requirements, applying KISS, YAGNI, DRY, and separation of concerns pragmatically.
- Prefer established framework conventions over custom patterns; reuse existing components,
  utilities, services, and dependencies before adding alternatives.
- Avoid premature abstraction, speculative functionality, and unnecessary optimization.
- Code MUST be readable, consistently organized, and maintainable.
- Every new dependency MUST have a justified purpose and be evaluated for security and
  maintainability. Small, necessary dependencies MAY be added when justified, evaluated, and
  disclosed for review; significant dependencies, infrastructure, or architectural complexity
  MUST receive explicit developer approval.
- Refactoring MUST be focused, justified, and behavior-preserving. Unrelated changes MUST NOT be
  bundled into feature or bug-fix work.
- Non-obvious technical decisions and known technical debt MUST be documented.
- Simplicity MUST NOT compromise essential security, correctness, or approved requirements.

**Rationale**: A solo-maintained codebase stays sustainable only if every addition earns its
complexity.

### IV. Security and Data Privacy

- Security and privacy MUST be considered throughout the lifecycle, applying secure-by-default
  and least-privilege principles.
- Authentication MUST use established, framework-supported mechanisms rather than unnecessary
  custom security implementations; any necessary custom security code remains subject to every
  protection in this principle. Backend enforcement per Principle II applies to all
  authentication, authorization, ownership, and authoritative validation.
- All external input MUST be treated as untrusted and validated appropriately.
- Credentials and secrets MUST NOT be hardcoded, committed, exposed to clients, or unnecessarily
  included in AI prompts. Production personal data and credentials MUST NOT be unnecessarily
  used in development or testing.
- Sensitive information MUST be protected in transit and at rest as appropriate, and MUST NOT be
  unnecessarily exposed through logs, error responses, or API payloads.
- Development MUST support compliance with applicable Philippine data privacy requirements,
  including the Data Privacy Act of 2012 (RA 10173). Technical implementation alone does not
  establish legal compliance.
- Personal information MUST be collected and processed only as necessary for legitimate,
  defined purposes. Appropriate access restrictions, retention, deletion, and data subject
  rights MUST be considered.
- Dependencies, third-party packages, AI Skills, and installation scripts MUST be evaluated for
  relevant security risks. Relevant security findings affecting them MUST be evaluated and
  addressed throughout the development lifecycle, not only at initial adoption.
- Payment integrations MUST use secure mechanisms; amounts, transaction status, and provider
  callbacks MUST be verified server-side, and processing MUST prevent unauthorized manipulation
  and duplicate processing.
- Security-sensitive functionality MUST have positive and negative tests.
- Suspected security incidents MUST be investigated and contained before affected development
  resumes. Unresolved critical vulnerabilities MUST block affected releases.
- Policies on minors, consent, and other unresolved business or legal matters MUST be clarified
  before affected functionality is implemented.
- Essential security protections MUST NOT be deferred because the project is an MVP.

**Rationale**: BrightPath handles personal data, potentially of minors, and payments; trust and
legal compliance are preconditions of the product, not later enhancements.

### V. Testing and Quality Assurance

- Every feature MUST be verified against its approved acceptance criteria, with testing
  proportional to functionality, complexity, and risk.
- New or modified business logic MUST have meaningful automated test coverage.
- Tests MUST cover relevant successful, unsuccessful, boundary, and unauthorized scenarios.
- Test-first development SHOULD be prioritized for critical business logic, security-sensitive
  functionality, and reproducible regression fixes. Bug fixes SHOULD include regression tests
  whenever practical. Strict TDD is not required for every minor change, and no arbitrary
  coverage percentage is imposed.
- Installed Spec Kit tooling (the tasks template and the `speckit-tasks` Skill) treats tests as
  optional by default. The following written safeguards apply; they are process requirements,
  not automated enforcement:
  - Formal feature specifications MUST explicitly state applicable testing requirements,
    including testing mandated by this constitution.
  - Generated task lists MUST include testing tasks wherever this constitution mandates
    coverage, regardless of optional-testing defaults in installed Skills or templates.
  - For significant work following the full SDD workflow, `/speckit-analyze` MUST be run after
    task generation and before implementation.
  - Missing mandatory testing tasks and other unresolved critical constitutional
    inconsistencies MUST be corrected before affected implementation proceeds.
- Tests MUST use isolated environments and appropriate test data. Existing tests MUST NOT be
  weakened, removed, or bypassed to make an implementation pass.
- Applicable linting, type checking, automated tests, and production builds MUST pass before
  affected work is considered complete. A successful build MUST NOT be treated as proof of
  functional correctness.
- User-facing features MUST receive appropriate functional, responsive, and accessibility
  verification.
- Test results, failures, skipped checks, and limitations MUST be reported accurately.
- Final code changes MUST be inspected before an implementation is accepted.

**Rationale**: Risk-based testing protects the rules that matter (money, access, personal data)
without slowing routine work with ceremony.

### VI. UI/UX Consistency

- User-facing interfaces MUST follow BrightPath's approved design direction and its documented
  design system as it becomes established. The approved frontend prototype is the initial design
  foundation, not a permanent restriction.
- Prefer reusable UI components and consistent design tokens. Exact tokens and visual details
  belong in design documentation, which MUST stay consistent with the implemented system.
- Interfaces MUST support responsive layouts across relevant mobile, tablet, and desktop sizes
  and MUST provide appropriate loading, empty, error, and success states.
- Accessibility MUST be considered throughout design and implementation, targeting WCAG 2.2
  Level AA. Targeting this standard is not a claim of verified conformance.
- User-facing functionality MUST receive appropriate browser and responsive verification.
- UI/UX decisions MUST prioritize usability, clarity, consistency, and performance.
- Taste Skill SHOULD be used where appropriate for design inspiration and execution; Impeccable
  SHOULD be used where appropriate for UI/UX critique, accessibility review, and refinement.
  AI design recommendations MUST NOT override approved product requirements or design decisions.
- Significant visual identity changes and major redesigns MUST receive explicit approval; minor
  visual improvements MAY be made incrementally while preserving consistency.
- Production visual assets MUST have appropriate usage rights. Sample content MUST NOT be
  presented as real user information.

**Rationale**: A marketplace earns trust through a clear, accessible, consistent experience that
can still improve over time.

### VII. Git and Change Management

- Git and GitHub MUST serve as the project's version control and repository management systems,
  and the project MUST maintain a single Git repository at the project root.
- `main` MUST remain a stable, reviewed, and verified baseline.
- Significant features MUST use dedicated feature branches aligned with the configured Spec Kit
  workflow. Minor fixes, documentation, and maintenance MAY use a simplified branching workflow
  with developer approval. Permanent development, staging, or release branches MUST NOT be
  introduced without a justified requirement.
- Commits MUST be focused, meaningful, and follow Conventional Commits.
- Repository status MUST be inspected before implementation; existing uncommitted developer work
  MUST be preserved; final diffs MUST be reviewed before committing.
- AI agents MAY perform read-only Git inspection and non-integrating remote fetches, and MAY
  create and switch to new feature branches when an explicitly invoked and approved Spec Kit
  feature workflow requires it, provided existing work is preserved. All other state-changing
  Git operations (switching branches, staging, committing, pushing, pulling, merging, rebasing,
  stashing) MUST receive explicit developer authorization.
- Force pushing, destructive history rewriting, and destructive file operations are prohibited
  unless exceptionally and explicitly authorized.
- Secrets, generated dependencies, caches, sensitive data, and temporary files MUST be excluded
  from version control. Source code, lockfiles, migrations, specifications, tests, and shared
  documentation MUST be version-controlled.
- Significant implementation decisions and deviations MUST remain traceable.

**Rationale**: AI agents act quickly; explicit Git boundaries keep the developer in control of
what becomes history.

## Technology and Repository Constraints

**Approved stack**: Next.js, React, TypeScript, Tailwind CSS (frontend); Laravel, PHP, REST API
(backend); MySQL (database); Git and GitHub (version control); Claude Code (AI-assisted
development); GitHub Spec Kit (methodology); Taste Skill and Impeccable (frontend design).

**Repository layout**: `frontend/` (Next.js app), `backend/` (planned Laravel app), `.specify/`
(Spec Kit configuration), `.claude/` (Claude Code Skills and configuration), `specs/` (feature
specifications), `docs/` (planned shared documentation), `CLAUDE.md` (planned AI instructions).
Agents MUST inspect the actual repository rather than assume planned paths exist.

**Deferred decisions**: The following are not decided by this constitution and MUST NOT be
selected or finalized by AI agents without explicit developer approval through a feature
specification, technical plan, or approved project configuration: authentication packages,
payment providers, monetization models, tutor verification policies, age restriction and
parental consent policies, database schemas, additional state management libraries, testing
frameworks, hosting providers, CI/CD infrastructure, exact design tokens, detailed API response
conventions, and additional architectural frameworks.

## Development Workflow and Definition of Done

Significant work follows Principle I's Spec Kit workflow on a feature branch (Principle VII).
Features MUST satisfy their applicable Definition of Done before being considered complete.
Work is **Done** only when all applicable items hold:

1. Approved requirements and acceptance criteria are satisfied.
2. Appropriate automated and manual verification has been performed.
3. Relevant tests, linting, type checking, and production builds pass.
4. Security, authorization, and privacy requirements are met and tested (Principle IV).
5. Responsive and accessibility checks are completed for user-facing changes.
6. Regression protection exists for fixed defects where practical.
7. The final code and complete diff have been reviewed.
8. Affected specifications, plans, and documentation are updated.
9. Remaining limitations, skipped checks, and unverified behavior are disclosed accurately.

Work MUST NOT be reported as fully complete while any mandatory acceptance criterion or critical
verification remains unresolved.

## Governance

**Authority**: This constitution supersedes conflicting practices, template defaults, and AI
recommendations. Spec Kit artifacts, `CLAUDE.md`, and project documentation MUST remain
consistent with it; on conflict, the constitution prevails until amended.

**Amendments**: Amendments MUST be proposed in writing, explicitly approved by the developer,
and versioned. Each amendment MUST be accompanied by a Sync Impact Report for review; that report
is temporary review material and MUST NOT be retained in this file once the amendment is
committed. Affected Spec Kit templates and project documentation MUST be synchronized as part of
the same change.

**Versioning**: The constitution uses semantic versioning. MAJOR: backward-incompatible removal
or redefinition of a principle or governance rule. MINOR: a new principle or section, or
materially expanded guidance. PATCH: clarifications and wording fixes without semantic change.
The ratification date is fixed at original adoption; the last-amended date is the approval date
of the latest amendment.

**Exceptions**: A deviation from a MUST requires documented justification, defined scope, and
explicit developer approval, recorded in the affected feature artifacts (e.g., the plan's
Complexity Tracking table). Mandatory security, privacy, and legal obligations, including those
of RA 10173, MUST NOT be waived through ordinary exceptions.

**Compliance gates**:

- *Specify/Clarify*: requirements are unambiguous or clarified; no deferred decision is
  assumed; privacy and security implications are identified; applicable testing requirements
  are stated (Principle V).
- *Plan*: the Constitution Check confirms the approved stack and boundaries (II), justified
  dependencies and complexity (III), backend enforcement and privacy handling (IV), a risk-based
  test approach (V), and UI/UX obligations (VI). Violations are justified or the plan is revised.
- *Tasks*: required test, security, accessibility, and documentation tasks are present.
- *Analyze*: for significant full-workflow work, `/speckit-analyze` runs after task generation
  and before implementation; critical findings are resolved before implementation proceeds.
- *Implement*: work stays in scope and follows Principle VII's Git boundaries.
- *Review*: the Definition of Done is verified. A constitution violation that is unresolved and
  not covered by an approved exception is critical and MUST be resolved before affected work is
  accepted; documented, approved exceptions are governed by the Exceptions rule above.

**Version**: 1.0.0 | **Ratified**: 2026-11-26 | **Last Amended**: 2026-11-26
