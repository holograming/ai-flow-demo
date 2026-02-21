# ai-flow-demo 개발 계획

## Phase 1: 초기 설정 ✅
- [x] 프로젝트 구조 생성 (package.json, tsconfig, biome, vitest)
- [x] 샘플 유틸리티 코드 작성 (string, math, array utils)
- [x] 기본 테스트 작성 (의도적으로 커버리지 낮음)
- [x] AI.Flow 에이전트/스킬 정의 복사
- [x] GitHub Actions 워크플로우 설정
- [x] CLAUDE.md / PLAN.md / PROGRESS.md 작성

## Phase 2: AI 자율 작업 (이슈 기반)
- [ ] fix: divide() 함수 zero-division 방어 코드 추가
- [ ] feat: capitalize() 함수 구현
- [ ] feat: kebabCase() 함수 구현
- [ ] feat: chunk() 함수 구현
- [ ] feat: flatten() 함수 구현
- [ ] test: divide() 테스트 추가
- [ ] test: 전체 커버리지 80% 이상 달성

## 의도적 격차 (AI가 발견/수정해야 할 항목)
1. `src/math-utils.ts` - divide() 함수에 zero-division 버그 (Infinity 반환)
2. `src/string-utils.ts` - capitalize(), kebabCase() 미구현 (TODO)
3. `src/array-utils.ts` - chunk(), flatten() 미구현 (TODO)
4. `tests/math-utils.test.ts` - divide() 테스트 없음
5. 전체 테스트 커버리지 낮음

## Constraints
- TypeScript strict mode 필수
- Conventional Commits 형식
- 모든 변경에 테스트 필수
