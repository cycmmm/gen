import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

const profile = {
  name: '陈彦辰',
  role: '大数据专业学生',
  school: 'NAU / DATA SCIENCE / 2027',
  email: '2137765253@qq.com',
  phone: '189 1448 9775',
  location: '南京 · 中国',
  intro: '南京审计大学数据科学与大数据技术专业本科生。对数据处理与挖掘保持浓厚兴趣，具备扎实的编程、SQL 与 MongoDB 基础，也在数学建模与市场分析的实战中持续打磨数据建模和商业洞察能力。',
}

const strengths = [
  ['01', '数据处理', '从采集、清洗、整合到质量核验，习惯让繁杂信息成为可信赖的数据基础。', 'Python · SQL · MongoDB', '/strength-data.jpg'],
  ['02', '建模思维', '在数学建模与市场调研竞赛中，将问题拆解为可验证的模型与清晰的判断。', 'Modeling · Research · Insight', '/strength-model.jpg'],
  ['03', '技术实践', '覆盖 C/C++、Python、MySQL 与大数据存储相关知识，重视代码的可读与落地。', 'C/C++ · MySQL · Data Storage', '/strength-tech.jpg'],
  ['04', '组织表达', '兼具团队统筹与辩论表达经验，能够推动协作、组织共识并清晰传递观点。', 'Leadership · Debate · Communication', '/strength-team.png'],
]

const experience = [
  ['2026', '安永华明会计师事务所（上海） · IT 审计部实习生', '通过 SQL 测试客户数据质量与业务逻辑，参与 ITAC、ITGC 底稿核对及业务流水与财务账本的数据核验。', [{ src: '/internship-1.jpg', alt: '安永华明会计师事务所实习期间照片' }, { src: '/internship-2.jpg', alt: '实习期间的团队合影' }, { src: '/internship-3.jpg', alt: '实习期间携带设备前往工作现场' }, { src: '/internship-4.jpg', alt: '实习期间的团队合影' }]],
  ['2024—25', '江苏省审计机关 · 技术助理', '完成全省 300+ 名参赛人员及嘉宾信息的数据采集、清洗与整合，建立标准化数据库，确保数据准确率达 100%。'],
  ['2023—25', '南京审计大学 · 教授助理', '参与《大数据存储与分析》近半初版内容编撰与更新，并协助嵌入式芯片与系统设计相关技术工作。'],
]

function Arrow() { return <svg viewBox="0 0 18 18" aria-hidden="true"><path d="M3 9h11M10 4l5 5-5 5" /></svg> }

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [gallery, setGallery] = useState(null)
  const [cursor, setCursor] = useState({ x: -100, y: -100 })

  useEffect(() => {
    const track = (event) => setCursor({ x: event.clientX, y: event.clientY })
    window.addEventListener('pointermove', track)
    return () => window.removeEventListener('pointermove', track)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return <main>
    <div className="cursor-glow" style={{ transform: `translate(${cursor.x}px, ${cursor.y}px)` }} />
    <section className="hero" id="top">
      <video className="hero-video" autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2200&q=85">
        <source src="https://cdn.coverr.co/videos/coverr-a-digital-landscape-1575/1080p.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />
      <div className="hero-grain" />
      <nav className="nav page-width">
        <button className="brand" onClick={() => scrollTo('top')} aria-label="返回首页">Y<span>.</span></button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <button onClick={() => scrollTo('about')}>关于我</button>
          <button onClick={() => scrollTo('strengths')}>能力</button>
          <button onClick={() => scrollTo('contact')}>联系</button>
        </div>
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="菜单"><i /><i /></button>
      </nav>
      <div className="hero-content page-width">
        <p className="eyebrow"><span className="pulse" /> AVAILABLE FOR INTERNSHIP</p>
        <h1>DATA<br /><em>WITH</em> PURPOSE.</h1>
        <div className="hero-bottom">
          <p>以数据洞察真实世界<br />用技术创造有效连接</p>
          <button className="line-button" onClick={() => scrollTo('about')}>探索我的经历 <Arrow /></button>
        </div>
      </div>
      <div className="hero-index">01 <span>/</span> 04</div>
      <button className="scroll-hint" onClick={() => scrollTo('about')}><span /> SCROLL TO DISCOVER</button>
    </section>

    <section className="about section page-width" id="about">
      <div className="section-label"><span>01</span> ABOUT ME</div>
      <div className="about-grid">
        <div className="portrait"><div className="portrait-light" /><div className="portrait-photo"><img src="/cyc1.jpg" alt={`${profile.name}的现场照片`} /></div><div className="portrait-copy"><small>HELLO, I AM</small><strong>我</strong><i>DATA<br />STUDENT</i></div></div>
        <div className="about-copy">
          <p className="display-copy">让数据不只停留在<br /><i>数字</i>，而成为方向。</p>
          <p className="body-copy">{profile.intro}</p>
          <div className="info-grid">
            <div><small>ROLE</small><b>{profile.role}</b></div>
            <div><small>BASE</small><b>{profile.location}</b></div>
            <div><small>CONTACT</small><a href={`mailto:${profile.email}`}>{profile.email}</a></div>
          </div>
        </div>
      </div>
      <div className="experience">
        <div className="experience-heading"><span>EXPERIENCE</span><p>将每一段实践<br />沉淀为下一次出发。</p></div>
        <div className="timeline">{experience.map(([date, title, text, photos]) => <article key={date}><span>{date}</span><div><h3>{title}</h3><p>{text}</p></div>{photos ? <button className="has-gallery" onClick={() => setGallery({ title, photos, active: 0 })} aria-label={`查看 ${title}的实习影像`}><Arrow /></button> : <button aria-label={`查看 ${title}`}><Arrow /></button>}</article>)}</div>
      </div>
    </section>

    <section className="strengths section" id="strengths">
        <div className="page-width"><div className="section-label"><span>02</span> SELECTED STRENGTHS</div><div className="strength-heading"><h2>优势，不止于<br /><i>技术栈。</i></h2><p>在学习与实践中形成的能力组合，<br />是我面对未知问题的底气。</p></div>
        <div className="cards">{strengths.map(([num, title, text, stack, image]) => <article className="strength-card" style={{ '--card-image': `url(${image})` }} key={num}><div className="card-top"><span>{num}</span><button><Arrow /></button></div><h3>{title}</h3><p>{text}</p><small>{stack}</small></article>)}</div>
      </div>
    </section>

    <section className="contact" id="contact">
      <div className="contact-orbit orbit-a" /><div className="contact-orbit orbit-b" />
      <div className="contact-inner page-width"><p className="eyebrow">03 / LET'S CONNECT</p><h2>有想法？<br /><i>我们聊聊。</i></h2><button className="contact-button" onClick={() => setContactOpen(true)}>开始对话 <Arrow /></button><div className="contact-meta"><a href={`mailto:${profile.email}`}>{profile.email}</a><span>{profile.phone}</span><span>{profile.school}</span></div></div>
      <footer><span>© 2026 {profile.name}</span><button onClick={() => scrollTo('top')}>BACK TO TOP ↑</button></footer>
    </section>
    {contactOpen && <div className="modal-backdrop" onClick={() => setContactOpen(false)}><div className="contact-modal" onClick={(e) => e.stopPropagation()}><button className="close" onClick={() => setContactOpen(false)}>×</button><p className="eyebrow">SAY HELLO</p><h3>期待认识你。</h3><a href={`mailto:${profile.email}`}>{profile.email}</a><span>或致电 {profile.phone}</span></div></div>}
    {gallery && <div className="modal-backdrop gallery-backdrop" onClick={() => setGallery(null)}><div className="gallery-modal" onClick={(e) => e.stopPropagation()}><button className="close" onClick={() => setGallery(null)} aria-label="关闭实习影像">×</button><div className="gallery-kicker"><span>FIELD NOTES / {String(gallery.active + 1).padStart(2, '0')}</span><span>INTERNSHIP MOMENTS</span></div><div className="gallery-stage"><img src={gallery.photos[gallery.active].src} alt={gallery.photos[gallery.active].alt} />{gallery.active > 0 && <button className="gallery-nav previous" onClick={() => setGallery({ ...gallery, active: gallery.active - 1 })} aria-label="上一张照片">←</button>}{gallery.active < gallery.photos.length - 1 && <button className="gallery-nav next" onClick={() => setGallery({ ...gallery, active: gallery.active + 1 })} aria-label="下一张照片">→</button>}</div><div className="gallery-caption"><p>{String(gallery.active + 1).padStart(2, '0')} / {String(gallery.photos.length).padStart(2, '0')}</p><h3>{gallery.title}</h3></div><div className="gallery-dots">{gallery.photos.map((photo, index) => <button key={photo.src} className={index === gallery.active ? 'active' : ''} onClick={() => setGallery({ ...gallery, active: index })} aria-label={`查看第 ${index + 1} 张照片`} />)}</div></div></div>}
  </main>
}

createRoot(document.getElementById('root')).render(<App />)
