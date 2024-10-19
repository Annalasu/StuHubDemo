# IELTS AI Assistant

IELTS AI Assistant 是一个基于AI技术的语音聊天助手，旨在帮助用户通过语音互动提高英语口语能力，特别是针对雅思口语考试的练习需求。

## 功能特点

- 模拟真实的雅思口语考试场景
- 提供个性化的学习建议
- 记录练习历史和进度追踪
- 智能评分和反馈系统

## 技术栈

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (图标)

## 项目结构

```
src/
├── components/    # 可重用的React组件
├── pages/         # 主要页面组件
├── hooks/         # 自定义React hooks
├── services/      # API服务和其他外部服务
├── utils/         # 工具函数和辅助方法
├── styles/        # 全局样式和Tailwind配置
├── types/         # TypeScript类型定义
├── context/       # React上下文
└── App.tsx        # 主应用组件
```

## 本地开发

1. 克隆仓库：

```bash
git clone https://github.com/Annalasu/StuHubDemo.git
cd ielts-ai-assistant
```

2. 安装依赖：

```bash
npm install
```

3. 创建 `.env` 文件并配置环境变量：

```bash
cp .env.example .env
```

根据需要修改 `.env` 文件中的变量。

4. 启动开发服务器：

```bash
npm run dev
```

5. 在浏览器中打开 `http://localhost:5173` 查看应用。

## 部署到 Vercel

1. 在 Vercel 上创建一个新项目并连接到你的 GitHub 仓库。

2. 在 Vercel 项目设置中，添加以下环境变量：

   - `VITE_API_URL`: 你的API服务器地址
   - `VITE_APP_NAME`: 应用名称（例如：IELTS AI Assistant）

3. 部署设置：
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. 点击 "Deploy" 按钮开始部署。

Vercel 将自动检测到这是一个 Vite 项目并正确构建和部署它。

## 贡献

欢迎提交 Pull Requests 来改进这个项目。对于重大更改，请先开一个 issue 讨论您想要改变的内容。

## 许可证

[MIT](https://choosealicense.com/licenses/mit/)
