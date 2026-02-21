---
name: run-tests
description: 테스트를 실행하고 결과를 분석한다.
user-invocable: true
allowed-tools: Read, Bash, Glob, Grep
argument-hint: "[test-pattern]"
---

테스트를 실행하고 결과를 분석하세요.

## 실행 방법
1. `pnpm test $ARGUMENTS` 실행
2. 실패한 테스트가 있으면 에러 분석
3. 커버리지 리포트 확인: `pnpm test:coverage`

## 결과 보고
- 통과/실패 테스트 수
- 커버리지 퍼센트 (목표: 80% 이상)
- 실패 시 원인 분석 및 수정 제안
