# xindong® — 实践改变世界

个人网站，基于 React + Vite + Tailwind CSS + TypeScript + shadcn/ui 风格组件。

> **署名：xindong®**
> **邮箱：2112976784@qq.com**
> **抖音：@77919515887**

---

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

---

## 📦 部署到 GitHub Pages（中文图文教程）

### 第一步：在 GitHub 上创建仓库

1. 打开 [github.com](https://github.com)，登录你的账号。
2. 点右上角 **+** → **New repository（新建仓库）**。
3. **Repository name（仓库名称）**：填 `xindong-personal-site`。
4. 可见性选 **Public（公开）**。
5. **不要**勾选 "Add a README file"、"Add .gitignore" 等选项（我们从零上传）。
6. 点绿色的 **Create repository（创建仓库）** 按钮。

### 第二步：在本地初始化并推送代码

打开终端，进入本项目文件夹，依次执行：

```bash
# 1. 初始化 Git
git init

# 2. 添加所有文件
git add .

# 3. 提交
git commit -m "Initial commit: xindong personal site"

# 4. 设置主分支
git branch -M main

# 5. 连接远程仓库（把「你的用户名」换成你自己的）
git remote add origin https://github.com/你的用户名/xindong-personal-site.git

# 6. 推送到 GitHub
git push -u origin main
```

> ⚠️ 如果推送时要求输入密码，GitHub 现在**不支持账号密码登录**了，需要用 **Personal Access Token（个人访问令牌）** 代替密码。
> 生成方法：GitHub 网页 → 右上角头像 → **Settings** → 左侧最底部 **Developer settings** → **Personal access tokens** → **Generate new token** → 勾选 `repo` 权限 → 生成后**复制保存**（只显示一次）。

### 第三步：开启 GitHub Pages（自动部署）

1. 在 GitHub 网页上，进入你的仓库 `xindong-personal-site`。
2. 点顶部的 **Settings（设置）** 标签。
3. 左侧菜单找到 **Pages（页面）**（在 "Code and automation" 分类下）。
4. 找到 **Build and deployment（构建和部署）** 区域。
5. **Source（源）** 下拉菜单选 **GitHub Actions**。
6. 页面会自动保存。

### 第四步：等待自动部署完成

1. 回到仓库主页，点顶部的 **Actions** 标签。
2. 你会看到一个名为 "Deploy to GitHub Pages" 的工作流正在运行（黄色圆点 🟡）。
3. 等它变成 **绿色对勾 ✅**（约 1-2 分钟），说明部署成功。
4. 再次进入 **Settings → Pages**，页面会显示你的网站网址：

```
https://你的用户名.github.io/xindong-personal-site/
```

🎉 **点开这个链接，你的个人网站就正式上线了！**

---

### 以后怎么更新网站内容？

每次修改代码后，只需要 3 步：

```bash
git add .
git commit -m "更新内容说明"
git push
```

GitHub Actions 会自动重新构建并部署，刷新同一个网址就能看到最新版本。

---

### ⚠️ 常见问题排查

| 现象 | 原因 / 解决方法 |
|------|------|
| 页面空白，只有背景色 | `vite.config.ts` 里 `base` 没改对，必须是 `/xindong-personal-site/` |
| 样式/CSS 没加载 | 同上，`base` 路径错误会导致资源 404 |
| Actions 报红 ❌ | 点进工作流看日志，多半是依赖安装失败或代码有语法错误 |
| 视频不播放 | 检查 Cloudfront 视频链接是否有效，或换成你自己的视频 |
| 想换仓库名 | 必须同步修改 `vite.config.ts` 的 `base`，否则页面空白 |
| 想自定义域名 | Settings → Pages → Custom domain 填写你的域名 |

---

## 📁 项目结构

```
.
├── index.html              # HTML 入口，引入 Google Fonts
├── package.json            # 依赖声明
├── vite.config.ts          # Vite 配置（base 路径已配好）
├── tailwind.config.js      # Tailwind 主题 + 动画
├── postcss.config.js       # PostCSS 配置
├── tsconfig.json           # TypeScript 配置
├── README.md               # 本文件
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions 自动部署配置
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

---

## 🎨 设计规范

| 变量 | 值 | 说明 |
|------|-----|------|
| `--background` | `201 100% 13%` | 深海军蓝 |
| `--foreground` | `0 0% 100%` | 白色文字 |
| `--muted-foreground` | `240 4% 66%` | 灰色辅助文字 |
| `--font-display` | Instrument Serif | 标题衬线字体 |
| `--font-body` | Inter 400/500 | 正文无衬线字体 |

---

## 📬 联系方式

- **Email**：2112976784@qq.com
- **抖音**：@77919515887
- **GitHub**：https://github.com/你的用户名/xindong-personal-site/
