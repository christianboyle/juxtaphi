// framework/issue-runtime.js
// Renders `window.JUXTAPHI_ISSUE` into the static shell in index.html.

(function () {
  /**
   * @param {string} html
   * @returns {string}
   */
  function mustacheEscape(html) {
    return String(html)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  /**
   * @param {string} template
   * @param {Record<string, string | number>} vars
   */
  function fill(template, vars) {
    let out = String(template);
    for (const [k, v] of Object.entries(vars)) out = out.replaceAll(`{${k}}`, String(v));
    return out;
  }

  function getIssue() {
    const issue = window.JUXTAPHI_ISSUE;
    if (!issue) throw new Error("Missing window.JUXTAPHI_ISSUE content pack.");
    return issue;
  }

  function setText(id, text) {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = text == null ? "" : String(text);
  }

  function setHtml(id, html) {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = html == null ? "" : String(html);
  }

  function renderHeader(issue) {
    if (issue?.meta?.title) document.title = issue.meta.title;
    setHtml(
      "issue-header-meta",
      [
        mustacheEscape(issue.meta.headerKicker),
        mustacheEscape(issue.meta.headerTitle),
        mustacheEscape(issue.meta.headerSubtitle),
      ].join("<br>\n")
    );
  }

  function renderIntro(issue) {
    setText("issue-intro-label", issue.intro.label);
    setText("issue-intro-headline", issue.intro.headline);
    setText("issue-intro-body", issue.intro.body);
    setText("issue-scroll-hint", issue.intro.scrollHint);
  }

  function renderComparison(issue) {
    const header = document.getElementById("issue-phil-header");
    const categories = document.getElementById("issue-comparison-categories");
    if (!header || !categories) return;

    header.innerHTML = `
      <div class="phil-col-header james">
        <div class="phil-col-tag james">${mustacheEscape(issue.comparison.left.tag)}</div>
        <div class="phil-col-name">${mustacheEscape(issue.comparison.left.name)}</div>
        <div class="phil-col-dates">${mustacheEscape(issue.comparison.left.dates)}</div>
      </div>
      <div class="phil-col-header stoic">
        <div class="phil-col-tag stoic">${mustacheEscape(issue.comparison.right.tag)}</div>
        <div class="phil-col-name">${mustacheEscape(issue.comparison.right.name)}</div>
        <div class="phil-col-dates">${mustacheEscape(issue.comparison.right.dates)}</div>
      </div>
    `;

    categories.innerHTML = issue.comparison.categories
      .map((cat) => {
        const left = cat.left;
        const right = cat.right;
        return `
          <div class="category">
            <div class="category-label-row">
              <span class="roman">${mustacheEscape(cat.roman)}</span>
              <span class="category-name">${mustacheEscape(cat.name)}</span>
              <div class="category-rule"></div>
            </div>
            <div class="category-cols">
              <div class="stance james">
                <div class="stance-claim">${mustacheEscape(left.claim)}</div>
                <div class="stance-body">${left.bodyHtml}</div>
                <div class="tags">
                  <div class="tag strength"><span class="tag-label">Strength</span><span class="tag-text">${mustacheEscape(left.tags.strength)}</span></div>
                  <div class="tag weakness"><span class="tag-label">Weakness</span><span class="tag-text">${mustacheEscape(left.tags.weakness)}</span></div>
                </div>
              </div>
              <div class="stance stoic">
                <div class="stance-claim">${mustacheEscape(right.claim)}</div>
                <div class="stance-body">${right.bodyHtml}</div>
                <div class="tags">
                  <div class="tag strength"><span class="tag-label">Strength</span><span class="tag-text">${mustacheEscape(right.tags.strength)}</span></div>
                  <div class="tag weakness"><span class="tag-label">Weakness</span><span class="tag-text">${mustacheEscape(right.tags.weakness)}</span></div>
                </div>
              </div>
            </div>
          </div>
        `;
      })
      .join("\n");
  }

  function initQuiz(issue) {
    const qRoot = document.getElementById("issue-quiz-questions");
    if (!qRoot) return;

    setText("issue-quiz-eyebrow", issue.quiz.eyebrow);
    setText("issue-quiz-title", issue.quiz.title);
    setText("issue-quiz-subtitle", issue.quiz.subtitle);
    setHtml("issue-quiz-intro", issue.quiz.intro);
    setText("quiz-submit-btn", issue.quiz.ctas.submit);
    setText("quiz-retry-btn", issue.quiz.ctas.retry);

    const answers = {};
    const total = issue.quiz.questions.length;

    qRoot.innerHTML = issue.quiz.questions
      .map((q, i) => {
        const n = i + 1;
        return `
          <div class="quiz-q" data-q="${n}">
            <div class="quiz-q-label">
              <span class="quiz-q-num">${mustacheEscape(q.roman)}</span>
              <span class="quiz-q-topic">${mustacheEscape(q.topic)}</span>
            </div>
            <div>
              <div class="quiz-q-scenario">${mustacheEscape(q.scenario)}</div>
              <div class="quiz-options">
                <label class="quiz-option" data-value="james" data-badge="${mustacheEscape(issue.quiz.labels.leftName)}">
                  <input type="radio" name="q${n}" value="james">
                  <div class="quiz-option-dot"></div>
                  <span class="quiz-option-text">${mustacheEscape(q.options.james)}</span>
                  <span class="quiz-option-badge">${mustacheEscape(issue.quiz.labels.leftName)}</span>
                </label>
                <label class="quiz-option" data-value="stoic" data-badge="${mustacheEscape(issue.quiz.labels.rightName)}">
                  <input type="radio" name="q${n}" value="stoic">
                  <div class="quiz-option-dot"></div>
                  <span class="quiz-option-text">${mustacheEscape(q.options.stoic)}</span>
                  <span class="quiz-option-badge">${mustacheEscape(issue.quiz.labels.rightName)}</span>
                </label>
              </div>
            </div>
          </div>
        `;
      })
      .join("\n");

    function updateProgress() {
      const count = Object.keys(answers).length;
      const p = document.getElementById("quiz-progress");
      const b = document.getElementById("quiz-submit-btn");
      if (p) p.textContent = `${count} of ${total} answered`;
      if (b) b.disabled = count < total;
    }

    qRoot.addEventListener("click", (e) => {
      const option = e.target?.closest?.(".quiz-option");
      if (!option) return;

      const radio = option.querySelector('input[type="radio"]');
      if (!radio) return;
      const name = radio.name;
      const value = option.dataset.value;
      radio.checked = true;
      answers[name] = value;

      qRoot.querySelectorAll(`input[name="${name}"]`).forEach((r) => {
        const lbl = r.closest(".quiz-option");
        if (lbl) lbl.classList.remove("selected-james", "selected-stoic");
      });
      option.classList.add(`selected-${value}`);
      updateProgress();
    });

    function submitQuiz() {
      let jamesCount = 0;
      let stoicCount = 0;
      for (const v of Object.values(answers)) {
        if (v === "james") jamesCount++;
        else stoicCount++;
      }

      const jamesPct = Math.round((jamesCount / total) * 100);
      const stoicPct = 100 - jamesPct;

      const resultEl = document.getElementById("quiz-result");
      const titleEl = document.getElementById("result-title");
      const bodyEl = document.getElementById("result-body");
      const barJames = document.getElementById("score-bar-james");
      const barStoic = document.getElementById("score-bar-stoic");

      setText("score-label-james", `${issue.quiz.labels.leftName} — ${jamesPct}%`);
      setText("score-label-stoic", `${stoicPct}% — ${issue.quiz.labels.rightName}`);

      if (barJames) barJames.style.width = "0%";
      if (barStoic) barStoic.style.width = "0%";

      if (resultEl) {
        resultEl.classList.add("visible");
        resultEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }

      setTimeout(() => {
        if (barJames) barJames.style.width = `${jamesPct}%`;
        if (barStoic) barStoic.style.width = `${stoicPct}%`;
      }, 100);

      const outcome =
        jamesCount === stoicCount ? "tied" : jamesCount > stoicCount ? "james" : "stoic";
      const cfg = issue.quiz.results[outcome];
      if (titleEl) {
        titleEl.className = `quiz-result-title ${cfg.titleClass}`;
        titleEl.textContent = cfg.title;
      }
      if (bodyEl) {
        const pct = outcome === "james" ? jamesPct : outcome === "stoic" ? stoicPct : 50;
        bodyEl.textContent = fill(cfg.bodyTemplate, { pct });
      }
    }

    function resetQuiz() {
      for (const k of Object.keys(answers)) delete answers[k];
      qRoot.querySelectorAll(".quiz-option").forEach((o) => {
        o.classList.remove("selected-james", "selected-stoic");
        const input = o.querySelector("input");
        if (input) input.checked = false;
      });
      const result = document.getElementById("quiz-result");
      if (result) result.classList.remove("visible");
      updateProgress();
    }

    window.submitQuiz = submitQuiz;
    window.resetQuiz = resetQuiz;
    updateProgress();
  }

  function renderSynthesis(issue) {
    setText("issue-synth-eyebrow", issue.synthesis.eyebrow);
    setText("issue-synth-title", issue.synthesis.title);
    setText("issue-synth-subtitle", issue.synthesis.subtitle);

    const cards = document.getElementById("issue-synth-cards");
    if (!cards) return;
    cards.innerHTML = issue.synthesis.cards
      .map(
        (c) => `
          <div class="overlap-card">
            <span class="overlap-card-num">${mustacheEscape(c.roman)}</span>
            <div class="overlap-card-title">${mustacheEscape(c.title)}</div>
            <div class="overlap-card-body">${c.bodyHtml}</div>
          </div>
        `
      )
      .join("\n");
  }

  function renderFooter(issue) {
    setText("issue-footer-note", issue.meta.footerNote);
  }

  function initSources(issue) {
    const SOURCES = issue.sources || {};
    let _srcOpen = false;

    function openSource(key, refEl) {
      const s = SOURCES[key];
      if (!s) return;
      const mobile = window.innerWidth <= 720;

      ["author", "title", "year", "note"].forEach((f) => {
        const sp = document.getElementById(`sp-${f}`);
        const ss = document.getElementById(`ss-${f}`);
        if (sp) sp.textContent = s[f] || "";
        if (ss) ss.textContent = s[f] || "";
      });

      if (mobile) {
        document.getElementById("src-overlay")?.classList.add("visible");
        setTimeout(() => document.getElementById("src-sheet")?.classList.add("visible"), 10);
      } else {
        const pop = document.getElementById("src-popover");
        if (!pop) return;
        pop.classList.add("visible");

        const rect = refEl.getBoundingClientRect();
        const pw = 280,
          ph = 180;
        let left = rect.right + 12;
        let top = rect.top - 20;
        if (left + pw > window.innerWidth - 16) left = rect.left - pw - 12;
        if (top + ph > window.innerHeight - 16) top = window.innerHeight - ph - 16;
        if (top < 8) top = 8;
        pop.style.left = `${left}px`;
        pop.style.top = `${top}px`;
      }
      _srcOpen = true;
    }

    function closeSource() {
      document.getElementById("src-popover")?.classList.remove("visible");
      document.getElementById("src-overlay")?.classList.remove("visible");
      document.getElementById("src-sheet")?.classList.remove("visible");
      _srcOpen = false;
    }

    document.addEventListener("click", (e) => {
      const ref = e.target?.closest?.(".src-ref");
      if (ref) {
        e.stopPropagation();
        const key = ref.dataset.src;
        if (_srcOpen) {
          closeSource();
          setTimeout(() => openSource(key, ref), 150);
        } else {
          openSource(key, ref);
        }
        return;
      }
      if (_srcOpen && !e.target.closest(".src-popover") && !e.target.closest(".src-sheet")) {
        closeSource();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeSource();
    });

    window.openSource = openSource;
    window.closeSource = closeSource;
  }

  function initTweaksBridge() {
    window.openTweaks = function openTweaks() {
      window.__tweaksOpen && window.__tweaksOpen();
    };
  }

  function init() {
    const issue = getIssue();
    renderHeader(issue);
    renderIntro(issue);
    renderComparison(issue);
    initQuiz(issue);
    renderSynthesis(issue);
    renderFooter(issue);
    initSources(issue);
    initTweaksBridge();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();

