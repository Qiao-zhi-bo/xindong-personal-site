import * as React from 'react'
import { Menu, X, Mail, Video, Box, Cpu, Gamepad2, Code2 } from 'lucide-react'
import { Button } from './components/ui/button'
import { NavLink } from './components/ui/nav-link'

// ============== 导航栏 ==============
function Navigation() {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const closeMenu = () => setMobileOpen(false)

  return (
    <nav className="relative z-10 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
      {/* Logo */}
      <a
        href="#home"
        className="text-3xl tracking-tight text-foreground"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        心动<sup className="text-xs">®</sup>
      </a>

      {/* 桌面端导航链接 */}
      <div className="hidden md:flex items-center gap-8">
        <NavLink href="#home" active>
          Home
        </NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </div>

      {/* 桌面端 CTA */}
      <div className="hidden md:block">
        <Button asChild>
          <a href="#contact">Begin Journey</a>
        </Button>
      </div>

      {/* 移动端汉堡按钮 */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden text-foreground p-2"
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* 抽屉式移动端菜单 */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden"
          onClick={closeMenu}
        >
          {/* 背景遮罩 */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
          {/* 抽屉面板 */}
          <div
            className="absolute top-0 right-0 h-full w-72 liquid-glass bg-background/90 p-8 flex flex-col gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span
                className="text-2xl text-foreground"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                心动<sup className="text-xs">®</sup>
              </span>
              <button
                onClick={closeMenu}
                className="text-foreground p-2"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-4 mt-8">
              <NavLink href="#home" active onClick={closeMenu}>
                Home
              </NavLink>
              <NavLink href="#about" onClick={closeMenu}>
                About
              </NavLink>
              <NavLink href="#projects" onClick={closeMenu}>
                Projects
              </NavLink>
              <NavLink href="#contact" onClick={closeMenu}>
                Contact
              </NavLink>
            </div>
            <Button asChild className="mt-auto">
              <a href="#contact" onClick={closeMenu}>
                Begin Journey
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

// ============== Hero 区块 ==============
function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-40"
    >
      {/* 全屏背景视频 */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
      />
      {/* 轻微暗化遮罩，保证文字可读性 */}
      <div className="absolute inset-0 z-0 bg-background/40" />

      {/* 前景内容 */}
      <div className="relative z-10 flex flex-col items-center">
        <h1
          className="text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-7xl font-normal text-foreground animate-fade-rise"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          实践改变<em className="not-italic text-muted-foreground">世界</em>
        </h1>

        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed animate-fade-rise-delay">
          我是心动，一个用代码、模型和画笔不断实践的创造者。从单片机硬件到
          Blender 三维，从 AI 漫剧到小程序开发，我相信每一次动手都在重塑世界的一角。
        </p>

        <div className="animate-fade-rise-delay-2 mt-12">
          <Button asChild size="lg">
            <a href="#projects">Begin Journey</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

// ============== About 区块 ==============
const skills = [
  {
    icon: Cpu,
    title: '单片机',
    desc: '从 STM32 到 Arduino，在面包板上焊接理想，用 C 语言对话硬件。',
  },
  {
    icon: Box,
    title: 'Blender / 中望3D',
    desc: '建模、渲染、动画，在三维空间里构建轨道、机械与想象中的世界。',
  },
  {
    icon: Video,
    title: 'AI 漫剧',
    desc: '用 AI 工具辅助分镜、上色与配音，把脑内的故事变成可观看的漫剧。',
  },
  {
    icon: Code2,
    title: '小程序',
    desc: '微信小程序开发，从赛博小狗到工具应用，让创意触达每个人的手机。',
  },
  {
    icon: Gamepad2,
    title: '游戏开发',
    desc: '像素平台跳跃、物理引擎实验，在游戏里实践最纯粹的交互乐趣。',
  },
]

function About() {
  return (
    <section
      id="about"
      className="relative z-10 px-6 py-32 max-w-7xl mx-auto"
    >
      <h2
        className="text-4xl sm:text-6xl font-normal text-foreground mb-16 text-center"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        关于<em className="not-italic text-muted-foreground">我</em>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, i) => (
          <div
            key={skill.title}
            className="liquid-glass rounded-2xl p-8 animate-fade-rise"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <skill.icon size={32} className="text-foreground mb-4" />
            <h3
              className="text-2xl font-normal text-foreground mb-3"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {skill.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {skill.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

// ============== Projects 区块 ==============
const projects = [
  {
    title: '赛博小狗小程序',
    desc: '微信小程序项目，科技风 UI 设计，带图解教程的硬件入门指南。',
    tags: ['微信小程序', '前端', '硬件教程'],
    icon: Code2,
  },
  {
    title: '3D 轨道可视化',
    desc: '中望3D / Blender 建模的行星环与机械轨道结构，点云与线框渲染。',
    tags: ['Blender', '中望3D', '可视化'],
    icon: Box,
  },
  {
    title: 'OLED 硬件实验',
    desc: '面包板上的蓝色 OLED 显示屏，用单片机驱动像素图案与交互原型。',
    tags: ['单片机', 'OLED', '硬件DIY'],
    icon: Cpu,
  },
  {
    title: '像素平台游戏',
    desc: '复古像素风格 2D 平台跳跃游戏，含物理碰撞、金币收集与关卡设计。',
    tags: ['游戏开发', '像素艺术', '平台跳跃'],
    icon: Gamepad2,
  },
  {
    title: 'AI 漫剧创作',
    desc: '用 AI 辅助生成的动漫风格战斗场景，从分镜到成片的完整创作流程。',
    tags: ['AI漫剧', '分镜', '动画'],
    icon: Video,
  },
]

function Projects() {
  return (
    <section
      id="projects"
      className="relative z-10 px-6 py-32 max-w-7xl mx-auto"
    >
      <h2
        className="text-4xl sm:text-6xl font-normal text-foreground mb-16 text-center"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        项目<em className="not-italic text-muted-foreground">作品集</em>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <div
            key={project.title}
            className="liquid-glass rounded-2xl p-8 animate-fade-rise"
            style={{ animationDelay: `${i * 0.12}s` }}
          >
            <div className="flex items-start gap-4">
              <div className="liquid-glass rounded-xl p-3 shrink-0">
                <project.icon size={24} className="text-foreground" />
              </div>
              <div>
                <h3
                  className="text-2xl font-normal text-foreground mb-2"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ============== Contact 区块 ==============
function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 px-6 py-32 max-w-4xl mx-auto text-center"
    >
      <h2
        className="text-4xl sm:text-6xl font-normal text-foreground mb-8"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        联系<em className="not-italic text-muted-foreground">我</em>
      </h2>

      <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-12 leading-relaxed">
        有合作想法、技术交流或单纯想聊聊创造？随时联系我。
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        {/* 邮箱按钮 */}
        <a
          href="mailto:2112976784@qq.com"
          className="liquid-glass rounded-full px-8 py-4 flex items-center gap-3 text-foreground hover:scale-[1.03] transition-transform"
        >
          <Mail size={20} />
          <span>2112976784@qq.com</span>
        </a>

        {/* 抖音按钮 */}
        <a
          href="https://www.douyin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="liquid-glass rounded-full px-8 py-4 flex items-center gap-3 text-foreground hover:scale-[1.03] transition-transform"
        >
          <Video size={20} />
          <span>抖音 @77919515887</span>
        </a>
      </div>

      {/* 署名 */}
      <p
        className="mt-24 text-muted-foreground text-sm"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        © 2026 心动® — 实践改变世界
      </p>
    </section>
  )
}

// ============== App 根组件 ==============
export default function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
