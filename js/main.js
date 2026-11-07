(function () {
  'use strict';

  // Mobile menu
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('menu');
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  menu.addEventListener('click', e => {
    if (e.target.tagName === 'A') { menu.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
  });

  // Typing code in the phone
  const snippets = [
    '<span class="c">// Main.kt</span>\n<span class="k">class</span> MainActivity : ComponentActivity() {\n  <span class="k">override fun</span> onCreate(b: Bundle?) {\n    <span class="k">super</span>.onCreate(b)\n    setContent {\n      Greeting(<span class="s">"Android Club"</span>)\n    }\n  }\n}',
    '<span class="c">// UI.kt</span>\n@Composable\n<span class="k">fun</span> Greeting(name: String) {\n  Text(\n    text = <span class="s">"Hello, $name!"</span>,\n    style = MaterialTheme\n      .typography.headlineLarge\n  )\n}'
  ];
  const codeEl = document.getElementById('code');
  const tabs = document.querySelectorAll('.tabs span');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let timer;

  function typeSnippet(i) {
    clearTimeout(timer);
    tabs.forEach((t, n) => t.classList.toggle('on', n === i));
    const html = snippets[i];
    if (reduce) { codeEl.innerHTML = html; return; }
    let pos = 0;
    (function step() {
      // Skip over whole HTML tags so they are never shown half-typed
      if (html[pos] === '<') pos = html.indexOf('>', pos) + 1; else pos++;
      codeEl.innerHTML = html.slice(0, pos);
      if (pos < html.length) timer = setTimeout(step, 28);
      else timer = setTimeout(() => typeSnippet((i + 1) % snippets.length), 3500);
    })();
  }
  typeSnippet(0);

  // Count-up stats when visible
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const el = en.target, end = +el.dataset.count;
      let n = 0;
      const inc = () => { n = Math.min(end, n + Math.ceil(end / 40)); el.textContent = n + '+'; if (n < end) requestAnimationFrame(inc); };
      if (reduce) el.textContent = end + '+'; else inc();
      io.unobserve(el);
    });
  }, { threshold: .6 });
  document.querySelectorAll('[data-count]').forEach(c => io.observe(c));

  // Events: upcoming / past
  document.querySelectorAll('.toggle button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.toggle button').forEach(b => {
        const on = b === btn;
        b.classList.toggle('on', on);
        b.setAttribute('aria-selected', String(on));
        document.getElementById(b.dataset.show).classList.toggle('hidden', !on);
      });
    });
  });

  // Join form: validates, then opens the user's email app (no backend needed)
  const form = document.getElementById('join-form');
  const note = document.getElementById('form-note');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.elements.name, email = form.elements.email;
    const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
    name.classList.toggle('err', !name.value.trim());
    email.classList.toggle('err', !okEmail);
    if (!name.value.trim() || !okEmail) { note.textContent = 'Enter your name and a valid email address.'; return; }
    const body = encodeURIComponent('Name: ' + name.value + '\nEmail: ' + email.value + '\n\n' + form.elements.msg.value);
    window.location.href = 'mailto:androidclub@example.com?subject=' + encodeURIComponent('Join request') + '&body=' + body;
    note.textContent = 'Thanks! Your email app should open so you can send the request.';
    form.reset();
  });
})();
