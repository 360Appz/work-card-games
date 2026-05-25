/* ============================================================
   WRNS WORK EDITION — ALL CONTENT (word-for-word from source)
   ============================================================ */

const WRNS_META = {
  title: "We're Not Really Strangers: Colleagues / Work Edition",
  subtitle: "A workplace-friendly question deck for team bonding, onboarding, retreats, offsites, lunch chats, 1:1s, and colleagues who want deeper connection without becoming awkwardly personal.",
  rule: "Answer honestly, but never reveal anything that could harm your safety, privacy, job, or someone else's reputation."
};

const DECKS = [
  {
    id: "level1",
    title: "Level 1",
    subtitle: "Surface, But Still Meaningful",
    desc: "Safe warm-up questions.",
    emoji: "🌱",
    color: "#FFE500",
    realm: "The Surface Lands",
    questions: [
      "What was your first impression of me at work?",
      "What do you think I'm naturally good at?",
      "What part of work gives you the most energy?",
      "What part of work drains you the fastest?",
      "What kind of meeting do you secretly enjoy?",
      "What kind of meeting should be illegal?",
      "What is one work habit you are proud of?",
      "What is one work habit you are trying to improve?",
      "What makes someone easy to work with?",
      "What makes someone difficult to work with?",
      "What is your preferred way to receive feedback?",
      "What is your preferred way to give feedback?",
      "What do you wish people understood about your role?",
      "What task looks easy from the outside but is actually hard?",
      "What task looks hard from the outside but is actually easy for you?",
      "What is one thing you are faster at than most people realise?",
      "What is one thing you are slower at because you care about quality?",
      "What is your 'green flag' in a colleague?",
      "What is your 'red flag' in a colleague?",
      "What work skill do you think is underrated?"
    ]
  },
  {
    id: "level2",
    title: "Level 2",
    subtitle: "Team Dynamics",
    desc: "For colleagues who already know each other a bit.",
    emoji: "🤝",
    color: "#FF8A00",
    realm: "The Team Territories",
    questions: [
      "What do you think our team does well?",
      "What do you think our team avoids talking about?",
      "When do you feel most useful at work?",
      "When do you feel most invisible at work?",
      "What makes you trust a teammate?",
      "What makes you lose trust in a teammate?",
      "What is something our team overcomplicates?",
      "What is something our team underestimates?",
      "What is one small thing that would make working together easier?",
      "What do you wish people would stop assuming about you?",
      "What do you wish people would ask you more often?",
      "What kind of support do you appreciate most?",
      "What kind of support accidentally annoys you?",
      "What is one team norm we should keep?",
      "What is one team norm we should challenge?",
      "What is a sign that you are stressed but not saying it?",
      "What is a sign that you are motivated?",
      "What makes you feel respected at work?",
      "What makes you feel dismissed at work?",
      "What does 'being professional' mean to you?"
    ]
  },
  {
    id: "level3",
    title: "Level 3",
    subtitle: "Honest But Not Dangerous",
    desc: "Deeper questions, still workplace-safe.",
    emoji: "🔍",
    color: "#0047FF",
    realm: "The Honest Heights",
    questions: [
      "What is something you are learning about yourself through work?",
      "What is a mistake that taught you something important?",
      "What kind of criticism is hardest for you to hear?",
      "What kind of praise means the most to you?",
      "When have you felt underestimated?",
      "When have you underestimated someone else?",
      "What is something you used to care about at work but care less about now?",
      "What is something you care more about now than before?",
      "What workplace belief did you inherit from your parents, school, or previous bosses?",
      "What is your relationship with ambition?",
      "What is your relationship with authority?",
      "What is your relationship with failure?",
      "What is your relationship with money and career progression?",
      "What is one insecurity that shows up in your work style?",
      "What is one strength that sometimes becomes a weakness?",
      "What kind of colleague brings out the best in you?",
      "What kind of colleague brings out the worst in you?",
      "What do you do when you feel overwhelmed?",
      "What do you do when you feel unappreciated?",
      "What do you wish younger-you knew about work?"
    ]
  },
  {
    id: "level4",
    title: "Level 4",
    subtitle: "Feedback Cards",
    desc: "Use carefully. Best for pairs or trusted teams.",
    emoji: "💬",
    color: "#00D97E",
    realm: "The Feedback Forge",
    questions: [
      "One thing I appreciate about working with you is…",
      "One thing I think you do better than you realise is…",
      "One thing I have learned from watching you work is…",
      "One way you make the team better is…",
      "One situation where I think you handled yourself well was…",
      "One strength of yours that could become even stronger is…",
      "One thing I think you should give yourself more credit for is…",
      "One thing I think you could communicate more clearly is…",
      "One thing I would love to collaborate with you on is…",
      "One word I would use to describe your work style is…",
      "One thing I think people may misunderstand about you is…",
      "One way I think you have grown is…",
      "One thing I think you should protect more is your…",
      "One thing I think you should stop apologising for is…",
      "One thing I trust you with is…",
      "One thing I think you may not realise about your impact is…",
      "One thing I would ask more of from you is…",
      "One thing I would ask less of from you is…",
      "One thing I admire about your professionalism is…",
      "One thing I hope you continue doing is…"
    ]
  },
  {
    id: "level5",
    title: "Level 5",
    subtitle: "Workplace Hot Seat But Safe",
    desc: "For team retreats, bonding nights, or close colleagues.",
    emoji: "🔥",
    color: "#FF3CA0",
    realm: "The Hot Seat Highlands",
    questions: [
      "What is your toxic work trait?",
      "What is your underrated work superpower?",
      "What is your corporate survival tactic?",
      "What email phrase do you secretly dislike?",
      "What is your 'I need coffee before I reply' moment?",
      "What is your villain origin story at work?",
      "What task makes you question your life choices?",
      "What task makes you feel oddly powerful?",
      "What is your meeting personality?",
      "What is your Slack / Teams personality?",
      "Are you more 'reply immediately' or 'mentally reply and forget'?",
      "What workplace phrase should be banned?",
      "What is one work trend you find overrated?",
      "What is one work trend you actually like?",
      "What makes you silently judge a colleague?",
      "What makes you instantly respect a colleague?",
      "What is your biggest 'professional mask'?",
      "What would your laptop say about you if it could talk?",
      "What is your 'I'm fine' work behaviour when you are not fine?",
      "What is your most Malaysian/Singaporean/Asian office habit?"
    ]
  },
  {
    id: "manager",
    title: "Manager Edition",
    subtitle: "Manager / Leader Edition",
    desc: "Good for managers, team leads, founders, and supervisors.",
    emoji: "👑",
    color: "#7000FF",
    realm: "The Manager's Keep",
    questions: [
      "What kind of leader do you work best under?",
      "What kind of leadership style shuts you down?",
      "What do you need from a manager when things are unclear?",
      "What do you need from a manager when you make a mistake?",
      "What makes feedback feel safe?",
      "What makes feedback feel threatening?",
      "What is one thing managers often misunderstand about employees?",
      "What is one thing employees often misunderstand about managers?",
      "What is one decision you wish leaders explained better?",
      "What is one thing that builds psychological safety?",
      "What is one thing that destroys psychological safety?",
      "What makes you feel trusted by a manager?",
      "What makes you feel micromanaged?",
      "What does a good 1:1 look like to you?",
      "What should never happen in a 1:1?",
      "What is one thing leaders should praise more?",
      "What is one thing leaders should stop rewarding?",
      "What is your ideal balance between autonomy and guidance?",
      "What kind of transparency do you value?",
      "What kind of transparency can become harmful?"
    ]
  },
  {
    id: "onboarding",
    title: "Onboarding Edition",
    subtitle: "New Joiner / Onboarding Edition",
    desc: "Good for helping new colleagues feel included.",
    emoji: "🚀",
    color: "#FF4500",
    realm: "The Onboarding Outpost",
    questions: [
      "What helped you feel welcomed when you first joined?",
      "What made you feel lost when you first joined?",
      "What is something new joiners should know but nobody says?",
      "What is one unwritten rule here?",
      "What is one acronym or internal term that confused you?",
      "Who helped you understand the culture?",
      "What is one mistake new joiners should not worry too much about?",
      "What is one mistake new joiners should avoid?",
      "What is one thing you wish you had asked earlier?",
      "What is one thing this company does differently from other places?",
      "What is one cultural habit that surprised you?",
      "What is one thing that made you feel included?",
      "What is one thing that made you feel like an outsider?",
      "What do you wish teams did better for new people?",
      "What is one good question new joiners should ask?",
      "What is one bad assumption new joiners might make?",
      "What is the best way to learn quickly here?",
      "What is the best way to build trust here?",
      "What is one thing not written in the handbook?",
      "What advice would you give someone on their first month?"
    ]
  },
  {
    id: "conflict",
    title: "Conflict Edition",
    subtitle: "Conflict & Miscommunication Edition",
    desc: "Use only with mature teams.",
    emoji: "⚡",
    color: "#FF1744",
    realm: "The Conflict Canyon",
    questions: [
      "What is your default reaction during conflict?",
      "Do you prefer to address tension immediately or after cooling down?",
      "What kind of disagreement feels productive?",
      "What kind of disagreement feels personal?",
      "What makes you defensive?",
      "What helps you become less defensive?",
      "What is something people misread about your tone?",
      "What is something you misread in other people?",
      "What is one phrase that helps calm conflict?",
      "What is one phrase that makes conflict worse?",
      "What do you need when you feel misunderstood?",
      "What do you need when someone disagrees with your idea?",
      "What is a healthy apology at work?",
      "What is a fake apology at work?",
      "What is the difference between direct and rude?",
      "What is the difference between nice and unclear?",
      "What kind of conflict is worth having?",
      "What kind of conflict is not worth having?",
      "What do you wish people did before escalating issues?",
      "What is one conflict lesson you learned the hard way?"
    ]
  },
  {
    id: "career",
    title: "Career Edition",
    subtitle: "Career, Ambition & Growth Edition",
    desc: "Reflect on your professional journey.",
    emoji: "🌟",
    color: "#AAFF00",
    realm: "The Career Crossroads",
    questions: [
      "What does success look like to you right now?",
      "Has your definition of success changed?",
      "What are you ambitious about?",
      "What are you no longer ambitious about?",
      "What skill are you actively trying to build?",
      "What skill do you want to be known for?",
      "What skill do you think will matter more in the future?",
      "What is one career fear you rarely say out loud?",
      "What is one career dream you rarely say out loud?",
      "What kind of opportunity excites you?",
      "What kind of opportunity scares you?",
      "What would make you stay in a company long-term?",
      "What would make you leave even if the pay was good?",
      "What is your relationship with promotion?",
      "What is your relationship with comparison?",
      "What is your relationship with burnout?",
      "What is one thing you want to become better at this year?",
      "What is one thing you want to stop tolerating?",
      "What is one thing you want your future colleagues to say about you?",
      "What does meaningful work mean to you?"
    ]
  },
  {
    id: "asean",
    title: "ASEAN Edition",
    subtitle: "Funny ASEAN / Malaysian Office Edition",
    desc: "A love letter to Asian office culture.",
    emoji: "🍜",
    color: "#00C8C8",
    realm: "The ASEAN Archipelago",
    questions: [
      "What is the most office auntie/uncle thing you do?",
      "What is your most 'can can can' but actually cannot moment?",
      "What is your most 'later I check' moment?",
      "What does 'urgent' actually mean in this office?",
      "What is your relationship with 'circle back'?",
      "What food instantly improves team morale?",
      "What is the most dangerous sentence in office chat?",
      "Who is the unofficial IT person in every office?",
      "What is the most passive-aggressive email phrase?",
      "What is the difference between 'noted' and 'noted with thanks'?",
      "What is the most Malaysian way to avoid saying no?",
      "What is the most Singaporean way to say 'please hurry up'?",
      "What meeting could have been a WhatsApp message?",
      "What WhatsApp message should have been a meeting?",
      "What is your office pantry personality?",
      "What is your 'boss is nearby' behaviour?",
      "What is one thing every office somehow argues about?",
      "What is your lunch decision-making style?",
      "What is one office superstition you believe in?",
      "What is the most corporate way to say 'I have no idea'?"
    ]
  },
  {
    id: "pickone",
    title: "Pick One",
    subtitle: "Pick One Cards",
    desc: "Fast and easy.",
    emoji: "⚖️",
    color: "#0047FF",
    realm: "The Choice Chamber",
    questions: [
      "Remote work or office work?",
      "Deep work or teamwork?",
      "Voice note or text?",
      "Email or chat?",
      "Early morning meeting or late evening meeting?",
      "Clear deadline or flexible deadline?",
      "Direct feedback or gentle feedback?",
      "Public praise or private praise?",
      "Big project or many small tasks?",
      "Specialist or generalist?",
      "Startup chaos or corporate structure?",
      "More money or more flexibility?",
      "More autonomy or more mentorship?",
      "Work best under pressure or with plenty of time?",
      "Lead the meeting or take notes?",
      "Camera on or camera off?",
      "Plan everything or improvise?",
      "Fast decision or perfect decision?",
      "Stability or growth?",
      "Peaceful team or high-performing intense team?"
    ]
  },
  {
    id: "complete",
    title: "Complete The Sentence",
    subtitle: "Complete The Sentence Cards",
    desc: "Fill in the blank.",
    emoji: "✏️",
    color: "#7000FF",
    realm: "The Sentence Shrine",
    questions: [
      "At work, I feel most confident when…",
      "At work, I feel most anxious when…",
      "People work best with me when they…",
      "I lose motivation when…",
      "I regain motivation when…",
      "I feel respected when…",
      "I feel dismissed when…",
      "I communicate best through…",
      "I struggle to communicate when…",
      "I wish people knew that I…",
      "I am proud of myself for…",
      "I am still learning how to…",
      "My biggest work lesson this year is…",
      "My younger self would be surprised that I…",
      "One thing I need more of is…",
      "One thing I need less of is…",
      "One thing I appreciate in this team is…",
      "One thing I hope we improve is…",
      "A good colleague is someone who…",
      "A healthy workplace is one where…"
    ]
  }
];

const HOW_TO_PLAY = {
  title: "Best Way To Play",
  combos: [
    { label: "Casual colleagues", use: "Level 1 + Pick One + Funny Office Edition" },
    { label: "Team bonding", use: "Level 1 + Level 2 + Complete The Sentence" },
    { label: "Retreats", use: "Level 2 + Growth + Manager Edition" },
    { label: "Close colleagues", use: "Level 3 + Feedback Cards" }
  ],
  note: "Avoid using the deepest questions with people who do not feel psychologically safe. Work games should build trust, not force vulnerability."
};

/* ============================================================
   WISDOM PLAYBOOK (word-for-word from add-on.txt.txt)
   ============================================================ */

const WISDOM_INTRO = {
  title: "Wisdom Playbook for Work",
  tagline: "A comprehensive, critical, practical guide for surviving, growing, leading, and staying sane at work.",
  coreAnswer: `Work wisdom is not just "working hard," "being smart," or "being nice." It is the ability to understand people, incentives, timing, power, quality, communication, politics, and your own limits — then act with maturity.\n\nThe wisest people at work are usually not the loudest, busiest, or most talented. They are the ones who know what matters, who matters, when to speak, when to wait, when to push, when to document, when to leave, and when to grow up.`,
  formula: "Wisdom at work = Competence + Judgment + Communication + Character + Timing"
};

const WISDOM_SECTIONS = [
  {
    id: 1,
    title: "The Central Truth About Work",
    icon: "🎯",
    tag: "Foundations",
    content: `Work is not school.\n\nIn school, you are rewarded for:\n• Correct answers\n• Individual effort\n• Following instructions\n• Being visibly hardworking\n• Completing assigned tasks\n\nAt work, you are rewarded for:\n• Solving real problems\n• Creating value\n• Managing trust\n• Reducing risk\n• Making your boss's life easier\n• Communicating well\n• Working with imperfect people\n• Understanding hidden priorities\n• Delivering outcomes, not just effort\n\nThe mistake many people make is treating work like a meritocracy where "good work speaks for itself."\n\nIt often does not.\n\nGood work must be:\n• Seen\n• Understood\n• Connected to business value\n• Delivered at the right time\n• Communicated to the right people\n• Defended when necessary\n• Repeated consistently\n\nBottom line: Competence matters, but competence without judgment is fragile.`
  },
  {
    id: 2,
    title: "The Three Layers of Work Wisdom",
    icon: "🧅",
    tag: "Framework",
    content: `Layer 1: Task Wisdom\nThis is about doing the job well.\n\nYou ask:\n• What needs to be done?\n• What is the expected output?\n• What does "good" look like?\n• What is the deadline?\n• Who needs to approve this?\n• What can go wrong?\n• What is the smallest useful version I can deliver first?\n\nA beginner focuses only on completing the task. A wiser worker understands the task's purpose.\n\nExample:\n"Prepare slides for the meeting."\n\nImmature response: "Okay, I'll make slides."\n\nWise response: "Who is the audience, what decision are we trying to get, and should the deck persuade, update, or request approval?"\n\nThat one question separates order-takers from strategic operators.\n\n---\n\nLayer 2: People Wisdom\nMost workplace problems are not purely technical. They are human.\n\nPeople have:\n• Ego\n• Fear\n• Ambition\n• Insecurity\n• Status concerns\n• Hidden pressures\n• Personal preferences\n• Political alliances\n• Bad communication habits\n• Different definitions of urgency\n\nA technically correct answer delivered badly can still fail. A good idea introduced at the wrong time can be rejected. A competent person who makes others feel stupid may lose influence. A less competent person who manages relationships well may advance faster.\n\nThis is not always fair, but it is real.\n\nWork wisdom means understanding that people do not respond only to logic. They respond to trust, timing, tone, incentives, and identity.\n\n---\n\nLayer 3: System Wisdom\nEvery workplace is a system.\n\nIt has:\n• Formal hierarchy\n• Informal hierarchy\n• Sacred cows\n• Unspoken rules\n• Political sensitivities\n• Reward structures\n• Punishment structures\n• Decision bottlenecks\n• Historical baggage\n• Cultural norms\n\nThe naive employee asks: "What is the official process?"\n\nThe wise employee also asks: "How does this place actually work?"\n\nThat does not mean becoming manipulative. It means becoming observant.\n\nYou need to know:\n• Who really influences decisions?\n• Which teams are trusted?\n• Which topics are sensitive?\n• Who blocks things?\n• Who helps things move?\n• What does leadership actually care about?\n• What is publicly said versus privately rewarded?\n• Where does the company tolerate mediocrity?\n• Where does it demand excellence?\n\nBottom line: Wisdom is knowing both the official map and the real terrain.`
  },
  {
    id: 3,
    title: "The Work Wisdom Formula",
    icon: "🧮",
    tag: "Formula",
    content: `A useful formula:\n\nWisdom at work = Competence + Judgment + Communication + Character + Timing\n\nYou need all five.\n\nCompetence: Can you actually do the work? Without competence, everything else becomes performance theatre.\n\nJudgment: Can you decide what matters? Judgment is knowing:\n• What to prioritize\n• What to ignore\n• What to escalate\n• What to document\n• What to challenge\n• What to let go\n• What is urgent versus merely noisy\n\nCommunication: Can you make others understand, trust, and act? Good work badly communicated often becomes invisible.\n\nCharacter: Can people trust you when pressure increases? Character shows in:\n• Ownership\n• Honesty\n• Consistency\n• Discretion\n• Fairness\n• Reliability\n• Not throwing people under the bus\n\nTiming: Can you act at the right moment? Many things are not wrong in content, but wrong in timing.\n\nA wise person knows when to say:\n• "Now is the time to push."\n• "This is not the hill to die on."\n• "We need to wait."\n• "We need to escalate."\n• "We need to move before this gets worse."`
  },
  {
    id: 4,
    title: "Understand What Game You Are In",
    icon: "🎮",
    tag: "Strategy",
    content: `Not every workplace rewards the same thing.\n\nSome workplaces reward:\n• Speed\n• Precision\n• Loyalty\n• Innovation\n• Obedience\n• Visibility\n• Politics\n• Risk-taking\n• Cost control\n• Customer obsession\n• Technical excellence\n• Relationship management\n\nThe mistake is assuming your personal values are automatically the company's reward system.\n\nWorkplace reward realities:\n• Startup claims Innovation → may actually reward Speed, chaos tolerance, founder trust\n• Corporate claims Excellence → may actually reward Risk management, stakeholder alignment\n• Government-linked claims Public service → may actually reward Process, hierarchy, political sensitivity\n• Consulting claims Impact → may actually reward Presentation, client confidence, stamina\n• Sales-driven firm claims Customer value → may actually reward Revenue, relationships, persistence\n• Family business claims Loyalty → may actually reward Trust, discretion, relationship with owners\n• Tech company claims Engineering quality → may actually reward Shipping, scalability, product impact\n\nWisdom means asking: "What behavior gets promoted here?"\n\nNot just: "What behavior is praised in town halls?"\n\nThose may be different.`
  },
  {
    id: 5,
    title: "Smart vs. Wise at Work",
    icon: "🧠",
    tag: "Mindset",
    content: `Smart people can solve problems.\nWise people know which problems are worth solving.\n\nSmart people give correct answers.\nWise people give useful answers.\n\nSmart people notice flaws.\nWise people know how to raise flaws without creating enemies.\n\nSmart people want recognition.\nWise people build trust before demanding recognition.\n\nSmart people argue with logic.\nWise people consider power, timing, emotions, and incentives.\n\nSmart people ask, "Am I right?"\nWise people also ask, "Will this help?"`
  },
  {
    id: 6,
    title: "Commandment 1: Activity ≠ Value",
    icon: "📊",
    tag: "Commandments",
    content: `Do not confuse activity with value.\n\nBeing busy is not the same as being useful.\n\nMany people fill their day with:\n• Meetings\n• Emails\n• Status updates\n• Internal chatter\n• Low-impact tasks\n• Over-polished decks\n• Endless alignment\n\nBut the core question is: "What changed because of my work?"\n\nIf nothing important changed, you may have been active but not valuable.`
  },
  {
    id: 7,
    title: "Commandment 2: Clarify the Real Objective",
    icon: "🎯",
    tag: "Commandments",
    content: `Always clarify the real objective.\n\nBefore doing work, ask:\n• What decision does this support?\n• Who is the audience?\n• What does success look like?\n• Is this for awareness, approval, action, or record?\n• What is the deadline behind the deadline?\n• What is the minimum useful version?\n\nThis prevents wasted effort. A wise worker does not blindly execute vague instructions. They clarify without sounding difficult.\n\nExample:\n"Happy to work on this. Just to make sure I shape it correctly — is the goal to update leadership, get approval, or compare options?"`
  },
  {
    id: 8,
    title: "Commandment 3: Make Your Boss's Life Easier",
    icon: "🙌",
    tag: "Commandments",
    content: `Make your boss's life easier.\n\nThis does not mean worshipping your boss. It means understanding that your boss is also under pressure.\n\nA wise employee reduces their boss's:\n• Uncertainty\n• Follow-up burden\n• Surprise risk\n• Decision fatigue\n• Political exposure\n• Need to chase updates\n\nBad update: "Still working on it."\n\nBetter update: "I've completed the first draft. Two issues remain: pricing data and legal input. I've already asked Finance and Legal. Expected completion: Thursday. No blocker from your side yet."\n\nThis makes you look reliable.`
  },
  {
    id: 9,
    title: "Commandment 4: Never Surprise With Bad News",
    icon: "⚠️",
    tag: "Commandments",
    content: `Never surprise people with bad news.\n\nBad news gets worse when hidden.\n\nIf something is delayed, broken, risky, or politically sensitive, escalate early.\n\nA wise structure:\n"Here's the issue. Here's the impact. Here are the options. Here's my recommendation. Here's what I'm doing next."\n\nDo not just say: "There's a problem."\n\nBring options.`
  },
  {
    id: 10,
    title: "Commandment 5: Document Important Things",
    icon: "📝",
    tag: "Commandments",
    content: `Document important things.\n\nMemory is weak. Politics is strong.\n\nDocument:\n• Decisions\n• Scope changes\n• Approval\n• Deadlines\n• Risks\n• Ownership\n• Sensitive instructions\n• Meeting outcomes\n• Changes in direction\n\nUse neutral language.\n\nExample:\n"Thanks all. Recapping today's discussion: we agreed to proceed with Option B, with Marketing owning the launch copy, Product confirming final specs by Friday, and Finance reviewing pricing assumptions."\n\nThis protects everyone.\n\nDocumentation is not paranoia. It is professional hygiene.`
  },
  {
    id: 11,
    title: "Commandment 6: Praise Publicly, Challenge Carefully",
    icon: "🗣️",
    tag: "Commandments",
    content: `Praise publicly, challenge carefully.\n\nCorrecting someone publicly can trigger ego defense. Especially if they are senior, insecure, or politically sensitive.\n\nInstead of: "That's wrong."\n\nSay: "I see the logic. One concern is the Q3 data seems to point in a different direction. Could we pressure-test that before finalizing?"\n\nSame substance. Better delivery.`
  },
  {
    id: 12,
    title: "Commandment 7: Urgent vs. Important",
    icon: "⏱️",
    tag: "Commandments",
    content: `Learn the difference between urgent and important.\n\nUrgent means loud.\nImportant means consequential.\n\nMany workplaces are addicted to urgency because urgency feels productive.\n\nBut wise people ask:\n• What happens if this is delayed?\n• Who is affected?\n• Is this reversible?\n• Is this actually important or just noisy?\n• Is this urgent because of poor planning?\n\nNot every fire deserves your whole life.`
  },
  {
    id: 13,
    title: "Commandment 8: Don't Be Addicted to Being Right",
    icon: "🧘",
    tag: "Commandments",
    content: `Do not become emotionally addicted to being right.\n\nAt work, being right is only useful if it leads to better outcomes. Some people damage themselves because they must win every debate.\n\nWisdom asks:\n• Is this worth the relationship cost?\n• Is this the right forum?\n• Is the person open to input?\n• Do I need to say this now?\n• What happens if I let this go?\n• What happens if I stay silent?\n\nNot every wrong statement needs correction. But some do. The wisdom is knowing the difference.`
  },
  {
    id: 14,
    title: "Commandment 9: Protect Your Reputation",
    icon: "🛡️",
    tag: "Commandments",
    content: `Protect your reputation before you need it.\n\nReputation is built slowly and damaged quickly.\n\nYou want to be known as someone who is:\n• Reliable\n• Clear\n• Fair\n• Calm\n• Useful\n• Honest\n• Prepared\n• Discreet\n• Not dramatic\n• Not a blame-shifter\n\nWhen you have a strong reputation, people give you benefit of the doubt.\n\nWhen you have a weak reputation, even your good ideas are doubted.`
  },
  {
    id: 15,
    title: "Commandment 10: Know When to Leave",
    icon: "🚪",
    tag: "Commandments",
    content: `Know when to leave.\n\nWisdom is not endless endurance. Some workplaces are not growth environments. They are damage environments.\n\nConsider leaving when there is:\n• Chronic disrespect\n• No learning curve\n• Repeated broken promises\n• Toxic leadership\n• Unethical pressure\n• No path to growth\n• Constant blame culture\n• Political traps everywhere\n• Health deterioration\n• Values misalignment that cannot be resolved\n\nLoyalty is admirable. Blind loyalty is expensive.`
  },
  {
    id: 16,
    title: "The Four Types of Workplace Problems",
    icon: "🗂️",
    tag: "Problem Solving",
    content: `Most work problems fall into four categories.\n\n1. Skill Problems: You do not know how to do something yet.\nSolution: Learn, Ask, Practice, Get feedback, Find examples, Build competence.\nDo not hide skill gaps too long. Hidden incompetence becomes trust damage.\n\n2. Clarity Problems: You are not sure what is expected.\nSolution: Clarify scope, Confirm priorities, Ask what good looks like, Restate assumptions, Get examples.\nMany "performance issues" are actually clarity issues.\n\n3. Relationship Problems: Trust, communication, or expectations are broken.\nSolution: Address directly but calmly, Listen first, Repair misunderstandings, Document agreements, Avoid gossip escalation.\nRelationship problems ignored long enough become political problems.\n\n4. System Problems: The workplace structure itself creates dysfunction.\nExamples: Too many approvals, No clear owner, Bad incentives, Poor leadership, Unrealistic workload, Conflicting KPIs, Broken process, Fear-based culture.\nSolution: Improve what you can, Protect yourself, Escalate carefully, Do not personalize everything, Leave if the system punishes sanity.\nNot every problem is your fault. Not every problem is fixable by personal development.`
  },
  {
    id: 17,
    title: "Execution Wisdom: The Wise Execution Loop",
    icon: "🔄",
    tag: "Execution",
    content: `Use this loop:\n1. Clarify the outcome\n2. Identify stakeholders\n3. Define the minimum useful output\n4. Check constraints\n5. Draft early\n6. Get feedback before over-polishing\n7. Communicate risks\n8. Deliver\n9. Confirm next steps\n10. Reflect and improve\n\nMost people delay feedback until the final version. Wise people share early enough to avoid wasted effort.\n\n---\n\nThe 30-60-90 Rule for Tasks\n\nIn the first 30 minutes:\n• What is being asked?\n• Why does it matter?\n• What does success look like?\n• What information do I need?\n• Who owns the decision?\n\nAt 60%:\n• Am I solving the right problem?\n• Do I need feedback?\n• Are assumptions still valid?\n• Is the direction acceptable?\n\nAt 90%:\n• What needs polishing?\n• What risks remain?\n• What will the audience question?\n• What decision or action should follow?\n\nThis prevents both perfectionism and careless work.`
  },
  {
    id: 18,
    title: "Communication Wisdom",
    icon: "📡",
    tag: "Communication",
    content: `Communication is not just talking. It is transferring meaning with minimal confusion.\n\nBad workplace communication creates:\n• Rework\n• Anxiety\n• Conflict\n• Delay\n• Blame\n• Misalignment\n• Political risk\n\nGood workplace communication creates:\n• Trust\n• Speed\n• Clarity\n• Accountability\n• Confidence\n• Better decisions\n\n---\n\nThe Best Communication Structure:\nContext → Issue → Options → Recommendation → Next Step\n\nExample:\n"Context: We planned to launch Friday. Issue: Vendor delivery is delayed by two days. Options: delay launch, launch partially, or switch to backup vendor. Recommendation: launch partially because customer impact is lowest. Next step: I'll confirm with Ops by 3pm unless you prefer another route."\n\nThis is much better than: "Vendor delayed. How?"\n\n---\n\nThe Wise Email Formula:\n1. Start with the purpose\n2. Give the key point early\n3. Use bullets for decisions or actions\n4. Make ownership clear\n5. State deadline\n6. Avoid emotional language\n7. Close with next step`
  },
  {
    id: 19,
    title: "Meeting Wisdom",
    icon: "🏛️",
    tag: "Meetings",
    content: `Meetings are where many organizations lose their lives.\n\nA wise person asks:\n• Why are we meeting?\n• What decision is needed?\n• Who needs to be there?\n• What preparation is required?\n• What should be sent beforehand?\n• What is the output?\n\nBad meetings are for vague discussion.\n\nGood meetings are for:\n• Decisions\n• Conflict resolution\n• Alignment\n• Prioritization\n• Problem-solving\n• Escalation\n• Relationship building\n\nNot everything needs a meeting. But some things should not be handled by email.\n\n---\n\nHow to Speak Wisely in Meetings:\nDo not speak just to prove you are present. Speak when you can add:\n• Clarity\n• Evidence\n• Risk awareness\n• Decision framing\n• Customer perspective\n• Practical next step\n• Missing stakeholder view\n\nUseful phrases:\n"Can we clarify the decision we need from this discussion?"\n"What would make Option A unacceptable?"\n"Who is the final owner after this meeting?"\n"Are we solving the root issue or just the symptom?"\n"What is the risk if we do nothing?"\n"Can I play devil's advocate for a moment?"`
  },
  {
    id: 20,
    title: "Feedback Wisdom",
    icon: "💭",
    tag: "Feedback",
    content: `Feedback is one of the fastest ways to grow, but most people handle it badly.\n\nImmature response to feedback:\n• Defend\n• Explain\n• Blame context\n• Attack the messenger\n• Shut down emotionally\n• Pretend to agree but change nothing\n\nWise response to feedback:\n• Listen\n• Ask examples\n• Separate truth from tone\n• Look for patterns\n• Decide what to change\n• Follow up later\n\nA powerful phrase: "Thanks. Could you give me one specific example so I can understand what to adjust?"\n\nThis turns vague criticism into usable data.\n\n---\n\nHow to Judge Feedback:\nNot all feedback is equally valid.\n\nAsk:\n• Is this person credible?\n• Have others said similar things?\n• Is this feedback specific?\n• Is it about behavior or personality?\n• Is it based on one incident or repeated pattern?\n• Does this person understand my role?\n• Is there political motive?\n\nDo not accept all feedback blindly. But do not reject feedback just because it hurts.`
  },
  {
    id: 21,
    title: "Conflict Wisdom",
    icon: "⚔️",
    tag: "Conflict",
    content: `Conflict at work is unavoidable. The goal is not to avoid all conflict. The goal is to handle conflict without unnecessary damage.\n\nTypes of conflict:\n• Task conflict (Different views on solution) → Debate evidence\n• Process conflict (Who does what) → Clarify roles\n• Priority conflict (Competing deadlines) → Escalate trade-offs\n• Personality conflict (Style mismatch) → Set boundaries\n• Values conflict (Ethical disagreement) → Be careful and document\n• Power conflict (Territory, status, control) → Navigate politically\n\n---\n\nThe Wise Conflict Script:\n"I think we may be seeing this differently. My concern is X. The impact could be Y. I'd like to understand your view and agree on the next step."\n\nThis avoids accusation.\n\nBad: "You're blocking everything."\n\nBetter: "I'm concerned we may not hit the deadline if approvals remain open. Can we agree who has final sign-off?"`
  },
  {
    id: 22,
    title: "Politics Wisdom",
    icon: "🎭",
    tag: "Politics",
    content: `Office politics is not always dirty.\n\nAt its simplest, politics means: How power, relationships, interests, and influence shape decisions.\n\nYou cannot avoid politics completely because organizations involve people. But you can choose between clean politics and dirty politics.\n\nClean politics:\n• Building trust\n• Understanding stakeholders\n• Communicating well\n• Giving credit\n• Managing influence ethically\n• Knowing when to escalate\n• Protecting your team\n• Aligning interests\n\nDirty politics:\n• Gossip\n• Sabotage\n• Credit stealing\n• Manipulation\n• Blame shifting\n• Strategic exclusion\n• False friendliness\n• Weaponized information\n\nWise people are politically aware without becoming politically corrupt.\n\n---\n\nHow to Read Workplace Politics:\nObserve:\n• Who gets interrupted?\n• Who gets listened to?\n• Who can say no?\n• Who gets protected?\n• Who gets blamed?\n• Who is consulted before decisions?\n• Who has informal access to leadership?\n• Which teams are always overruled?\n• Which issues trigger defensiveness?\n\nDo not be naive. But do not become cynical either.\n\nCynicism sees everything as corrupt. Wisdom sees incentives clearly and still chooses integrity.`
  },
  {
    id: 23,
    title: "Boss Wisdom",
    icon: "👔",
    tag: "Leadership",
    content: `Your boss heavily affects your work life. A wise employee studies their boss — not to flatter them, but to work effectively.\n\nAsk:\n• What does my boss care about most?\n• What stresses them?\n• What kind of updates do they prefer?\n• Do they like detail or summary?\n• Are they risk-averse or bold?\n• Do they want options or recommendations?\n• What makes them trust someone?\n• What makes them lose trust?\n• What pressures are they facing from above?\n\nManaging Up means helping your boss make better decisions and trust your work:\n• Giving timely updates\n• Escalating early\n• Bringing options\n• Clarifying priorities\n• Avoiding surprises\n• Making trade-offs visible\n• Asking for feedback\n• Understanding their communication style\n\nIt does not mean being fake, submissive, or political in a bad way.\n\n---\n\nHow to Handle a Weak Boss:\nA weak boss may be: Indecisive, Insecure, Unclear, Avoidant, Overly political, Poor at prioritizing, Bad at defending the team.\n\nWisdom response:\n• Document decisions\n• Ask clarifying questions\n• Offer structured options\n• Build relationships beyond them carefully\n• Do not openly embarrass them\n• Protect yourself from vague blame\n• Decide whether the environment is still worth staying in\n\nA bad boss can be managed for a while. But a toxic boss should not be romanticized as a "growth opportunity" forever.`
  },
  {
    id: 24,
    title: "Leadership Wisdom",
    icon: "🌟",
    tag: "Leadership",
    content: `Leadership is not merely being in charge. Leadership is creating conditions where people can do meaningful work well.\n\nA wise leader provides:\n• Direction\n• Clarity\n• Protection\n• Standards\n• Feedback\n• Accountability\n• Psychological safety\n• Decision-making rhythm\n• Resource prioritization\n\nBad leaders create confusion, then blame people for not reading their minds.\n\n---\n\nThe Wise Leader's Questions:\n• Does the team know what matters?\n• Are priorities clear?\n• Are we overloaded?\n• What risks are hidden?\n• Who is quietly struggling?\n• Who deserves recognition?\n• Who needs correction?\n• What decision am I avoiding?\n• What behavior am I tolerating?\n• Where am I the bottleneck?\n\nLeadership wisdom is often about removing confusion.\n\n---\n\nLeadership Failure Modes:\n1. The Hero Leader — Does everything personally, looks hardworking but prevents team growth.\n2. The Ghost Leader — Absent until things go wrong, then appears to criticize.\n3. The Vibes Leader — Talks culture but avoids hard decisions.\n4. The Control Leader — Cannot delegate. Creates fear and dependency.\n5. The Political Leader — Manages upward but neglects the team.\n6. The Nice Leader — Avoids conflict until problems become severe.\n7. The Vision Leader Without Execution — Inspires people but cannot operationalize.\n\nWise leadership requires both humanity and standards.`
  },
  {
    id: 25,
    title: "Career Wisdom",
    icon: "🗺️",
    tag: "Career",
    content: `Your career is not just your current job. Your job is one chapter. Your career is the longer arc of:\n• Skills\n• Reputation\n• Relationships\n• Judgment\n• Experience\n• Credibility\n• Options\n• Financial resilience\n• Personal growth\n\nDo not optimize only for short-term comfort. Do not optimize only for prestige either.\n\n---\n\nThe Career Capital Model — Build career capital in five forms:\n\n1. Skill Capital — What can you do?\nExamples: Analysis, Sales, Writing, Strategy, Engineering, Finance, Operations, Negotiation, Leadership, Product thinking, Industry knowledge\n\n2. Reputation Capital — What are you known for?\nExamples: Reliable, Sharp, Fair, Strategic, Calm under pressure, Strong executor, Good with clients, Good with complexity\n\n3. Relationship Capital — Who trusts you?\nRelationships matter because opportunities often travel through trust.\n\n4. Narrative Capital — Can you explain your career story?\nA wise professional can say: "I started in X, built strength in Y, learned Z, and now I'm moving toward A because…"\nWithout narrative, your career looks random.\n\n5. Financial Capital — Can you make choices without desperation?\nMoney gives optionality. Low savings can trap you in bad workplaces. Career wisdom includes financial wisdom.`
  },
  {
    id: 26,
    title: "Promotion Wisdom",
    icon: "📈",
    tag: "Career",
    content: `Promotions are not only about doing your current job well. Usually, you must show signs that you can operate at the next level.\n\nThat means:\n• Broader thinking\n• Less handholding\n• Better judgment\n• Stronger ownership\n• Cross-functional influence\n• Ability to handle ambiguity\n• Better communication\n• Higher trust\n• More strategic contribution\n\nA common mistake: "I did all my tasks. Why am I not promoted?"\n\nBecause promotion often depends on:\n• Business need\n• Budget\n• Visibility\n• Sponsorship\n• Timing\n• Role availability\n• Perceived readiness\n• Political support\n• Comparison with peers\n\nFair? Not always. Real? Yes.\n\n---\n\nHow to Prepare for Promotion Wisely:\n\nAsk your manager: "What would I need to demonstrate consistently to be considered ready for the next level?"\n\nThen ask: "Can we define 2–3 concrete examples of what that would look like?"\n\nDo not accept vague answers like: "Just keep doing what you're doing." That may be polite avoidance. You need specifics.`
  },
  {
    id: 27,
    title: "Reputation Wisdom",
    icon: "🏅",
    tag: "Reputation",
    content: `Your reputation is your invisible résumé.\n\nPeople discuss you when you are not in the room. They may say:\n• "She's reliable."\n• "He's smart but difficult."\n• "She needs too much guidance."\n• "He's good with clients."\n• "She gets things done."\n• "He complains a lot."\n• "She's not strategic yet."\n• "He is solid under pressure."\n\nYour goal is not to be liked by everyone. Your goal is to be trusted by the right people for the right reasons.\n\n---\n\nReputation Killers:\n• Missing deadlines without warning\n• Always having excuses\n• Gossiping\n• Overpromising\n• Being careless with details\n• Taking credit unfairly\n• Blaming others\n• Being defensive\n• Being high-maintenance\n• Creating drama\n• Not following through\n• Acting above the work\n• Criticizing without contributing\n\nReputation Builders:\n• Delivering consistently\n• Admitting mistakes early\n• Helping others\n• Giving credit\n• Communicating clearly\n• Staying calm\n• Being prepared\n• Solving problems\n• Owning outcomes\n• Being discreet\n• Making others' work easier`
  },
  {
    id: 28,
    title: "Emotional Wisdom at Work",
    icon: "❤️",
    tag: "Self-Awareness",
    content: `Work triggers deep emotions:\n• Fear of failure\n• Need for approval\n• Jealousy\n• Resentment\n• Insecurity\n• Pride\n• Shame\n• Anger\n• Ambition\n• Comparison\n\nMany people think they are making rational career decisions when they are actually reacting from ego wounds.\n\nWisdom means knowing your emotional patterns.\n\nAsk yourself:\n• Why did that comment affect me so much?\n• Am I angry because this is wrong, or because I feel disrespected?\n• Am I seeking excellence or validation?\n• Am I avoiding feedback because I feel shame?\n• Am I overworking because I fear being seen as replaceable?\n• Am I staying because it is wise, or because I am scared?\n\nSelf-awareness is not soft. It is strategic.`
  },
  {
    id: 29,
    title: "The Wisdom of Boundaries",
    icon: "🔐",
    tag: "Self-Management",
    content: `Boundaries are not laziness. Boundaries are how you remain useful without self-destruction.\n\nBad boundaries:\n• Saying yes to everything\n• Replying instantly to everything\n• Absorbing everyone's urgency\n• Working late as identity\n• Being available without limit\n• Accepting unclear work\n• Letting others dump problems on you\n\nWise boundaries:\n• Clarifying priorities\n• Negotiating deadlines\n• Saying what must be deprioritized\n• Protecting deep work time\n• Escalating overload early\n• Being helpful without becoming a doormat\n\nExample:\n"I can take this on, but given the current deadline for Project A, should I deprioritize the report or move this to next week?"\n\nThis is not refusal. This is trade-off clarity.`
  },
  {
    id: 30,
    title: "The Wisdom of Saying No",
    icon: "🚫",
    tag: "Communication",
    content: `You rarely need to say a blunt "no."\n\nOften, you can say:\n\n"I can do that, but not by Friday unless we deprioritize X."\n\n"I don't think I'm the best owner for this, but I can help identify who is."\n\n"I can review, but I won't be able to produce the full version."\n\n"That timeline is possible only if we reduce the scope."\n\n"I'm concerned this creates risk. Can we discuss options?"\n\nA wise "no" protects quality, trust, and sanity.\n\nA foolish "yes" creates hidden failure.`
  },
  {
    id: 31,
    title: "The Wisdom of Asking Questions",
    icon: "❓",
    tag: "Communication",
    content: `Good questions are career accelerators. They make you look thoughtful, not weak.\n\nClarifying questions:\n"What does success look like?"\n\nPriority questions:\n"Which of these should come first?"\n\nRisk questions:\n"What would make this fail?"\n\nStakeholder questions:\n"Who needs to be aligned before we proceed?"\n\nDecision questions:\n"What decision are we trying to make today?"\n\nTrade-off questions:\n"Are we optimizing for speed, cost, quality, or risk reduction?"\n\nLearning questions:\n"What would a more senior person consider here that I may be missing?"\n\nThe quality of your questions reveals the quality of your thinking.`
  },
  {
    id: 32,
    title: "The Wisdom of Visibility",
    icon: "👁️",
    tag: "Career",
    content: `Do not assume people know what you are doing.\n\nVisibility is not bragging if done properly.\n\nBad visibility:\n"Look how hardworking I am."\n\nGood visibility:\n"Here is what was delivered, what changed, what risk was reduced, and what comes next."\n\nExample update:\n"This week, I completed the vendor comparison, identified two cost-saving options, and flagged one compliance risk. Next week, I'll validate pricing with Finance and prepare the recommendation for approval."\n\nThis helps others see your value without sounding arrogant.`
  },
  {
    id: 33,
    title: "The Wisdom of Handling Mistakes",
    icon: "🔧",
    tag: "Character",
    content: `Everyone makes mistakes. The difference is how quickly and maturely you respond.\n\nBad mistake response:\n• Hide it\n• Delay telling people\n• Blame someone else\n• Minimize the impact\n• Get defensive\n• Panic publicly\n\nWise mistake response — say:\n"I made a mistake. Here's what happened, here's the impact, here's what I'm doing to fix it, and here's how I'll prevent it from recurring."\n\nThis builds trust.\n\nA person who owns mistakes is often trusted more than a person who pretends to be flawless.`
  },
  {
    id: 34,
    title: "Working With Difficult People",
    icon: "🤺",
    tag: "Relationships",
    content: `The Credit Taker: Protect yourself by documenting contributions.\nSay: "For visibility, here's the workstream breakdown and owners."\n\nThe Blamer: Use written confirmations.\nSay: "Just recapping the decision and next steps so we're aligned."\n\nThe Chronic Complainer: Do not absorb their worldview.\nAsk: "What do you think is the practical next step?"\n\nThe Insecure Senior: Do not embarrass them publicly. Raise concerns privately and respectfully.\n\nThe Micromanager: Increase proactive updates. Micromanagers often tighten control when they feel uncertainty.\n\nThe Lazy Colleague: Clarify ownership. Do not silently cover forever.\n\nThe Political Operator: Be polite, careful, documented, and non-gossipy. Never feed them sensitive emotional reactions.`
  },
  {
    id: 35,
    title: "The Wisdom of Workplace Friendships",
    icon: "👥",
    tag: "Relationships",
    content: `Work friendships can be valuable. They provide:\n• Support\n• Trust\n• Information\n• Belonging\n• Collaboration\n• Emotional relief\n\nBut be careful. Not every friendly person is safe. Work friendships exist inside power, incentives, ambition, and competition.\n\nWise rule:\nBe warm with many, vulnerable with few, reckless with none.\n\nAvoid oversharing:\n• Salary resentment\n• Boss hatred\n• Political opinions\n• Personal drama\n• Career plans\n• Gossip\n• Private criticism\n• Confidential information\n\nA colleague can be both kind and not fully safe. That is not paranoia. That is maturity.`
  },
  {
    id: 36,
    title: "The Wisdom of Discretion",
    icon: "🤫",
    tag: "Character",
    content: `Discretion is underrated.\n\nA discreet person knows:\n• What not to repeat\n• When not to comment\n• When to stay neutral\n• What belongs in writing\n• What should be discussed privately\n• What should not be said at all\n\nLoose talk damages trust.\n\nIf people see you gossip about others, they assume you gossip about them too.\n\nWisdom phrase:\n"I don't know enough to comment fairly."\n\nOr:\n"I'd rather not speculate."\n\nSimple. Powerful.`
  },
  {
    id: 37,
    title: "The Wisdom of Knowing the Real KPI",
    icon: "📐",
    tag: "Strategy",
    content: `Every role has official KPIs and real KPIs.\n\nOfficial KPI: "Improve operational efficiency."\nReal KPI: "Make sure the CEO does not get surprised by operational failures."\n\nOfficial KPI: "Support the sales team."\nReal KPI: "Help sales close deals without creating compliance problems."\n\nOfficial KPI: "Prepare management reports."\nReal KPI: "Give leadership confidence to make decisions quickly."\n\nFind the real KPI. That is where your value lives.`
  },
  {
    id: 38,
    title: "The Wisdom of Strategic Proactivity",
    icon: "🔮",
    tag: "Strategy",
    content: `Being proactive does not mean randomly doing extra work. That is how people burn out.\n\nWise proactivity means anticipating important needs.\n\nAsk:\n• What will my boss ask next?\n• What risk is emerging?\n• What decision is coming?\n• What data will be needed?\n• What stakeholder will object?\n• What problem keeps repeating?\n• What can I simplify?\n• What can I prevent?\n\nBad proactivity creates noise. Good proactivity reduces future pain.`
  },
  {
    id: 39,
    title: "Thinking Few Steps Ahead",
    icon: "♟️",
    tag: "Mindset",
    content: `This is one of the clearest signs of maturity.\n\nBefore sending work, ask:\n• What will happen after this?\n• Who will receive it?\n• What might they misunderstand?\n• What question will they ask?\n• What objection will arise?\n• What decision should follow?\n• What risk should I flag?\n• What dependency exists?\n• Who else should know?\n\nJunior mindset: "I completed my part."\n\nSenior mindset: "I understand how my part affects the whole system."`
  },
  {
    id: 40,
    title: "The Wisdom of Quality",
    icon: "💎",
    tag: "Execution",
    content: `Quality is not perfection. Quality is fitness for purpose.\n\nA rough internal draft may be good enough for early feedback.\nA board deck needs polish.\nA legal document needs precision.\nA brainstorming note needs speed.\nA customer-facing message needs clarity and tone.\nA financial model needs accuracy.\n\nThe wise question: "What level of quality is appropriate for this use?"\n\nPerfectionism can be waste.\nSloppiness can be damage.\nWisdom is calibration.`
  },
  {
    id: 41,
    title: "The Wisdom of Speed",
    icon: "⚡",
    tag: "Execution",
    content: `Speed matters. But speed without direction creates rework.\n\nWise speed means:\n• Clarify quickly\n• Draft early\n• Share assumptions\n• Get feedback\n• Iterate\n• Avoid over-polishing too soon\n• Escalate blockers\n\nBad speed: "I rushed and created errors."\n\nGood speed: "I produced a useful first version quickly so we could align early."`
  },
  {
    id: 42,
    title: "The Wisdom of Patience",
    icon: "🌱",
    tag: "Mindset",
    content: `Some things cannot be forced.\n\nTrust takes time.\nPromotion takes time.\nCulture changes slowly.\nInfluence compounds.\nSkill deepens through repetition.\n\nNot every delay means failure.\n\nBut patience is not passivity.\n\nWise patience means:\n• Keep improving\n• Keep observing\n• Keep building trust\n• Keep documenting progress\n• Keep looking for opportunity\n• Keep your options open`
  },
  {
    id: 43,
    title: "The Wisdom of Ambition",
    icon: "🚀",
    tag: "Mindset",
    content: `Ambition is not bad. But immature ambition is obvious and annoying.\n\nImmature ambition says: "Notice me. Promote me. Give me status."\n\nWise ambition says: "Give me responsibility. I will create value, build trust, and grow into bigger problems."\n\nAmbition becomes dangerous when it turns into:\n• Envy\n• Impatience\n• Credit hunger\n• Status obsession\n• Contempt for others\n• Inability to learn\n• Political manipulation\n\nThe best ambition is disciplined, useful, and grounded.`
  },
  {
    id: 44,
    title: "The Wisdom of Humility",
    icon: "🙏",
    tag: "Character",
    content: `Humility at work does not mean thinking you are useless. It means seeing reality accurately.\n\nYou know:\n• You have strengths\n• You have blind spots\n• You can learn from juniors\n• You can be wrong\n• You need feedback\n• You are replaceable, but still valuable\n• Your perspective is partial\n\nFalse humility is performative. Real humility learns fast.`
  },
  {
    id: 45,
    title: "The Wisdom of Confidence",
    icon: "💪",
    tag: "Character",
    content: `Confidence is not loudness. Real confidence is calm.\n\nIt sounds like:\n"Here is my recommendation, and here are the risks."\n"I may be missing something, but based on the data, I suggest Option A."\n"I disagree, and here is why."\n"I don't know yet, but I'll find out."\n\nConfidence includes the ability to admit uncertainty.\n\nOverconfidence hides gaps.\nUnderconfidence hides value.\nWise confidence is accurate self-trust.`
  },
  {
    id: 46,
    title: "The Wisdom of Handling Praise",
    icon: "🌸",
    tag: "Self-Awareness",
    content: `Praise feels good, but do not become addicted to it.\n\nWhen praised:\n• Accept it\n• Give credit where due\n• Note what worked\n• Repeat the behavior\n• Do not let it inflate you\n\nGood response:\n"Thank you. I'm glad it was useful. Credit also goes to the team for turning around the data quickly."\n\nPraise is information, not identity.`
  },
  {
    id: 47,
    title: "The Wisdom of Handling Criticism",
    icon: "🧊",
    tag: "Self-Awareness",
    content: `Criticism hurts most when it touches something you secretly fear.\n\nWhen criticized, pause.\n\nAsk:\n• Is it true?\n• Is it partly true?\n• Is it useful?\n• Is it repeated feedback?\n• Is it badly delivered but still valid?\n• Is it more about their preference than objective performance?\n\nDo not build your identity on one person's opinion. But do not ignore patterns.`
  },
  {
    id: 48,
    title: "The Wisdom of Learning",
    icon: "📚",
    tag: "Growth",
    content: `At work, learning is not only courses and certificates.\n\nLearning comes from:\n• Difficult projects\n• Good bosses\n• Bad bosses\n• Mistakes\n• Feedback\n• Cross-functional exposure\n• Customer complaints\n• Failed initiatives\n• Observing senior people\n• Teaching others\n• Writing things clearly\n\nAfter any major project, ask:\n• What worked?\n• What failed?\n• What surprised us?\n• What did we misunderstand?\n• What should we repeat?\n• What should we never do again?\n\nExperience alone does not create wisdom. Reflected experience does.`
  },
  {
    id: 49,
    title: "The Wisdom of Choosing Battles",
    icon: "⚖️",
    tag: "Strategy",
    content: `Not every issue deserves equal energy.\n\nFight hard when:\n• Ethics are involved\n• Legal risk exists\n• Customer harm is likely\n• Reputation damage is serious\n• The decision is hard to reverse\n• The cost of silence is high\n• Your core responsibility is affected\n\nLet go when:\n• The issue is minor\n• The decision is reversible\n• You lack influence\n• The cost of conflict exceeds the benefit\n• It is a style preference\n• You are reacting from ego\n• You have already given your input\n\nMaturity is not having an opinion on everything. Maturity is knowing which opinions require action.`
  },
  {
    id: 50,
    title: "Working Under Pressure",
    icon: "🌊",
    tag: "Resilience",
    content: `Pressure reveals systems.\n\nIt reveals:\n• Who panics\n• Who blames\n• Who leads\n• Who hides\n• Who communicates\n• Who solves\n• Who creates more chaos\n\nUnder pressure, wise people become simpler. They ask:\n• What is the immediate risk?\n• What must be stabilized?\n• Who needs to know?\n• What decision is needed?\n• What can wait?\n• What are the options?\n• Who owns what?\n\nCalm is a workplace superpower. Not passive calm. Operational calm.`
  },
  {
    id: 51,
    title: "The Wisdom of Ethics",
    icon: "⚖️",
    tag: "Character",
    content: `Your integrity is easier to protect before compromise begins.\n\nEthical drift often happens gradually.\n\nFirst: "Just adjust the wording."\nThen: "Don't mention that issue."\nThen: "Make the numbers look better."\nThen: "Everyone does it."\nThen: "Why are you being difficult?"\n\nBe careful when people use urgency to bypass integrity.\n\nWise questions:\n• Is this true?\n• Is this legal?\n• Is this fair?\n• Would I be comfortable if this became public?\n• Who could be harmed?\n• What am I being asked to hide?\n• Is this a one-time exception or a pattern?\n\nDo not trade long-term integrity for short-term approval.`
  },
  {
    id: 52,
    title: "The Wisdom of Money at Work",
    icon: "💰",
    tag: "Career",
    content: `Money affects wisdom.\n\nWhen you are financially desperate, you may tolerate:\n• Abuse\n• Underpayment\n• Overwork\n• Manipulation\n• Bad bosses\n• Unsafe conditions\n• Career stagnation\n\nFinancial resilience gives you choices.\n\nWork wisdom includes:\n• Living below your means\n• Building emergency savings\n• Knowing your market value\n• Negotiating respectfully\n• Avoiding lifestyle inflation\n• Not tying identity to salary alone\n• Understanding benefits, bonuses, equity, and long-term growth\n\nA salary is not just a number. It is part of your freedom structure.`
  },
  {
    id: 53,
    title: "The Wisdom of Negotiation",
    icon: "🤝",
    tag: "Career",
    content: `Negotiation is not begging. It is structured value discussion.\n\nNegotiate when you have:\n• Evidence\n• Market data\n• Clear contribution\n• Timing awareness\n• Alternatives\n• Professional tone\n\nBad negotiation:\n"I feel I deserve more."\n\nBetter:\n"Over the past year, I delivered X, improved Y, and took on Z. Based on the scope of my role and market benchmarks, I'd like to discuss adjusting my compensation."\n\nNegotiation wisdom also means knowing when the answer is truly no. Sometimes the company cannot pay. Sometimes it will not pay. Those are different.`
  },
  {
    id: 54,
    title: "The Wisdom of Leaving Well",
    icon: "🌅",
    tag: "Career",
    content: `Never burn bridges unnecessarily. Even when leaving a bad workplace, be strategic.\n\nLeave with:\n• Proper handover\n• Clean documentation\n• Professional tone\n• Gratitude where appropriate\n• No dramatic final speech\n• No revenge email\n• No gossip tour\n\nYour exit is part of your reputation. People remember endings.`
  },
  {
    id: 55,
    title: "The Wisdom of Staying",
    icon: "🏡",
    tag: "Career",
    content: `Sometimes staying is wise.\n\nStay when:\n• You are still learning\n• You have a good boss\n• You have growth runway\n• Your reputation is compounding\n• The company is improving\n• The temporary difficulty has purpose\n• You are building rare skills\n• You have strategic exposure\n• The pain is developmental, not destructive\n\nDo not leave just because work is hard. Hard is not the same as toxic.`
  },
  {
    id: 56,
    title: "Don't Over-Identify With Work",
    icon: "🧘",
    tag: "Self-Awareness",
    content: `Your job is important. But it is not your whole identity.\n\nIf your entire self-worth depends on work, then every criticism becomes an existential threat.\n\nYou need sources of identity outside work:\n• Faith\n• Family\n• Friends\n• Health\n• Service\n• Creativity\n• Learning\n• Community\n• Character\n• Inner life\n\nA person with a grounded identity is harder to manipulate. They can work seriously without worshipping work.`
  },
  {
    id: 57,
    title: "Common Workplace Traps",
    icon: "🪤",
    tag: "Awareness",
    content: `Trap 1: The Hard Worker Trap\nYou become reliable, so everyone gives you more work. But you do not become more strategic, visible, or promoted.\nSolution: Clarify priorities, Communicate capacity, Track impact, Ask for growth work, not just more work.\n\nTrap 2: The Smart Critic Trap\nYou see every flaw but do not help solve enough. People experience you as negative.\nSolution: Pair critique with options, Choose timing carefully, Acknowledge what works first.\n\nTrap 3: The Nice Person Trap\nYou avoid conflict, then become resentful.\nSolution: Set boundaries earlier, Have uncomfortable conversations sooner, Stop confusing kindness with compliance.\n\nTrap 4: The Invisible Contributor Trap\nYou do good work but nobody knows.\nSolution: Send concise updates, Link work to outcomes, Share wins without bragging.\n\nTrap 5: The Loyal Soldier Trap\nYou stay too long because you feel guilty leaving.\nSolution: Separate gratitude from obligation, Assess growth honestly, Remember your career is your responsibility.\n\nTrap 6: The High Performer Burnout Trap\nYou perform well, so the system keeps extracting.\nSolution: Protect capacity, Negotiate scope, Train others, Stop rescuing broken systems silently.\n\nTrap 7: The Over-Promising Trap\nYou want to impress, so you say yes too quickly.\nSolution: Pause before committing, Ask about trade-offs, Give realistic timelines.\n\nTrap 8: The Cynicism Trap\nYou see politics and conclude everything is fake.\nSolution: Stay realistic without becoming bitter, Find trustworthy people, Focus on controllable excellence, Use politics ethically.`
  },
  {
    id: 58,
    title: "Wisdom by Career Stage",
    icon: "🎓",
    tag: "Career",
    content: `Early Career — Your job is to build:\n• Skill\n• Reliability\n• Learning speed\n• Professional habits\n• Communication clarity\n• Feedback tolerance\n\nAvoid: Entitlement, Oversensitivity, Poor follow-through, Acting above basic work, Confusing confidence with competence.\n\nBest question: "What does excellent look like at this level?"\n\n---\n\nMid Career — Your job is to build:\n• Judgment\n• Ownership\n• Influence\n• Prioritization\n• Cross-functional skill\n• Mentoring ability\n• Strategic thinking\n\nAvoid: Staying comfortable, Becoming cynical, Over-specializing blindly, Doing everything yourself, Waiting passively for recognition.\n\nBest question: "What bigger problems am I trusted to solve?"\n\n---\n\nSenior Career — Your job is to build:\n• Systems\n• People\n• Culture\n• Strategy\n• Decision quality\n• Succession\n• Long-term value\n\nAvoid: Ego protection, Bottleneck behavior, Political self-preservation, Losing touch with ground reality, Talking vision without execution.\n\nBest question: "What conditions am I creating for others to succeed?"`
  },
  {
    id: 59,
    title: "Practical Scripts for Work Wisdom",
    icon: "📋",
    tag: "Scripts",
    content: `When you receive vague work:\n"Happy to take this on. To make sure I deliver what's needed, could we clarify the audience, deadline, and intended decision?"\n\nWhen you are overloaded:\n"I can support this, but I'm currently handling A and B. Which should take priority?"\n\nWhen you disagree:\n"I see the rationale. My concern is the risk around X. Could we consider Y before finalizing?"\n\nWhen someone blames you unfairly:\n"I want to clarify the sequence so we can solve this accurately. Based on the timeline, the decision was made on Tuesday after we aligned on Option B."\n\nWhen a deadline is unrealistic:\n"That timeline is possible if we reduce the scope. For the full version, I'd recommend Friday. For a simplified version, I can deliver Wednesday."\n\nWhen you need feedback:\n"Could you give me one specific area to improve for next time?"\n\nWhen you made a mistake:\n"I made an error in X. The impact is Y. I've already done Z to fix it, and I'll add a check to prevent recurrence."\n\nWhen someone keeps changing scope:\n"To avoid confusion, can we confirm whether this is replacing the original scope or adding to it?"\n\nWhen a meeting is unclear:\n"Before we continue, can we clarify the decision we need from this discussion?"\n\nWhen you want promotion clarity:\n"What would I need to demonstrate consistently to be considered ready for the next level?"`
  },
  {
    id: 60,
    title: "Work Is About Trust",
    icon: "🔑",
    tag: "Foundations",
    content: `At the highest level, work runs on trust.\n\nPeople trust you when they believe:\n• You are competent\n• You tell the truth\n• You follow through\n• You understand context\n• You do not create unnecessary drama\n• You can handle pressure\n• You will not embarrass them\n• You will not hide bad news\n• You make good decisions when unsupervised\n\nTrust is the currency behind opportunity.\n\nWhen people trust you, they give you:\n• Better projects\n• More autonomy\n• More information\n• More responsibility\n• More forgiveness\n• More sponsorship\n• More room to grow\n\nWhen trust is low, everything becomes harder.`
  },
  {
    id: 61,
    title: "Critical Reality Checks",
    icon: "🪞",
    tag: "Foundations",
    content: `Reality Check 1: Not every workplace is fair\nSometimes the best person does not get promoted. Sometimes politics wins. Sometimes loyalty is exploited. Sometimes management is incompetent. Sometimes the company's values are just posters.\nWisdom is not pretending the world is fair. Wisdom is seeing clearly and acting strategically.\n\nReality Check 2: You can do everything right and still lose\nA project can fail because of market conditions, bad leadership, budget cuts, politics, timing, strategy changes, external shocks, someone else's decision.\nDo not over-personalize every outcome. Own your part, but do not carry the whole system on your back.\n\nReality Check 3: Being liked is not the same as being respected\nBeing liked feels good. Being respected is more durable.\nAim to be: Warm but firm, Helpful but boundaried, Honest but tactful, Competent but humble, Ambitious but ethical.\n\nReality Check 4: Your company is not your family\nA healthy company can be supportive. But it is still an institution with business interests.\nFamily language at work can become manipulative when used to demand sacrifice without reciprocal care.\nA wise mindset: "I will contribute seriously, act ethically, build good relationships, and protect my long-term wellbeing."\n\nReality Check 5: Growth often feels uncomfortable\nGrowth may feel like: Being challenged, Receiving correction, Handling ambiguity, Taking responsibility, Failing publicly, Speaking up, Leading others, Leaving comfort, Letting go of old identity.\nDo not confuse discomfort with harm. But also do not confuse harm with growth. Wisdom knows the difference.`
  },
  {
    id: 62,
    title: "The Work Wisdom Checklist",
    icon: "✅",
    tag: "Tools",
    content: `Use this weekly.\n\nDirection:\n• Do I know what matters most this week?\n• Are my priorities aligned with my boss/team?\n• Am I working on value or just activity?\n\nExecution:\n• What must be delivered?\n• What is blocked?\n• What can be simplified?\n• What needs early feedback?\n\nCommunication:\n• Who needs an update?\n• What needs documenting?\n• What assumption should I clarify?\n\nRelationships:\n• Who do I need to build trust with?\n• Is there any tension I should address early?\n• Have I given credit where due?\n\nGrowth:\n• What did I learn this week?\n• What feedback did I receive?\n• What pattern should I improve?\n\nReputation:\n• What am I becoming known for?\n• Is that the reputation I want?\n\nSustainability:\n• Am I overloaded?\n• What boundary needs to be set?\n• Am I recovering properly?`
  },
  {
    id: 63,
    title: "The WISE Model",
    icon: "🦉",
    tag: "Tools",
    content: `The Final Practical Framework — Use this in almost any work situation.\n\nW — What is really happening?\nLook beyond the surface.\n• Is this a task issue?\n• People issue?\n• Politics issue?\n• Priority issue?\n• System issue?\n• Communication issue?\n\nI — Interests and incentives\nAsk:\n• Who cares?\n• Who benefits?\n• Who loses?\n• Who has power?\n• Who is afraid?\n• What is being rewarded?\n\nS — Strategic response\nChoose your move:\n• Act\n• Wait\n• Clarify\n• Escalate\n• Document\n• Negotiate\n• Challenge\n• Support\n• Leave\n\nE — Effect and ethics\nAsk:\n• What happens next?\n• Who is affected?\n• Is this honest?\n• Is this sustainable?\n• Will I respect this decision later?\n\nThat is workplace wisdom in motion.\n\n---\n\nBottom Line:\nWork wisdom is the art of creating value, building trust, reading reality clearly, communicating maturely, protecting your integrity, and knowing when to push, pause, adapt, or walk away.`
  }
];

const QUOTES = [
  { text: "Competence matters, but competence without judgment is fragile.", tag: "Foundations" },
  { text: "Being busy is not the same as being useful.", tag: "Commandments" },
  { text: "Memory is weak. Politics is strong.", tag: "Commandments" },
  { text: "Reputation is built slowly and damaged quickly.", tag: "Reputation" },
  { text: "The quality of your questions reveals the quality of your thinking.", tag: "Communication" },
  { text: "Calm is a workplace superpower. Not passive calm. Operational calm.", tag: "Resilience" },
  { text: "Trust is the currency behind opportunity.", tag: "Foundations" },
  { text: "Experience alone does not create wisdom. Reflected experience does.", tag: "Growth" },
  { text: "Praise is information, not identity.", tag: "Self-Awareness" },
  { text: "Quality is not perfection. Quality is fitness for purpose.", tag: "Execution" },
  { text: "Be warm with many, vulnerable with few, reckless with none.", tag: "Relationships" },
  { text: "Not every fire deserves your whole life.", tag: "Commandments" },
  { text: "A wise no protects quality, trust, and sanity. A foolish yes creates hidden failure.", tag: "Communication" },
  { text: "Smart people want recognition. Wise people build trust before demanding recognition.", tag: "Mindset" },
  { text: "Work wisdom is the art of creating value, building trust, reading reality clearly, and communicating maturely.", tag: "Foundations" },
  { text: "Cynicism sees everything as corrupt. Wisdom sees incentives clearly and still chooses integrity.", tag: "Character" },
  { text: "Your job is one chapter. Your career is the longer arc.", tag: "Career" },
  { text: "Patience is not passivity.", tag: "Mindset" },
  { text: "Self-awareness is not soft. It is strategic.", tag: "Self-Awareness" },
  { text: "Good work must be seen, understood, connected to business value, and delivered at the right time.", tag: "Foundations" },
  { text: "Loyalty is admirable. Blind loyalty is expensive.", tag: "Commandments" },
  { text: "Real confidence is calm.", tag: "Character" },
  { text: "Wise people are politically aware without becoming politically corrupt.", tag: "Politics" },
  { text: "A person with a grounded identity is harder to manipulate.", tag: "Self-Awareness" },
  { text: "Do not trade long-term integrity for short-term approval.", tag: "Character" },
  { text: "The wise question is: What level of quality is appropriate for this use?", tag: "Execution" },
  { text: "Know both the official map and the real terrain.", tag: "Strategy" },
  { text: "Hidden incompetence becomes trust damage.", tag: "Foundations" },
  { text: "Maturity is knowing which opinions require action.", tag: "Mindset" },
  { text: "Financial resilience gives you choices.", tag: "Career" },
  { text: "Relationship problems ignored long enough become political problems.", tag: "Relationships" },
  { text: "Hard is not the same as toxic.", tag: "Resilience" },
  { text: "Wise ambition says: Give me responsibility. I will create value, build trust, and grow.", tag: "Mindset" },
  { text: "Documentation is not paranoia. It is professional hygiene.", tag: "Commandments" },
  { text: "Wise speed produces a useful first version quickly so teams can align early.", tag: "Execution" }
];

// All questions flattened for rapid fire / search
const ALL_QUESTIONS = DECKS.flatMap(d => d.questions.map(q => ({ q, deck: d.title, deckId: d.id, color: d.color })));
