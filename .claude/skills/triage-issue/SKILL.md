---
name: triage-issue
description: GitHub 이슈를 분석하여 분류한다.
user-invocable: true
allowed-tools: Read, Bash, Glob, Grep
argument-hint: "[issue-number]"
---

이슈 #$ARGUMENTS 를 분석하고 분류하세요.

## 분류 기준

### 유형
- bug: 기존 기능의 오동작
- feature: 새로운 기능 추가
- refactor: 코드 구조 개선
- docs: 문서 추가/수정
- chore: 빌드, CI, 의존성 유지보수
- security: 보안 관련

### 난이도
- trivial: 타이포, 상수 변경
- simple: 단일 파일, 단순 버그
- medium: 2~5개 파일, 기존 패턴
- complex: 5개+ 파일, 새 아키텍처

### 자율 수준
- Level 0 (완전 자율): trivial + 비보안
- Level 1 (고자율): simple + 비보안
- Level 2 (반자율): medium 또는 보안 관련
- Level 3 (보조형): complex 또는 아키텍처 변경

## 규칙
- 확실하지 않으면 난이도를 높게 (보수적)
- 보안 관련이면 Level 2 이상
- 결과를 이슈 코멘트로 게시
