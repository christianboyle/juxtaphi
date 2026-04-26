## juxtaΦ issue content format (agent-friendly)

Each “issue” is a single JavaScript file that sets `window.JUXTAPHI_ISSUE`.
No bundler needed. The site shell (`index.html`) renders everything from this object.

### Why JS (not JSON)
- Works from disk via `<script src="...">` without `fetch()` / local server.
- Lets you include authored `bodyHtml` safely (for `<em>`, `<cite>`, and source refs).

### Required shape

```js
window.JUXTAPHI_ISSUE = {
  meta: {
    id: "001",
    slug: "issue-001",
    title: "juxtaΦ — William James vs. Stoicism",
    headerKicker: "Comparison No. 001",
    headerTitle: "William James vs. Stoicism",
    headerSubtitle: "Seven Domains of Life",
    footerNote: "No. 001 — William James vs. Stoicism"
  },

  intro: {
    label: "The premise",
    headline: "Two philosophies. One life. Which one fits yours?",
    body:
      "William James built a philosophy for a changing, uncertain world — one that trusts your experience and lets you choose beliefs that work. The Stoics built theirs for an indifferent cosmos — one that demands you master yourself above all else. Both have something real to offer. Neither has everything.",
    scrollHint: "↓ Scroll to compare"
  },

  comparison: {
    left: {
      tag: "Pragmatism",
      name: "William James",
      dates: "American philosopher · 1842–1910"
    },
    right: {
      tag: "Stoicism",
      name: "The Stoics",
      dates: "Epictetus · Marcus Aurelius · Seneca"
    },
    categories: [
      {
        roman: "I.",
        name: "Handling Failure",
        left: {
          claim: "\"Failure is data. Change the hypothesis and try again.\"",
          bodyHtml:
            "James's pragmatism says truth is whatever <em>works</em>... <cite>\"…\"</cite><sup class=\"src-ref\" data-src=\"wj_will\">↗</sup>",
          tags: {
            strength: "Short strength sentence.",
            weakness: "Short weakness sentence."
          }
        },
        right: { /* same shape as left */ }
      }
    ]
  },

  quiz: {
    eyebrow: "Quiz",
    title: "Which suits you?",
    subtitle: "Seven scenarios. No wrong answers.",
    intro:
      "Read each scenario and choose the response that feels most natural to you — not the one you think you <em>should</em> pick. Your result reflects a tendency, not a verdict.",
    questions: [
      {
        roman: "I.",
        topic: "Failure",
        scenario: "You’ve just failed something important…",
        options: {
          james: "Option text...",
          stoic: "Option text..."
        }
      }
    ],
    results: {
      tied: {
        titleClass: "tied",
        title: "A genuine hybrid.",
        bodyTemplate:
          "Your responses split evenly…"
      },
      james: {
        titleClass: "james",
        title: "You lean toward William James.",
        bodyTemplate:
          "{pct}% of your instincts align with pragmatism…"
      },
      stoic: {
        titleClass: "stoic",
        title: "You lean toward Stoicism.",
        bodyTemplate:
          "{pct}% of your instincts align with the Stoic tradition…"
      }
    },
    labels: {
      leftName: "William James",
      rightName: "Stoicism"
    },
    ctas: {
      submit: "See your result",
      retry: "Retake quiz"
    }
  },

  synthesis: {
    eyebrow: "Synthesis",
    title: "Where they agree",
    subtitle: "Use both. They are not rivals.",
    cards: [
      {
        roman: "I.",
        title: "Action precedes clarity",
        bodyHtml:
          "Both philosophies reject… <em>begin before you are ready.</em>"
      }
    ]
  },

  sources: {
    wj_will: {
      author: "William James",
      title: "The Will to Believe",
      year: "1897",
      publisher: "Longmans, Green and Co.",
      note: "Defends the right to hold beliefs…"
    }
  }
};
```

### Authoring rules (for consistent exploration paths)
- **Exactly 7 comparison categories** and **7 quiz questions** for now.
- Each category must include:
  - **claim**: short, quotable, in quotes
  - **bodyHtml**: 1 paragraph, can include `<em>`, `<cite>`, and any number of source refs:
    - Source ref markup: `<sup class="src-ref" data-src="SOURCE_KEY">↗</sup>`
  - **tags.strength / tags.weakness**: single-sentence, concrete
- Quiz:
  - Two options only: `james` and `stoic` (keeps scoring stable)
  - Results use `{pct}` placeholder (0–100) for the dominant side

