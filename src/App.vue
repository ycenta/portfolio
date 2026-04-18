<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { Rive } from '@rive-app/canvas'

// -----------------------------------------------------------------------------
// data
// -----------------------------------------------------------------------------
const profile = {
  handle: 'ycenta',
  name: 'Yohan Centanni',
  role: 'fullstack engineer',
  location: 'fr / remote',
  status: 'open to work',
}

const stack = [
  { label: 'lang',    items: ['typescript', 'javascript', 'rust', 'php'] },
  { label: 'front',   items: ['react', 'next', 'vue', 'tailwind'] },
  { label: 'back',    items: ['node', 'bun', 'express', 'laravel'] },
  { label: 'data',    items: ['mongodb', 'postgres', 'redis'] },
  { label: 'desktop', items: ['tauri'] },
  { label: 'tools',   items: ['git', 'docker', 'figma', 'vim'] },
]

const experience = [
  { range: '2024 — now',  title: 'fullstack engineer', org: 'freelance / projects' },
  { range: '2021 — 2024', title: 'web developer',      org: 'CultureG' },
  { range: '2020 — 2021', title: 'volunteer mentor',   org: 'programming · 3d' },
]

const links = [
  { key: 'github',   value: 'ycenta',            href: 'https://github.com/ycenta' },
  { key: 'linkedin', value: 'yohancentanni',     href: 'https://www.linkedin.com/in/yohancentanni/' },
  { key: 'cv',       value: 'cv.pdf',            href: '/files/cv.pdf' },
]

// -----------------------------------------------------------------------------
// ascii name banner — letters: Y C E N T A N N I
// -----------------------------------------------------------------------------
const asciiName = [
  'Y   Y   CCCC  EEEE  N   N  TTTTT   AA  ',
  ' Y Y   C      E     NN  N    T    A  A ',
  '  Y    C      EEE   N N N    T    AAAA ',
  '  Y    C      E     N  NN    T    A  A ',
  '  Y     CCCC  EEEE  N   N    T    A  A ',
].join('\n')

// -----------------------------------------------------------------------------
// clock + rive
// -----------------------------------------------------------------------------
const now = ref(new Date())
let clockInterval = null

const time = computed(() =>
  now.value.toLocaleTimeString('en-GB', { hour12: false, timeZone: 'Europe/Paris' })
)

const canvas = ref(null)
let riveInstance = null

onMounted(() => {
  clockInterval = setInterval(() => (now.value = new Date()), 1000)
  if (canvas.value) {
    try {
      riveInstance = new Rive({
        canvas: canvas.value,
        src: '/rive/anime.riv',
        autoplay: true,
        stateMachines: 'State Machine 1',
      })
    } catch (e) {
      // silent — rive is decorative
    }
  }
})

onBeforeUnmount(() => {
  if (clockInterval) clearInterval(clockInterval)
  if (riveInstance) riveInstance.cleanup?.()
})
</script>

<template>
  <main class="term">
    <!-- status bar -->
    <header class="bar" aria-label="status">
      <span class="bar__dot" aria-hidden="true"></span>
      <span class="bar__label">{{ profile.handle }}@portfolio</span>
      <span class="bar__sep">~</span>
      <span class="bar__muted">{{ profile.location }}</span>
      <span class="bar__spacer"></span>
      <span class="bar__muted">{{ time }} CET</span>
    </header>

    <div class="wrap">
      <!-- hero : ascii name + rive -->
      <section class="hero">
        <pre class="ascii" aria-hidden="true">{{ asciiName }}</pre>
        <div class="hero__meta">
          <p class="hero__role">
            <span class="accent">//</span> {{ profile.role }}
          </p>
          <p class="hero__sub">
            <span class="muted">status:</span>
            <span class="tag">{{ profile.status }}</span>
          </p>
        </div>

        <div class="rive">
          <canvas ref="canvas" width="360" height="360" aria-label="rive animation"></canvas>
        </div>
      </section>

      <!-- whoami -->
      <section class="block">
        <h2 class="prompt"><span class="accent">&gt;</span> whoami</h2>
        <p class="prose">
          fullstack dev based in france. i build web apps with typescript,
          react and next, backed by mongo or postgres. i also ship native
          things with rust and tauri when the web isn't enough. ~5 years
          shipping products, from internal tooling to public-facing platforms.
        </p>
      </section>

      <!-- stack -->
      <section class="block">
        <h2 class="prompt"><span class="accent">&gt;</span> stack</h2>
        <ul class="tree" role="list">
          <li v-for="(row, i) in stack" :key="row.label">
            <span class="tree__branch">{{ i === stack.length - 1 ? '└─' : '├─' }}</span>
            <span class="tree__key">{{ row.label.padEnd(8, ' ') }}</span>
            <span class="tree__val">
              <template v-for="(it, j) in row.items" :key="it">
                <span>{{ it }}</span>
                <span v-if="j < row.items.length - 1" class="dim"> · </span>
              </template>
            </span>
          </li>
        </ul>
      </section>

      <!-- experience -->
      <section class="block">
        <h2 class="prompt"><span class="accent">&gt;</span> experience</h2>
        <ul class="tree" role="list">
          <li v-for="(row, i) in experience" :key="row.range">
            <span class="tree__branch">{{ i === experience.length - 1 ? '└─' : '├─' }}</span>
            <span class="tree__range">{{ row.range }}</span>
            <span class="dim">  ·  </span>
            <span>{{ row.title }}</span>
            <span class="muted"> @ {{ row.org }}</span>
          </li>
        </ul>
      </section>

      <!-- links -->
      <section class="block">
        <h2 class="prompt"><span class="accent">&gt;</span> links</h2>
        <ul class="tree" role="list">
          <li v-for="(row, i) in links" :key="row.key">
            <span class="tree__branch">{{ i === links.length - 1 ? '└─' : '├─' }}</span>
            <span class="tree__key">{{ row.key.padEnd(10, ' ') }}</span>
            <a :href="row.href" target="_blank" rel="noopener noreferrer">{{ row.value }}</a>
          </li>
        </ul>
      </section>

      <!-- footer prompt -->
      <footer class="block footer">
        <span class="accent">&gt;</span>
        <span class="cursor" aria-hidden="true"></span>
        <span class="muted">&nbsp; built with vue · rive · no trackers</span>
      </footer>
    </div>
  </main>
</template>

<style scoped>
.term {
  min-height: 100vh;
  padding: 0 0 4rem;
}

/* status bar */
.bar {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 1.2rem;
  border-bottom: 1px solid var(--dim);
  font-size: 0.78rem;
  color: var(--muted);
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  position: sticky;
  top: 0;
  z-index: 10;
}
.bar__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 8px var(--accent);
  animation: pulse 2.4s ease-in-out infinite;
}
.bar__label { color: var(--fg); }
.bar__sep { color: var(--dim); }
.bar__muted { color: var(--muted); }
.bar__spacer { flex: 1; }

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.4; }
}

/* wrapper */
.wrap {
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 1.5rem 0;
}

/* hero */
.hero {
  position: relative;
  padding-bottom: 2.5rem;
  border-bottom: 1px dashed var(--dim);
  margin-bottom: 2.5rem;
}
.ascii {
  font-size: clamp(0.42rem, 1.2vw, 0.72rem);
  line-height: 1.2;
  color: var(--fg);
  white-space: pre;
  overflow-x: auto;
  letter-spacing: 0;
  margin-bottom: 1.2rem;
  user-select: none;
}
.hero__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.4rem;
  align-items: center;
}
.hero__role {
  font-size: 1rem;
  letter-spacing: 0.02em;
}
.hero__sub {
  font-size: 0.85rem;
  color: var(--fg);
}
.tag {
  display: inline-block;
  padding: 1px 8px;
  border: 1px solid var(--accent-dim);
  color: var(--accent);
  margin-left: 0.4rem;
  font-size: 0.78rem;
}

.rive {
  position: absolute;
  top: -30px;
  right: -20px;
  width: 220px;
  height: 220px;
  opacity: 0.9;
  filter: grayscale(0.15) contrast(1.05);
  animation: float 8s ease-in-out infinite;
  z-index: 5;
}
.rive canvas {
  width: 100%;
  height: 100%;
  cursor: crosshair;
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-10px); }
}

/* blocks */
.block {
  margin-bottom: 2.2rem;
}
.prompt {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--fg);
  margin-bottom: 0.8rem;
  letter-spacing: 0.03em;
}
.prose {
  color: var(--fg);
  max-width: 68ch;
  padding-left: 1.5rem;
  border-left: 1px solid var(--dim);
}

/* tree list */
.tree {
  list-style: none;
  padding-left: 1rem;
}
.tree li {
  display: block;
  font-size: 0.88rem;
  padding: 2px 0;
  white-space: pre-wrap;
}
.tree__branch {
  color: var(--dim);
  margin-right: 0.6rem;
  user-select: none;
}
.tree__key {
  color: var(--accent);
  white-space: pre;
  margin-right: 0.6rem;
}
.tree__range {
  color: var(--muted);
  margin-right: 0.4rem;
}
.tree__val { color: var(--fg); }

/* utils */
.accent { color: var(--accent); }
.muted  { color: var(--muted); }
.dim    { color: var(--dim); }

/* footer */
.footer {
  display: flex;
  align-items: center;
  padding-top: 1.5rem;
  border-top: 1px dashed var(--dim);
}
.cursor {
  display: inline-block;
  width: 8px;
  height: 1.05em;
  margin-left: 6px;
  background: var(--accent);
  vertical-align: middle;
  animation: blink 1.05s steps(2, start) infinite;
}
@keyframes blink {
  50% { opacity: 0; }
}

/* responsive */
@media (max-width: 720px) {
  .rive {
    position: static;
    margin: 1rem auto 0;
    width: 160px;
    height: 160px;
    opacity: 0.9;
  }
  .hero {
    text-align: left;
  }
  .ascii {
    font-size: 0.38rem;
  }
}
</style>
