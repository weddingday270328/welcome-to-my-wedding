/** 
 * Wedding Invitation Configuration 
 * 
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다. 
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다. 
 * 
 * 이미지 폴더 구조 (파일명 규칙): 
 * images/hero/1.jpg - 메인 사진 (1장, 필수) 
 * images/story/1.jpg, 2.jpg, ... - 스토리 사진들 (순번, 자동 감지) 
 * images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지) 
 * images/location/1.jpg - 약도/지도 이미지 (1장) 
 * images/og/1.jpg - 카카오톡 공유 썸네일 (1장) 
 */ 
 const CONFIG = { 
 // ── 초대장 열기 ── 
 useCurtain: false, // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시) 
 // ── 메인 (히어로) ── 
 groom: { 
 name: "이승원", 
 nameEn: "LEE SEUNG WON", 
 father: "이주용", 
 mother: "박은숙", 
 fatherDeceased: false, 
 motherDeceased: false 
 }, 
 bride: { 
 name: "이유라", 
 nameEn: "LEE YURA", 
 father: "이동림", 
 mother: "강선명", 
 fatherDeceased: false, 
 motherDeceased: false 
 }, 
 wedding: { 
 date: "2027-03-28", 
 time: "15:30", 
 venue: "아펠가모 공덕", 
 hall: "7층 라로브홀", 
 address: "서울특별시 마포구 마포대로 92 효성해링턴스퀘어 B동 7층", 
 tel: "02-2197-0230", 
 mapLinks: { 
 kakao: "https:/kko.to/PdTiOtzZfT", 
 naver: "https:/naver.me/xcnaC81L" 
 }}, 
 // ── 인사말 ── 
 greeting: { 
 title: "소중한 분들을 초대합니다", 
 content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 
 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다." 
 }, 
 // ── 우리의 이야기 ── 
 story: { 
 title: "우리의 이야기", 
 content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 
 되었습니다.\n\n여러분을 소중한 자리에 초대합니다." 
 }, 
 // ── 오시는 길 ── 
 // (mapLinks는 wedding 객체 내에 포함) 
 // ── 마음 전하실 곳 ── 
 accounts: { 
 groom: [ 
 { role: "신랑", name: "이승원", bank: "국민은행", number: "000-000-000000" }, 
 { role: "아버지", name: "이주용", bank: "신한은행", number: "000-000-000000" }, 
 { role: "어머니", name: "박은숙", bank: "우리은행", number: "000-000-000000" } 
 ], 
 bride: [ 
 { role: "신부", name: "이유라", bank: "하나은행", number: "000-000-000000" }, 
 { role: "아버지", name: "이동림", bank: "기업은행", number: "000-000-000000" }, 
 { role: "어머니", name: "강선명", bank: "농협은행", number: "000-000-000000" } 
 ] 
 }, 
 // ── 링크 공유 시 나타나는 문구 ── 
 meta: { 
 title: "이승원 ♥ 이유라 전설의 시작", 
 description: "2027년 3월 28일, 소중한 분들을 초대합니다." 
 } 
 };