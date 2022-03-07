require("./config/db.connections");
const Article = require("./models/article");

const articleData = [
  {
    title: "The Strength of Being Misunderstood",
    author: "Sam Altman",
    url: "https://blog.samaltman.com/the-strength-of-being-misunderstood",
    description:
      "You should trade being short-term low-status for being long-term high-status, which most people seem unwilling to do. A common way this happens is by eventually being right about an important but deeply non-consensus bet. But there are lots of other ways–the key observation is that as long as you are right, being misunderstood by most people is a strength not a weakness. You and a small group of rebels get the space to solve an important problem that might otherwise not get solved.",
  },
  {
    title: "No Meetings, No Deadlines, No Full-Time Employees",
    author: "Sahil Lavingia",
    url: "https://sahillavingia.com/work",
    description:
      "The internet has enabled new ways of working, but we’re just starting to see them unfold. There are a lot of different ways to make work work.",
  },
  {
    title: "Don’t Underestimate the Power of a Walk",
    author: "Deborah Grayson Riegel",
    url: "https://hbr.org/2021/02/dont-underestimate-the-power-of-a-walk",
    description:
      "According to the Centers for Disease Control and Prevention, a single bout of moderate-to vigorous activity (including walking) can improve our sleep, thinking, and learning, while reducing symptoms of anxiety.",
  },
  {
    title: "The Diderot Effect: Why We Buy Things We Don’t Need",
    author: "Anne-Laure Le Cunff",
    url: "https://nesslabs.com/the-diderot-effect",
    description:
      "Did you really need everything you bought? Except if you are one of the most extreme minimalists out there, the answer is likely to be: probably not. Even so, we keep on buying new products, upgrading to the latest version, and filling our lives with possessions we don’t need. That’s the Diderot Effect at play: a tendency to over consume, mostly caused by our natural need for betterment.",
  },
  {
    title:
      "Secrets about People: A Short and Dangerous Introduction to René Girard",
    author: "Alex Danco",
    url: "https://alexdanco.com/2019/04/28/secrets-about-people-a-short-and-dangerous-introduction-to-rene-girard/",
    description:
      "The more we understand about the world around us, the less it seems we understand about people and the way they are. This post is an introduction to one man, named René Girard, who bucked this trend: his perception of the nature of behaviour is like a laser that goes right to the core of the human condition.",
  },
  {
    title: "I assume I'm Below Average",
    author: "Derek Sivers",
    url: "https://sive.rs/below-average",
    description:
      "To assume you’re below average is to admit you’re still learning. You focus on what you need to improve, not your past accomplishments.",
  },
  {
    title: "How to Think for Yourself",
    author: "Paul Graham",
    url: "http://www.paulgraham.com/think.html",
    description:
      "Independent-mindedness seems to be more a matter of nature than nurture. Which means if you pick the wrong type of work, you're going to be unhappy. If you're naturally independent-minded, you're going to find it frustrating to be a middle manager. And if you're naturally conventional-minded, you're going to be sailing into a headwind if you try to do original research.",
  },
  {
    title: "The Perfect Number of Hours to Work Every Day? Five",
    author: "Margaret Taylor",
    url: "https://www.wired.co.uk/article/working-day-time-five-hours",
    description:
      "Research indicates that five hours is about the maximum that most of us can concentrate hard on something,” says Alex Pang, founder of Silicon Valley consultancy Strategy and Rest and author of several books examining the links between shorter working hours and productivity. “There are periods when you can push past that, but the reality is that most of us have about that good work time in us every day.",
  },
  {
    title:
      "Learned Helplessness: How to Stop Feeling Like Everything Is Out of Your Control",
    author: "Itamar Shatz",
    url: "https://effectiviology.com/learned-helplessness/",
    description:
      "Learned helplessness is a state of mind where someone believes that they are unable to act effectively, especially when it comes to avoiding negative outcomes, following their past experiences.",
  },
  {
    title:
      "The Availability Bias: How to Overcome a Common Cognitive Distortion",
    author: "Farnman Street",
    url: "https://fs.blog/availability-bias-cognitive-distortion/",
    description:
      "The availability heuristic explains why winning an award makes you more likely to win another award. It explains why we sometimes avoid one thing out of fear and end up doing something else that’s objectively riskier. It explains why the five people closest to you have a big impact on your worldview.",
  },
  {
    title: "The Hedonic Treadmill - Are We Forever Chasing Rainbows?",
    author: "Seph Fontane Pennock",
    url: "https://positivepsychology.com/hedonic-treadmill/",
    description:
      "The hedonic treadmill (also known as hedonic adaptation) is a theory positing that people repeatedly return to their baseline level of happiness, regardless of what happens to them.",
  },
  {
    title: "The Attention Diet",
    author: "Mark Manson",
    url: "https://markmanson.net/attention-diet",
    description:
      "Distractions have become so pervasive in the digital age that we've come to accept them as normal. Here's how we can escape their grip and free our minds a little.",
  },
  {
    title: "The Placebo Effect: Mind Over Matter",
    author: "Aperture",
    url: "https://aperture.gg/blogs/the-universe/the-placebo-effect-mind-over-matter",
    description:
      "The mind can hold tremendous power over our bodies. People walking over burning coal with no sign of pain, seemingly average people achieving feats of superhuman strength, or even just the everyday Joe overcoming tremendous adversity - we’ve all heard the stories. This influence of the mind is often undermined and even brushed aside as wishful thinking.",
  },
  {
    title:
      "“Reality” is Constructed by Your Brain. Here’s What That Means, and Why it Matters.",
    author: "Brian Resnick",
    url: "https://www.vox.com/science-and-health/20978285/optical-illusion-science-humility-reality-polarization",
    description:
      "Most of the time, the story our brains generate matches the real, physical world — but not always. Our brains also unconsciously bend our perception of reality to meet our desires or expectations. And they fill in gaps using our past experiences.",
  },
  {
    title: "Introduction to Effective Altruism",
    author: "Effective Altruism",
    url: "https://www.effectivealtruism.org/articles/introduction-to-effective-altruism",
    description:
      "Most of us want to make a difference. We see suffering, injustice and death, and are moved to do something about them. But working out what that ‘something’ is, let alone actually doing it, can be a difficult and disheartening challenge. Effective altruism is a response to this challenge.",
  },
  {
    title: "Hustle Culture and the Big Lies of Success",
    author: "Ed Z",
    url: "https://ez.substack.com/p/hustle-culture-and-the-big-lies-of?s=r",
    description:
      "The “just work harder” mantra is the specific core of hustle culture because it is a holistic system - the hustle culture influencer with his fancy cars got here by working hard every second of his life, and you could do it too, if you would only work harder and, of course, take the advice of the influencer in question. They claim to have the secrets to mastering a particular thing to make a large amount of money, and all you need to do is join whatever course or Webinar they’re selling.",
  },
  {
    title: "The Joys of Being an Absolute Beginner – For Life",
    author: "Tom Vanderbilt",
    url: "https://www.theguardian.com/lifeandstyle/2021/jan/07/the-joys-of-being-an-absolute-beginner-for-life",
    description:
      "The phrase ‘adult beginner’ can sound patronizing. It implies you are learning something you should have mastered as a child. But learning is not just for the young.",
  },
  {
    title: "Keep Redefining What You Do",
    author: "Naval Ravikant",
    url: "https://nav.al/redefining",
    description:
      "Some of the more successful people in the world are that way. Oprah gets paid for being Oprah. Joe Rogan gets paid for being Joe Rogan. They’re being authentic to themselves. When you’re searching for what to do, you have two different foci to keep in mind. One is, “I want to be the best at what I do.” The second is, “What I do is flexible, so that I’m the best at it.",
  },
  {
    title: "On Digital Minimalism",
    author: "Cal Newport",
    url: "https://www.calnewport.com/blog/2016/12/18/on-digital-minimalism/",
    description:
      "Digital minimalism is a philosophy that helps you question what digital communication tools (and behaviors surrounding these tools) add the most value to your life. It is motivated by the belief that intentionally and aggressively clearing away low-value digital noise, and optimizing your use of the tools that really matter, can significantly improve your life.",
  },
  {
    title: "How to Deal with Information Overload",
    author: "Neil Kakkar",
    url: "https://neilkakkar.com/Dealing-with-information-overload.html",
    description: "Ideas on optimizing your content and filters.",
  },
  {
    title: "Work on What Matters.",
    author: "Will Larson",
    url: "https://lethain.com/work-on-what-matters/",
    description:
      "We all have a finite amount of time to live, and within that mortal countdown we devote some fraction towards our work. Even for the most career-focused, your life will be filled by many things beyond work: supporting your family, children, exercise, being a mentor and a mentee, hobbies, and so the list goes on. This is the sign of a rich life, but one side-effect is that time to do your work will become increasingly scarce as you get deeper into your career.",
  },
  {
    title: "Strategic Dominance: A Guide to Dominant and Dominated Strategies",
    author: "Itamar Shatz",
    url: "https://effectiviology.com/strategic-dominance/",
    description:
      "Strategic dominance is a state in game theory that occurs when a strategy that a player can use leads to better outcomes for them than alternative strategies.",
  },
  {
    title: "The Ladders of Wealth Creation",
    author: "Nathan Barry",
    url: "https://nathanbarry.com/wealth-creation/",
    description:
      "In this model the potential earnings increase the higher up each ladder you climb. They also increase as you move left to right to more advanced ladders. But the difficulty increases with each move as well.",
  },
  {
    title: "The Science Behind Building General Skills",
    author: "Scott H. Young",
    url: "https://www.scotthyoung.com/blog/2021/05/11/general-skills/",
    description:
      "How do you build general skills? Abilities that not only help you with a narrow problem, but ones that you can apply repeatedly to problems in your life? Many of our goals, whether its becoming a better programmer, a savvier business leader or more original artist are of this type.",
  },
  {
    title: "A Realistic Guide to Time Management",
    author: "Fadeke Adegbuyi",
    url: "https://blog.doist.com/time-management/",
    description:
      "Time management tips that actually work for efficiently allocating your hours in a day towards your priorities in work and life.",
  },
  {
    title: "Curb Your Ethnocentrism",
    author: "Prakash Santhanam",
    url: "https://www.hrexchangenetwork.com/hr-talent-management/articles/curb-your-ethnocentrism",
    description:
      "Ethnocentrism is an individual’s obstinate belief that one’s own culture is superior to the rest. It is the inclination to look at the world primarily from the perspective of one’s own culture. The negative mindset of establishing cultural superiority needs to be erased and undoubtedly this destructive approach contributes to needless clash at workplace.",
  },
  {
    title: "The Art of Having an Informed Opinion",
    author: "Farnman Street",
    url: "https://fs.blog/opinions-on-everything/",
    description:
      "One problem with opinionated people is their inability to calibrate those opinions to outcomes. And if you can't change your mind, you can't progress.",
  },
  {
    title: "80/20 is The New Half-Ass",
    author: "swyx",
    url: "https://www.swyx.io/8020",
    description:
      "Don't spend your life spraying 20% effort all over the place, hoping for 80% results, only to look back and wonder why you never hit 100% on anything.",
  },
  {
    title: "The Illusion of Explanatory Depth ",
    author: "The Decision Lab",
    url: "https://thedecisionlab.com/biases/the-illusion-of-explanatory-depth",
    description:
      "The illusion of explanatory depth (IOED) describes our belief that we understand more about the world than we actually do. It is often not until we are asked to actually explain a concept that we come face to face with our limited understanding of it.",
  },
  {
    title: "Zero Knowledge Proof: Explain it Like I’m 5",
    author: "Cossack Labs",
    url: "https://hackernoon.com/eli5-zero-knowledge-proof-78a276db9eff",
    description:
      "Trusting personal information to online services makes us vulnerable to abuse. However, unless you’re an IT professional, it is very hard to understand what “safety” means for each service you use. If you want to make sure that you are truly protecting your private data – you should go for services that use Zero-Knowledge encryption.",
  },
  {
    title: "Data is Everywhere",
    author: "Rishal Hurbans",
    url: "https://rhurbans.com/data-is-everywhere/",
    description:
      "Data is everywhere. Data is defined as “information, especially facts or numbers, collected to be examined, considered and used to help decision-making”. We're unconsciously using data all the time - you're consuming this piece of data right now.",
  },
  {
    title:
      "Applying Spaced Repetition and Active Recall to Books to Hack Your Brain",
    author: "Daniel Doyon",
    url: "https://blog.readwise.io/hack-your-brain-with-spaced-repetition-and-active-recall/",
    description:
      "Active recall (also known as quizzing, testing, or retrieval) is the process by which we challenge our minds to retrieve a piece of information rather than passively reviewing or re-reading the same.",
  },
  {
    title: "Archaeologists May Have Found The World’s Oldest Home",
    author: "Christopher McFadden",
    url: "https://interestingengineering.com/archaeologists-may-have-found-the-worlds-oldest-home",
    description:
      "Archaeologists have confirmed what might be the oldest home in hominin history. Hominins include humans and our distant evolutionary ancestors. Called Wonderwerk Cave, it is located in the Kalahari Desert, South Africa, and shows evidence of continuous occupation for several million years. Not only that, but the cave also shows signs of the earliest evidence of the use of fire.",
  },
];

const seedDB = async () => {
  await Article.insertMany(articleData);
};

seedDB();
