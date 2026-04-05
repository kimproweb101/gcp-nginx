# 1. 사용할 Base 이미지 (가벼운 alpine 버전 추천)
FROM node:24-alpine

# 2. 도커 내부의 작업 폴더 지정
WORKDIR /app

# 3. pnpm 사용을 위한 설정
RUN corepack enable pnpm

# 4. 패키지 파일만 먼저 복사 (캐시 활용으로 빌드 속도 향상)
COPY package.json pnpm-lock.yaml ./

# 5. 패키지 설치
RUN pnpm install

# 6. 나머지 소스 코드 전체 복사
COPY . .

# 7. 배포용 빌드 (dist 폴더 생성)
RUN pnpm build

# 8. 컨테이너가 시작될 때 실행할 명령어 (운영 모드)
CMD ["pnpm", "run", "start:prod"]