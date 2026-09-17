 "use client";

import { useState } from "react";

const showcase = [
  { name: "Nova", type: "Creator platform", className: "shot dark", emoji: "✦" },
  { name: "Wanderly", type: "Travel app", className: "shot blue", emoji: "⌁" },
  { name: "TaskFlow", type: "Project dashboard", className: "shot light", emoji: "✓" },
  { name: "Finora", type: "Finance website", className: "shot green", emoji: "↗" },
  { name: "Good Food", type: "Recipe app", className: "phoneShot food", emoji: "●" },
  { name: "Skyline", type: "Real estate app", className: "phoneShot city", emoji: "⌂" },
];

function Logo() {
  return <div className="logo"><span className="bolt">✦</span><span>Generate</span></div>;
}

function SignInButtons() {
  return (
    <div className="signinGrid">
      {[
        ["G", "Google"],
        ["f", "Facebook"],
        ["●", "Apple"],
        ["✉", "Email"],
        ["⌕", "Phone"],
        ["◉", "SSO"],
      ].map(([icon, label]) => (
        <button className="signin" key={label} onClick={() => alert(`${label} sign in will be connected in Stage 2.`)}>
          <span className="signinIcon">{icon}</span>{label}
        </button>
      ))}
    </div>
  );
}

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const start = () => {
    alert(prompt.trim()
      ? `Great idea: "${prompt}". The AI builder will be connected in Stage 2.`
      : "The AI builder will be connected in Stage 2.");
  };

  return (
    <main>
      <header className="nav">
        <a href="#" className="brand"><Logo /></a>
        <nav className={menuOpen ? "navlinks open" : "navlinks"}>
          <a href="#features">Features</a>
          <a href="#showcase">Templates</a>
          <a href="#pricing">Pricing</a>
          <a href="#how">Resources</a>
        </nav>
        <div className="navActions">
          <button className="textButton" onClick={() => document.getElementById("signin")?.scrollIntoView({ behavior: "smooth" })}>Sign in</button>
          <button className="pill mint" onClick={start}>Get Started <span>↗</span></button>
        </div>
        <button className="menuButton" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">☰</button>
      </header>

      <section className="hero" id="features">
        <div className="heroCopy">
          <div className="eyebrow">✧ Build websites & apps with AI</div>
          <h1>Turn your ideas into real apps and websites <span>with AI.</span></h1>
          <p className="heroText">Generate helps you build beautiful websites and powerful apps in minutes. Just describe your idea, and let AI do the heavy lifting.</p>
          <button className="heroCta" onClick={start}>Get Started <span>→</span></button>
          <div className="or">or continue with</div>
          <div id="signin"><SignInButtons /></div>
          <p className="fineprint">No credit card required.</p>
        </div>

        <div className="heroVisual">
          <div className="browser">
            <div className="browserBar"><i></i><i></i><i></i><span>AI Fitness Coach</span></div>
            <div className="siteHero">
              <div>
                <small>AI FITNESS COACH</small>
                <h3>Your personal<br />AI fitness coach</h3>
                <p>Custom workouts, nutrition plans, and real progress.</p>
                <button>Get Started</button>
              </div>
              <div className="person"></div>
            </div>
            <div className="featureRow"><b>◈ Personalized Plans</b><b>⌁ Track Progress</b><b>✓ Stay Motivated</b></div>
          </div>
          <div className="phone">
            <div className="phoneTop">9:41 <span>⌁</span></div>
            <h4>Good morning,<br /><strong>Alex</strong></h4>
            <div className="card"><small>Today&apos;s Workout</small><b>Upper body · 45 min</b><span>▶</span></div>
            <div className="card"><small>Nutrition</small><b>1,850 cal · 125g protein</b></div>
            <div className="progress"><span>Progress</span><strong>4/5 workouts</strong></div>
            <div className="phoneNav">⌂　 Plans　 Progress　 ●</div>
          </div>
        </div>
      </section>

      <section className="trust">
        <div className="trustLead"><small>TRUSTED BY CREATORS, FOUNDERS AND TEAMS WORLDWIDE</small><div className="yc"><b>Y</b> Y Combinator</div></div>
        <div className="count"><strong>1,000,000+</strong><span>apps and websites built</span></div>
        <div className="logos"><span>Google</span><span>◉ Spotify</span><span>▣ Notion</span><span>◈ Discord</span><span>Figma</span></div>
      </section>

      <section className="showcase section" id="showcase">
        <div className="sectionHead">
          <h2>See what you can build</h2>
          <p>From simple landing pages to full-featured mobile apps, Generate gives you the tools to bring your ideas to life, fast.</p>
        </div>
        <div className="gallery">
          {showcase.map((item, i) => (
            <div className={`${item.className} galleryItem`} key={item.name} style={{ animationDelay: `${i * 70}ms` }}>
              <div className="fakeTop"><span>{item.emoji}</span><small>{item.name}</small><div>•••</div></div>
              <div className="fakeContent">
                <small>{item.type}</small>
                <h3>{i === 0 ? "Create. Build. Grow." : i === 1 ? "Discover amazing places." : i === 2 ? "My Projects" : i === 3 ? "Grow your money with confidence." : i === 4 ? "Good food. Better you." : "Modern spaces for modern living."}</h3>
                <button>{i === 2 ? "Open dashboard" : "Get Started"}</button>
              </div>
              <div className="fakeBlocks"><span></span><span></span><span></span></div>
            </div>
          ))}
        </div>
      </section>

      <section className="how section" id="how">
        <div className="sectionHead">
          <h2>How it works</h2>
          <p>Build your app or website in just a few simple steps.</p>
        </div>
        <div className="steps">
          {[
            ["01", "⌁", "Describe your idea", "Tell us what you want to build. Be as detailed (or simple) as you like."],
            ["02", "✧", "Let AI build it", "Our AI turns your idea into a fully functional app or website."],
            ["03", "□", "Customize", "Tweak the design, add features, and make it your own."],
            ["04", "↗", "Launch", "Publish instantly and share your creation with the world."],
          ].map(([num, icon, title, text]) => (
            <div className="step" key={num}>
              <div className="stepIcon">{icon}</div><span className="stepNum">{num}</span>
              <h3>{title}</h3><p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="builder section" id="pricing">
        <div className="builderCopy">
          <div className="eyebrow">✧ Start with a sentence</div>
          <h2>Describe your idea.<br /><span>Generate the rest.</span></h2>
          <p>Tell Generate what you want to make and get a working starting point in minutes. No complicated setup required.</p>
        </div>
        <div className="promptCard">
          <label>Describe your idea</label>
          <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Build a fitness app with workout plans, nutrition tracking and progress analytics..." />
          <div className="promptTags"><button onClick={() => setPrompt("A modern ecommerce store")}>Ecommerce store</button><button onClick={() => setPrompt("A social media app")}>Social media app</button><button onClick={() => setPrompt("A portfolio website")}>Portfolio website</button></div>
          <button className="generateButton" onClick={start}>Generate App <span>→</span></button>
        </div>
      </section>

      <section className="finalCta">
        <div><h2>Ready to build your next idea?</h2><p>Join creators, founders and teams using Generate.</p></div>
        <button className="pill darkPill" onClick={start}>Get Started <span>→</span></button>
      </section>

      <footer>
        <Logo />
        <div className="footerLinks"><a href="#features">Features</a><a href="#showcase">Templates</a><a href="#pricing">Pricing</a><a href="#how">Resources</a></div>
        <div className="social">𝕏　◎　▶　in</div>
        <small>© 2026 Generate. All rights reserved.</small>
      </footer>
    </main>
  );
}