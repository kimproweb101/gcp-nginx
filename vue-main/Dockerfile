# 1. 빌드 스테이지 (Node.js 환경에서 Vue 코드를 HTML/CSS/JS로 컴파일)
FROM node:24-alpine AS build-stage
WORKDIR /app
RUN corepack enable pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install
COPY . .
RUN pnpm build

# 2. 프로덕션 스테이지 (Nginx 환경에서 컴파일된 정적 파일만 서비스)
# 👇 여기가 가장 중요합니다! 반드시 AS production 이라고 적혀 있어야 합니다.
FROM nginx:alpine AS production

# 빌드 스테이지에서 만들어진 dist 폴더의 결과물만 Nginx의 서빙 폴더로 복사
COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]