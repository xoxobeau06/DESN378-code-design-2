# DESN 378: Code + Design 2

🔗 **[Learning Log](https://github.com/xoxobeau06/DESN378-code-design-2)**

🔗 **[DESN368 Portfolio](https://xoxobeau06.github.io/DESN368-code-design-workspace-SL/)** 
---

## About This Repository

This is my workspace for **DESN 378 Code + Design 2** also known as **Web Design 2** (or in the future, **Web Design + Code 2**) at Eastern Washington University. **The question this course asks:** How should things behave? In DESN 368, I learned how to make things look right. Here, I'm learning how to make things behave right — treating code as a design material with properties, behaviors, and constraints, just like paint, paper, or clay. Throughout the quarter, I'll work with four digital materials: CSS systems, SVG, animation libraries, and generative code — learning how each responds to manipulation and what each makes possible. Unlike courses focused on user research or backend engineering, this one asks: How does it feel? By the end, this repo will become my portfolio.


---

## Projects

| # | Project | Focus | Status |
|---|---------|-------|--------|
| 1 | The System | Design tokens + theme switching | 🔲 |

---

## Learning Log

Update this section each week with observations, breakthroughs, and questions.
### Week 0: The Setup
# Learning Log
​
## Week 0
​
### What I Learned
What concepts clicked for you? What was new?;
Nothing has super clicked for me just yet, everything in javascript is new to me.
​
​
### What Was Hard
 What frustrated you? What didn't make sense?
The new terminology in Java, and adding another location for my code information. Nothing really makes sense just yet. I am going through the motions but nothing is sticking
​
​
### How I Used AI
Did you use Copilot, ChatGPT, etc.? How did it help or not help?
I used both, Copilot to be my small error fix, like spell check for code. Why a link wasn't working and i missed a dash or something like that. I used Chat to help make a better structured plan for each assignment and to help make some base Html and Css code so my brain could focus on learning the new language (Java)
​
​
### What's Still Unclear
 What questions do you still have? What needs more practice? 
A little bit of everything, i need more time in class with SLOW tutorials. Guieded repetition is how i learn
​
​
### Work Completed (Week 0)
​
**Engage**
- [X] Portfolio Audit
​
**Learn**
- [X] Console Explorer
- [X] Codedex Console Fundamentals
​
**Reflect**
- [X] Visual Notes: Variables and Strings
​
**Build**
- [X] The Setup
- [X] The Behavioral Layer
​
---

### Week 1: Systems That Respond
​
## Week 1

### What I Learned
The reasoning behind design systems made more sense to me this week, especially the organizational side of them. Seeing design systems as a way to keep things consistent and structured across a project helped the concept feel more understandable.

### What Was Hard
Using JavaScript selectors for the story teller assignment was difficult. I found it hard to know how to start and how to get from the beginning to a finished, working version without a lot of guidance.

### How I Used AI
I used AI mainly to break things down into smaller steps and to explain JavaScript code when I got stuck. It helped me move forward in the assignment, even though I don’t remember all of the details yet.

### What's Still Unclear
JavaScript selectors and JavaScript in general are still pretty unclear to me. I’m feeling a bit overwhelmed and know I need more practice to feel confident starting and explaining my code on my own.


### Work Completed (Week 1)

**Engage**
- [X] VS Code Theme Setup

**Learn**
- [X] Codedex.io Variables
- [X] HTML Academy 

**Practice**
- [X] The Story Teller

**Build**
- [X] Portfolio Migration
- [X] Portfolio in Figma + Style Tile

**Reflect**
- [X] Visual Notes: Week 1---

### Week 2: Remembering Choices
# Learning Log
​
## Week 2
​
### What I Learned
<!-- What concepts clicked for you? What was new? -->
The application of figma variables was new, i am used to styles and components in figma so i don't really understand why we need another method in figma for them. 
​
​
### What Was Hard
<!-- What frustrated you? What didn't make sense? -->
The different names and sections for figma varibles, i feel like i could make a system that is much easier to understand. 
​
​
### How I Used AI
<!-- Did you use Copilot, ChatGPT, etc.? How did it help or not help? -->
I used chatGPT to better explain the assignments this week because the information was not working for my brain 
​
​
### What's Still Unclear
<!-- What questions do you still have? What needs more practice? -->
Still everything in regards to applying javascript, im still just going through the motions and am unsure on what im actually doing.
​
​
### Work Completed (Week 2)

**Engage**
- [X] VS Code Theme Setup

**Learn**
- [X] Codedex.io Conditionals
- [X] figma variables

**Practice**
- [X] The Switch

**Build**
- [X] The Foundation
- [X] Portfolio in Figma + Style Tile

**Reflect**
- [X] Visual Notes: Week 2---

---

# Learning Log
​
## Week 3
​
### What I Learned
This week helped me understand the difference between appearance (what the UI looks like right now) and state (what the system remembers). I learned how design tokens make styles reusable and consistent, and how using semantic tokens instead of hard-coded values makes theme switching much easier. I also learned how system preferences and localStorage work together to create a more thoughtful user experience.
​
​
### What Was Hard
The hardest part was getting the theme toggle to persist correctly. I ran into issues where the theme would switch visually but not stay on refresh, or it would work correctly until i changed the style of a button and it threw off everything. This helped me realize how sensitive JavaScript logic is to order and naming. Debugging localStorage took time, especially figuring out when the system preference should apply versus when a saved preference should override it.
​
​
### How I Used AI
I used ChatGPT to help me reason through why my dark mode wasn’t persisting and to sanity-check my logic around localStorage and system preferences. I also used it to clarify design-token structure and confirm whether my CSS setup aligned with best practices. AI helped me troubleshoot and understand concepts, but I still implemented and adjusted everything myself.​
​
### What's Still Unclear
I’m still unsure about how SVGs interact with data-theme, particularly the difference between inline SVGs that can respond to CSS variables and external SVG files that can’t.
​
​
### Work Completed (Week 3)

**Design Tokens**
- [X] variables.css exists
- [X] Color tokens defined
- [X] Typography tokens defined
- [X] Spacing tokens defined
- [X] Tokens used in CSS (no hardcoded values)

**Theme System**
- [X] Uses data-theme on <html>
- [X] Toggle feedback is immediate

**Persistence & Preference**
- [X] Theme saved to localStorage
- [X] Theme persists on refresh
- [X] System preference used on first visit

**Deployment**
- [X] Deployed to GitHub Pages
- [X] Repository is public

# Learning Log
​
## Week 4
​
### What I Learned
This week focused on SVG fundamentals and how icons work both visually and structurally. I learned how SVGs are built from basic shapes like rectangles, circles, and lines, and how those primitives combine to form icons. I also learned about SVG anatomy, including the viewBox, grouping, and how SVGs can be styled with CSS using currentColor and design tokens.

Another big concept was building a theme dropdown with custom SVG icons. I learned how JavaScript, CSS variables, and the data-theme attribute work together to switch between light, dark, and system modes, and how user preferences are saved with localStorage.

### What Was Hard
Getting the SVG code to work correctly was the most challenging part. Small mistakes in the code would cause the icon to break or not display, and it sometimes took multiple attempts to fix it.

The theme dropdown logic was also confusing at first, especially understanding how the system theme behaves differently from light and dark. It took time to understand how JavaScript, CSS variables, and the data-theme attribute all connect.

### How I Used AI
I used ChatGPT to help troubleshoot SVG issues and understand why certain parts of the code were not working. I also asked for explanations of the theme switcher logic and how the different pieces interacted.

AI was most helpful when I got stuck, because it helped me spot errors and explained concepts in simpler terms so I could try again.

### What's Still Unclear
I still feel a little unsure about writing SVG code completely from scratch without looking at references. I understand the structure better now, but I want more practice building icons using only primitives.

I also want to get more comfortable with JavaScript logic, especially when it involves multiple states like light, dark, and system.

### Work Completed (Week 4)
- [X] Build 4-1 // Symbols — Theme Dropdown with Custom SVG Icons  
- [X] Engage 4-1 // Learning Log Week-3  
- [X] Practice 4-1 // SVG Tutorial  
- [X] Reflect Week 4 — Visual Notes  
- [X] Build 4-2 // The Mark (Geometry & Primitives)  
- [X] Practice 4-1 // .svg Anatomy  

### Week 5: Motion as Story
# Learning Log

## Week 5

### What I Learned  
What concepts clicked for you? What was new?  

Animation started to make more sense structurally this week. Before, motion felt decorative. Now I understand that with GSAP, animation is controlled and intentional.

I learned how to use `gsap.to()`, `gsap.from()`, and `gsap.fromTo()` and began to understand when each method is appropriate. Easing started to click — different eases create different emotional tones.

Through the scrollytelling brief and research, I learned that scrolling controls pacing. It replaces time as the driver of motion. It’s not just about things moving — it’s about reveal, attention, rhythm, and storytelling.

This week felt like a shift from learning “how to animate” to learning “why to animate.”


### What Was Hard  
What frustrated you? What didn't make sense?  

Debugging GSAP issues was frustrating. Sometimes animations wouldn’t run, and it wasn’t clear why. I ran into problems with SVG targeting and plugin errors, which took time to understand.

It was also difficult to make animations feel intentional instead of random. It’s easy to make something move. It’s harder to decide what deserves movement and what doesn’t.

Building motion into a system rather than isolated experiments still feels challenging.


### How I Used AI  
Did you use Copilot, ChatGPT, etc.? How did it help or not help?  

I used Copilot to catch small syntax mistakes and missing characters — similar to spell check for JavaScript.

I used ChatGPT to troubleshoot GSAP errors and clarify when to use different tween methods. I also asked questions about how scroll-driven storytelling works conceptually.

AI helped me debug faster and understand technical differences, but I still had to test, adjust, and make creative decisions myself.


### What’s Still Unclear  
What questions do you still have? What needs more practice?  

I need more practice building full scroll-driven sequences instead of small animation tests.

I am still figuring out:
- How much motion is too much  
- How to pace scroll storytelling without overwhelming the user  
- How to make motion feel cohesive within a larger system  

More repetition and structured practice would help solidify this.


### Work Completed (Week 5)

**Context**
- [X] PROJECT BRIEF: Lost in the Scroll  
- [X] Scrollytelling Inspiration: 25 Sites  

**Practice and Learning**
- [X] Switch Practice  
- [X] Learn 5-1 // Green Sock Animation Platform  
- [X] Practice 5-2 // GSAP SVG  

**Project Related**
- [X] Metaphor Alignment  
- [X] Scrollytelling Research  
- [X] Build 5 // The System  

**Reflect**
- [X] Reflect: Week 5 — Visual Notes

### Week 6: Structuring the System
# Learning Log

## Week 6

### What I Learned  
What concepts clicked for you? What was new?  

Week 6 felt like moving from experimenting with motion to designing a structure for it.
In Build 6-1 (The Blueprint), I learned how important planning is before animation even begins. Mapping sections, pacing, and story beats made the project feel less chaotic. Through the Motion Map and ScrollTrigger notes, I learned how scroll replaces time as the controller of animation. Concepts like `trigger`, `start`, `end`, `scrub`, and `markers` started to make sense in context.
Parallax helped me understand depth, that different speeds create hierarchy and spatial storytelling.
This week made me realize motion is not just visual. It is structural.


### What Was Hard  
What frustrated you? What didn't make sense?  

ScrollTrigger settings were confusing at first. Understanding the relationship between `trigger`, `start`, and `end` took repetition.
Parallax was tricky because small changes in speed created big visual differences. It was easy to overdo it.Balancing planning (Blueprint + Motion Map) with actually building felt overwhelming at times.


### How I Used AI  
Did you use Copilot, ChatGPT, etc.? How did it help or not help?  

I used AI to clarify ScrollTrigger properties and troubleshoot when animations didn’t fire at the right time.
I asked questions about scrub behavior and how to structure parallax correctly. AI helped explain concepts clearly, but I still had to test values and adjust positioning myself.


### What’s Still Unclear  
What questions do you still have? What needs more practice?  

I need more practice fine-tuning scroll pacing.

I am still figuring out:
- How to balance subtle parallax vs. dramatic movement  
- How to keep scroll animations smooth across sections  
- How to prevent motion from overwhelming content  

More controlled testing will help.


### Work Completed (Week 6)

**Engage**
- [X] Engage 6/7-1 // Learning Log  

**Build**
- [X] Build 6-1 : The Blueprint  
- [X] Motion Map  

**Practice**
- [X] GSAP AI SVG Tutorial  
- [X] Practice 7-1: The Parallax  

**Reflect**
- [X] Reflect: Week 6 — Visual Notes // ScrollTrigger + Parallax  
---

### Week 7: From Structure to Story
# Learning Log

## Week 7

### What I Learned  
What concepts clicked for you? What was new?  

Week 7 felt like turning structure into something real.

In Rough Cut 1, I learned how different it feels to see everything connected instead of isolated tests. The story started to feel tangible.
In Build 7-2 (The Pulse), I focused on refining GSAP animations and making sure all written content supported the motion instead of competing with it.I learned that animation and writing must support each other. If the motion is strong but the content is unclear, the experience falls apart. This week helped me see how motion creates emotional rhythm.


### What Was Hard  
What frustrated you? What didn't make sense?  

Getting all animations to work together smoothly was difficult. Small inconsistencies in timing became noticeable. It was also hard to decide when to simplify. I had to remove or tone down certain motions to keep the system cohesive. Managing both technical animation and final written content felt like a lot at once.


### How I Used AI  
Did you use Copilot, ChatGPT, etc.? How did it help or not help?  

I used AI to troubleshoot animation sequencing issues and refine small GSAP adjustments. I also used it to help clarify written content so it aligned with my metaphor and pacing. AI helped speed up problem-solving, but the creative and structural decisions were still mine.
I also used AI to help my build for my blueprint. I used anitgravity, claude, and figma make to give me some ideas of what kind of animations and flow states that i want to encorporate into my site.


### What’s Still Unclear  
What questions do you still have? What needs more practice?  

I want more confidence in building full scroll narratives without second-guessing pacing.
I am still refining:
- Cohesion between sections  
- Consistent animation timing  
- Emotional rhythm across the full experience  

More iteration and testing will help solidify this.


### Work Completed (Week 7)

**Engage**
- [X] Engage 6/7-1 // Learning Log  

**Build**
- [X] Build 7-1 // Rough Cut 1  
- [X] Build 7-2 The Pulse // GSAP Animations + All Content Written  

**Practice**
- [X] Practice 7-1: The Parallax  
## Quick Links

- My Profile (https://github.com/xoxobeau06/DESN378-code-design-2/blob/main/PROFILE.md)
- [Labs](labs/)

---

## Tools

- **Editor:** VS Code + GitHub Copilot
- **Design:** Figma
- **Hosting:** GitHub Pages
- **Animation:** GSAP (coming Week 5)

---

*This README will evolve. At quarter's end, it transforms into a portfolio landing page.*
