# 1. Node.js 환경 (개발과 빌드 모두 여기서 해결)
FROM node:24-alpine
WORKDIR /app

# pnpm 설치
RUN corepack enable pnpm

# 의존성 설치
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# 소스 복사
COPY . .

# [중요] 개발 모드에서는 아래 CMD가 실행되지만, 
# docker-compose.dev.yml의 command가 이 설정을 덮어씌워 pnpm dev를 실행하게 됩니다.
CMD ["pnpm", "dev", "--host"]