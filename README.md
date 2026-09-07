# cloud911948.github.io

기술 블로그. Jekyll 직접 제작 테마(단일 컬럼 에디토리얼, Noto Sans KR + JetBrains Mono, 코드 블록만 다크), GitHub Pages(Actions 배포).

- 글: `_posts/YYYY-MM-DD-slug.md` — front matter: `title`, `description`, `tags: [..]`, `series: <id>`(선택), `categories`(선택, 글이 있을 때만 메뉴에 노출)
- 시리즈 정본: `_data/series.yml` · About "만든 것": `_data/projects.yml`
- 레이아웃: `_layouts/{default,home,post,page}.html`, 스타일 `assets/css/main.css` (단일 컬럼, 코드 블록만 다크)
- 로컬 미리보기: `bundle install && bundle exec jekyll serve`
