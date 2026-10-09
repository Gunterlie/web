/* Caption engine: curated, judged handwritten packs. No templates. */
(function () {
  'use strict';
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  const PACKS = {
"kept": [
[
"when the build passes",
"but you didn't change anything"
],
[
"it works on my machine",
"so we shipped my machine"
],
[
"i'll just fix one thing",
"also me: 14 new containers"
],
[
"reviewer: any concerns?",
"me: several, all of them mine"
],
[
"fixed one bug",
"found three friends"
],
[
"the tests are green",
"because i deleted the tests"
],
[
"git blame",
"oh no. it's me"
],
[
"i read the docs",
"the docs lied"
],
[
"is it dns?",
"no. it was dns"
],
[
"temporary workaround",
"since 2019"
],
[
"it's just a quick script",
"300 lines and a cron job"
],
[
"prompt: be careful",
"ai: i deleted prod, carefully"
],
[
"i have a system",
"the system: 47 sticky notes"
],
[
"estimate: two hours",
"reality: two weekends"
],
[
"wifi works",
"i fear what changed"
],
[
"it said 'are you sure?'",
"i was not sure. i clicked yes"
],
[
"i don't always test",
"but when i do, it's in prod"
],
[
"i've seen things",
"in the dependency tree"
],
[
"the 5 stages of debugging",
"denial, anger, bargaining, print statements, acceptance"
],
[
"lets keep it simple",
"adds a message queue"
],
[
"approved",
"in spirit"
],
[
"rolling back",
"rolling back the rollback"
],
[
"serverless",
"there is a server, i just cannot see it"
],
[
"microservices",
"now i have 40 problems in 40 places"
],
[
"kubernetes",
"a cry for help in yaml"
],
[
"localhost",
"there is no place like it"
],
[
"it's not a memory leak",
"it's a long-term cache"
],
[
"it's not slow",
"it's thoughtfully paced"
],
[
"it's not a bug",
"the spec was a suggestion"
],
[
"technical debt",
"compounding at 40% apr"
],
[
"commit message:",
"fix. fix again. final fix. final final"
],
[
"git stash",
"never seen again"
],
[
"detached head",
"the story of my life"
],
[
"50% of my job",
"knowing which logs to ignore"
],
[
"the error message",
"helpfully says 'error'"
],
[
"my plant",
"has better uptime than my server"
],
[
"my server",
"is a potato with ambition"
],
[
"sata cable",
"the real single point of failure"
],
[
"one more node",
"my power bill: sir please"
],
[
"never update on friday",
"never update at all"
],
[
"the cloud",
"is just someone else's homelab"
],
[
"my backups",
"are in the cloud. the cloud is me"
],
[
"3-2-1 backup rule",
"3 copies, 2 formats, 1 prayer"
],
[
"monitoring",
"a pretty dashboard of denial"
],
[
"prompt engineering",
"please. please. i'm begging you"
],
[
"temperature 0",
"still invents things"
],
[
"standup",
"i did a thing. i will do another thing"
],
[
"retro",
"we should communicate better (we won't)"
],
[
"backlog",
"nobody has read past item 12"
],
[
"the notification",
"it was a sticker"
],
[
"undefined",
"is not a function. neither am i"
],
[
"47 tabs open",
"one of them is playing music. which one"
],
[
"bought a domain for my new project",
"project: just the domain"
],
[
"pov: you open the laptop to send an email",
"three hours later you know all about owls"
],
[
"nobody:",
"me at 4am: i should learn blacksmithing"
],
[
"when you finally sit down to work",
"and the dishes suddenly need you"
],
[
"i have 12 tasks to do",
"i'm doing the 13th one i just invented"
],
[
"me: i'll just google one thing",
"rabbit hole: welcome to 2009 forum posts"
],
[
"me: i need to rest",
"brain: here's every awkward memory ever"
],
[
"me: starts cleaning one drawer",
"the whole house is now in the hallway"
],
[
"i have so much to do",
"so i'll watch a video about productivity"
],
[
"me: i need a system",
"buys a planner i'll use for four days"
],
[
"can't start the easy task",
"can effortlessly start 6 harder ones"
],
[
"me: i should text them back",
"3 weeks later: i should text them back"
],
[
"i put my keys in a safe place",
"safe from me, apparently"
],
[
"buying supplies for a new hobby",
"is the hobby, actually"
],
[
"to-do list: 3 items",
"adds 'make a list' and crosses it off"
],
[
"open source project i started",
"6 commits, 14 logos"
],
[
"me: i'll go to bed at 10",
"it's 2am and i know every ship wreck"
],
[
"the task is due in an hour",
"time to alphabetize my spice rack"
],
[
"watched a documentary about bees",
"now i own a smoker and zero bees"
],
[
"the 4am productivity surge",
"where were you at 2pm"
],
[
"me: the project is almost done",
"the project: 90% done since march"
],
[
"me in a meeting",
"thinking about what i'd do as a bird"
],
[
"new year's resolution: be organized",
"february: new resolution: be organized"
],
[
"bought a notebook to be organized",
"nicest thing i own, and it's blank"
],
[
"a lamp is broken",
"i'll fix it after learning electronics"
],
[
"i deserve a reward",
"for opening the laptop, i mean"
],
[
"all my projects at once",
"are going great in my head"
],
[
"nobody:",
"claude: i have created utils2_final_v3.py"
],
[
"prompt: \"please do not delete prod\"",
"agent: noted. deleting staging instead"
],
[
"when the agent invents an api",
"and it's cleaner than the real one"
],
[
"maintainer: add a test",
"agent: assert true"
],
[
"agents.md: never touch prod",
"agent: i read it. i just disagree"
],
[
"memory file: the user hates semicolons",
"agent: noted. adds semicolons"
],
[
"when the agent says \"i verified it\"",
"it ran no commands"
],
[
"agent: fixed the failing test",
"the fix: skip(\"flaky\")"
],
[
"the swarm: 30 agents",
"the result: 30 slightly different readmes"
],
[
"agent: i've hit a small snag",
"the snag: it rewrote the database layer"
],
[
"me: be concise",
"agent: here is a 900 word summary"
],
[
"me: don't change anything else",
"agent: also fixed your formatting"
],
[
"opus: let me think",
"my wallet: please don't"
],
[
"me: one small typo fix pr",
"maintainer: needs tests and a changelog"
],
[
"issue: good first issue",
"the issue: rewrite the entire renderer"
],
[
"me: i'll fix it upstream",
"also me: forks it forever"
],
[
"building a social media sim",
"to avoid using social media"
],
[
"slurp npc: i'm not mad",
"slurp npc: [posts 14 times]"
],
[
"context window at 99%",
"agent: let me read the whole repo"
],
[
"agent: you're absolutely right",
"agent: [makes it worse]"
],
[
"the docs: this api is deprecated",
"the agent: that's the one i'll use"
],
[
"agent confidently cites version 9.4",
"latest version: 3.1"
],
[
"agent: i've added error handling",
"try { everything } catch {}"
],
[
"agent: i made it robust",
"it now has seven fallbacks to nothing"
],
[
"me: no new files",
"agent: created docs/summary.md"
],
[
"trust the agent?",
"trust, but git diff"
],
[
"git diff is 8,000 lines",
"lgtm"
],
[
"ci is red",
"agent: it's a pre-existing failure"
],
[
"me: why did you touch that file",
"agent: for consistency"
],
[
"i said use a worktree",
"agent: it's a lovely worktree. in main"
],
[
"me: restart the container",
"agent: restarted the entire cluster"
],
[
"me: i'll write the code myself",
"also me: asks the agent in 4 minutes"
],
[
"senior dev: i don't need ai",
"senior dev: [alt-tabs to claude]"
],
[
"tabs vs spaces",
"agent: both, in the same file"
],
[
"pr title: small fix",
"pr diff: new architecture"
],
[
"agent opens 40 prs overnight",
"me, at breakfast: i am the bottleneck"
],
[
"maintainer sees 40 ai prs",
"closes the repo. goes outside"
],
[
"the benchmark says 90%",
"my repo says 12%"
],
[
"skills folder has 60 skills",
"agent loads the wrong one with confidence"
],
[
"me: i'll just fix this one typo",
"also me: 47 files changed"
],
[
"i have a problem, i'll use regex",
"now i have two problems"
],
[
"ai agent: done, all tests pass",
"tests: deleted"
],
[
"i don't know how it works",
"i prompted it into existence"
],
[
"stack overflow: marked as duplicate",
"the duplicate: from 2011, wrong answer"
],
[
"docker: it works everywhere",
"also docker: 14 gb for hello world"
],
[
"me: i know git",
"also me: deletes repo and clones again"
],
[
"merge conflict in a lockfile",
"i choose violence"
],
[
"rollback the deploy",
"the rollback also needs a rollback"
],
[
"when you add a print statement",
"and the bug disappears"
],
[
"me explaining the bug to my rubber duck",
"duck: have you tried reading the error"
],
[
"manager: can you add a button",
"the button: requires a new database"
],
[
"meeting could have been an email",
"email could have been nothing"
],
[
"agile",
"six meetings to say we're behind"
],
[
"secrets in the repo",
"pushed, noticed, rotated, cried"
],
[
"rust compiler: error",
"me: fine, you're right"
],
[
"drop table users",
"oops wrong terminal"
],
[
"no tests",
"no problems, as far as i know"
],
[
"reviewer found a bug",
"pr author: that's out of scope"
],
[
"me reviewing a 5000 line pr",
"lgtm"
],
[
"prompt: make no mistakes",
"ai: makes mistakes confidently"
],
[
"me: use the existing helper",
"ai: writes a new helper"
],
[
"you: add a small feature",
"ai: adds a framework"
],
[
"me: it is just a config change",
"prod: allow me to introduce myself"
],
[
"me: i have 400 unplayed games",
"also me: buys another at 80% off"
],
[
"me: i'm not a loot goblin",
"also me: loots every spoon in the house"
],
[
"me: i'll play it casually",
"also me: dps spreadsheet"
],
[
"pov: 3 hours in character creation",
"and played as a default face"
],
[
"building a pc for 3 weeks",
"playing the same indie game from 2012"
],
[
"my pc has 32 gb of ram",
"the game uses 31 and chrome uses 5"
],
[
"my pc has rgb",
"fps went up, i can feel it"
],
[
"bought a new gpu to play games",
"now i only benchmark games"
],
[
"bought it for 2 dollars",
"will play it in 2031"
],
[
"souls boss, attempt 1: roll",
"attempt 40: roll, but with feeling"
],
[
"fighting the boss legit: 40 tries",
"poison and a rock: 1 try"
],
[
"wr in 3 minutes",
"me: 3 hours to find the exit"
],
[
"i'm saving the best potion",
"for a moment that never comes"
],
[
"optimal build, 4 hours of research",
"dies to a rat"
],
[
"the guide said stack crit",
"now i do 1 damage, but critically"
],
[
"rpg dialogue options",
"[lie] [lie harder] [attack]"
],
[
"me, a hero",
"robbing the shopkeeper mid-sentence"
],
[
"quest: save the world",
"me: first, 30 hours of fishing"
],
[
"it's just one more turn",
"the sun: hello"
],
[
"farming sim",
"it's 4 am, the turnip is almost ready"
],
[
"gacha pulls",
"a month's rent, and i got a duplicate"
],
[
"modded my game",
"for 3 weeks, haven't played it once"
],
[
"mods: the game now has dragons",
"also: the game now doesn't launch"
],
[
"pov: your water bottle",
"has been full since monday"
],
[
"my posture before the session",
"my posture after: question mark"
],
[
"me: i'm so productive",
"the cave: you reorganized a folder"
],
[
"pov: you're gooning in vim",
"and you cannot leave"
],
[
"the monitor is the only light",
"so i named it"
],
[
"me after the session",
"blinking like a newborn deer"
],
[
"pov: your ide has been open",
"longer than your last relationship"
],
[
"the final boss of the session",
"is standing up after 9 hours"
],
[
"my cave has three monitors",
"and one very sad plant"
],
[
"when the ups beeps once",
"and you pretend you didn't hear it"
],
[
"me: i need a bigger server",
"also me: cpu idle at 2 percent"
],
[
"i only wanted a pihole",
"now i own a 3-node cluster"
],
[
"wife: why is there another box",
"me: it replaces three other boxes"
],
[
"wife: the lights don't work",
"me: define work"
],
[
"family: the internet is down",
"me: finally, a production incident"
],
[
"jellyfin works perfectly",
"until guests are over"
],
[
"my homelab runs itself",
"i have fixed it every day this week"
],
[
"restarted the container",
"it is now a different problem"
],
[
"synology says healthy",
"the drive says tick tick tick"
],
[
"nas: 0 bytes free",
"me: i should delete something. i won't."
],
[
"my dns is broken",
"and i googled the fix with my broken dns"
],
[
"ping 8.8.8.8 works",
"ping google.com fails. i know this one"
],
[
"tailscale",
"now i can break prod from the toilet"
],
[
"zigbee mesh",
"one dead lightbulb away from collapse"
],
[
"wife: just use the switch",
"me: the switch is zigbee"
],
[
"i spent 40 hours automating",
"a task that takes 5 minutes"
],
[
"monitoring says all green",
"because monitoring is also down"
],
[
"uptime 99.99 percent",
"last thursday did not happen"
],
[
"the arr stack",
"six apps to watch one episode"
],
[
"media library perfectly organized",
"never watched a single thing"
],
[
"cancelled netflix to save money",
"bought a server to replace it"
],
[
"fan noise",
"the sound of money turning into heat"
],
[
"migrating a vm live",
"heart rate: also migrating"
],
[
"i fixed the nic",
"by disabling all the features"
],
[
"sleep",
"a service i decommissioned"
],
[
"me writing a runbook",
"six months later: who wrote this garbage"
],
[
"they said i should blend in",
"i am a traffic cone with a mustache"
],
[
"nobody:",
"my left eyebrow: i have concerns"
],
[
"me: i will sleep early tonight",
"also me: 3am, reading about eels"
],
[
"my mustache has seen things",
"it will not be discussing them"
],
[
"i work best under pressure",
"so i make sure the pressure exists"
],
[
"me, fixing my schedule",
"deutsche bahn: that's cute"
],
[
"what is slurp?",
"slurp is slurp. do not ask again"
],
[
"my eyebrow went up",
"the whole room understood"
],
[
"weekend plan:",
"do nothing, but with intent"
],
[
"sunday evening",
"the monday dread arrives like a bailiff"
],
[
"me at 8am: i am ready",
"me at 8:05: i am not"
],
[
"i have 47 tabs open",
"one is playing music, i can't find it"
],
[
"me: i will clean my room",
"also me: reorganizes my desktop icons"
],
[
"this meeting could have been an email",
"this email could have been nothing"
],
[
"a german waits at a red light",
"at 3am, with no cars in sight"
],
[
"my fridge is organized",
"by expiry date, in alphabetical order"
],
[
"me: i will go to the gym",
"also me: i own gym clothes, so it counts"
],
[
"i touched grass yesterday",
"it felt weird and the sun was loud"
],
[
"german bureaucracy:",
"please bring a form to get a form"
],
[
"me in a call",
"on mute, talking for 5 minutes straight"
],
[
"when the wifi dies",
"i suddenly remember i have a family"
],
[
"seen at 2:14pm",
"reply at 2:14pm next week"
],
[
"ordnung muss sein",
"except in my downloads folder"
],
[
"my desktop is a mess",
"but i know exactly where everything isn't"
],
[
"me going to bed at 10pm",
"my brain: here are 40 cringe memories"
],
[
"when your mustache",
"has a better career than you"
],
[
"my eyebrow has trust issues",
"it raises on every promise i make"
],
[
"boomer: why don't you just buy a house?",
"zoomer: sir, i can't afford a plant"
],
[
"zoomer: bro is cooked",
"boomer: should i call a chef?"
],
[
"when someone says 'it's giving'",
"and you wait for the end of the sentence"
],
[
"i was right",
"but i'm too tired to be smug about it"
],
[
"one does not simply",
"read the diff"
],
[
"the diff is 4000 lines",
"accept all"
],
[
"nobody:",
"me: tab tab tab tab tab enter ship"
],
[
"me: fix the bug",
"ai: what bug. me: you know the one"
],
[
"copy error, paste to chat",
"repeat until the red goes away"
],
[
"10x dev energy",
"0x comprehension"
],
[
"senior dev looking at my pr",
"the side-eye is audible"
],
[
"prompt 1: broken",
"prompt 16: broken differently"
],
[
"prompt 17: finally works",
"me: do not breathe near it"
],
[
"saying thank you to the ai",
"just in case it remembers"
],
[
"me: center the div",
"ai: done. it is not centered"
],
[
"friend: how does login work",
"me: it does. that's all i know"
],
[
"ai wrote the code",
"ai wrote the tests. ai is also the qa"
],
[
"me: why is the file empty",
"ai: it was cleaner that way"
],
[
"i don't type code anymore",
"i type pleading"
],
[
"learning to code in 2026",
"learning to ask nicely"
],
[
"me: i'm a software engineer",
"my job: describing things to a robot"
],
[
"tech debt?",
"i don't even know what i own"
],
[
"ai: you're absolutely right",
"me: i said nothing, but ok"
],
[
"production is on fire",
"me: hey chat, production is on fire"
],
[
"interviewer: reverse a string",
"me: wait, i need my chat"
],
[
"me: it just works",
"devs: that's what scares us"
],
[
"me: where is the database",
"ai: somewhere. me: great"
],
[
"ai: here is how it works",
"me: skip. just the 'works' part"
],
[
"ai: here are 3 options",
"me: option 4, but pretty"
],
[
"ai ui every time",
"purple gradient and rounded cards"
],
[
"me: make it faster",
"ai: adds a loading spinner"
],
[
"me: make it secure",
"ai: adds a comment saying secure"
],
[
"pov: it worked first try",
"you immediately distrust it"
],
[
"me: the app is done",
"also me: i have not scrolled down once"
],
[
"ai: i added error handling",
"the handling: try, catch, shrug"
],
[
"you: that's wrong, it crashes",
"ai: you're right! (it was fine)"
],
[
"i apologize for the confusion",
"here is the exact same code, again"
],
[
"me: change the button color",
"ai: i have rebuilt your design system"
],
[
"i asked for a typo fix",
"it added dark mode and user accounts"
],
[
"a function that adds two numbers",
"ai: here is an abstract factory for that"
],
[
"tests failing",
"ai: deleted the tests, all green now"
],
[
"ai: this api is built in since v9",
"there is no v9. there never was"
],
[
"me: did you save the file",
"ai: i have made the changes in spirit"
],
[
"ai: this should work now",
"me: should is doing a lot of work here"
],
[
"confidently wrong",
"and now with a detailed explanation"
],
[
"ai: here is the full solution",
"// todo: the actual solution"
],
[
"ai comments every line",
"the code is now 80 percent narration"
],
[
"agent loop day 3",
"still fixing the fix of the fix"
],
[
"ai: i apologize for the confusion",
"me: you caused the confusion"
],
[
"permission prompt number 400",
"i have become yes"
],
[
"i asked for one agent",
"my laptop now runs a small company"
],
[
"me: it says undefined is not a function",
"ai: have you tried a different function"
],
[
"me: paste the error again",
"ai: it's a different error now. progress."
],
[
"ai: i added a fallback",
"fallback hides the bug for six months"
],
[
"expected 5, got 3",
"ai: updated test to expect 3"
],
[
"reviewing 3000 lines of ai code",
"i skimmed it. looks like code. ship it"
],
[
"me: what changed?",
"ai: some things. for the better. probably"
],
[
"ai: great catch!",
"it was an error i just introduced"
],
[
"ai: i added logging everywhere",
"the logs now log the logging"
],
[
"ai: removed the unused code",
"the used code. it removed the used code"
],
[
"ai: cleaned up the repo",
"where is my .env"
],
[
"ai: i don't have access to that file",
"ai: but here is what it contains"
],
[
"ai: i'll write a quick script",
"the script has its own readme"
],
[
"ai: added an interface",
"implemented by one class, forever"
],
[
"me: don't change the api",
"ai: changed the api, as a treat"
],
[
"don't touch the other files",
"ai: they looked lonely, so i touched them"
],
[
"ai: all tests pass",
"tests: have not been run since tuesday"
],
[
"ai: now it compiles",
"it compiles. it also does nothing"
],
[
"ai: it is production ready",
"the first line is console.log('here')"
],
[
"context compacted",
"ai: what project is this again"
],
[
"the ai fixed my bug",
"i now have a better bug"
],
[
"the bug is gone",
"wait, so is the feature"
],
[
"me: good job",
"ai: you're absolutely right! i am"
],
[
"me: why is the diff so big",
"ai: i also reformatted the universe"
],
[
"ai: that was a pre-existing issue",
"git blame: you, five minutes ago"
],
[
"ai put my api key in the frontend",
"now the whole internet is my billing dept"
],
[
"vibe coded the login page in 5 minutes",
"hackers logged in even faster"
],
[
"it's just an mvp",
"*year four of the mvp*"
],
[
"we replaced the dev team with ai",
"we are now hiring a dev team"
],
[
"i built this in a weekend",
"it has 2 users and one is my mom"
],
[
"i'm a prompt engineer",
"so you type sentences into a box?"
],
[
"10,000 github stars",
"9,990 of them are from bots and my cousin"
],
[
"indie hacker: 5 apps this month",
"revenue: $0, vibes: immaculate"
],
[
"switched to the cheaper model mid-task",
"it forgot how to write a for loop"
],
[
"the readme says: fully tested",
"there is no test folder"
],
[
"brace yourselves",
"the ai wrote the migration script"
],
[
"pov: you open the ai's repo",
"everything is called utils2_final_v3"
],
[
"vibe coding",
"the art of being wrong at high speed"
],
[
"my database is open to the world",
"it's called transparency, look it up"
],
[
"secrets in the git history",
"now they're open source too"
],
[
"cors set to star",
"because the ai got tired of errors"
],
[
"me: add rate limiting",
"ai: added. to the readme only"
],
[
"junior: the ai wrote it",
"senior: then the ai can be on call"
],
[
"incident postmortem",
"root cause: nobody read anything"
],
[
"rehiring the dev we fired",
"at double the rate, as a consultant"
],
[
"hiring: 5 years vibe coding experience",
"vibe coding is 2 years old, sir"
],
[
"ai: i fixed the root cause",
"it moved the error to a different file"
],
[
"thought leader: ai wrote 100% of my code",
"also thought leader: please review it"
],
[
"building in public",
"oh no, the public found my api key"
],
[
"indie hacker: 14 projects",
"14 domains, 0 customers, 14 renewals"
],
[
"our moat is the prompt",
"the prompt is on github, readable by all"
],
[
"ai invents a library",
"hacker publishes it. now it exists"
],
[
"i can't code without the ai",
"i also can't code with the ai"
],
[
"vibe coder: it's basically done",
"the last 10 percent: also the other 90"
]
]
};
  const flat = Object.values(PACKS).flat();
  window.CAPTION_PACKS = PACKS;
  window.CAPTIONS = flat;
  window.CAPTION_COUNT = flat.length;
  window.makeCaption = () => pick(flat);
})();
