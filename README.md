# NXT_HIRE_AI - Next Generation Hiring AI Assistant

NXT_HIRE_AI is an interactive, voice-based mock interview platform powered by AI. It generates tailored interview questions, listens to your spoken responses, and provides instant AI-driven feedback to help you prepare effectively for your next job interview.

## 🚀 Features

- 🎙️ **Voice-based mock interviews** with an AI interviewer (powered by Vapi).
- 🧠 **Dynamic question generation** based on your chosen job role and experience (powered by Google Gemini).
- ⏱ **Timed responses** to simulate real interview pressure.
- 💬 **Instant AI feedback** on your performance.
- � **Secure Authentication** using Firebase.
- 🎨 **Modern UI** built with Next.js, Tailwind CSS, and Shadcn UI.
- 📊 **Interview History** to track your progress.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [Shadcn UI](https://ui.shadcn.com/)
- **AI Integration**:
  - [Vapi AI](https://vapi.ai) (Voice AI)
  - [Google Gemini](https://ai.google.dev/) (Generative AI)
- **Database & Auth**: [Firebase](https://firebase.google.com/)
- **State Management**: React Hooks & Server Actions
- **Form Handling**: React Hook Form + Zod
- **Icons**: Lucide React

## 📦 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/nxt_hire_ai.git
cd nxt_hire_ai
```

### 2️⃣ Install Dependencies

```bash
npm install
# or
yarn install
```

### 3️⃣ Setup Environment Variables

Create a `.env.local` file in the root directory and add the following variables. You will need credentials from Firebase, Vapi, and Google AI.

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id

# Vapi AI Configuration
NEXT_PUBLIC_VAPI_PUBLIC_KEY=your_vapi_public_key
VAPI_SECRET_KEY=your_vapi_secret_key

# Google Gemini Configuration
GEMINI_API_KEY=your_gemini_api_key
```

### 4️⃣ Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📜 Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Runs the built production application.
- `npm run lint`: Runs ESLint to check for code quality issues.

## 🧩 Project Structure

```
nxt_hire_ai/
├── app/
│   ├── (auth)/           # Authentication routes (Sign In, Sign Up)
│   ├── (root)/           # Main application routes
│   │   ├── interview/    # Interview generation page
│   │   └── page.tsx      # Landing page
│   ├── api/              # API routes (e.g., Vapi integration)
│   └── globals.css       # Global styles
├── components/           # Reusable UI components
│   ├── ui/               # Shadcn UI components
│   ├── Agent.tsx         # AI Agent component
│   └── ...
├── lib/                  # Utility functions and actions
│   ├── actions/          # Server actions (Auth, etc.)
│   └── utils.ts          # Helper functions
├── public/               # Static assets
└── ...
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Submit a pull request.

## 📄 License

This project is licensed under the MIT License.

---

Made with ❤️ to empower job seekers.
