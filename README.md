# ai-flow-demo

AI.Flow 프레임워크의 실제 동작을 테스트하기 위한 데모 프로젝트입니다.

## 개요

간단한 TypeScript 유틸리티 라이브러리로, **의도적인 버그와 빈틈**을 포함합니다.
GitHub 이슈를 생성하면 AI.Flow 파이프라인이 자동으로:

1. 이슈를 분류 (Triage)
2. 코드를 작성 (Claude Code Action)
3. PR을 생성
4. 리뷰 후 머지

## 의도적 격차

| 파일 | 격차 | 예상 이슈 |
|------|------|----------|
| `src/math-utils.ts` | `divide()`에 zero-division 버그 | `fix: add zero-division check` |
| `src/string-utils.ts` | `capitalize()`, `kebabCase()` 미구현 | `feat: implement capitalize` |
| `src/array-utils.ts` | `chunk()`, `flatten()` 미구현 | `feat: implement chunk` |
| `tests/math-utils.test.ts` | `divide()` 테스트 없음 | `test: add divide tests` |

## 사용법

```bash
# 설치
pnpm install

# 빌드
pnpm build

# 테스트
pnpm test

# 린트
pnpm lint
```

## AI.Flow 파이프라인 트리거

이슈에 `ai-auto` 라벨을 붙이면 자동으로 AI가 작업을 시작합니다:

```bash
gh issue create --title "fix: add zero-division check in divide()" \
  --label "ai-auto,type/bug" \
  --body "divide() 함수에 0 나눗셈 방어 코드 추가"
```

## 기술 스택

- TypeScript 5.x + Node.js 22 LTS
- pnpm
- Vitest (테스트)
- Biome (린트/포맷)
- Claude Code Action (AI 코드 생성)
