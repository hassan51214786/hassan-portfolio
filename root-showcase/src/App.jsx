import React from 'react';
import './App.css';

const github = 'https://github.com/hassan51214786';

function Mark() {
  return <svg viewBox="0 0 300 310" aria-hidden="true" className="fold-mark"><path d="M80 15v105l100 55V70z" fill="#174cff"/><path d="M180 70v105l70 40V110z" fill="#0033ec"/><path d="M80 120 30 92v115l100 58V160" fill="none" stroke="#7595ff"/><path d="m130 160 100 58v80l-100-58z" fill="none" stroke="#7595ff"/><path d="m80 15 50-28v56M250 215v55l-20 12" fill="none" stroke="#b9c6e9"/></svg>;
}

function CoffeePreview() {
  return <div className="project-preview coffee-preview" aria-hidden="true"><div className="preview-nav"><b>AURA</b><span>Home · Menu · Our story</span></div><div className="coffee-copy">Good coffee.<br/>Brighter days.</div><div className="coffee-cup"><i/></div><small>Interface concept</small></div>;
}

function TaskPreview() {
  return <div className="project-preview task-preview" aria-hidden="true"><div className="task-sidebar"><b>Task Tracker</b><span className="active">All tasks</span><span>Today</span><span>Upcoming</span><span>Completed</span></div><div className="task-body"><div className="task-heading">Today <span>+ New task</span></div>{['Review the interface', 'Build a component', 'Write documentation', 'Plan next steps'].map((text, i) => <div className="task-line" key={text}><i className={i === 0 ? 'checked' : ''}/>{text}<em>{i === 0 ? 'High' : 'Next'}</em></div>)}</div><small>Interface concept</small></div>;
}

export default function App() {
  return <div className="portfolio">
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header wrap"><a href="#home" className="wordmark" aria-label="Hassan Ali home">HA<span>.</span></a><nav aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></nav></header>
    <main id="main" className="wrap">
      <section id="home" className="hero-section"><div className="hero-copy"><p className="eyebrow"><span/>HASSAN ALI / FRONTEND & AUTOMATION</p><h1>Thoughtful<br/><span>interfaces.</span><br/>Practical automation.</h1><p className="intro">I’m Hassan Ali, a BS Artificial Intelligence student at NUML building frontend projects and workflow automations.</p><div className="hero-actions"><a className="button" href="#work">View selected work <span aria-hidden="true">↗</span></a><a className="text-link" href={github} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a></div></div><div className="hero-art"><Mark/><p>IDEAS<br/>INTERFACES<br/>AUTOMATIONS</p></div></section>
      <section id="work" className="work-section"><div className="section-heading"><h2>Selected work</h2><span>01 — 03</span></div><div className="project-grid"><article className="project"><a className="preview-link" href="https://aura-coffee-frontend.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="Open Aura Coffee frontend"><CoffeePreview/></a><p className="eyebrow">FRONTEND DEMO</p><div className="project-title"><h3>Aura Coffee</h3><a href="https://aura-coffee-frontend.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="Open Aura Coffee">↗</a></div><p>A coffee storefront frontend exploring layout, typography, and responsive interfaces.</p><a className="text-link" href="https://aura-coffee-frontend.vercel.app" target="_blank" rel="noopener noreferrer">View live demo ↗</a></article><article className="project"><a className="preview-link" href={`${github}/task-tracker-ts`} target="_blank" rel="noopener noreferrer" aria-label="View Task Tracker source"><TaskPreview/></a><p className="eyebrow">TYPESCRIPT PROJECT</p><div className="project-title"><h3>Task Tracker</h3><a href={`${github}/task-tracker-ts`} target="_blank" rel="noopener noreferrer" aria-label="View Task Tracker source">↗</a></div><p>A TypeScript task-tracking project. Explore its implementation and documentation on GitHub.</p><a className="text-link" href={`${github}/task-tracker-ts`} target="_blank" rel="noopener noreferrer">View source ↗</a></article></div><a className="agency-strip" href="https://nulastra.pro" target="_blank" rel="noopener noreferrer"><div><h3>NulAstra</h3><p>My automation agency website</p></div><span aria-hidden="true">↗</span></a><p className="preview-note">Project illustrations show design concepts. Follow the links to see the actual work.</p></section>
      <section id="about" className="about-section"><p className="eyebrow">A LITTLE ABOUT ME</p><div><h2>Learning through<br/>building.</h2><p>I work with React, JavaScript, HTML, and CSS for web interfaces, and Python and n8n for automation projects. I’m developing these skills alongside my AI degree.</p><div className="skill-list">{['React', 'JavaScript', 'HTML / CSS', 'Python', 'n8n'].map(skill => <span key={skill}>{skill}</span>)}</div><a className="text-link" href={`${github}/hassan-portfolio`} target="_blank" rel="noopener noreferrer">More frontend experiments ↗</a></div></section>
    </main><footer id="contact" className="site-footer wrap"><div><p className="eyebrow">LET’S BUILD SOMETHING USEFUL</p><h2>Open to remote opportunities.</h2></div><a className="button" href={github} target="_blank" rel="noopener noreferrer">Find me on GitHub ↗</a><div className="footer-bottom"><span>Hassan Ali</span><a href="#home">Back to top ↑</a></div></footer>
  </div>;
}
