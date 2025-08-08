
# NXT_HIRE_AI - Next Generation Hiring AI Assistant

NXT_HIRE_AI is an interactive, voice-based mock interview platform powered by AI. It generates tailored interview questions, listens to your spoken responses, and provides instant AI-driven feedback to help you prepare effectively for your next job interview.

## 🚀 Features
- 🎙️ **Voice-based mock interviews** with an AI interviewer
- 🧠 **Dynamic question generation** based on your chosen job role and experience
- ⏱ **Timed responses** to simulate real interview pressure
- 💬 **Instant AI feedback** on your performance
- 🔄 **Multiple question types** (technical, behavioral, situational)
- 📊 **Scoring system** for self-evaluation
- 🌐 **Cloud-based data storage** with Firebase
- 🎨 **Modern UI** built with Tailwind CSS and shadcn/ui components

## 🛠️ Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + shadcn/ui
- **AI Integration**: [Vapi AI SDK](https://vapi.ai) + Google Gemini
- **Database & Auth**: Firebase
- **Animations**: Framer Motion
- **TypeScript**: Strict typing for maintainability

## 📦 Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/nxt_hire_ai.git
cd nxt_hire_ai
````

### 2️⃣ Install Dependencies

```bash
npm install
# or
yarn install
```

### 3️⃣ Setup Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id

NEXT_PUBLIC_VAPI_PUBLIC_KEY=your_vapi_public_key
VAPI_SECRET_KEY=your_vapi_secret_key

GEMINI_API_KEY=your_gemini_api_key
```

> Make sure you have credentials from [Firebase](https://firebase.google.com), [Vapi](https://vapi.ai), and [Google AI](https://ai.google.dev).

### 4️⃣ Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🧩 Project Structure

```
nxt_hire_ai/
├── app/
│   ├── interview/        # Interview flow pages
│   ├── feedback/         # AI feedback display
│   ├── layout.tsx        # App layout
│   └── page.tsx          # Landing page
├── components/           # UI components
├── lib/                  # Utility functions & API integrations
├── public/               # Static assets
├── styles/               # Global styles (globals.css)
└── README.md
```

## 💡 How It Works

1. **Start Interview** → Choose your role and experience level.
2. **AI Generates Questions** → Using Google Gemini prompt system.
3. **Voice Interaction** → Vapi handles real-time speech recognition & AI voice.
4. **AI Feedback** → Instant scoring and written feedback.
5. **Track Progress** → Review past performance in your dashboard.

## 📜 Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Run production build
npm run lint      # Lint codebase
```

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m "Add new feature"`
4. Push to branch: `git push origin feature-name`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

---

💬 *Made with ❤️ to power the next generation of hiring.*

```


Do you want me to make that enhanced version next?
```
