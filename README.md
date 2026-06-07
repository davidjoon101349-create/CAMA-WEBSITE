# CAMA Website

CAMA(Christian Arts Mission Alliance) 기독예술선교연합 플랫폼 소개용 정적 홈페이지입니다.

## 반영된 최신 내용

- 도메인은 구매하지 않고 Vercel 기본 주소를 사용합니다.
- 메인 표지에 **주관·주최 | 아하바프레이즈선교회**를 표시했습니다.
- 아하바프레이즈선교회는 협력단체가 아니라 **행정 주최 단체**로 분리했습니다.
- 협력단체의 `토브` 표기를 **토브 앙상블**로 수정했습니다.
- 연락처/문의 섹션은 삭제했습니다.
- `Happy New Year Tanzania 2026` 행사 아카이브 섹션을 추가하고, 제공된 행사 이미지 8장을 포함했습니다.

## 구성

```text
cama_website_final/
├─ index.html
├─ style.css
├─ script.js
├─ assets/
│  ├─ logo-mark.svg
│  ├─ hero-cama.svg
│  ├─ mission-visual.svg
│  ├─ pattern.svg
│  ├─ og-image.png
│  └─ events/
│     ├─ hnyt-poster.jpg
│     ├─ hnyt-cast-1.jpg
│     ├─ hnyt-cast-2.jpg
│     ├─ hnyt-program-1.jpg
│     ├─ hnyt-program-2.jpg
│     ├─ hnyt-support.jpg
│     ├─ hnyt-cama-intro.jpg
│     └─ hnyt-staff.jpg
├─ robots.txt
├─ sitemap.xml
└─ 초보자_배포_가이드.md
```

## 배포

GitHub 저장소의 기존 파일을 이 폴더의 파일로 교체하면 Vercel에서 자동으로 다시 배포됩니다.

현재 권장 URL:

```text
https://cama-website.vercel.app/
```
