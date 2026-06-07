# CAMA Website

CAMA(Christian Arts Mission Alliance) 기독예술선교연합 플랫폼 소개용 정적 홈페이지입니다.

## 반영된 최신 내용

- 행사 아카이브의 `HAPPY NEW YEAR TANZANIA 상세페이지 보기` 버튼을 크게 보이도록 개선했습니다.

- 메인 첫 화면 배경을 사용자가 지정한 인천중앙성결교회 단체사진으로 교체하고, 첫 화면 문구의 쉼표를 제거했습니다.

- 메인 첫 화면을 새 단체사진 배경형 히어로로 변경하고, 메인 제목 크기를 줄여 겹치지 않도록 조정했습니다.

- 메인 첫 화면을 새 단체사진 배경형 hero로 변경하고, 메인 제목 크기를 줄여 겹침을 개선했습니다.

- 도메인은 구매하지 않고 Vercel 기본 주소를 사용합니다.
- 메인 표지에 **주관·주최 | 아하바프레이즈선교회**를 표시했습니다.
- `CAMA는 무엇인가요?` 문구에 **아하바프레이즈선교회(C&MA 얼라이언스 한국총회 소속)가 행정 주최 단체로 함께합니다.**를 반영했습니다.
- 아하바프레이즈선교회는 협력단체가 아니라 **행정 주최 단체**로 분리했습니다.
- 협력단체에 **CAMA Station(문화예술선교연합아카데미)**, **MJ댄스컴퍼니(명지대미래교육원 선교무용단)**를 추가했습니다.
- 협력단체의 `토브` 표기를 **토브 앙상블**로 수정했습니다.
- 연락처/문의 섹션은 삭제했습니다.
- 메인 첫 화면 대표 사진을 `Happy New Year Tanzania` 행사 현장 사진으로 교체했습니다.
- 행사 아카이브 섹션을 만들고, 아래 행사 배너를 추가했습니다.
  - HAPPY NEW YEAR TANZANIA
  - 5월 가정의 달 사랑나눔콘서트
  - 꿈꾸는 글로벌 평화통일
  - Bible Concept Exhibition
- `HAPPY NEW YEAR TANZANIA` 클릭 시 상세 페이지(`happy-new-year-tanzania.html`)로 이동하도록 구성했습니다.

- CAMA 관련 기사 링크를 소개 영역에 추가했습니다.

- 아하바프레이즈선교회 YouTube 채널 링크를 행정 주최 단체 카드에 추가했습니다.

- 브엘아트홀 예약 링크와 YOV:EL Instagram 링크를 협력단체 카드에 추가했습니다.

- `2025년 9월부터 CAMA, Christian Arts Mission Alliance 명칭 사용`을 `활동명 사용`으로 수정했습니다.

## 구성

```text
cama_website_final/
├─ index.html
├─ happy-new-year-tanzania.html
├─ style.css
├─ script.js
├─ assets/
│  ├─ logo-mark.svg
│  ├─ hero-cama.svg
│  ├─ mission-visual.svg
│  ├─ pattern.svg
│  ├─ og-image.png
│  └─ events/
│     ├─ hnyt-hero-main.jpg
│     ├─ hnyt-stage-group.jpg
│     ├─ hnyt-team-group.jpg
│     ├─ hnyt-team-group-close.jpg
│     ├─ hnyt-poster.jpg
│     ├─ hnyt-cast-1.jpg
│     ├─ hnyt-cast-2.jpg
│     ├─ hnyt-program-1.jpg
│     ├─ hnyt-program-2.jpg
│     ├─ hnyt-support.jpg
│     ├─ hnyt-cama-intro.jpg
│     ├─ hnyt-staff.jpg
│     ├─ love-sharing-concert.jpg
│     ├─ dreaming-dmz.jpg
│     └─ bible-concept-exhibition.jpg
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
