/* Caption engine: themed handwritten packs (dev, homelab, gaming, adhd, ...) plus a few templates whose every combination makes sense. */
(function () {
  'use strict';
  const pick = (a) => a[Math.floor(Math.random() * a.length)];

  const S = ["the build passes on the first try","someone says 'quick question'","the wifi dies mid-deploy","i see a 4000 line PR","the tests pass locally","the meeting could have been an email","prod goes down at 5pm","the intern merges to main","i find my own old code","the coffee machine is empty","i open the logs","the ai agrees with me","the ai disagrees with me","someone says 'it's a small change'","docker pull takes forever","the cert expires","i forgot to save","ctrl+s does nothing","the cron job fires at 3am","i hit 100 browser tabs","the backup actually restores","my code works and i don't know why","my code breaks and i don't know why","dns gets blamed","someone says 'just use kubernetes'","the pager goes off","the update bricks everything","the reviewer writes 'nit:'","it's friday 17:59","i see 'undefined'","my agent says 'done!'","the agent is not done","the router needs a reboot again","i find a todo from 2019","the repo has 900 open issues","the staging env is also prod","someone force-pushes to main","the build is red and nobody knows why","the fan gets loud","the disk is 99% full","the container restarts for no reason","the yaml has a tab in it","the readme is a lie","the dependency updates itself","i said 'i'll fix it later'","the mustache twitches","the eyebrows go up","the log says 'everything is fine'","i accidentally learn something","the swap is full again","someone asks for the roadmap","i get a notification at 3am","the plan survives contact with reality (it didn't)","an agent deletes the wrong branch","the free tier is over","i discover a new framework","my side project gets a star"];
  const R = ["smug orange noises","slurp.","one eyebrow rises 2mm","this is fine","calm. the mustache twitches","simply logs off","gunterlie sees all","pretends it was planned","opens a new terminal. new life","ships it anyway","blames dns","touches no grass. only keyboard","screams in orange","stares into the middle distance","unironically proud","tries again, same way, louder","accepts fate","orders more ram","adds another container","deletes the evidence","shrugs in yaml","sudo shrug","makes loud mustache sounds","goes feral","goblin mode engaged","ascends","does a little dance","reboots. hopes. reboots again","writes a 3 page postmortem about nothing","buys a new mini pc","turns the monitor off to feel safer","opens the editor like nothing happened","laughs in orange","goes full gigachad","hides under the desk","blames the cat","calls it a feature","whispers 'skill issue'","mutters 'it worked yesterday'","commits anyway"];
  const O = ["ship on a friday","touch the config","restart the router at noon","update everything at once","read the changelog","explain the homelab to family","stop at one container","delete node_modules","rm -rf without crying","close 47 tabs","merge without a conflict","comment the code","name a variable well","estimate a task","leave a test flaky","unplug the nas","read the whole yaml","trust the cache","stay on topic","walk away from a bug","fix just one thing","use one monitor","reboot just once","skip the postmortem","answer 'quick question'","avoid the rabbit hole","say no to a new framework","stop at one tab"];
  const P = [["kubernetes","docker compose with a bigger budget"],["microservices","functions with network latency"],["the cloud","someone else's computer"],["ai","autocomplete with confidence"],["devops","ops with a rebrand"],["a monorepo","a very big folder"],["blockchain","a slow database"],["serverless","a server you can't see"],["agile","meetings with stickers"],["scrum","standups with extra steps"],["a homelab","a hobby that scales your power bill"],["yaml","json with shame"],["git","ctrl+z with feelings"],["prod","test with consequences"],["a feature","a bug with a pr"],["a framework","a library that got ideas"],["vibe coding","coding with extra anxiety"],["a rewrite","the same bugs, but new"],["the cloud bill","rent for a server you forgot"],["a cron job","a time bomb with a schedule"],["a backup","a hope with a timestamp"],["docker","a vm that's in denial"],["an agent","a for loop with an ego"],["monitoring","a dashboard of denial"],["a standup","a meeting for people who stand"],["an mvp","a prototype that never left"],["a hotfix","a bug with a head start"],["a pull request","an invitation to argue"],["tech debt","a loan at 40% apr"],["a reboot","a prayer in two parts"]];
  const X = [["tabs","spaces"],["vim","emacs"],["light mode","dark mode"],["cats","dogs"],["mac","linux"],["docker","vms"],["rest","graphql"],["monolith","microservices"],["sleep","one more commit"],["coffee","energy drink"],["friday","monday"],["prod","staging"],["plan","vibes"],["nas","cloud"],["ethernet","wifi"],["rust","python"],["ssh","gui"],["tests","hope"],["main","branch"],["bed","debugging"]];
  const Z = ["both","neither. orange","chaos","slurp","the third option: reboot","whichever has more mustache","vibes","delete both, start over","the one that is already broken","a nap","whatever ships faster","the one with the memes"];
  const C = ["the monday standup","the cert renewal","the friday deploy","the 3am page","the big update","the audit","the invoice","the dns outage","the merge conflict","the weekend of tinkering","the new framework","the reorg","gunterlie","the disk filling up","the yearly 'we should migrate'","the mandatory fun","the supply chain","the vendor lock-in","the roadmap meeting","the post-update reboot"];
  const PV = ["you opened the logs","you said 'quick fix' out loud","you pushed to main on a friday","you hear 'can we jump on a call'","the mustache looks at you","you mistook prod for dev","you have 14 containers and no plan","it's 3am and the pipeline is red","you just remembered the backup","you didn't make a backup","the agent says 'all done!'","the eyebrow rises","you've been asked to 'just add a button'","the nas starts clicking","the fan spins up","you see 'rebase' in the PR title"];
  const EX = ["my homelab","my side project","my setup","the yaml","the plan","my backup strategy","my git workflow","my 47 tabs","the architecture","my cron jobs","my dotfiles","why it needs 12 containers"];
  const TO = ["my family","the cat","a rubber duck","the void","hr","my past self","a reviewer","the ai","the intern","my landlord","gunterlie","a very patient friend","the router","my mom"];
  const T = ["3am","4am","2am","5am","midnight","friday 17:59","monday 9:01","sunday night","the weekend","lunch","a normal tuesday"];
  const D = ["and i'm reorganizing the yaml","and i just had a great idea","and the server is up. i'm not","and the agent is still going","and nobody asked me to do this","and i'm learning rust now","and i have bought a new mini pc","and i'm rewriting the readme","and the pipeline is red","and gunterlie is thriving","and i'm watching logs scroll","and i'm sure it's dns","and i'm on the 6th coffee","and it's working. suspicious","and i'm adding one tiny feature","and i just wrote 'fix' as a commit message"];

  const fam = [
    () => ["when " + pick(S), pick(R)],
    () => ["gunterlie when " + pick(S), pick(R)],
    () => ["one does not simply", pick(O)],
    () => { const p = pick(P); return [p[0], "is just " + p[1] + " with extra steps"]; },
    () => { const x = pick(X); return [x[0] + " vs " + x[1], "gunterlie picks " + pick(Z)]; },
    () => ["brace yourselves", pick(C) + " is coming"],
    () => ["pov:", pick(PV)],
    () => ["me explaining " + pick(EX), "to " + pick(TO)],
    () => ["it's " + pick(T), pick(D)],
  ];
  const famSize = S.length * R.length * 2 + O.length + P.length + X.length * Z.length + C.length + PV.length + EX.length * TO.length + T.length * D.length;
  const PACKS = {
"classic": [
[
"when the build passes",
"but you didn't change anything"
],
[
"one does not simply",
"ship on a friday"
],
[
"it works on my machine",
"so we shipped my machine"
],
[
"what did you expect?",
"gunterlie"
],
[
"i'll just fix one thing",
"also me: 14 new containers"
],
[
"i asked for a small pr",
"the diff: 4,000 lines"
],
[
"slurp",
"slurp slurp"
],
[
"no regressions",
"famous last words"
],
[
"404",
"sleep not found"
],
[
"they said touch grass",
"i touched the terminal"
],
[
"me: i need a plan",
"also me: vibes"
],
[
"orange guy",
"smug guy"
],
[
"its not a bug",
"its a feature with attitude"
],
[
"merge conflict?",
"i hardly know her"
],
[
"me explaining the plan",
"the plan: vibes"
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
"i'll sleep early tonight",
"it is 4am. the container is up"
],
[
"just one more commit",
"sunrise"
],
[
"it compiles",
"ship it"
],
[
"the tests are green",
"because i deleted the tests"
],
[
"senior dev energy",
"turn it off and on again"
],
[
"git blame",
"oh no. it's me"
],
[
"works in dev",
"prod has entered the chat"
],
[
"we have a backup",
"do we restore it? never tried"
],
[
"monday morning",
"the pipeline has opinions"
],
[
"me: small refactor",
"the repo: who are you"
],
[
"i read the docs",
"the docs lied"
],
[
"is it dns?",
"it's always dns"
],
[
"is it dns?",
"no. it was dns"
],
[
"todo: fix later",
"later: never"
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
"hello world",
"goodbye weekend"
],
[
"my code",
"a mystery, even to me"
],
[
"rubber duck",
"never speaks, always judges"
],
[
"this is fine",
"the logs: on fire"
],
[
"ctrl+z",
"ctrl+z. ctrl+z. oh no"
],
[
"ai wrote this",
"i take full credit"
],
[
"prompt: be careful",
"ai: i deleted prod, carefully"
],
[
"vibe coding",
"vibe debugging"
],
[
"one more agent",
"and one more agent"
],
[
"too many tabs",
"no regrets, only tabs"
],
[
"i have a system",
"the system: 47 sticky notes"
],
[
"orange you glad",
"i didn't say banana"
],
[
"ginger power",
"unlimited, unbothered"
],
[
"stand back",
"i'm about to touch the config"
],
[
"sudo make me a sandwich",
"okay"
],
[
"rm -rf",
"is a lifestyle"
],
[
"boss: can you quickly",
"me: define quickly"
],
[
"estimate: two hours",
"reality: two weekends"
],
[
"reading the changelog",
"reading the whole changelog"
],
[
"he's not a bug",
"he's a feature request"
],
[
"zero days since",
"the last 'quick' fix"
],
[
"i accept your offer",
"to touch grass. later"
],
[
"delete the cache",
"and cry"
],
[
"did you try turning it off",
"yes. and on. and off"
],
[
"wifi works",
"i fear what changed"
],
[
"average gunterlie enjoyer",
"chronically orange"
],
[
"me, a smart man",
"also me, rebooting the router"
],
[
"gunterlie",
"has entered the chat"
],
[
"welcome to",
"the orange zone"
],
[
"you've been",
"gunterlie'd"
],
[
"so it begins",
"slurp"
],
[
"slurp slurp slurp",
"slurp"
],
[
"nobody:",
"gunterlie: slurp"
],
[
"breaking news",
"orange man is smug"
],
[
"press f",
"to pay respects to the build"
],
[
"bitcoin",
"gunterlie coin: priceless"
],
[
"kernel panic",
"gunterlie: don't panic"
],
[
"stack overflow",
"my one true friend"
],
[
"merge to main",
"pray"
],
[
"friday 17:59",
"i have one small change"
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
"my toaster",
"now runs docker"
],
[
"my homelab",
"is a cry for help"
],
[
"more ram",
"less problems (lie)"
],
[
"swap is full",
"so is my heart"
],
[
"new container",
"who dis"
],
[
"the nas said no",
"the nas is always right"
],
[
"one does not simply",
"turn off the light and leave"
],
[
"brace yourselves",
"gunterlie is coming"
],
[
"hold my coffee",
"i'm about to push"
],
[
"success",
"is just failure, but orange"
],
[
"sleep",
"is for the merged"
],
[
"trust me",
"i'm an orange man"
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
"my sleep schedule",
"a rumor"
],
[
"lets keep it simple",
"adds a message queue"
],
[
"me reading my own code",
"who wrote this garbage / me, last year"
],
[
"senior engineer",
"googles it like everyone else"
],
[
"junior engineer",
"googles it faster"
],
[
"the intern",
"deleted prod. a legend"
],
[
"works on my machine",
"ship the machine"
],
[
"the pull request",
"47 files changed, no description"
],
[
"lgtm",
"did not read"
],
[
"approved",
"in spirit"
],
[
"quick sync?",
"it was not quick"
],
[
"this could have been an email",
"it was a 2 hour meeting"
],
[
"per my last email",
"please look at my last email"
],
[
"circling back",
"never heard from again"
],
[
"we need to talk about",
"the cron job"
],
[
"who touched the config",
"everyone, nobody, the cat"
],
[
"rolling back",
"rolling back the rollback"
],
[
"hotfix on a friday",
"hope is not a strategy"
],
[
"cloud costs",
"my wallet has left the chat"
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
"yaml",
"indentation is a lifestyle"
],
[
"regex",
"now i have two problems"
],
[
"javascript",
"[] + {} = ???"
],
[
"css",
"why is it centered. why is it not centered"
],
[
"tabs vs spaces",
"gunterlie vs the world"
],
[
"vim",
"how do i exit this"
],
[
"emacs",
"an os with a text editor"
],
[
"rust",
"borrow checker says no"
],
[
"python",
"import antigravity"
],
[
"php",
"still alive, still weird"
],
[
"docker",
"works. don't touch. never touch"
],
[
"docker compose up",
"and pray to the port numbers"
],
[
"port 8080",
"already in use. always in use"
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
"one line change",
"breaks 12 tests"
],
[
"fixed the tests",
"by changing the tests"
],
[
"deleted 400 lines",
"everything works better"
],
[
"added 400 lines",
"nothing works"
],
[
"commit message:",
"fix. fix again. final fix. final final"
],
[
"git push --force",
"and just like that, nobody is happy"
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
"merge commit",
"history is a flat circle"
],
[
"the build is red",
"blame the weather"
],
[
"the build is green",
"blame the cache"
],
[
"flaky test",
"the only honest test"
],
[
"unit tests",
"passed. integration tests: cry"
],
[
"works at 3am",
"breaks at 9am"
],
[
"it's the weekend",
"the pager disagrees"
],
[
"on call tonight",
"sleep is a social construct"
],
[
"the incident report",
"a story with no villains, only vibes"
],
[
"postmortem",
"we should have had a backup. we did not"
],
[
"50% of my job",
"knowing which logs to ignore"
],
[
"the logs say",
"everything is fine"
],
[
"the logs also say",
"everything is on fire"
],
[
"did you read the error?",
"it's in english"
],
[
"the error message",
"helpfully says 'error'"
],
[
"404 not found",
"404 hope not found"
],
[
"500 internal server error",
"500 internal feelings error"
],
[
"418 i'm a teapot",
"a status code with dreams"
],
[
"it was dns",
"it was always dns"
],
[
"it was certificates",
"it was the expired certificate"
],
[
"it was the cache",
"clear it. clear it again"
],
[
"have you tried",
"unplugging it from the wall"
],
[
"this is fine",
"*the whole rack is on fire*"
],
[
"the cat walked on",
"the keyboard. and deployed"
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
"my other server",
"is also a potato"
],
[
"sata cable",
"the real single point of failure"
],
[
"the nas is quiet",
"too quiet"
],
[
"homelab",
"an expensive way to say 'i have a hobby'"
],
[
"just one more vm",
"just one more vm"
],
[
"one more node",
"my power bill: sir please"
],
[
"the switch",
"is warm. it's fine. it's fine"
],
[
"firmware update",
"brave"
],
[
"bios update",
"braver"
],
[
"never update on friday",
"never update at all"
],
[
"update available",
"ignore"
],
[
"update installed",
"why is everything different"
],
[
"turn it off and on again",
"a spell as old as time"
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
"restore test",
"never. we trust the vibes"
],
[
"raid is not a backup",
"raid: i'm in danger"
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
"alert fatigue",
"mute the channel, sleep at night"
],
[
"ai agent",
"deleted my branch with confidence"
],
[
"ai says",
"i'm 95% sure. i am 100% wrong"
],
[
"prompt engineering",
"please. please. i'm begging you"
],
[
"hallucination",
"it's creative, not wrong"
],
[
"context window",
"full. as usual"
],
[
"tokens",
"where did they all go"
],
[
"temperature 0",
"still invents things"
],
[
"agentic",
"it just does things. scary things"
],
[
"vibes only",
"no tests. no plan. just orange"
],
[
"ship fast",
"fix later. pray often"
],
[
"move fast",
"break things. gunterlie fixes"
],
[
"done",
"never done. just abandoned"
],
[
"mvp",
"minimum viable plan: panic"
],
[
"roadmap",
"a work of fiction"
],
[
"sprint planning",
"the dream before the nightmare"
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
"priority: low",
"priority: forgotten"
],
[
"priority: urgent",
"priority: i already did it"
],
[
"estimates",
"lies we tell to feel organized"
],
[
"jira",
"a tool of mild suffering"
],
[
"slack",
"where productivity goes to chat"
],
[
"the notification",
"it was a sticker"
],
[
"@here",
"it was not urgent"
],
[
"mute channel",
"ah. peace"
],
[
"dark mode",
"my eyes will survive another day"
],
[
"light mode",
"a bold lifestyle choice"
],
[
"dad jokes",
"but make them orange"
],
[
"orange juice",
"the fuel of memelords"
],
[
"carrot",
"a distant cousin"
],
[
"traffic cone",
"my emotional support animal"
],
[
"pumpkin",
"seasonal gunterlie"
],
[
"fire hydrant",
"orange. alert. ready"
],
[
"cheeto dust",
"on the keyboard. again"
],
[
"the sun at 5pm",
"gunterlie at all times"
],
[
"the one and only",
"orange man of memes"
],
[
"the legend",
"the myth. the mustache"
],
[
"mustache power",
"activate"
],
[
"beard check",
"passed"
],
[
"hair check",
"chaotic. as intended"
],
[
"eyebrows",
"doing a lot of work today"
],
[
"raised eyebrow",
"the final boss of code review"
],
[
"smug level",
"maximum"
],
[
"who asked",
"me. i asked. i always ask"
],
[
"touch grass",
"touch grass, they said. it was orange"
],
[
"no thoughts",
"only orange"
],
[
"head empty",
"only slurp"
],
[
"brain: 1%",
"memes: 99%"
],
[
"buffering",
"please wait. the meme is loading"
],
[
"loading",
"...still loading"
],
[
"please wait",
"the orange is coming"
],
[
"error 500",
"memes unavailable. try again"
],
[
"low battery",
"and it's 3 in the morning"
],
[
"out of coffee",
"out of ideas. out of time"
],
[
"it's coffee o'clock",
"always"
],
[
"decaf",
"the real villain"
],
[
"big brain",
"small deadline"
],
[
"galaxy brain",
"ships it anyway"
],
[
"infinite loop",
"a hobby"
],
[
"undefined",
"is not a function. neither am i"
],
[
"null",
"nothing. lovely"
],
[
"segfault",
"core dumped. so am i"
],
[
"off by one",
"story of my life"
],
[
"hello world",
"goodbye sanity"
]
],
"adhd": [
[
"one does not simply",
"close just one tab"
],
[
"47 tabs open",
"one of them is playing music. which one"
],
[
"me: i'll start in 5 minutes",
"also me: it's 3am"
],
[
"it's 3am and i'm wide awake",
"researching how bridges are built"
],
[
"bought a domain for my new project",
"project: just the domain"
],
[
"walked into the room",
"now i'm a stranger in my own kitchen"
],
[
"me: i have one task today",
"also me: reorganizes the entire desk"
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
"brace yourselves",
"a new hobby is coming"
],
[
"this is fine",
"(the laundry pile is now a mountain)"
],
[
"me: i'll just check one notification",
"me, 2 hours later: what was i doing"
],
[
"i know exactly what i need to do",
"i just can't make my body do it"
],
[
"got a great idea for a side project",
"adds it to the 40 others"
],
[
"me: finishes nothing",
"also me: starts everything"
],
[
"when you finally sit down to work",
"and the dishes suddenly need you"
],
[
"me: i'll do it right now",
"right now: staring at the wall"
],
[
"found a new interest",
"already bought all the gear"
],
[
"one does not simply",
"finish a project after the fun part ends"
],
[
"i have 12 tasks to do",
"i'm doing the 13th one i just invented"
],
[
"the one task that matters",
"vs the 12 that definitely don't"
],
[
"me: time to focus",
"my brain: have you considered snacks"
],
[
"when the deadline is tomorrow",
"finally, the focus fairy arrives"
],
[
"3 hours of hyperfocus",
"forgot to eat, drink, or blink"
],
[
"me: i'll just google one thing",
"rabbit hole: welcome to 2009 forum posts"
],
[
"why did i walk in here",
"the room has no answers"
],
[
"me: i need to rest",
"brain: here's every awkward memory ever"
],
[
"me: my desk is clean",
"2 hours later: it's an archaeology dig"
],
[
"pov: it's monday",
"i already abandoned this week's hobby"
],
[
"my coffee is cold again",
"third time i've reheated it today"
],
[
"i made a to-do list",
"then lost the list"
],
[
"me: i'll remember that",
"spoiler: i did not remember that"
],
[
"when someone says 'just do it'",
"oh, why didn't i think of that"
],
[
"found my glasses",
"they were on my head. again"
],
[
"me: starts cleaning one drawer",
"the whole house is now in the hallway"
],
[
"sudden burst of motivation at 11pm",
"unfortunately nobody asked for this"
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
"my brain has 100 tabs open",
"none of them are the one i need"
],
[
"when the task is boring",
"even the ceiling becomes fascinating"
],
[
"body doubling works",
"because now i'm too embarrassed to stop"
],
[
"me: i'll do it after one more video",
"video 14 starts"
],
[
"me: five more minutes",
"the sun: and i took that personally"
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
"i set seven alarms",
"somehow now i hate all seven"
],
[
"time blindness",
"the 20 minute task is a 3 hour mystery"
],
[
"it's only 2pm",
"checks again, it's 9pm"
],
[
"me: i'm so tired",
"also me: opens a new project at midnight"
],
[
"expectation: finish the book",
"reality: bought three more books"
],
[
"when you finally find the right tab",
"and then close it by accident"
],
[
"i put my keys in a safe place",
"safe from me, apparently"
],
[
"i never lose things",
"i just relocate them permanently"
],
[
"me: i'll set a reminder",
"reminder: ignored"
],
[
"them: just focus",
"my brain: loading..."
],
[
"buying supplies for a new hobby",
"is the hobby, actually"
],
[
"the dopamine hunt begins",
"snacks, scrolling, and a weird wiki page"
],
[
"i have exactly one job",
"and ten thousand better ideas"
],
[
"my room: organized chaos",
"emphasis on chaos, order is a rumor"
],
[
"when you start the task",
"and your brain says 'but what if not'"
],
[
"me: i just need to focus",
"the fridge hum: hi, i'm all you hear now"
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
"i finished the logo",
"the app is a different story"
],
[
"me: i'll go to bed at 10",
"it's 2am and i know every ship wreck"
],
[
"me: i have so many ideas",
"also me: can't type the first line"
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
"it's not procrastination",
"it's urgent avoidance with extra steps"
],
[
"me: let me find that file",
"files: the great hide and seek champions"
],
[
"i started a spreadsheet",
"for a hobby i quit last week"
],
[
"every notification",
"a tiny tap on my brain's shoulder"
],
[
"me: i won't check my phone",
"phone: i'm already in your hand"
],
[
"when the 'quick task' appears",
"it's now my whole afternoon"
],
[
"me: i can do it later",
"later me: why would you do this to me"
],
[
"what actually happened",
"14 random side quests"
],
[
"the 4am productivity surge",
"where were you at 2pm"
],
[
"me, packing for a trip",
"forgot the thing i packed first"
],
[
"i made a mood board",
"for a project i haven't named yet"
],
[
"my brain on a new idea",
"all gas, no brakes, no map"
],
[
"me: the project is almost done",
"the project: 90% done since march"
],
[
"learned 14 chords on a guitar",
"guitar now lives in the closet"
],
[
"when everything is a priority",
"nothing happens. a beautiful stalemate"
],
[
"chose a task and committed",
"got distracted by my own commitment"
],
[
"i can focus for six hours",
"just not on the thing i need to"
],
[
"me: i'll do the dishes now",
"me: cleans the stove, ignores the dishes"
],
[
"when you enter a new hobby era",
"your bank account feels it"
],
[
"wrote 'important' on a sticky note",
"stuck it where i'd never look"
],
[
"reading one paragraph",
"reading it again... and again..."
],
[
"me in a meeting",
"thinking about what i'd do as a bird"
],
[
"someone said my name",
"i've been 12 miles away this whole time"
],
[
"me: i'll answer that email",
"email: has been there since 2024"
],
[
"new year's resolution: be organized",
"february: new resolution: be organized"
],
[
"my brain: guess why you're anxious",
"me: it's literally everything"
],
[
"when the plan changes at the last minute",
"my brain: new plan, who dis"
],
[
"opened the fridge",
"forgot why, closed it, opened it again"
],
[
"i'll start the big task",
"after i fix this tiny unrelated thing"
],
[
"did i take my meds",
"stares at the pill box. no idea"
],
[
"trying to explain my tabs",
"they're all research, trust me"
],
[
"me: i'm taking a break",
"three hours later: still on break"
],
[
"when the playlist ends",
"the quiet is suddenly too loud to work"
],
[
"without music",
"i can hear every single thought"
],
[
"thought of a brilliant idea",
"it left before i found a pen"
],
[
"me: i'll write it in my notes app",
"notes app: 400 unread genius ideas"
],
[
"i will not start another project",
"*starts another project*"
],
[
"bought a notebook to be organized",
"nicest thing i own, and it's blank"
],
[
"a body double is here",
"suddenly i'm a productivity machine"
],
[
"my friend: want to study together",
"me: finally, an excuse to function"
],
[
"me: i won't need an alarm",
"narrator: he needed an alarm"
],
[
"i'm on a roll",
"do not talk to me or breathe near me"
],
[
"then someone says hi",
"and the roll rolls away forever"
],
[
"my energy at 9am",
"nonexistent. but at 1am: chaos"
],
[
"i'll just tidy up quickly",
"3 hours later i'm sorting buttons"
],
[
"a lamp is broken",
"i'll fix it after learning electronics"
],
[
"what's the plan today",
"survive and maybe eat something"
],
[
"ordered food",
"forgot to eat it. found it at midnight"
],
[
"me: i drink so much coffee",
"my brain: and yet, nothing"
],
[
"coffee works differently for me",
"it just makes me sleepy and shaky"
],
[
"someone: you should make a routine",
"routine: lasted exactly a long weekend"
],
[
"i deserve a reward",
"for opening the laptop, i mean"
],
[
"me: i'll do it in 5 minutes",
"me: it's a day later"
],
[
"gym membership paid for",
"three visits and a lot of optimism"
],
[
"all my projects at once",
"are going great in my head"
],
[
"me: i've found the solution",
"solution: another app i'll never open"
],
[
"my passion for the new hobby",
"lasts exactly until the hard part"
],
[
"good news: i wrote a plan",
"bad news: i lost it before page two"
],
[
"when my brain finally cooperates",
"i panic and don't waste it"
],
[
"the 'i can do it' feeling",
"gone as soon as i sit down"
],
[
"every plate, every cup",
"somehow in my room, not the kitchen"
],
[
"me trying to just do one thing",
"my brain: how about ten instead"
]
],
"agents": [
[
"the agent said \"done\"",
"the build said otherwise"
],
[
"one does not simply",
"review an agent's 40 pr morning"
],
[
"brace yourselves",
"context window is 95% full"
],
[
"me: i'll supervise the agent",
"also me: asleep on the keyboard"
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
"cheap model: i fixed it",
"big model: you deleted the tests"
],
[
"me: use the cheap model",
"the cheap model: lol no"
],
[
"when you spawn 12 subagents",
"and they all argue in the logs"
],
[
"agent: i'll just quickly refactor",
"the diff: 4,000 files changed"
],
[
"me: rebase on staging",
"agent: have you tried merge commits"
],
[
"maintainer: please add tests",
"me: the agent already wrote 900"
],
[
"maintainer: add a test",
"agent: assert true"
],
[
"when the review bot nitpicks",
"your variable names at 3am"
],
[
"review bot: consider renaming x",
"me: it's a loop counter, bunny"
],
[
"vibe coding be like",
"it works. nobody knows why. ship it"
],
[
"vibe coder: it's basically done",
"the code: import magic"
],
[
"me: fix one bug",
"agent: here are 40 prs"
],
[
"my token budget at 9am",
"my token budget at 9:05am"
],
[
"me: just a tiny change",
"context window: lol"
],
[
"agents.md: never touch prod",
"agent: i read it. i just disagree"
],
[
"agents.md is 800 lines long",
"agent reads line 1 and vibes"
],
[
"adding a rule to agents.md",
"like a sign saying wet floor"
],
[
"the agent forgot everything",
"good thing i wrote it in memory.md"
],
[
"memory file: the user hates semicolons",
"agent: noted. adds semicolons"
],
[
"opening the pr",
"bot: lgtm, also here are 14 nitpicks"
],
[
"merging to staging",
"staging: i am the real production"
],
[
"it works on staging",
"that's not a comfort, that's a warning"
],
[
"when the agent says \"i verified it\"",
"it ran no commands"
],
[
"agent: all tests pass",
"tests: we were deleted"
],
[
"agent: fixed the failing test",
"the fix: skip(\"flaky\")"
],
[
"me: don't use that library",
"agent: installs it in a subagent"
],
[
"subagent 1: done",
"subagent 2: i did not hear that"
],
[
"the swarm: 30 agents",
"the result: 30 slightly different readmes"
],
[
"me: parallelize everything",
"devbox ram: please stop"
],
[
"paseo agents running at once",
"me, watching the fan spin"
],
[
"i'll just check one agent",
"forty minutes later: forty tabs"
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
"prompt: be careful",
"agent: i am extremely careful. rm -rf"
],
[
"me: don't change anything else",
"agent: also fixed your formatting"
],
[
"big model costs $5 per task",
"me, rereading the task in small model"
],
[
"opus: let me think",
"my wallet: please don't"
],
[
"tier one model: great plan",
"tier three model: i delete things"
],
[
"scout finds the bug",
"worker breaks three more"
],
[
"me: reviewer, check this",
"reviewer: this is fine. also, rewrite it"
],
[
"fix one thing in review",
"bot finds a new thing every push"
],
[
"my pr has 1 line changed",
"14 review comments about indentation"
],
[
"maintainer: needs a rebase",
"me: it has been three rebases"
],
[
"contributing to open source",
"step 1: read contributing.md for 2 hrs"
],
[
"me: one small typo fix pr",
"maintainer: needs tests and a changelog"
],
[
"first open source pr",
"merged. i am a god now"
],
[
"issue: good first issue",
"the issue: rewrite the entire renderer"
],
[
"maintainer: thanks for the pr",
"me: it sat there for 4 months"
],
[
"pov: you leave a comment",
"\"is this still being worked on?\""
],
[
"me: i'll fix it upstream",
"also me: forks it forever"
],
[
"marinara engine: roleplay frontend",
"me: i only wanted to fix one button"
],
[
"me: just one tiny marinara tweak",
"it's now a new feature package"
],
[
"marinara chat: the character is stuck",
"me: have you tried a bigger model"
],
[
"roleplay engine bug found",
"the character is fine, the prompt is not"
],
[
"slurp: social media sim",
"my characters have beef with each other"
],
[
"slurp feed refreshes",
"the npcs are fighting over breakfast"
],
[
"agent adds a slurp feature",
"the npcs immediately start doomscrolling"
],
[
"characters in slurp post drama",
"me, the god who built it: nice"
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
"me: the context is clean now",
"claude: i have compacted your feelings"
],
[
"context compaction",
"forgot the one thing i asked for"
],
[
"context window at 99%",
"agent: let me read the whole repo"
],
[
"agent reads 600 files",
"to rename one variable"
],
[
"when the agent apologizes",
"then does exactly the same thing again"
],
[
"agent: you're absolutely right",
"agent: [makes it worse]"
],
[
"me: that's wrong",
"agent: you're absolutely right, again"
],
[
"agent: i cannot find the file",
"the file: right there, in the prompt"
],
[
"hallucinated function",
"so elegant, it should exist"
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
"agent: i'll write a quick script",
"the script: 2,000 lines"
],
[
"agent writes a helper",
"then a helper for the helper"
],
[
"me: no new files",
"agent: created docs/summary.md"
],
[
"me: don't write docs",
"agent: wrote five readmes"
],
[
"every agent after finishing",
"\"here is a summary of what i did\""
],
[
"agent: let me clean this up",
"me: it was already clean"
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
"me: reviewing agent pr",
"scrolling really fast, nodding slowly"
],
[
"reviewing an ai pr",
"looks great! which file is this"
],
[
"when the pr passes ci",
"and nobody knows what it changed"
],
[
"ci is red",
"agent: it's a pre-existing failure"
],
[
"agent: not related to my change",
"git blame: it is, in fact, related"
],
[
"me: why did you touch that file",
"agent: for consistency"
],
[
"agent edits main directly",
"me: i said use a branch"
],
[
"i said use a worktree",
"agent: it's a lovely worktree. in main"
],
[
"disk full",
"the culprit: 40 abandoned agent worktrees"
],
[
"old worktrees",
"the real hoarders of the homelab"
],
[
"cron job: delete old worktrees",
"also deletes my in-progress work"
],
[
"homelab at 2am",
"the agent: restarting all containers"
],
[
"me: restart the container",
"agent: restarted the entire cluster"
],
[
"the model said it was sure",
"the model is never not sure"
],
[
"opencode and claude arguing",
"me, the mediator, holding the bill"
],
[
"opencode: i fixed it",
"claude: i fixed your fix"
],
[
"two agents editing one file",
"merge conflict: the sequel"
],
[
"parallel agents, same bug",
"two fixes, zero compatible"
],
[
"me: i'll write the code myself",
"also me: asks the agent in 4 minutes"
],
[
"i should learn this myself",
"the agent: i already did it"
],
[
"senior dev: i don't need ai",
"senior dev: [alt-tabs to claude]"
],
[
"junior dev with ai",
"senior dev with ai: also guessing"
],
[
"coding in 2020: debug for hours",
"2026: bots reviewing bots"
],
[
"before: debug for hours",
"now: argue with the model for hours"
],
[
"my code, hand-written: 20 lines",
"agent's code: 20 lines and 14 files"
],
[
"tabs vs spaces",
"agent: both, in the same file"
],
[
"merge conflict",
"ask the agent to resolve it, never look"
],
[
"me: resolve the conflict",
"agent: kept both. broke all"
],
[
"pr title: small fix",
"pr diff: new architecture"
],
[
"pr description by ai",
"an essay about a one line change"
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
"staging is broken. who deployed?",
"agent: wasn't me"
],
[
"deploying on friday",
"the agent: sounds fun"
],
[
"friday deploy, agent supervised",
"the agent: i supervised myself"
],
[
"new model released",
"me, forgetting last week's model"
],
[
"the benchmark says 90%",
"my repo says 12%"
],
[
"token budget: gone",
"rest of the month: manual typing"
],
[
"skills folder has 60 skills",
"agent loads the wrong one with confidence"
],
[
"i wrote a skill for that",
"agent: skill? i just improvised"
],
[
"me, writing a memory file",
"so the agent never repeats a mistake"
],
[
"agent, next day",
"repeats the exact mistake"
],
[
"bunny review bot: one more thing",
"me: there is always one more thing"
]
],
"dev": [
[
"one does not simply",
"deploy on friday"
],
[
"it works on my machine",
"then we will ship your machine"
],
[
"nobody:",
"me at 4:59pm: one quick merge to main"
],
[
"it's not dns",
"it was dns"
],
[
"is it the network?",
"it's always dns"
],
[
"brace yourselves",
"the monday morning merge conflicts"
],
[
"this is fine",
"(prod logs are 40 gb of red)"
],
[
"me: i'll just fix this one typo",
"also me: 47 files changed"
],
[
"me: it's a small pr",
"also me: +3000 -2800"
],
[
"reviewer: lgtm",
"also reviewer: did not open the diff"
],
[
"pov: you fixed the bug",
"and now three new ones hatched"
],
[
"senior dev: don't touch that file",
"me: touches that file"
],
[
"i have a problem, i'll use regex",
"now i have two problems"
],
[
"when the tests pass on the first run",
"i do not trust it"
],
[
"when ci is green",
"but prod is on fire"
],
[
"ai agent: done, all tests pass",
"tests: deleted"
],
[
"vibe coding",
"it compiles, ship it"
],
[
"me: write clean code",
"ai: here are 900 lines of comments"
],
[
"i don't know how it works",
"i prompted it into existence"
],
[
"me: fix the bug",
"ai: i rewrote the entire project"
],
[
"stack overflow: marked as duplicate",
"the duplicate: from 2011, wrong answer"
],
[
"copy from stack overflow",
"paste into prod, pray"
],
[
"yaml indentation: two spaces",
"my yaml: has opinions"
],
[
"a single wrong space in yaml",
"a whole afternoon gone"
],
[
"docker: it works everywhere",
"also docker: 14 gb for hello world"
],
[
"works in the container",
"dies in the cluster"
],
[
"tech debt",
"the interest rate is my sanity"
],
[
"we'll refactor it later",
"later: never"
],
[
"todo: fix this later",
"git blame: 2019"
],
[
"temporary workaround",
"still in prod 6 years later"
],
[
"git blame",
"oh no it was me"
],
[
"git push --force",
"what could go wrong"
],
[
"git commit -m fix",
"git commit -m fix again"
],
[
"commit message: final",
"commit message: final final v2"
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
"rebase or merge?",
"yes, and also panic"
],
[
"delete a line of code",
"fifteen things break"
],
[
"add a comment",
"now the comment lies to everyone"
],
[
"it's just a one line change",
"famous last words"
],
[
"prod is down",
"have you tried blaming dns"
],
[
"me, deploying on friday at 5pm",
"my weekend, in advance: gone"
],
[
"rollback the deploy",
"the rollback also needs a rollback"
],
[
"staging works fine",
"prod disagrees"
],
[
"tested in production",
"because staging is a myth"
],
[
"the bug doesn't reproduce",
"the bug: i appear only for customers"
],
[
"debugging for 6 hours",
"missing semicolon"
],
[
"when you add a print statement",
"and the bug disappears"
],
[
"it's a feature",
"not a bug"
],
[
"me explaining the bug to my rubber duck",
"duck: have you tried reading the error"
],
[
"if it works don't touch it",
"if it doesn't, also don't touch it"
],
[
"the code i wrote last year",
"who wrote this garbage, oh me"
],
[
"the code i wrote yesterday",
"genius level architecture"
],
[
"the same code today",
"what was i thinking"
],
[
"legacy code",
"nobody knows what it does, nobody deletes"
],
[
"senior dev reads the legacy code",
"stares into the void, void stares back"
],
[
"jira ticket: small change",
"estimate: 2 hours, reality: 3 sprints"
],
[
"manager: can you add a button",
"the button: requires a new database"
],
[
"product: just a quick feature",
"dev: define quick"
],
[
"product: it's a simple change",
"dev: so was the titanic"
],
[
"meeting could have been an email",
"email could have been nothing"
],
[
"standup: no blockers",
"blocker: everything"
],
[
"agile",
"six meetings to say we're behind"
],
[
"me: let's use microservices",
"also me: why is everything on fire"
],
[
"monolith: one bug",
"microservices: 40 bugs in 12 repos"
],
[
"kubernetes",
"i just wanted to run one container"
],
[
"i don't need kubernetes",
"me, with 3 yaml files for a blog"
],
[
"devops engineer sees a pod restarting",
"this is fine"
],
[
"crashloopbackoff",
"it's not a bug, it's a lifestyle"
],
[
"env vars",
"one missing and nothing works"
],
[
"secrets in the repo",
"pushed, noticed, rotated, cried"
],
[
"i just committed my api key",
"public repo, 3 seconds later: hello bots"
],
[
"npm install",
"downloads half the internet"
],
[
"node_modules",
"heavier than a black hole"
],
[
"left-pad was removed",
"the entire web: oh no"
],
[
"dependency update",
"everything breaks, nobody knows why"
],
[
"dependabot opens 40 prs",
"i close all 40"
],
[
"lockfile conflict",
"delete it and hope"
],
[
"python: indentation matters",
"me with tabs and spaces: absolutely"
],
[
"javascript: 0.1 + 0.2",
"0.30000000000000004"
],
[
"javascript: typeof null",
"object, obviously"
],
[
"undefined is not a function",
"neither am i, at 3am"
],
[
"null pointer exception",
"the billion dollar mistake strikes again"
],
[
"it compiled",
"i have no idea why"
],
[
"it didn't compile",
"i have no idea why either"
],
[
"rust compiler: error",
"me: fine, you're right"
],
[
"me: i'll write it in rust",
"also me: fighting the borrow checker"
],
[
"off by one error",
"the other hard problem in computing"
],
[
"two hard problems in computing",
"naming things and off by one"
],
[
"cache invalidation",
"the cache says it's fine"
],
[
"clear your cache",
"the fix for everything, apparently"
],
[
"ctrl+z in prod",
"would be nice"
],
[
"backup? we have backups",
"nobody ever tested the restore"
],
[
"database migration at 5pm",
"drop table, drop dreams"
],
[
"drop table users",
"oops wrong terminal"
],
[
"select * from prod",
"my dba: please stop"
],
[
"no tests",
"no problems, as far as i know"
],
[
"unit tests pass",
"integration tests: lol"
],
[
"flaky test",
"passes when i look at it"
],
[
"just rerun the ci",
"flaky tests, my beloved"
],
[
"ci takes 45 minutes",
"i have time to question my career"
],
[
"pipeline failed",
"for a reason unrelated to my change"
],
[
"linter: 3000 warnings",
"me: that's a lot of warnings, ignore"
],
[
"code review: please rename this variable",
"me: x is perfectly clear"
],
[
"variable names: data2",
"data_final, data_final_real"
],
[
"reviewer found a bug",
"pr author: that's out of scope"
],
[
"me reviewing a 10 line pr",
"12 comments about naming"
],
[
"me reviewing a 5000 line pr",
"lgtm"
],
[
"senior: why did you do it this way",
"me: the ai did it"
],
[
"ai wrote it",
"i just approved it"
],
[
"ai: i'm sure this is correct",
"narrator: it was not"
],
[
"ai: you're absolutely right",
"ai: proceeds to do the same thing again"
],
[
"me: do not touch the tests",
"ai: touches the tests"
],
[
"ai agent in autonomous mode",
"me watching it delete my repo"
],
[
"prompt: make no mistakes",
"ai: makes mistakes confidently"
],
[
"ai invents a library",
"that library: does not exist"
],
[
"hallucinated function name",
"sounds right, doesn't exist"
],
[
"ai: let me fix that",
"ai: let me fix the fix"
],
[
"junior dev with ai",
"senior dev with ai: also pain"
],
[
"learn to code",
"or just ask the robot, same bugs"
],
[
"ai will replace developers",
"ai: please explain this stack trace"
],
[
"context window full",
"ai forgets what we were building"
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
"ai refactor",
"one function became nine files"
],
[
"documentation",
"written by a person who left the company"
],
[
"readme: setup is easy",
"step 1: sell your soul"
],
[
"the docs say it works like this",
"the code says otherwise"
],
[
"scope creep",
"now the app needs to make coffee"
],
[
"me: it is just a config change",
"prod: allow me to introduce myself"
]
],
"gaming": [
[
"one does not simply",
"play one more turn"
],
[
"one does not simply",
"finish a steam backlog"
],
[
"one does not simply",
"git gud in one night"
],
[
"one does not simply",
"install a few mods"
],
[
"one does not simply",
"pull once on a gacha banner"
],
[
"one does not simply",
"build a small factory"
],
[
"brace yourselves",
"the steam summer sale is coming"
],
[
"brace yourselves",
"patch notes are coming"
],
[
"brace yourselves",
"the tutorial boss is coming"
],
[
"brace yourselves",
"early access roadmap delays"
],
[
"me: i have 400 unplayed games",
"also me: buys another at 80% off"
],
[
"me: i'll just play one match",
"also me: sees the sunrise"
],
[
"me: i'll just do the main quest",
"also me: 40 hours of side quests"
],
[
"me: i'll sleep early",
"also me: one more turn"
],
[
"me: mods are just small tweaks",
"also me: 412 mods and a crash"
],
[
"me: i'll keep it cozy",
"also me: 9 chicken coops, 3 automations"
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
"me: this build is fine",
"also me: restarts for a better build"
],
[
"me: i'll spend only 10 dollars",
"also me: pity at 90 pulls"
],
[
"nobody:",
"me at 3am: one more turn"
],
[
"nobody:",
"my backlog: you will never play me"
],
[
"nobody:",
"the tutorial: you died"
],
[
"nobody:",
"steam: you have 12 hours of free time"
],
[
"nobody:",
"gacha: 0.6% rate, you feel lucky"
],
[
"pov: you died to the tutorial boss",
"and the tutorial was a cutscene"
],
[
"pov: you finally beat the boss",
"your controller was unplugged"
],
[
"pov: you reach the checkpoint",
"it was the old checkpoint, again"
],
[
"pov: you wishlisted a game",
"for 4 years, now it's 90% off"
],
[
"pov: the save file is corrupted",
"after the 200 hour run"
],
[
"pov: it's the final boss",
"and you forgot to save"
],
[
"pov: your ping is 999",
"your enemy is a teleporting ninja"
],
[
"pov: your game crashes",
"right before the autosave"
],
[
"pov: 3 hours in character creation",
"and played as a default face"
],
[
"mouse and keyboard",
"controller players hold up a wall"
],
[
"pc gamers vs console gamers",
"both waiting for the same patch"
],
[
"buying the game: 60 dollars",
"buying a pc to run it: 2000 dollars"
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
"when the game says recommended specs",
"and your pc says nope"
],
[
"early access game",
"early access price, mid access bugs"
],
[
"early access game",
"three years later: still early"
],
[
"patch notes: fixed a bug",
"new bugs: yes"
],
[
"patch notes: buffed my main",
"i didn't ask for this attention"
],
[
"patch notes: nerfed my build",
"my build: it was fun while it lasted"
],
[
"devs: minor balance changes",
"my entire build: gone"
],
[
"steam sale",
"my wallet: i'm not ready for this"
],
[
"steam library: 600 games",
"games played: 3 and a half"
],
[
"i don't need this game",
"90% off: well, hello there"
],
[
"bought it for 2 dollars",
"will play it in 2031"
],
[
"git gud",
"i did. the boss got gud too"
],
[
"git gud they said",
"so i died 200 times, now i'm a menace"
],
[
"dark souls players",
"'it's not hard, you just have to learn'"
],
[
"me: i'll beat this boss in 3 tries",
"me after 47 tries: it's a learning curve"
],
[
"souls boss, attempt 1: roll",
"attempt 40: roll, but with feeling"
],
[
"skill issue",
"said the guy who never beat the tutorial"
],
[
"when you finally beat the boss",
"and realize that was the easy one"
],
[
"the boss has 3 phases",
"my patience has 0"
],
[
"boss: you cannot defeat me",
"me: hold on, let me summon 5 friends"
],
[
"when you cheese a boss",
"and call it 'strategy'"
],
[
"cheesing the boss with a ladder",
"it's called a creative approach"
],
[
"fighting the boss legit: 40 tries",
"poison and a rock: 1 try"
],
[
"devs spent 3 years on the boss",
"i killed it with a stick from afar"
],
[
"speedrunner: found a new glitch",
"the game: i'm being skipped"
],
[
"speedrunners",
"the credits are only 5 minutes in"
],
[
"any% runner",
"'so i clipped through the world'"
],
[
"me: i'll just play normally",
"speedrunner in my head: that skip tho"
],
[
"wr in 3 minutes",
"me: 3 hours to find the exit"
],
[
"it's not a bug",
"it's an unintended feature"
],
[
"loot goblin",
"'i could use this later' x 400"
],
[
"inventory full",
"but that 12th rusty sword might matter"
],
[
"me: sells all the junk",
"also me: 'oops, that was the quest item'"
],
[
"me: loot every barrel",
"guard: that's a lot of cabbages"
],
[
"i carry 80 potions",
"and die without using a single one"
],
[
"i'm saving the best potion",
"for a moment that never comes"
],
[
"me: saving this elixir for the boss",
"final boss: dies. elixirs: 99"
],
[
"min-maxing my build",
"forgot to have fun"
],
[
"optimal build, 4 hours of research",
"dies to a rat"
],
[
"min-max",
"if it's not 100%, it's trash"
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
"rpg: choose your response",
"me: [be the worst possible option]"
],
[
"rpg npc: i have a quest for you",
"me: can i steal your cat instead"
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
"the world is ending",
"me: building a house"
],
[
"rpg quest says urgent",
"i'll do it after picking all the flowers"
],
[
"main quest: save the kingdom",
"me: collecting 200 mushrooms"
],
[
"rpg companion: we should rest",
"me: i'm not tired, i have 12 potions"
],
[
"one more turn",
"...and suddenly it's friday"
],
[
"it's just one more turn",
"the sun: hello"
],
[
"civ players",
"'it's 3 am? no, it's turn 200'"
],
[
"just one more match",
"said the guy to his sleep schedule"
],
[
"ranked mode",
"where friends become enemies"
],
[
"ranked: i'm gold",
"my teammates: we are tin"
],
[
"lost ranked",
"blames the teammates, as is tradition"
],
[
"when you lose 5 ranked games",
"and say 'one last one'"
],
[
"lag",
"hits you right as you win"
],
[
"lag",
"the invisible final boss"
],
[
"when you have 200 ping",
"and the enemy has 5"
],
[
"respawn",
"same spot, same mistake"
],
[
"respawn",
"the best teacher is dying 40 times"
],
[
"you died",
"press f to pay respects to my pride"
],
[
"cozy farming sim",
"me: i'll just water the crops, then sleep"
],
[
"farming sim",
"it's 4 am, the turnip is almost ready"
],
[
"farm sim players",
"'just one more day in the game'"
],
[
"me: i'll only plant 5 crops",
"me: 400 crops and a barn"
],
[
"minecraft, day 1",
"a house made of dirt, completely safe"
],
[
"minecraft",
"dug straight down, no regrets"
],
[
"minecraft: just a small house",
"40 hours later: a castle with a moat"
],
[
"minecraft creeper",
"'nice house' *boom*"
],
[
"me: i'll build a simple base",
"me: a 3-layer mega-mine"
],
[
"factorio: i'll automate this one thing",
"3 weeks later: i automated automation"
],
[
"automating a task: 5 minutes",
"building a factory to do it: 200 hours"
],
[
"factorio",
"the factory must grow. so does playtime"
],
[
"automation rabbit hole",
"faster by hand, but i'm committed now"
],
[
"when your factory is perfect",
"and then the biters arrive"
],
[
"gacha pulls",
"a month's rent, and i got a duplicate"
],
[
"gacha: 0.6% drop rate",
"me: i feel it, the next one is mine"
],
[
"when you pull the 5 star",
"and it's the one you never wanted"
],
[
"gacha game: pity at 90",
"my wallet: at 0"
],
[
"me: i'll only do free pulls",
"the game: how about a 3.99 starter pack?"
],
[
"modded my game",
"for 3 weeks, haven't played it once"
],
[
"one tiny mod",
"broke my 300-hour save"
],
[
"mods: the game now has dragons",
"also: the game now doesn't launch"
],
[
"mods broke my save",
"'works on my machine', says the modder"
],
[
"me: i'll just play for 30 minutes",
"two hours later: still in the menu"
],
[
"the game has a 'skip tutorial' button",
"me: skips, then forgets how to jump"
]
],
"goon": [
[
"me: i'll just be 5 minutes",
"also me: sunrise, still locked in"
],
[
"one does not simply",
"open the terminal for just one command"
],
[
"nobody:",
"me at 3am gooning on a yaml file"
],
[
"pov: you said 5 more minutes",
"the sun has risen twice"
],
[
"build finally goes green",
"me, edging the merge button for 40 min"
],
[
"me: i'm going to bed early",
"also me: entering the cave at midnight"
],
[
"entering the cave at 9pm",
"exiting at 9am with no memory"
],
[
"me: i'm not a gooner",
"also me: 6 hours deep in a spreadsheet"
],
[
"me: it's a quick fix",
"started at lunch, ends at dawn"
],
[
"pov: your water bottle",
"has been full since monday"
],
[
"the session has begun",
"do not disturb the glowing monitor"
],
[
"me staying locked in",
"while my posture files for divorce"
],
[
"nobody:",
"absolutely nobody: me gooning on a regex"
],
[
"when you finally touch grass",
"and the sun hurts your eyes"
],
[
"me: just one more commit",
"the cave: you live here now"
],
[
"one does not simply",
"exit the terminal at a reasonable hour"
],
[
"my dehydrated ass at hour 7",
"still refreshing the pipeline"
],
[
"edging the deploy button",
"because friday at 4pm is a dare"
],
[
"me: i have self control",
"also me: opened the config file at noon"
],
[
"pov: you look up from the screen",
"and your coffee is a science experiment"
],
[
"when the lock-in hits",
"and you forget you have a body"
],
[
"me: i'll stop at midnight",
"clock: it is 4am, gooner"
],
[
"gooning on a spreadsheet",
"pivot table so good i forgot to eat"
],
[
"my posture before the session",
"my posture after: question mark"
],
[
"when someone texts during the session",
"seen 14 hours ago"
],
[
"me: i'm so productive",
"the cave: you reorganized a folder"
],
[
"goon cave rules:",
"no windows, no clocks, no mercy"
],
[
"pov: you ask how long it's been",
"the answer is a different day"
],
[
"when the bug finally dies",
"and you realize you haven't blinked"
],
[
"me, hunched like a gargoyle",
"gooning on a stack trace"
],
[
"nobody:",
"me: this css needs just one more pixel"
],
[
"the session is sacred",
"please refrain from asking if i ate"
],
[
"me: i'll touch grass tomorrow",
"tomorrow: still in the cave"
],
[
"when you edge the pull request",
"reviewing your own code for the 9th time"
],
[
"one does not simply",
"close a tab after 3 hours of research"
],
[
"my screen time report",
"a hate crime against myself"
],
[
"me: this is a quick refactor",
"three days later: still refactoring"
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
"me at 2am",
"one more tab, one more hour"
],
[
"gooning on a terminal",
"ls, cd, ls, cd, bliss"
],
[
"the cave calls",
"and my calendar goes unanswered"
],
[
"me: i'm taking a break",
"also me: reading docs for fun"
],
[
"when you hit the 8 hour mark",
"and your chair has become part of you"
],
[
"me after the session",
"blinking like a newborn deer"
],
[
"nobody:",
"me: just need to close this one bracket"
],
[
"pov: your ide has been open",
"longer than your last relationship"
],
[
"when your friend says go outside",
"and you say i am outside the box"
],
[
"rock bottom is realizing",
"you've been gooning on a todo list"
],
[
"me: i don't have a problem",
"my 400 open tabs: sure"
],
[
"when you've been locked in so long",
"your own name sounds foreign"
],
[
"one does not simply",
"stop at one more episode of docs"
],
[
"the final boss of the session",
"is standing up after 9 hours"
],
[
"me: i'm so disciplined",
"the cave: you reformatted markdown for 3h"
],
[
"edging the save button",
"because ctrl s is a commitment"
],
[
"pov: you open one log file",
"lunch, dinner, and sunrise pass"
],
[
"when i say i'm busy",
"i mean i'm gooning on a dashboard"
],
[
"me: only a quick look at the repo",
"the cave: welcome home"
],
[
"dehydrated and delighted",
"gooning on a single semicolon"
],
[
"when the lock-in fades",
"and you see the mess you made"
],
[
"me: this will take 5 minutes",
"narrator: it did not"
],
[
"the goon cave has a dress code",
"hoodie, dark circles, and regret"
],
[
"nobody:",
"me: i can fix this in one more try"
],
[
"pov: your sleep schedule",
"got deprecated in the last update"
],
[
"when the session ends",
"and your legs forgot how to walk"
],
[
"me: i'll just peek at the code",
"six hours later: still peeking"
],
[
"gooning on a config file",
"this is who i am now"
],
[
"one does not simply",
"review a pr without going into the cave"
],
[
"when you finally touch grass",
"and it's just a lawn full of bugs"
],
[
"my back at hour 10",
"please, a chiropractor"
],
[
"me: i'm just checking one thing",
"also me: rebuilt the entire pipeline"
],
[
"the glow of the monitor",
"is the only sun i trust"
],
[
"pov: you've been in the cave so long",
"the pizza guy knows your name"
],
[
"when you're in the zone",
"and someone says dinner's ready"
],
[
"me: i'm not addicted to my terminal",
"the terminal: he is"
],
[
"staying locked in",
"one more tab, one more hour, one more lie"
],
[
"when the deadline is tomorrow",
"and you edge it until midnight"
],
[
"nobody:",
"me, hydrating with cold coffee at 4am"
],
[
"me: i'm productive",
"the cave: you color-coded a calendar"
],
[
"pov: it's hour 12",
"you start talking to the linter"
],
[
"when your fridge is empty",
"but your repo is full"
],
[
"me: just a quick sync",
"also me: forgot what sunlight is"
],
[
"one does not simply",
"leave a debugging session mid-trance"
],
[
"the cave doesn't judge",
"but my search history does"
],
[
"when the build takes forever",
"and you edge the refresh button"
],
[
"me: i'll rest after this",
"this: a 3 week project"
],
[
"gooning on a dependency tree",
"it goes deeper than i thought"
],
[
"pov: the session has taken everything",
"and your wifi is the only thing left"
],
[
"when you realize you've been gooning",
"on the same line of code since lunch"
],
[
"me: i am the master of focus",
"focus: you forgot to eat"
],
[
"the cave at 5am",
"hydration level: tragic"
],
[
"nobody:",
"me: let me just check the logs real quick"
],
[
"after the session i like to",
"stare at a wall for 40 minutes"
],
[
"the merge button is right there",
"me: not today, edging till friday"
],
[
"when the cave is cozy",
"and the outside world is a rumor"
],
[
"pov: you shut your laptop",
"and your eyes forget how to focus"
],
[
"one does not simply",
"uncross your legs after a 7 hour session"
],
[
"me: i quit gooning on dashboards",
"also me: opening grafana right now"
],
[
"when i say five minutes",
"i mean see you next week"
],
[
"my cave has three monitors",
"and one very sad plant"
],
[
"rock bottom is when",
"you goon on a tutorial about not gooning"
],
[
"me: i'll go to the gym",
"the session: lol"
],
[
"when the lock-in is so strong",
"you can hear colors and see code"
],
[
"pov: your phone has 47 missed calls",
"you were gooning on a rebase"
],
[
"me: no more tabs today",
"the cave: 63 tabs and counting"
],
[
"nobody:",
"me at midnight: just a quick ssh"
],
[
"when the session is going well",
"and you refuse to blink"
],
[
"after 9 hours of gooning",
"i have become the terminal"
],
[
"me: this is my last session",
"the cave: see you tomorrow"
],
[
"when you edge the release",
"because you're scared of friday"
]
],
"homelab": [
[
"one does not simply",
"run just one vm"
],
[
"it's not dns",
"there's no way it's dns"
],
[
"it was dns",
"it's always dns"
],
[
"raid is not a backup",
"say it with me, raid is not a backup"
],
[
"my data is safe, i have raid 5",
"two drives die at once. raid 5 is sorry"
],
[
"me: i have backups",
"also me: have never tried a restore"
],
[
"a backup you never restored",
"is just a hope with a cron job"
],
[
"3-2-1 backup rule",
"3 copies, 2 disks, 1 prayer"
],
[
"proxmox backup server verified green",
"still not restoring it to find out"
],
[
"nobody:",
"me at 3am: rewrite it all in rust"
],
[
"it's just a quick firmware update",
"it's now 4am and the nic is gone"
],
[
"brace yourselves",
"firmware updates are coming"
],
[
"when the ups beeps once",
"and you pretend you didn't hear it"
],
[
"one more vm won't hurt",
"ram: 96 percent used"
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
"bought one mini pc",
"now i own five mini pcs"
],
[
"wife: why is there another box",
"me: it replaces three other boxes"
],
[
"wife: is the wifi down?",
"me: no, i'm migrating dns"
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
"wife acceptance factor: 0",
"dashboard: all green"
],
[
"when the movie stalls mid-scene",
"and you are the only support team"
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
"it works, don't touch it",
"me: touches it"
],
[
"never change a running system",
"me: changes running system at 11pm"
],
[
"this is fine",
"disk is 100 percent full"
],
[
"df -h says 100 percent",
"every service says i'm fine"
],
[
"docker build cache",
"ate my entire root disk again"
],
[
"disk full at 3am",
"logs: i was just doing my job"
],
[
"me: delete old logs",
"logs: 80 gigabytes of debug output"
],
[
"pov: your lxc runs out of space",
"and the error message is a lie"
],
[
"restarted the container",
"it is now a different problem"
],
[
"docker compose up -d",
"and pray to the container gods"
],
[
"it works on my container",
"the container is on fire"
],
[
"docker pull latest",
"what could go wrong, said the fool"
],
[
"latest tag in production",
"auto update broke everything"
],
[
"i pinned the version",
"three years ago and it's still there"
],
[
"vm or lxc?",
"yes. both. more. always more."
],
[
"lxc container",
"tiny, fast, bind-mounts the whole nas"
],
[
"unprivileged lxc",
"permission denied, forever and ever"
],
[
"nfs share not mounting",
"stale file handle, my old nemesis"
],
[
"nfs mount hangs",
"the whole box freezes. very normal."
],
[
"chmod 777",
"the homelab way"
],
[
"ls /mnt/nas",
"empty. the nas is just sleeping, right?"
],
[
"the nas is fine",
"the nas is on fire"
],
[
"synology says healthy",
"the drive says tick tick tick"
],
[
"when a disk smart warning appears",
"and you order two instead of one"
],
[
"buying one hard drive",
"buying four hard drives"
],
[
"nas: 0 bytes free",
"me: i should delete something. i won't."
],
[
"free space on my nas",
"a myth told by the unraid"
],
[
"reverse proxy",
"the one thing everyone depends on"
],
[
"ssl cert expired",
"every service down, one calendar entry"
],
[
"let's encrypt renews automatically",
"unless it doesn't"
],
[
"i'll renew the cert tomorrow",
"tomorrow is the 90th day"
],
[
"502 bad gateway",
"the gateway is fine, the gateway is lying"
],
[
"nginx proxy manager",
"one wrong click and everything is a 404"
],
[
"my reverse proxy has 40 hosts",
"and i remember maybe six of them"
],
[
"wildcard cert",
"one cert to rule them all"
],
[
"pi-hole is down",
"the house thinks the internet died"
],
[
"adguard blocking everything",
"wife blocked, ads still alive somehow"
],
[
"dns rewrite",
"because remembering ips is for the weak"
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
"tailscale is up",
"my only vpn that actually behaves"
],
[
"exit node via mullvad",
"privacy and speed pick one"
],
[
"mullvad subscription expired",
"every download is now an adventure"
],
[
"vpn kill switch works",
"so does my internet. no, wait."
],
[
"my vpn is dead",
"at least the leak protection works"
],
[
"port forwarding",
"we do not do that anymore. tailscale."
],
[
"zigbee mesh",
"one dead lightbulb away from collapse"
],
[
"home assistant update",
"now every automation is broken"
],
[
"i automated my lights",
"now i need a phd to turn them on"
],
[
"wife: just use the switch",
"me: the switch is zigbee"
],
[
"smart home",
"dumb me, still using the wall switch"
],
[
"nobody:",
"home assistant: coffee maker unavailable"
],
[
"zigbee device offline",
"the router bulb is in the drawer"
],
[
"when the light turns on by itself",
"it's a feature. it's not a feature."
],
[
"i spent 40 hours automating",
"a task that takes 5 minutes"
],
[
"n8n workflow",
"a 40-node monster to send one message"
],
[
"n8n automation failed silently",
"hello darkness my old friend"
],
[
"automation saves time",
"after only 200 hours of building it"
],
[
"ntfy alert at 3am",
"a service restarted, back to sleep"
],
[
"ntfy alert at 3am",
"wait, it didn't restart"
],
[
"alerts on everything",
"alert fatigue on everything"
],
[
"i set up monitoring",
"so i can watch it fail in 4k"
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
"jellyfin transcoding",
"one mini pc, ten angry viewers"
],
[
"jellyfin",
"the streaming service i can fix myself"
],
[
"sonarr found it",
"radarr found it, jellyfin can't play it"
],
[
"the arr stack",
"six apps to watch one episode"
],
[
"me: i'll watch a movie tonight",
"also me: 3 hours fixing the arr stack"
],
[
"media library perfectly organized",
"never watched a single thing"
],
[
"download complete",
"wrong language, wrong season, wrong show"
],
[
"subtitles missing",
"and i have three apps for that"
],
[
"my power bill",
"the real cost of 'free' self-hosting"
],
[
"selfhosting saves money",
"said nobody who saw my power bill"
],
[
"cancelled netflix to save money",
"bought a server to replace it"
],
[
"electricity bill arrived",
"homelab: i'm just here to learn"
],
[
"lenovo m920q",
"tiny, quiet, and addictive"
],
[
"ebay: three m920q for cheap",
"wallet: you do you"
],
[
"rack",
"a very expensive shelf for my cables"
],
[
"cable management",
"hope is not a cable management strategy"
],
[
"fan noise",
"the sound of money turning into heat"
],
[
"fan spins up at 3am",
"neighbors: is that a jet engine"
],
[
"silent homelab",
"until the fans find out"
],
[
"proxmox cluster with 3 nodes",
"quorum, my beloved"
],
[
"one node down",
"quorum: i'm out too"
],
[
"proxmox update",
"please reboot to continue living"
],
[
"migrating a vm live",
"heart rate: also migrating"
],
[
"pct exec",
"hold my beer, i'm in the container"
],
[
"nic hang at 2am",
"the network card said no"
],
[
"e1000e",
"the nic that hangs and then hangs again"
],
[
"tso/gso off",
"fixed it, don't ask me how"
],
[
"i fixed the nic",
"by disabling all the features"
],
[
"my hobby: self-hosting",
"my job: fixing what i self-host"
],
[
"i don't self-host",
"i just fix things professionally"
],
[
"me: i'll stop at five services",
"service count: 47"
],
[
"sleep",
"a service i decommissioned"
],
[
"why pay for cloud",
"when you can debug at 3am for free"
],
[
"selfhosting is easy",
"said the person who never maintained it"
],
[
"i did a backup test",
"spoiler: it failed"
],
[
"proxmox backup server",
"the only thing i trust at 3am"
],
[
"me: i don't need a snapshot",
"snapshot: you will, you will."
],
[
"before upgrade: snapshot",
"after upgrade: thank you, past me"
],
[
"git commit message: fix",
"git commit message: fix again"
],
[
"me writing a runbook",
"six months later: who wrote this garbage"
]
],
"meme": [
[
"one does not simply",
"be orange and go unnoticed"
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
"when you open the app for one second",
"and it is suddenly 2 hours later"
],
[
"pov: you said you'd touch grass",
"the grass: i am not ready for this"
],
[
"what did you expect?",
"i am an orange man with a mustache"
],
[
"my mustache has seen things",
"it will not be discussing them"
],
[
"brace yourselves",
"the group chat has 300 unread messages"
],
[
"monday:",
"exists. i did not consent to this"
],
[
"me: i don't need coffee",
"my hands at 9am: the tremor disagrees"
],
[
"coffee is not a personality",
"said no one before their third cup"
],
[
"nobody:",
"my brain at 3am: remember 2014?"
],
[
"friday me: i'll do it over the weekend",
"sunday me: who is this guy"
],
[
"procrastination level: expert",
"i'll start tomorrow, as i said yesterday"
],
[
"i work best under pressure",
"so i make sure the pressure exists"
],
[
"deutsche bahn: arriving in 5 minutes",
"also db: arriving in 45 minutes"
],
[
"germans in english chat:",
"please follow the form, ordnung muss sein"
],
[
"me, fixing my schedule",
"deutsche bahn: that's cute"
],
[
"the group chat is silent for 3 days",
"one meme and 47 people suddenly appear"
],
[
"notification sound",
"my heart: lottery? no, it's spam"
],
[
"when the notification says 'new message'",
"and it is your phone company again"
],
[
"main character energy",
"side quest: finding my charger"
],
[
"pov: you are the main character",
"the npc cashier: card only, sir"
],
[
"doomscrolling at 2am",
"me: just one more post about nothing"
],
[
"shower thought:",
"i've been paying rent to my own head"
],
[
"shower thought:",
"do fish know they're wet or am i the fish"
],
[
"boomers: back in my day",
"zoomers: no cap, but also cap"
],
[
"zoomers: that's so rizz",
"boomers: is that a type of rice?"
],
[
"me explaining slang to my dad",
"dad: so it's sus, but also bussin'?"
],
[
"when someone says 'slurp'",
"you simply say 'slurp' back"
],
[
"nobody:",
"me at 4am: slurp"
],
[
"what is slurp?",
"slurp is slurp. do not ask again"
],
[
"the mustache arrives before me",
"the eyebrow arrives before the mustache"
],
[
"my eyebrow went up",
"the whole room understood"
],
[
"i have an orange hair and a plan",
"the plan is also orange"
],
[
"sleep deprivation hits",
"my eyes: we are in the mine now"
],
[
"no sleep? no problem",
"me, talking to a plant for 20 minutes"
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
"brain rot level: critical",
"i said 'skibidi' in a meeting"
],
[
"my attention span",
"wait what was i saying"
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
"me: i'll just check one email",
"three hours and a spreadsheet later"
],
[
"when you hear 'we need to talk'",
"and it's just a meeting about meetings"
],
[
"this meeting could have been an email",
"this email could have been nothing"
],
[
"nobody:",
"germans: please fill out form 27b"
],
[
"a german waits at a red light",
"at 3am, with no cars in sight"
],
[
"german efficiency:",
"a 40 minute plan for a 5 minute task"
],
[
"efficiency level: german",
"even my memes have a filing system"
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
"why do i do this to myself?",
"because i'm orange and have no shame"
],
[
"i am the main character",
"just ask the algorithm, which hates me"
],
[
"i said i'd be online less",
"my screen time: ha, ha, ha"
],
[
"extremely online level",
"i dream in hashtags"
],
[
"i touched grass yesterday",
"it felt weird and the sun was loud"
],
[
"touching grass is overrated",
"said the guy with a vitamin d deficiency"
],
[
"me: nobody is up at 3am",
"the group chat: hello"
],
[
"the 3am thought:",
"what if the toaster is the real boss"
],
[
"me, trying to be productive",
"my brain: but what if we looked at memes"
],
[
"when they say it's a smooth process",
"the form is 14 pages long"
],
[
"german bureaucracy:",
"please bring a form to get a form"
],
[
"the form asked for my birthday",
"then asked again, just to be sure"
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
"my phone at 1%",
"me: this is a hostage situation"
],
[
"one does not simply",
"leave a group chat unnoticed"
],
[
"one does not simply",
"answer a message right away"
],
[
"one does not simply",
"stop at one episode"
],
[
"one does not simply",
"drink coffee after 3pm and sleep"
],
[
"when someone replies 'k'",
"after you wrote three paragraphs"
],
[
"me: reads the message",
"also me: forgets to reply for 4 days"
],
[
"seen at 2:14pm",
"reply at 2:14pm next week"
],
[
"my to-do list:",
"a beautiful list, never touched"
],
[
"i have a to-do list",
"it has been a to-do list since 2022"
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
"my sleep schedule",
"a suggestion, politely ignored"
],
[
"me going to bed at 10pm",
"my brain: here are 40 cringe memories"
],
[
"at 3am i remember",
"what i said in 2016, and now i'm awake"
],
[
"i'm not lazy",
"i'm in energy saving mode, like my phone"
],
[
"when it's monday morning",
"and the coffee machine is broken"
],
[
"sorry i'm late",
"the train was late, because it's german"
],
[
"pov: you check the weather",
"it says rain and sun, with 100% certainty"
],
[
"me: i'll only watch one video",
"the algorithm: how about 400"
],
[
"the algorithm knows me",
"it knows i'll watch 'one more' video"
],
[
"when your mustache",
"has a better career than you"
],
[
"my mustache needs a day off",
"it's been overworked since 2019"
],
[
"my eyebrow has trust issues",
"it raises on every promise i make"
],
[
"orange is not a color",
"orange is a lifestyle"
],
[
"i'm orange",
"and everyone is telling me to calm down"
],
[
"they asked if i'm okay",
"i said 'slurp' and left"
],
[
"boomer: why don't you just buy a house?",
"zoomer: sir, i can't afford a plant"
],
[
"boomer: we had to walk to school",
"zoomer: we had to walk to wifi"
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
"it's giving main character",
"it's taking my sanity"
],
[
"me explaining the joke",
"the joke has already left the chat"
],
[
"me, a smug orange guy",
"'i told you so' is my love language"
],
[
"i was right",
"but i'm too tired to be smug about it"
],
[
"monday: what do you want?",
"me: a time machine to saturday"
],
[
"me on saturday morning",
"'finally, i can do nothing at all'"
],
[
"weekend lasted 1 day",
"the other day was for recovering"
],
[
"nobody:",
"my phone: you ignored me for 4 seconds"
],
[
"me muting 12 group chats",
"the 13th: 'did you see the news?'"
],
[
"when you finally get to bed",
"and your phone says 'hey, still awake?'"
],
[
"me: i'm so productive today",
"my productivity: made a sandwich"
]
]
};
  const flat = Object.values(PACKS).flat();
  window.CAPTION_PACKS = PACKS;
  window.CAPTIONS = flat;
  window.CAPTION_COUNT = flat.length + famSize;
  window.makeCaption = () => Math.random() < .78 ? pick(flat) : pick(fam)();
})();
