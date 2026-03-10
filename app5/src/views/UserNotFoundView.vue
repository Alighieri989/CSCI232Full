<template>
  <div class="not-found-page">
    <section class="not-found-card">
      <p class="small-label">SPECTRE NETWORK</p>
      <h1>404: User Not Found</h1>
      <p>That username isn't in our database.</p>
      <router-link to="/">Return to Login</router-link>
    </section>
  </div>
</template>

<style scoped>
.not-found-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.not-found-card {
  width: 90%;
  max-width: 520px;
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 24px;
  background: var(--card);
}

.small-label {
  margin: 0;
  color: var(--muted);
  letter-spacing: 0.08em;
  font-size: 0.72rem;
}

h1 {
  margin: 8px 0 10px;
  color: var(--text);
}

p {
  margin: 0 0 14px;
  color: var(--text);
}

a {
  color: var(--accent);
  border: 1px solid var(--line);
  padding: 6px 10px;
  display: inline-block;
  border-radius: 5px;
}
</style>
