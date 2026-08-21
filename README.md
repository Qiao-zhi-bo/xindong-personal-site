# 心动® — 实践改变世界

个人网站，基于 React + Vite + Tailwind CSS + TypeScript + shadcn/ui 风格组件。

## 🚀 本地开发

```bash
# 1. 安装依赖
npm install

# 2. 启动开发服务器（默认 http://localhost:5173）
npm run dev

# 3. 构建生产版本（输出到 dist/ 目录）
npm run build

# 4. 预览构建结果
npm run preview
```

## 📦 部署到 GitHub Pages

### 方式一：手动部署

```bash
# 1. 构建
npm run build

# 2. 安装 gh-pages 工具（仅首次）
npm install -g gh-pages

# 3. 部署 dist 目录到 gh-pages 分支
gh-pages -d dist
```

### 方式二：GitHub Actions 自动部署（推荐）

1. 在 GitHub 上创建仓库（如 `xindong-personal-site`）
2. 把代码推送到 `main` 分支
3. 仓库 Settings → Pages → Build and deployment → Source 选 **GitHub Actions**
4. 在仓库根目录创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: '20'

      - run: npm install
      - run: npm run build

      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

5. 之后每次 `git push` 到 main 分支，GitHub Actions 会自动构建并部署。
6. 访问地址：`https://你的用户名.github.io/xindong-personal-site/`

### ⚠️ 注意事项

- `vite.config.ts` 中 `base: './'` 已设为相对路径，兼容 GitHub Pages 子路径。
- 背景视频使用 Cloudfront CDN 外链，确保网络可访问。
- 如需自定义域名，在仓库 Settings → Pages → Custom domain 中填写。

## 📁 项目结构

```
.
├── index.html              # HTML 入口，引入 Google Fonts
├── package.json            # 依赖声明
├── vite.config.ts          # Vite 配置
├── tailwind.config.js      # Tailwind 主题 + 动画
├── postcss.config.js       # PostCSS 配置
├── tsconfig.json           # TypeScript 配置
├── README.md               # 本文件
└── src/
    ├── main.tsx            # React 入口
    ├── App.tsx             # 主组件（导航 + Hero + About + Projects + Contact）
    ├── index.css           # 全局样式（CSS变量 + 玻璃效果 + 动画）
    ├── lib/
    │   └── utils.ts        # cn() 工具函数
    └── components/
        └── ui/
            ├── button.tsx  # shadcn/ui 风格按钮
            └── nav-link.tsx # 导航链接
```

## 🎨 设计规范

| 变量 | 值 | 说明 |
|------|-----|------|
| `--background` | `201 100% 13%` | 深海军蓝 |
| `--foreground` | `0 0% 100%` | 白色文字 |
| `--muted-foreground` | `240 4% 66%` | 灰色辅助文字 |
| `--font-display` | Instrument Serif | 标题衬线字体 |
| `--font-body` | Inter 400/500 | 正文无衬线字体 |

## 📬 联系方式

- 邮箱：2112976784@qq.com
- 抖音：@77919515887
