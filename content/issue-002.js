// Content pack: issue 002 (Buddhism vs. Stoicism)
// Kept as a simple global so `comparison-002.html` can load it without a bundler.
window.JUXTAPHI_ISSUE = {
  meta: {
    id: "002",
    slug: "issue-002",
    title: "juxtaΦ — Buddhism vs. Stoicism",
    headerKicker: "Comparison No. 002",
    headerTitle: "Buddhism vs. Stoicism",
    headerSubtitle: "Seven Domains of Life",
    footerNote: "No. 002 — Buddhism vs. Stoicism"
  },

  intro: {
    label: "The premise",
    headline: "Two philosophies. One life. Which one fits yours?",
    body:
      "Buddhism teaches that suffering is the texture of existence — and that liberation comes from seeing through illusion, releasing craving, and cultivating compassion. Stoicism teaches that the world is indifferent, but you are not — virtue, reason, and acceptance are how you meet it. Both prescribe a discipline of mind. They diverge on what they're freeing you toward.",
    scrollHint: "↓ Scroll to compare"
  },

  comparison: {
    left: {
      tag: "The Dharma",
      name: "Buddhism",
      dates: "Siddhartha Gautama · c. 5th century BCE"
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
          claim: "\"Suffering is built into experience. Failure is its plain teacher.\"",
          bodyHtml:
            "The First Noble Truth states that <em>dukkha</em> — dissatisfaction, suffering, friction — is intrinsic to a life lived through craving. Failure isn't an aberration; it's a clear instance of how attachment to outcomes generates pain. The path forward is not to refuse failure but to investigate the craving that made it sting.<sup class=\"src-ref\" data-src=\"dhammapada\">↗</sup>",
          tags: {
            strength:
              "Reframes failure as instruction in the nature of mind. Reduces shame by universalising the experience.",
            weakness:
              "Can feel passive — the language of \"letting go\" may obscure when concrete action is needed."
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
          claim: "\"The path is eightfold. Each day, walk it again.\"",
          bodyHtml:
            "Buddhist practice is structured around the Noble Eightfold Path — right view, intention, speech, action, livelihood, effort, mindfulness, concentration. Daily meditation (<em>shamatha</em>, <em>vipassana</em>) trains attention and weakens reactive habits.<sup class=\"src-ref\" data-src=\"dhammapada\">↗</sup>",
          tags: {
            strength:
              "Highly developed contemplative methods. Centuries of refinement on attention and habit.",
            weakness:
              "Time-intensive. Sustained practice realistically requires community, instruction, or retreat."
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
          claim: "\"The end of suffering is liberation. The path is compassion.\"",
          bodyHtml:
            "In Mahayana Buddhism especially, the bodhisattva ideal redirects purpose outward: awakening is not personal escape but a vow to liberate all beings from suffering. Purpose is found in dissolving the false boundary between self and other.<sup class=\"src-ref\" data-src=\"lotus_sutra\">↗</sup>",
          tags: {
            strength:
              "Profoundly other-oriented. Connects personal practice to a universal aim.",
            weakness:
              "The metaphysics of rebirth and karma underwrite this — secularised Buddhism loses some of its weight without them."
          }
        },
        right: {
          claim: "\"Purpose is given by nature: live according to reason, serve the whole.\"",
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
          claim: "\"Everything that arises will pass. Including you.\"",
          bodyHtml:
            "Impermanence (<em>anicca</em>) is one of the three marks of existence in Buddhist teaching. Meditation on death and decay is a long-standing practice in Theravada traditions — not as morbidity, but as a corrective to the illusion of permanence that drives most suffering.<sup class=\"src-ref\" data-src=\"satipatthana\">↗</sup>",
          tags: {
            strength:
              "Direct, fearless engagement with mortality. Loosens grip on possessions and identity.",
            weakness:
              "For some, dwelling on impermanence can deepen depressive states rather than relieve them."
          }
        },
        right: {
          claim: "\"Memento mori — remember you will die. Let it sharpen every hour.\"",
          bodyHtml:
            "Stoics meditated on death daily, not to be morbid, but to dissolve attachment and intensify presence. <cite>\"Think of yourself as dead. You have lived your life. Now take what's left and live it properly.\"</cite> — Marcus Aurelius.<sup class=\"src-ref\" data-src=\"ma_meditations\">↗</sup> Death is not the enemy of life; forgetting it is.",
          tags: {
            strength:
              "Clarifying and urgency-inducing. Reduces fear by making death familiar.",
            weakness:
              "Can feel nihilistic or emotionally cold to those processing grief."
          }
        }
      },
      {
        roman: "V.",
        name: "Ambition & Success",
        left: {
          claim: "\"Ambition is craving in formal dress. Watch it carefully.\"",
          bodyHtml:
            "Buddhism is suspicious of ambition rooted in craving (<em>tanha</em>) — the constant reaching for what is not, which generates suffering. Right effort means cultivating wholesome states, not chasing status. Worldly success is permissible but should not become the axis of your peace.",
          tags: {
            strength:
              "Liberates you from achievement-treadmill thinking. Detaches self-worth from external markers.",
            weakness:
              "Can underweight legitimate worldly aims — career, family-building, social contribution."
          }
        },
        right: {
          claim: "\"Pursue excellence, not outcomes. The rest is not yours to own.\"",
          bodyHtml:
            "Stoicism distinguishes <em>preferred indifferents</em> — things like wealth and status that are acceptable to pursue — from virtue, which is the only true good. Ambition is fine, so long as you are not emotionally attached to its results. <cite>\"Seek not that the things which happen should happen as you wish.\"</cite> — Epictetus<sup class=\"src-ref\" data-src=\"epictetus_enchiridion\">↗</sup>",
          tags: {
            strength:
              "Prevents ego-collapse on failure. Sustainable effort without emotional overinvestment.",
            weakness:
              "Can dampen drive — if outcomes don't matter, why compete hard?"
          }
        }
      },
      {
        roman: "VI.",
        name: "Relationships",
        left: {
          claim: "\"Cultivate loving-kindness. Recognise no separate self.\"",
          bodyHtml:
            "Buddhist practice includes <em>metta</em> (loving-kindness) meditation — the deliberate cultivation of warmth toward self, loved ones, neutral persons, and even adversaries. The teaching of <em>anatta</em> (no-self) further dissolves the rigid sense that \"I\" am separate from \"you\".<sup class=\"src-ref\" data-src=\"metta_sutta\">↗</sup>",
          tags: {
            strength:
              "Trains warmth as a skill, not a mood. Especially powerful for difficult relationships.",
            weakness:
              "The doctrine of no-self can feel alienating to those who value individuated, particular love."
          }
        },
        right: {
          claim: "\"Love people, but hold them with an open hand.\"",
          bodyHtml:
            "Stoics cultivated deep affection — especially Marcus Aurelius, who wrote tenderly of his mentors. But they held relationships without clinging, knowing all bonds are temporary. Epictetus advised reminding yourself at dinner that you love \"mortals\" — not as coldness, but as a practice of presence.<sup class=\"src-ref\" data-src=\"epictetus_enchiridion\">↗</sup>",
          tags: {
            strength:
              "Reduces codependency and possessiveness. Love without ownership.",
            weakness:
              "Can create emotional distance — partners may feel they are being processed, not loved."
          }
        }
      },
      {
        roman: "VII.",
        name: "Emotions",
        left: {
          claim: "\"Emotions arise. Notice them. Let them pass.\"",
          bodyHtml:
            "In Buddhist psychology, emotions are conditioned phenomena — they arise from causes, persist for a while, and dissolve. Mindfulness (<em>sati</em>) trains the capacity to observe an emotion without identifying with it or acting from it. The space between feeling and reaction is where freedom lives.<sup class=\"src-ref\" data-src=\"satipatthana\">↗</sup>",
          tags: {
            strength:
              "Powerful for anxiety, anger, addictive patterns. Validated by modern clinical mindfulness research.",
            weakness:
              "\"Just notice it\" can be misread as suppression by those new to practice — needs guidance."
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
    labels: { leftName: "Buddhism", rightName: "Stoicism" },
    ctas: { submit: "See your result", retry: "Retake quiz" },
    questions: [
      {
        roman: "I.",
        topic: "Failure",
        scenario:
          "You've just failed something important — a job application, a relationship, a goal you worked toward for months. What's your first instinct?",
        options: {
          james:
            "Sit with the disappointment. Investigate the craving underneath it — what attachment was driving the goal in the first place?",
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
            "Anchor it around meditation and mindful attention — start with the breath, let everything else build on that foundation.",
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
            "You orient toward reducing suffering — your own and others'. Meaning is found in compassion and the dissolution of self-centred striving.",
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
            "You contemplate impermanence directly — everything arising will pass. Holding this clearly makes you grasp less and live more lightly.",
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
            "You examine your motive carefully. Is this craving in disguise? You can act, but watch the part of you that desperately wants to win.",
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
            "Hold them in loving-kindness — sincere, warm, non-grasping. Recognise the boundary between you both is less solid than it seems.",
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
            "Notice the feeling without becoming it. Watch it rise and pass like weather. The space between feeling and acting is where you live freely.",
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
          "Your responses split evenly between both schools — which suggests you're already drawing on both without realising it. This is probably the most philosophically honest position. Use Stoicism when you need clarity on duty and reasoned action; lean on Buddhism for mindfulness, equanimity, and compassion practice. The synthesis section below was written for you."
      },
      james: {
        titleClass: "james",
        title: "You lean toward Buddhism.",
        bodyTemplate:
          "{pct}% of your instincts align with the Buddhist path — with mindfulness, releasing craving, and recognising impermanence. You likely have a contemplative temperament and an intuition that the trouble is mostly inside the mind. Read the Dhammapada and Thich Nhat Hanh's The Heart of the Buddha's Teaching. But borrow Stoic clarity on duty and reasoned action — Buddhism's emphasis on letting go can sometimes underweight the world that still needs your effort."
      },
      stoic: {
        titleClass: "stoic",
        title: "You lean toward Stoicism.",
        bodyTemplate:
          "{pct}% of your instincts align with the Stoic tradition — with discipline, inner mastery, and detachment from outcomes. You likely have strong self-control and handle adversity with more steadiness than most. Read Meditations by Marcus Aurelius and The Discourses of Epictetus. But borrow from Buddhism — its mindfulness practice and emphasis on compassion can soften what Stoicism sometimes makes too austere."
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
        title: "Suffering is universal",
        bodyHtml:
          "Both traditions begin by acknowledging that life involves pain, loss, and friction — and that this is not a problem to fix but a condition to understand. Stoicism calls it the indifference of the cosmos; Buddhism calls it <em>dukkha</em>. The starting move is the same: stop being surprised."
      },
      {
        roman: "II.",
        title: "Mind is the leverage point",
        bodyHtml:
          "Stoics distinguish what is up to us (judgment, intention) from what is not. Buddhists train attention so that judgment itself becomes flexible. Both locate freedom in how the mind meets experience, not in changing experience itself."
      },
      {
        roman: "III.",
        title: "Daily practice is the path",
        bodyHtml:
          "Stoics journaled, rehearsed adversity, and examined themselves nightly. Buddhists meditate, recite, observe precepts. Neither tradition treats philosophy as theory; both demand a disciplined practice repeated until it shapes character."
      },
      {
        roman: "IV.",
        title: "A practical combination",
        bodyHtml:
          "Use <strong>Buddhism</strong> for the inward terrain — meditation, equanimity with feeling, releasing the grip of craving. Use <strong>Stoicism</strong> for the outward — moral reasoning, civic duty, what you owe others. They are not rivals; they are stereo channels of a single discipline."
      }
    ]
  },

  sources: {
    dhammapada: {
      author: "Attributed to the Buddha",
      title: "Dhammapada",
      year: "c. 3rd century BCE",
      publisher: "Pali Canon",
      note: "A collection of 423 verses of Buddhist teaching, among the most read texts in the Pali Canon."
    },
    satipatthana: {
      author: "Attributed to the Buddha",
      title: "Satipatthana Sutta — The Foundations of Mindfulness",
      year: "Pali Canon",
      publisher: "Majjhima Nikaya 10",
      note: "The foundational text on mindfulness practice — the four foundations of mindfulness, including contemplation of the body, feelings, mind, and phenomena."
    },
    metta_sutta: {
      author: "Attributed to the Buddha",
      title: "Karaniya Metta Sutta — On Loving-Kindness",
      year: "Pali Canon",
      publisher: "Sutta Nipata 1.8",
      note: "The classic source for metta (loving-kindness) practice — describes the qualities of mind and the universal extension of goodwill."
    },
    lotus_sutra: {
      author: "Anonymous",
      title: "Lotus Sutra (Saddharma Pundarika)",
      year: "c. 1st century BCE – 1st century CE",
      publisher: "Mahayana scripture",
      note: "Central scripture of Mahayana Buddhism. Articulates the bodhisattva path and the universal aspiration to liberate all sentient beings."
    },
    ma_meditations: {
      author: "Marcus Aurelius",
      title: "Meditations",
      year: "c. 170–180 AD",
      publisher: "Written privately; first published 1558",
      note: "Private journal of the Roman Emperor — a central Stoic text on virtue, discipline, and impermanence."
    },
    epictetus_enchiridion: {
      author: "Epictetus",
      title: "Enchiridion",
      year: "c. 125 AD",
      publisher: "Compiled by Arrian",
      note: "A short manual of Stoic ethical advice. Opens with the foundational distinction between what is 'up to us' and what is not."
    },
    epictetus_discourses: {
      author: "Epictetus",
      title: "Discourses",
      year: "c. 108 AD",
      publisher: "Compiled by Arrian of Nicomedia",
      note: "Extended records of Epictetus's lectures. Covers the dichotomy of control, emotion as judgment, and social duty."
    },
    seneca_letters: {
      author: "Seneca",
      title: "Epistulae Morales (Letters from a Stoic)",
      year: "c. 65 AD",
      publisher: "Written to Lucilius Junior",
      note: "124 letters on Stoic practice and philosophy — among the most readable Stoic texts."
    }
  }
};
