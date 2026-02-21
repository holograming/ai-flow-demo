---
name: security-scan
description: 코드의 보안 취약점을 스캔한다.
user-invocable: true
allowed-tools: Read, Bash, Glob, Grep
context: fork
---

보안 스캔을 수행하세요.

## 검사 항목

### 1. OWASP Top 10 패턴
- SQL Injection (동적 쿼리)
- XSS (미이스케이프 출력)
- SSRF (사용자 입력 URL)
- Path Traversal (파일 경로 조작)
- Command Injection (셸 명령)

### 2. 의존성 취약점
```bash
npm audit --json
```

### 3. 하드코딩된 시크릿/키 탐지
- API 키 패턴: `sk-`, `AKIA`, `ghp_`, `gho_`
- JWT 토큰: `eyJ...`
- SSH 키: `-----BEGIN`
- 높은 엔트로피 문자열

### 4. 위험한 API 사용
- `eval()`, `Function()`
- `innerHTML`, `dangerouslySetInnerHTML`
- `child_process.exec()`
- 동적 `require()` / `import()`

## 결과 형식
- 심각도별 분류 (Critical / High / Medium / Low)
- 파일:라인 위치
- 수정 권장사항
