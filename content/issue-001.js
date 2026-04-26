// Content pack: issue 001 (William James vs. Stoicism)
// Kept as a simple global so `index.html` can load it without a bundler.
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
            "James's pragmatism says truth is whatever <em>works</em>. A failure simply reveals that a belief or method hasn't worked yet — not that you are broken. You are free to revise, experiment, and believe differently. <cite>\"Act as if what you do makes a difference. It does.\"</cite><sup class=\"src-ref\" data-src=\"wj_will\">↗</sup>",
          tags: {
            strength:
              "Highly adaptive. Encourages resilience through experimentation rather than shame.",
            weakness:
              "Can become rationalisation — endlessly reframing failure without honest accountability."
          }
        },
        right: {
          claim: "\"Failure is only failure if you let it affect your character.\"",
          bodyHtml:
            "Stoics distinguish outcomes (external, not fully yours) from intention and effort (internal, fully yours). Failure at a goal is irrelevant to virtue. What matters is whether you acted with reason and integrity. <cite>\"You have power over your mind — not outside events.\"</cite> — Marcus Aurelius<sup class=\"src-ref\" data-src=\"ma_meditations\">↗</sup>",
          tags: {
            strength:
              "Provides emotional stability. Separates self-worth from outcomes decisively.",
            weakness:
              "May reduce urgency to improve — too easy to call any outcome \"external.\""
          }
        }
      },
      {
        roman: "II.",
        name: "Daily Habits",
        left: {
          claim: "\"Habit is the flywheel of society — and of the self.\"",
          bodyHtml:
            "James wrote extensively on habit, arguing that character is built through repeated action, not intention. The nervous system is plastic — every day of practice literally changes who you are. But habits must feel useful, or they won't stick.<sup class=\"src-ref\" data-src=\"wj_psychology\">↗</sup>",
          tags: {
            strength:
              "Grounded in psychology. Practical guidance on building and breaking patterns.",
            weakness:
              "Doesn't tell you <em>which</em> habits to build — leaves values open-ended."
          }
        },
        right: {
          claim: "\"Each morning, rehearse reason. Each evening, examine yourself.\"",
          bodyHtml:
            "Stoics had a complete daily practice: morning premeditation of adversity (<em>premeditatio malorum</em>), journaling, evening reflection. Marcus Aurelius filled his private journal with this. Discipline is the form that virtue takes in time.<sup class=\"src-ref\" data-src=\"ma_meditations\">↗</sup>",
          tags: {
            strength:
              "Concrete, structured rituals. Combines self-reflection with philosophical grounding.",
            weakness:
              "Can feel rigid or austere — difficult to sustain for pleasure-oriented personalities."
          }
        }
      },
      {
        roman: "III.",
        name: "Meaning & Purpose",
        left: {
          claim: "\"Meaning is not found. It is made — and it must work for you.\"",
          bodyHtml:
            "For James, meaning is personal and verified by its fruits. If a belief gives your life energy, direction, and satisfaction — it is, in a meaningful sense, true. He defends the right to believe even without complete evidence, so long as the belief bears good results.<sup class=\"src-ref\" data-src=\"wj_will\">↗</sup>",
          tags: {
            strength:
              "Empowering and flexible. Respects individual difference in what counts as meaningful.",
            weakness:
              "Risks solipsism — meaning that \"works\" for you may not survive contact with others' reality."
          }
        },
        right: {
          claim:
            "\"Purpose is given by nature: live according to reason, serve the whole.\"",
          bodyHtml:
            "Stoics believed in a rational order (<em>logos</em>) running through the universe. Human purpose is to align with that order — to reason well, act virtuously, and contribute to the common good. Meaning isn't constructed; it is recognised.<sup class=\"src-ref\" data-src=\"epictetus_discourses\">↗</sup>",
          tags: {
            strength:
              "Stable and universal. Anchors meaning outside mood or circumstance.",
            weakness:
              "The cosmic framework (logos) requires a leap of faith modern people may not share."
          }
        }
      },
      {
        roman: "IV.",
        name: "Death & Impermanence",
        left: {
          claim:
            "\"We have the right to believe in continuity — if that belief helps us live.\"",
          bodyHtml:
            "James was open to religious and spiritual interpretations of death, including survival of consciousness. He didn't demand certainty either way. What mattered was whether a belief about death allowed a person to live with courage, hope, and full engagement.<sup class=\"src-ref\" data-src=\"wj_varieties\">↗</sup>",
          tags: {
            strength:
              "Compassionate and open. Doesn't demand atheism or forced acceptance.",
            weakness:
              "May avoid difficult truths — comforting belief and honest belief are not always the same."
          }
        },
        right: {
          claim: "\"Memento mori — remember you will die. Let it sharpen every hour.\"",
          bodyHtml:
            "Stoics meditated on death daily, not to be morbid, but to dissolve attachment and intensify presence. <cite>\"Think of yourself as dead. You have lived your life. Now take what's left and live it properly.\"</cite> — Marcus Aurelius.<sup class=\"src-ref\" data-src=\"ma_meditations\">↗</sup> Death is not the enemy of life; forgetting it is.",
          tags: {
            strength:
              "Clarifying and urgency-inducing. Reduces fear by making death familiar.",
            weakness: "Can feel nihilistic or emotionally cold to those processing grief."
          }
        }
      },
      {
        roman: "V.",
        name: "Ambition & Success",
        left: {
          claim:
            "\"Believe in your success, and the belief itself becomes causal.\"",
          bodyHtml:
            "James understood that expectation and confidence change what is possible. His \"Will to Believe\" argues that in situations where the evidence is genuinely undecided, choosing to believe you can succeed often tips the scales. Ambition is not vanity — it is a hypothesis about the world.<sup class=\"src-ref\" data-src=\"wj_pragmatism\">↗</sup>",
          tags: {
            strength:
              "Energising. Legitimises ambition and self-belief as philosophically sound.",
            weakness:
              "Positive thinking taken too far collapses into magical thinking and ignores structural barriers."
          }
        },
        right: {
          claim: "\"Pursue excellence, not outcomes. The rest is not yours to own.\"",
          bodyHtml:
            "Stoicism distinguishes <em>preferred indifferents</em> — things like wealth and status that are acceptable to pursue — from virtue, which is the only true good. Ambition is fine, so long as you are not emotionally attached to its results. <cite>\"Seek not that the things which happen should happen as you wish.\"</cite> — Epictetus<sup class=\"src-ref\" data-src=\"epictetus_enchiridion\">↗</sup>",
          tags: {
            strength:
              "Prevents ego-collapse on failure. Sustainable effort without emotional overinvestment.",
            weakness: "Can dampen drive — if outcomes don't matter, why compete hard?"
          }
        }
      },
      {
        roman: "VI.",
        name: "Relationships",
        left: {
          claim: "\"Each person is a unique stream of experience. Meet them there.\"",
          bodyHtml:
            "James's radical empiricism insists that relations between things are as real as the things themselves. Connection, sympathy, and shared experience are not secondary — they are the substance of life. People are not obstacles to your inner life; they <em>are</em> part of it.<sup class=\"src-ref\" data-src=\"wj_pragmatism\">↗</sup>",
          tags: {
            strength: "Warm and relational. Philosophy of connection rather than self-perfection.",
            weakness: "Less guidance on conflict, difficult relationships, or when to walk away."
          }
        },
        right: {
          claim: "\"Love people, but hold them with an open hand.\"",
          bodyHtml:
            "Stoics cultivated deep affection — especially Marcus Aurelius, who wrote tenderly of his mentors. But they held relationships without clinging, knowing all bonds are temporary. Epictetus advised reminding yourself at dinner that you love \"mortals\" — not as coldness, but as a practice of presence.<sup class=\"src-ref\" data-src=\"epictetus_enchiridion\">↗</sup>",
          tags: {
            strength: "Reduces codependency and possessiveness. Love without ownership.",
            weakness:
              "Can create emotional distance — partners may feel they are being processed, not loved."
          }
        }
      },
      {
        roman: "VII.",
        name: "Emotions",
        left: {
          claim: "\"Emotion is not the enemy of reason — it is essential information.\"",
          bodyHtml:
            "James proposed that emotion follows action, not the other way around (<em>the James-Lange theory<sup class=\"src-ref\" data-src=\"james_lange\">↗</sup></em>). We don't cry because we're sad — we're sad because we cry. This means we can influence our emotional states by changing our behaviour. Emotions are real, valid, and useful data.",
          tags: {
            strength:
              "Validates emotional life. Offers practical leverage — act differently to feel differently.",
            weakness:
              "May not account for deep-seated emotions that behaviour alone cannot resolve."
          }
        },
        right: {
          claim: "\"Emotion is a judgment. Change the judgment, change the feeling.\"",
          bodyHtml:
            "Stoics believe that <em>passions</em> (destructive emotions like rage, anxiety, envy) arise from false judgments about what is good or bad. Challenge the judgment — \"this traffic is not actually evil\" — and the passion loses its grip. Equanimity (<em>apatheia</em>) is not numbness; it is clear perception.<sup class=\"src-ref\" data-src=\"epictetus_discourses\">↗</sup>",
          tags: {
            strength:
              "Highly effective for anxiety and anger. Cognitive therapy shares this exact model.",
            weakness:
              "Can lead to suppression when intellectualising replaces actually feeling."
          }
        }
      }
    ]
  },

  quiz: {
    eyebrow: "Quiz",
    title: "Which suits you?",
    subtitle: "Seven scenarios. No wrong answers.",
    intro:
      "Read each scenario and choose the response that feels most natural to you — not the one you think you <em>should</em> pick. Your result reflects a tendency, not a verdict.",
    labels: { leftName: "William James", rightName: "Stoicism" },
    ctas: { submit: "See your result", retry: "Retake quiz" },
    questions: [
      {
        roman: "I.",
        topic: "Failure",
        scenario:
          "You've just failed something important — a job application, a relationship, a goal you worked toward for months. What's your first instinct?",
        options: {
          james:
            "Figure out what went wrong, adjust the approach, and try again differently. The failure taught you something — use it.",
          stoic:
            "Remind yourself that the outcome was never fully in your control. Your effort and character were — examine those, not the result."
        }
      },
      {
        roman: "II.",
        topic: "Daily Habits",
        scenario:
          "You want to build a better morning routine. Which approach appeals more?",
        options: {
          james:
            "Experiment until you find what actually makes you feel energised — try things, keep what works, drop what doesn't.",
          stoic:
            "Set a fixed, intentional routine and stick to it — journal, reflect, set your intentions. Discipline is the point."
        }
      },
      {
        roman: "III.",
        topic: "Meaning",
        scenario:
          "A friend asks you: \"How do you decide what to do with your life?\" What do you say?",
        options: {
          james:
            "You try things and see what gives you energy and meaning. What works for you is what's true for you — your purpose is yours to define.",
          stoic:
            "You look for what you're genuinely suited to do well and where you can serve others. Purpose is less about preference and more about duty and virtue."
        }
      },
      {
        roman: "IV.",
        topic: "Death",
        scenario:
          "You find yourself thinking about your own mortality. What do you do with that feeling?",
        options: {
          james:
            "You allow yourself to believe in something beyond — or at least stay open to it. Life is richer if death isn't necessarily the end.",
          stoic:
            "You sit with the fact of it. Death is natural and certain — thinking about it clearly is what makes you use your time well."
        }
      },
      {
        roman: "V.",
        topic: "Ambition",
        scenario:
          "You're about to go for something big — a promotion, a business, a creative project. What's your relationship with the outcome?",
        options: {
          james:
            "You believe in it fully — your confidence is part of what makes it possible. Believing you'll succeed isn't naive, it's strategic.",
          stoic:
            "You focus entirely on the quality of your effort and let the outcome land where it will. Attachment to results is a trap."
        }
      },
      {
        roman: "VI.",
        topic: "Relationships",
        scenario:
          "Someone you love is going through something hard. What does your instinct tell you to do?",
        options: {
          james:
            "Be present with them, feel what they're feeling, and find what actually helps — connection and shared experience matter most.",
          stoic:
            "Be steady and clear — offer honest perspective, show up reliably, and resist getting swept up in the emotion so you can actually be useful."
        }
      },
      {
        roman: "VII.",
        topic: "Emotions",
        scenario:
          "You're feeling anxious about something coming up. What's your instinctive response?",
        options: {
          james:
            "Take action — even a small one. Moving your body, making a plan, doing something concrete shifts the feeling. Behaviour changes emotion.",
          stoic:
            "Examine the thought underneath the feeling. What are you telling yourself? Is that actually true? Challenge the judgment, not the symptom."
        }
      }
    ],
    results: {
      tied: {
        titleClass: "tied",
        title: "A genuine hybrid.",
        bodyTemplate:
          "Your responses split evenly between both schools — which suggests you're already drawing on both without realising it. This is probably the most philosophically honest position. Use Stoicism when you need steadiness and emotional clarity; lean on James when you're making decisions and building a life. The synthesis section below was written for you."
      },
      james: {
        titleClass: "james",
        title: "You lean toward William James.",
        bodyTemplate:
          "{pct}% of your instincts align with pragmatism — with trusting experience, choosing beliefs that work, and seeing the self as flexible and open-ended. James would say your approach is already philosophically sound: the test of any idea is what it does in your life. Read The Will to Believe and Pragmatism. But borrow the Stoics' emotional toolkit — their clarity on what you can and can't control is something James left underspecified."
      },
      stoic: {
        titleClass: "stoic",
        title: "You lean toward Stoicism.",
        bodyTemplate:
          "{pct}% of your instincts align with the Stoic tradition — with discipline, inner mastery, and detachment from outcomes. You likely have strong self-control and handle adversity with more steadiness than most. Read Meditations by Marcus Aurelius and The Discourses of Epictetus. But borrow James's warmth — his philosophy of connection, belief, and experiment can loosen what Stoicism sometimes makes too rigid."
      }
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
          "Both philosophies reject waiting for the perfect conditions to act. James says act on partial evidence — belief follows courage. The Stoics say act according to reason, now, regardless of outcome. Together: <em>begin before you are ready.</em>"
      },
      {
        roman: "II.",
        title: "The body of practice matters",
        bodyHtml:
          "James insisted habits shape character; Stoics built entire daily rituals of self-examination. Both demand that philosophy be <em>lived</em>, not merely read. Treat your morning routine as a philosophical act — either school would approve."
      },
      {
        roman: "III.",
        title: "Self is not fixed",
        bodyHtml:
          "Pragmatism sees the self as a stream, always in flow. Stoicism sees character as something actively cultivated. Neither believes you are stuck. You are, in both traditions, always in the process of becoming — which is deeply hopeful."
      },
      {
        roman: "IV.",
        title: "A practical combination",
        bodyHtml:
          "Use <strong>Stoicism</strong> for your internal life — managing fear, anger, and attachment. Use <strong>James</strong> for your external life — choosing beliefs that energise, relationships that nourish, and experiments worth running. Neither school need be abandoned for the other."
      }
    ]
  },

  sources: {
    wj_pragmatism: {
      author: "William James",
      title: "Pragmatism: A New Name for Some Old Ways of Thinking",
      year: "1907",
      publisher: "Longmans, Green and Co.",
      note: "James's central text on the pragmatic method — truth is what 'works' in experience."
    },
    wj_will: {
      author: "William James",
      title: "The Will to Believe",
      year: "1897",
      publisher: "Longmans, Green and Co.",
      note: "Defends the right to hold beliefs that exceed the available evidence, when the stakes are live and forced."
    },
    wj_psychology: {
      author: "William James",
      title: "The Principles of Psychology",
      year: "1890",
      publisher: "Henry Holt and Co.",
      note: "Foundational work in psychology. Chapter IV, 'Habit', argues the nervous system is plastic and character is built through repeated action."
    },
    wj_varieties: {
      author: "William James",
      title: "The Varieties of Religious Experience",
      year: "1902",
      publisher: "Longmans, Green and Co.",
      note: "James's investigation into religious and mystical experience — he remains agnostic but sympathetic to belief in continuity beyond death."
    },
    ma_meditations: {
      author: "Marcus Aurelius",
      title: "Meditations",
      year: "c. 170–180 AD",
      publisher: "Written privately; first published 1558",
      note: "Private journal of the Roman Emperor, never intended for publication. A central Stoic text on virtue, discipline, and impermanence."
    },
    epictetus_enchiridion: {
      author: "Epictetus",
      title: "Enchiridion",
      year: "c. 125 AD",
      publisher: "Compiled by Arrian from Epictetus's lectures",
      note: "A short manual of Stoic ethical advice. Opens with the foundational Stoic distinction between what is 'up to us' and what is not."
    },
    epictetus_discourses: {
      author: "Epictetus",
      title: "Discourses",
      year: "c. 108 AD",
      publisher: "Compiled by Arrian of Nicomedia",
      note: "Extended records of Epictetus's philosophical teaching. Covers the dichotomy of control, emotion as judgment, and social duty."
    },
    seneca_letters: {
      author: "Seneca",
      title: "Epistulae Morales ad Lucilium (Letters from a Stoic)",
      year: "c. 65 AD",
      publisher: "Written to Lucilius Junior",
      note: "124 letters on Stoic practice and philosophy. Remarkably personal and direct — among the most readable Stoic texts."
    },
    james_lange: {
      author: "William James",
      title: "What is an Emotion?",
      year: "1884",
      publisher: "Mind, Vol. 9",
      note: "James's original paper proposing that physiological changes precede and cause the subjective experience of emotion — later known as the James-Lange theory."
    }
  }
};

