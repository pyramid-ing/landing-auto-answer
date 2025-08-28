# Blog API Service Landing Page

티스토리, 네이버 블로그, 블로그스팟 API 서비스의 랜딩페이지입니다.

## 🚀 기능

- **지원 플랫폼**: 티스토리, 네이버 블로그, 블로그스팟
- **자동화 도구 연동**: n8n, Make.com 100% 호환
- **AI 에이전트 연동**: Google Gemini와 연동하여 자동 콘텐츠 생성
- **실제 검증**: n8n 워크플로우로 검증된 API
- **가격**: 월 1만원
- **CTA**: 구글폼 신청 링크 연동

## 🛠 기술 스택

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 설치 및 실행

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm run dev
```

### 3. 빌드
```bash
npm run build
```

## 🌐 배포 (Vercel)

### 1. GitHub에 코드 푸시
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### 2. Vercel 배포
1. [Vercel](https://vercel.com)에 로그인
2. "New Project" 클릭
3. GitHub 저장소 연결
4. 자동 배포 설정 확인
5. "Deploy" 클릭

## ⚙️ 설정

### 환경 변수 설정
1. `env.example` 파일을 `.env.local`로 복사
2. 다음 값들을 실제 값으로 변경:

```bash
# 구글폼 링크
NEXT_PUBLIC_GOOGLE_FORM_URL=https://forms.google.com/your-actual-form-link

# 유튜브 영상 ID (선택사항)
NEXT_PUBLIC_YOUTUBE_VIDEO_ID=your-youtube-video-id
```

### 구글폼 링크 변경
환경 변수 `NEXT_PUBLIC_GOOGLE_FORM_URL`에 실제 구글폼 링크를 설정하세요.

### 유튜브 영상 임베딩
환경 변수 `NEXT_PUBLIC_YOUTUBE_VIDEO_ID`에 유튜브 영상 ID를 설정하세요.
(예: https://www.youtube.com/watch?v=dQw4w9WgXcQ → dQw4w9WgXcQ)

## 📁 프로젝트 구조

```
landing-block-api/
├── app/
│   ├── components/
│   │   ├── VideoEmbed.tsx
│   │   └── ImageGallery.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── images/
│       ├── 1.n8n 노드 설정1.png
│       ├── 2.node에서 결과2.png
│       └── 3.포스팅결과.png
├── package.json
├── tailwind.config.js
├── next.config.js
├── vercel.json
├── env.example
└── README.md
```

## 🎨 커스터마이징

### 색상 변경
`tailwind.config.js`에서 primary 색상을 변경할 수 있습니다:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',  // 메인 색상
    600: '#2563eb',
    700: '#1d4ed8',
  }
}
```

### 콘텐츠 수정
`app/page.tsx`에서 다음 내용들을 수정할 수 있습니다:
- 서비스 설명
- 가격 정보
- 기능 목록
- 연락처 정보

## 📞 지원

문의사항이 있으시면 이슈를 생성해주세요.

## �� 라이선스

MIT License
