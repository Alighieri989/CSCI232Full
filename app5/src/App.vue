<script setup></script>

<template>
  <div class="app-wrapper">
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style>
:root {
  --bg: #100d0a;
  --card: rgba(34, 25, 18, 0.9);
  --line: rgba(255, 168, 84, 0.5);
  --accent: #ffb457;
  --text: #ffe8cc;
  --muted: #d8b282;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: 'Eurostile', 'Eurostile Extended', 'Segoe UI', sans-serif;
  color: var(--text);
  background: linear-gradient(145deg, #050403 0%, #1a120b 33%, #2b1a0f 66%, #120d08 100%);
}

#app,
.app-wrapper,
.app-wrapper main {
  min-height: 100vh;
}

a {
  color: var(--accent);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
