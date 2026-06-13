export type TripEvent = {
  time: string;
  title: string;
  place?: string;
  address?: string;
  note?: string;
  warning?: string;
  details?: { label: string; value: string }[];
  actions?: string[];
  images?: { src: string; alt: string; caption?: string }[];
  vouchers?: { label: string; href: string; note?: string }[];
  links?: { label: string; href: string; note?: string }[];
  status?: "확정" | "방문예정" | "확인필요" | "미정";
};

export type TripDay = {
  id: string;
  day: string;
  date: string;
  city: string;
  theme: string;
  summary: string;
  events: TripEvent[];
};

export const tripDays: TripDay[] = [
  {
    id: "day-1",
    day: "1일차",
    date: "2026.06.14 일",
    city: "인천 → 로마",
    theme: "출국, 라운지, 로마 도착",
    summary: "발산역에서 택시로 인천공항 T1 이동, 스카이허브 라운지 이용 후 TW405로 로마 도착.",
    events: [
      {
        time: "06:30-07:00",
        title: "발산역에서 택시 출발",
        place: "강서구 발산역 → 인천국제공항 T1",
        note: "VIP 라운지 이용과 여유 있는 수속을 위해 7시 이전 출발 기준으로 계획.",
        warning: "일요일 아침이라도 공항 도로 상황을 고려해 전날 택시 호출 방법을 정해두기.",
        details: [
          { label: "출발지", value: "강서구 발산역" },
          { label: "도착지", value: "인천국제공항 Terminal 1" },
          { label: "이동수단", value: "택시" },
          { label: "권장 출발", value: "06:30 전후, 늦어도 07:00 이전" }
        ],
        actions: ["여권과 항공권 확인", "라운지 이용권/QR 확인", "택시 호출 앱 또는 예약 여부 확인"],
        status: "방문예정"
      },
      {
        time: "07:50-08:20",
        title: "인천공항 T1 도착",
        place: "ICN Terminal 1",
        note: "수속, 수하물 위탁, 보안검색 후 라운지로 이동.",
        details: [
          { label: "항공편", value: "티웨이항공 TW405" },
          { label: "출발", value: "12:35, ICN T1" },
          { label: "도착", value: "19:15, FCO T3" }
        ],
        actions: ["티웨이 체크인 카운터 확인", "위탁수하물 무게 확인", "보안검색 전 액체류 정리"],
        status: "방문예정"
      },
      {
        time: "08:20-09:40",
        title: "체크인과 보안검색",
        place: "인천국제공항 T1",
        warning: "라운지는 보안검색 후 이용 가능. 탑승구 변경 여부를 전광판에서 확인.",
        actions: ["체크인", "수하물 위탁", "보안검색", "출국심사", "탑승구 확인"],
        status: "방문예정"
      },
      {
        time: "09:40-09:55",
        title: "면세품 인도",
        place: "45번 GATE",
        note: "보안검색과 출국심사 후 라운지 이동 전에 면세품을 먼저 수령.",
        warning: "면세품 인도장 대기가 있을 수 있으니 수령증, 여권, 탑승권을 바로 꺼낼 수 있게 준비.",
        actions: ["면세품 수령증 준비", "여권과 탑승권 제시", "수령 품목 확인", "기내 반입 정리"],
        status: "방문예정"
      },
      {
        time: "09:55-11:20",
        title: "스카이허브 라운지",
        place: "Sky Hub Lounge, Terminal 1",
        note: "에어사이드. 여권 심사 및 보안 검색 후 4층으로 올라가면 환승 카운터 옆 29번 탑승구 근처에 라운지가 있음.",
        warning: "탑승구 29 근처 기준. 실제 TW405 탑승구가 멀면 11:20 전후에는 이동 시작.",
        details: [
          { label: "공항", value: "인천국제공항 Terminal 1" },
          { label: "이용 위치", value: "보안검색 후 에어사이드 4층" },
          { label: "가까운 탑승구", value: "29" },
          { label: "운영시간", value: "00:00 - 23:59" }
        ],
        actions: ["QR 또는 라운지 이용권 제시", "탑승구와 탑승 시작 시간 확인", "물과 간단한 간식 챙기기"],
        images: [
          { src: "/images/qrcode.png", alt: "스카이허브 라운지 QR 코드", caption: "라운지 확인용 QR 1" },
          { src: "/images/qrcode-1.png", alt: "스카이허브 라운지 QR 코드 2", caption: "라운지 확인용 QR 2" }
        ],
        status: "확정"
      },
      {
        time: "11:20-12:05",
        title: "탑승구 이동과 탑승 준비",
        place: "ICN T1 탑승구",
        note: "출발 40-50분 전에는 탑승구 근처에 도착해 있는 것을 기준으로 잡기.",
        actions: ["화장실", "보조배터리/여권 위치 확인", "기내에서 쓸 물건 분리", "탑승 안내 방송 확인"],
        status: "방문예정"
      },
      {
        time: "12:35-19:15",
        title: "인천공항 → 로마 공항",
        place: "티웨이항공 TW405",
        note: "일반석, 에어버스 A330-200 대형, 기내식 포함. 비행시간 13시간 40분.",
        details: [
          { label: "출발", value: "2026.06.14 12:35, ICN T1" },
          { label: "도착", value: "2026.06.14 19:15, FCO T3" },
          { label: "예약번호", value: "B5N9K3" },
          { label: "항공사", value: "티웨이항공" },
          { label: "기종", value: "Airbus A330-200" },
          { label: "좌석", value: "일반석, 8A / 8B" },
          { label: "위탁수하물", value: "각 23KG" },
          { label: "기내식", value: "2회 무료 제공" }
        ],
        vouchers: [
          {
            label: "티웨이 E-ticket - OH/JEONGHYUP",
            href: "/vouchers/tway-eticket-oh-jeonghyup.png",
            note: "출국/귀국 항공권 QR과 좌석 정보."
          },
          {
            label: "티웨이 E-ticket - PARK/SOLMIN",
            href: "/vouchers/tway-eticket-park-solmin.png",
            note: "출국/귀국 항공권 QR과 좌석 정보."
          }
        ],
        warning: "기내에서 출입국 카드 또는 필요한 서류 작성 여부 확인.",
        status: "확정"
      },
      {
        time: "19:15-20:00",
        title: "로마 도착",
        place: "Fiumicino Aeroporto",
        warning: "입국심사와 수하물 때문에 20:38 기차는 빠듯할 수 있음.",
        status: "확인필요"
      },
      {
        time: "20:38-21:10",
        title: "공항 기차 → 숙소 근처",
        place: "RE 4673, Fiumicino Aeroporto → Roma Termini",
        note: "미리 예매한 로마공항 → 로마 테르미니 열차표 PDF를 준비.",
        warning: "Fiumicino Airport Station 턴스타일과 Roma Termini 출구에서 티켓이 필요할 수 있으니 PDF/QR을 바로 열 수 있게 준비.",
        vouchers: [
          {
            label: "로마공항 → 로마 테르미니 열차 티켓 PDF",
            href: "/vouchers/0614-fco-roma-termini-train.pdf",
            note: "개찰구와 검표 시 QR/티켓 코드를 보여줄 수 있게 준비."
          }
        ],
        actions: ["열차 티켓 PDF 열기", "QR/티켓 코드 확인", "여권과 함께 소지", "Roma Termini 하차 후 출구 개찰 준비"],
        status: "확인필요"
      },
      {
        time: "21:20-22:00",
        title: "숙소 체크인",
        place: "Hotel Gioberti",
        address: "Via Gioberti 20, 00185 Rome",
        note: "도시세 1인 1박 6유로 예상.",
        vouchers: [
          {
            label: "지오베르티 호텔 바우처 PDF",
            href: "/vouchers/0614-hotel-gioberti.pdf",
            note: "체크인할 때 여권과 함께 바로 보여줄 수 있게 준비."
          }
        ],
        actions: ["호텔 바우처 열기", "예약자명 확인", "여권 제시", "도시세 결제 방식 확인"],
        status: "방문예정"
      },
      {
        time: "21:30-23:00",
        title: "저녁식사",
        place: "Ristorante Alessio",
        address: "Via Del Viminale 2G, 00184 Roma, Italy",
        note: "테르미니역과 Hotel Gioberti에서 비교적 가까운 로마식 레스토랑. 도착 첫날이라 무리하지 않고 숙소 체크인 후 가볍게 이동하는 저녁으로 배치.",
        details: [
          { label: "추천 메뉴 후보", value: "Rigatoni alla Carbonara, Bucatini all'Amatriciana, Tonnarelli Cacio e Pepe" },
          { label: "함께 보기 좋은 메뉴", value: "Carciofi alla Giudia, Fiori di Zucca, Filetti di Baccala, Tiramisu" },
          { label: "후기 분위기", value: "로마식 파스타, 넉넉한 양, 스테이크와 해산물도 언급됨. 품질 편차 후기도 있어 대표 메뉴 위주 추천." }
        ],
        actions: ["주소 복사해서 구글맵 열기", "영업시간 현장 확인", "대표 파스타 1-2개 고르기", "너무 늦으면 포장/대체 식당 고려"],
        links: [
          {
            label: "Ristorante Alessio 트립어드바이저",
            href: "https://www.tripadvisor.co.kr/Restaurant_Review-g187791-d1573985-Reviews-Ristorante_Alessio-Rome_Lazio.html",
            note: "후기와 사진을 바로 확인."
          },
          {
            label: "Ristorante Alessio 공식 메뉴",
            href: "https://ristorantealessio.it/en/menus",
            note: "메뉴와 식당 정보 확인."
          }
        ],
        status: "방문예정"
      }
    ]
  },
  {
    id: "day-2",
    day: "2일차",
    date: "2026.06.15 월",
    city: "로마 → 피렌체",
    theme: "기차 이동과 피렌체 첫날",
    summary: "아침 기차로 피렌체 이동, Palazzo Ognissanti 짐 보관 후 점심과 스냅 촬영.",
    events: [
      {
        time: "07:00-08:00",
        title: "조식",
        place: "Hotel Gioberti 테라스",
        note: "조식 시간은 오전 7시부터 10시. 기차 시간이 이르므로 오래 머물지 않고 간단히 먹는 기준.",
        warning: "조식 먹을 때 물 받아가기.",
        actions: ["여권과 기차표 챙기기", "캐리어 정리", "물 받기", "체크아웃/키 반납 준비"],
        status: "방문예정"
      },
      {
        time: "07:30-08:00",
        title: "기차에서 먹을 샌드위치 준비",
        note: "로마 테르미니역 이동 전에 간단히 먹을 샌드위치나 빵, 물을 준비. 역 안에서 급하게 사는 상황을 줄이기.",
        actions: ["샌드위치 또는 빵 준비", "물 1병 챙기기", "기차 안에서 먹을 간식 분리", "쓰레기봉투나 작은 비닐 챙기기"],
        status: "방문예정"
      },
      {
        time: "08:10-09:46",
        title: "로마 → 피렌체",
        place: "FR 9516, Roma Termini → Firenze Santa Maria Novella",
        note: "08:10 로마 테르미니 출발, 09:46 피렌체 산타마리아 노벨라역 도착.",
        warning: "Firenze Santa Maria Novella는 Firenze SMN으로 표시될 수 있음. 플랫폼은 전광판 기준으로 확인.",
        details: [
          { label: "열차", value: "FR 9516" },
          { label: "출발역", value: "Roma Termini" },
          { label: "도착역", value: "Firenze Santa Maria Novella / Firenze SMN" },
          { label: "시간", value: "08:10 → 09:46" }
        ],
        vouchers: [
          {
            label: "로마 → 피렌체 열차 바우처 PDF",
            href: "/vouchers/0615-roma-firenze-train.pdf",
            note: "플랫폼 확인, 객차/좌석 확인, 검표 시 바로 열기."
          }
        ],
        actions: ["기차표 PDF 열기", "플랫폼 전광판 확인", "객차와 좌석 확인", "도착 전 짐 미리 내릴 준비"],
        status: "확정"
      },
      {
        time: "10:00-10:30",
        title: "숙소 체크인 또는 짐 보관",
        place: "Palazzo Ognissanti",
        address: "Via Maso Finiguerra, 12/red, 50123 Firenze",
        note: "피렌체 도착 직후에는 정식 체크인보다 짐 보관을 우선으로 생각하는 일정. 짐을 맡긴 뒤 점심과 스냅사진 일정으로 이동.",
        warning: "호텔 개별 체크인 시 첨부된 호텔 바우처, 여권, 신용카드(Deposit)를 프론트에 제시. 평균 체크인은 15시이며, 이전 도착 시 로비에 짐만 맡기고 여행 후 돌아와 객실 배정을 받아야 함.",
        details: [
          { label: "호텔", value: "Hotel Palazzo Ognissanti" },
          { label: "이전 표기", value: "ex. Best Western" },
          { label: "도착 후 목표", value: "짐 보관 후 점심/스냅사진 일정 시작" },
          { label: "체크인 기준", value: "평균 15시, 이전 도착 시 짐 보관" },
          { label: "프론트 제시", value: "호텔 바우처, 여권, 신용카드(Deposit)" },
          { label: "객실 문제", value: "위생/집기/배정 불만은 현장에서 프론트에 방 교체 요청" }
        ],
        vouchers: [
          {
            label: "피렌체 호텔 바우처 PDF",
            href: "/vouchers/0615-hotel-palazzo-ognissanti.pdf",
            note: "짐 보관 또는 체크인 시 프론트에 바로 제시."
          }
        ],
        actions: ["호텔 바우처 열기", "여권 제시 준비", "신용카드 Deposit 준비", "짐 보관 요청", "스냅 촬영용 짐만 따로 챙기기"],
        status: "확인필요"
      },
      {
        time: "10:30-13:40",
        title: "점심식사",
        place: "La Grotta di Leo",
        address: "Via della Scala, 41, 50123 Firenze FI, Italy",
        note: "Palazzo Ognissanti에서 가깝고, 식사 후 Via del Porcellana 5 메이플립샵으로 이동하기 좋은 위치. 스냅 전 일정이라 너무 무겁게 먹기보다 파스타나 피자 중심 추천.",
        warning: "영업시간, 예약 가능 여부, 실제 메뉴는 방문 전 한 번 더 확인. 주소는 41/43r로 메모되어 있었지만 지도상 식당명은 La Grotta di Leo, Via della Scala 41로 확인됨.",
        details: [
          { label: "동선 판단", value: "호텔 → 식당 가까움, 식당 → 메이플립샵 약 280m 내외" },
          { label: "음식 종류", value: "이탈리아/토스카나식 식사, 파스타, 피자, 고기 요리 계열" },
          { label: "스냅 전 추천", value: "파스타 1개 + 피자 1개 또는 가벼운 전채. 너무 무거운 스테이크는 컨디션 보고 선택" },
          { label: "추천 후보", value: "토스카나 라구 파스타, 트러플/버섯 파스타, 마르게리타/프로슈토 피자, 티라미수" },
          { label: "배고프면", value: "Bistecca alla Fiorentina 같은 고기 메뉴는 둘이 나눠 먹는 방식으로 고려" }
        ],
        links: [
          {
            label: "La Grotta di Leo 지도 검색",
            href: "https://www.google.com/maps/search/?api=1&query=La%20Grotta%20di%20Leo%2C%20Via%20della%20Scala%2041%2C%20Firenze",
            note: "구글맵에서 위치와 영업시간 확인."
          },
          {
            label: "OpenStreetMap 위치",
            href: "https://www.openstreetmap.org/node/7476789833",
            note: "주소 확인용 지도 데이터."
          }
        ],
        actions: ["주소 복사해서 지도 확인", "영업시간 확인", "메이플립샵까지 이동 시간 확인", "스냅 전 과식하지 않기"],
        status: "방문예정"
      },
      {
        time: "13:40-14:10",
        title: "메이플립샵으로 이동",
        address: "Via del Porcellana, 5, 50123 Firenze FI, Italy",
        note: "점심 후 메이플립샵으로 이동. 도보 이동 기준으로 잡되, 짐이나 복장 상태에 따라 택시도 고려.",
        actions: ["주소 복사해서 지도 확인", "이동 시간 확인", "촬영용 의상/소품 확인"],
        status: "방문예정"
      },
      {
        time: "14:00",
        title: "메이플립",
        place: "도보 1분, 객실 60",
        note: "정장바라, 화이트셔츠와 구두 지참. 사이즈가 맞지 않으면 남자 구두 대여 가능.",
        warning: "14:00 일정이면 13:50 전후 도착을 목표로 잡기.",
        actions: ["화이트셔츠 준비", "구두 준비", "구두 사이즈 확인", "촬영 전 화장/머리 정리"],
        status: "방문예정"
      },
      {
        time: "18:00-22:00",
        title: "스냅촬영",
        note: "점심식사, 도보 26분, 대중교통 16분 메모. 피렌체 야간 분위기까지 이어질 가능성 있음.",
        warning: "촬영 동선, 작가 미팅 장소, 우천 시 진행 방식을 확인해야 함.",
        actions: ["작가 연락처 확인", "미팅 장소 확인", "우천 시 진행 방식 확인", "편한 신발 또는 보조 신발 챙기기"],
        status: "확인필요"
      },
      {
        time: "22:30",
        title: "저녁식사 예약",
        place: "La Ménagère",
        address: "Via de' Ginori, 8/R, 50123 Firenze FI, Italy",
        note: "스냅촬영 후 늦은 저녁 예약. 공식 사이트 기준 레스토랑, 비스트로, 플라워숍, 부티크가 함께 있는 감성적인 공간.",
        warning: "예약시간은 22:30, 2명. 스냅 종료 후 이동 시간이 빠듯하면 식당에 바로 연락. 예약 변경은 예약시간 12시간 전까지 안내되어 있음.",
        details: [
          { label: "예약자", value: "JEONGHYUP OH" },
          { label: "예약일", value: "Monday, June 15, 2026" },
          { label: "예약시간", value: "22:30" },
          { label: "인원", value: "2 guests" },
          { label: "예약번호", value: "3S258YGMRSBX" },
          { label: "전화", value: "+39 055 075 0600" },
          { label: "공식 운영시간", value: "매일 08:00 - 02:00" },
          { label: "추천 주문 방향", value: "늦은 시간이라 메인 1개 + 파스타/리조토 1개 + 디저트 또는 칵테일" },
          { label: "메뉴 후보", value: "시즌 파스타/리조토, 생선 또는 고기 메인, 티라미수/디저트, 식후 칵테일" },
          { label: "분위기", value: "스냅 후 사진 찍기 좋은 플라워/라이프스타일 감성 공간" }
        ],
        links: [
          {
            label: "La Ménagère 공식 홈페이지",
            href: "https://www.lamenagere.it/",
            note: "운영시간, 위치, 예약 확인."
          },
          {
            label: "La Ménagère 구글맵",
            href: "https://www.google.com/maps/search/?api=1&query=La%20M%C3%A9nag%C3%A8re%2C%20Via%20de%27%20Ginori%208%2FR%2C%20Firenze",
            note: "스냅 종료 후 이동할 때 바로 열기."
          }
        ],
        actions: ["주소 복사해서 지도 열기", "예약번호 확인", "스냅 종료 후 이동 시간 확인", "늦으면 식당에 전화", "식후 숙소 복귀 동선 확인"],
        status: "확정"
      }
    ]
  },
  {
    id: "day-3",
    day: "3일차",
    date: "2026.06.16 화",
    city: "토스카나",
    theme: "산지미냐노와 와이너리",
    summary: "피렌체 출발 토스카나 당일투어. 산지미냐노, 몬테리조니, 키안티 와이너리, 시에나.",
    events: [
      { time: "06:00", title: "투어 준비", note: "점심식사와 와인 시음 포함 일정.", status: "방문예정" },
      {
        time: "07:00-08:00",
        title: "몬텔룽고 광장 집결",
        place: "Piazzale Montelungo",
        address: "Piazzale Montelungo, Firenze",
        warning: "숙소에서 집결지까지 아침 이동 시간 확인.",
        status: "확정"
      },
      { time: "09:00-11:00", title: "산지미냐노", note: "2시간 체류.", status: "방문예정" },
      { time: "11:35-12:15", title: "몬테리조니", note: "40분 체류.", status: "방문예정" },
      { time: "12:45-14:15", title: "키안티 와이너리", note: "점심식사 포함, 1시간 30분 체류.", status: "방문예정" },
      { time: "14:45-17:45", title: "시에나", note: "3시간 체류.", status: "방문예정" },
      { time: "17:45-19:00", title: "Piazzale Montelungo 복귀", status: "방문예정" },
      {
        time: "19:00-20:00",
        title: "숙소 복귀와 저녁 준비",
        place: "Piazzale Montelungo → Hotel Palazzo Ognissanti",
        note: "토스카나 투어 후 잠깐 숙소에 들러 씻고 정리한 뒤 ZàZà로 이동하는 흐름.",
        warning: "20:30 예약이라 20:05 전후에는 식당 방향으로 출발하는 것이 안전.",
        actions: ["숙소 복귀", "가벼운 옷 정리", "예약번호 확인", "식당 주소 복사"],
        status: "방문예정"
      },
      {
        time: "20:30",
        title: "저녁식사 예약",
        place: "Trattoria ZàZà",
        address: "Piazza del Mercato Centrale, 26r, 50123 Firenze FI, Italy",
        note: "피렌체 중앙시장 근처의 유명한 토스카나 트라토리아. 예약 요청 확인 메일 기준 2026-06-16 20:30, 2명.",
        warning: "현재 메일 문구는 '요청을 받았다'는 상태라 최종 확정 회신 메일이 왔는지 확인 필요. 예약코드 466017.",
        details: [
          { label: "예약자", value: "오정협" },
          { label: "예약일", value: "2026-06-16" },
          { label: "예약시간", value: "20:30" },
          { label: "인원", value: "2명" },
          { label: "예약코드", value: "466017" },
          { label: "전화", value: "+39 055 215411" },
          { label: "대표 주문", value: "Bistecca alla Fiorentina, Truffled Gorgonzola creamy gnocchi, Pappardelle al cinghiale" },
          { label: "함께 추천", value: "Bolognese ravioli, Truffle fries, house wine" },
          { label: "전략", value: "스테이크는 여기서 먹고, 4일차 저녁은 스테이크가 아닌 메뉴로 가볍게 선택" }
        ],
        links: [
          {
            label: "Trattoria ZàZà 공식 홈페이지",
            href: "https://www.trattoriazaza.it/",
            note: "주소, 메뉴, 예약 확인."
          },
          {
            label: "Trattoria ZàZà 지도",
            href: "https://goo.gl/maps/6ZJn3CauftmiriF16",
            note: "식당 길찾기."
          }
        ],
        actions: ["최종 확정 메일 확인", "예약코드 466017 준비", "스테이크 양 물어보기", "와인 한 잔만 가볍게", "숙소 복귀 동선 확인"],
        status: "확인필요"
      }
    ]
  },
  {
    id: "day-4",
    day: "4일차",
    date: "2026.06.17 수",
    city: "피렌체",
    theme: "피렌체 먹거리와 감성 산책",
    summary: "숙소 근처 모닝커피, 중앙시장 햄/치즈 쇼핑, Da Nerbone 파니니, 두오모 카페 예약 후 피렌체 중심부를 보고 저녁은 스테이크가 아닌 가벼운 후보 중 선택하는 날.",
    events: [
      {
        time: "07:30-08:10",
        title: "숙소 근처 모닝커피 후보",
        place: "Palazzo Ognissanti 주변",
        address: "Via Maso Finiguerra, 12/red, 50123 Firenze FI, Italy",
        note: "Caffè Gilli는 멋지지만 숙소 기준으로는 동쪽으로 들어가야 해서 아침 첫 동선에는 비효율적. 숙소 근처에서 이탈리아식 바 커피를 짧고 가볍게 즐긴 뒤 중앙시장으로 이동하는 흐름 추천.",
        warning: "현장 영업 여부는 당일 구글맵에서 확인. 이탈리아식 아침은 보통 카푸치노/에스프레소 + 코르네토를 서서 빠르게 먹는 방식이 가장 자연스러움.",
        details: [
          { label: "1순위 후보", value: "Caffè Curtatone - 숙소와 아르노강 사이, 가장 실용적인 모닝커피 후보" },
          { label: "2순위 후보", value: "La Boîte - Borgo Ognissanti 쪽 감성 카페/가벼운 아침 후보" },
          { label: "3순위 후보", value: "Caffetteria Ottaviani - 산타마리아노벨라/역 방향으로 이동하며 들르기 좋은 후보" },
          { label: "그래도 가고 싶다면", value: "Caffè Gilli - 역사적인 카페지만 숙소 기준 왕복 동선이 늘어남" },
          { label: "추천 주문", value: "Cappuccino 또는 espresso, cornetto semplice, sfoglia/pasticceria 작은 것" }
        ],
        links: [
          {
            label: "숙소 근처 카페 검색",
            href: "https://www.google.com/maps/search/?api=1&query=coffee%20near%20Hotel%20Palazzo%20Ognissanti%20Firenze",
            note: "당일 영업 중인 곳을 바로 확인."
          },
          {
            label: "Caffè Curtatone 검색",
            href: "https://www.google.com/maps/search/?api=1&query=Caff%C3%A8%20Curtatone%20Firenze",
            note: "가까운 모닝커피 후보."
          },
          {
            label: "La Boîte 검색",
            href: "https://www.google.com/maps/search/?api=1&query=La%20Bo%C3%AEte%20Borgo%20Ognissanti%20Firenze",
            note: "감성 카페 후보."
          }
        ],
        actions: ["당일 영업 중인 후보 선택", "카푸치노와 코르네토 주문", "중앙시장 이동 경로 확인", "오래 앉지 않고 가볍게 출발"],
        status: "확인필요"
      },
      {
        time: "08:25-09:10",
        title: "중앙시장 햄·치즈 쇼핑",
        place: "Mercato Centrale - MARCO salumi e formaggi",
        address: "Piazza del Mercato Centrale, 50123 Firenze FI, Italy",
        note: "나중에 윈도우 와인이나 야식과 같이 먹을 햄과 치즈를 조금씩 구매. 너무 많이 사면 낮 동안 들고 다니기 불편하니 소량 추천.",
        warning: "구매 후 숙소에 들를 수 없다면 상온 보관과 냄새를 고려해 소량만 사기.",
        details: [
          { label: "햄 추천", value: "Prosciutto Toscano, Finocchiona, Salame Toscano, Capocollo" },
          { label: "치즈 추천", value: "Pecorino Toscano fresco, Pecorino stagionato, Pecorino al tartufo, Taleggio" },
          { label: "와인 안주 조합", value: "Finocchiona + Pecorino stagionato, Prosciutto Toscano + Pecorino fresco" },
          { label: "야식 조합", value: "Salame Toscano + Pecorino al tartufo + 빵 조금" },
          { label: "구매 문장", value: "Un piccolo misto di salumi e formaggi per due, per favore." }
        ],
        actions: ["소량 모둠 가능 여부 묻기", "포장 상태 확인", "물티슈/작은 봉투 챙기기", "무거우면 구매량 줄이기"],
        status: "방문예정"
      },
      {
        time: "09:10-09:45",
        title: "이른 파니니",
        place: "Da Nerbone",
        address: "Piazza del Mercato Centrale, 50123 Firenze FI, Italy",
        note: "11시 전까지 가야 먹기 좋다고 잡은 파니니 일정. 두오모 카페 예약이 11시라, 여기서는 빠르게 먹는 기준.",
        warning: "Lampredotto는 피렌체식 내장 샌드위치라 호불호가 있음. 부담스러우면 Bollito panino가 더 무난.",
        details: [
          { label: "대표 메뉴", value: "Panino con Lampredotto, Panino con Bollito" },
          { label: "추천 소스", value: "Salsa verde, piccante 조금" },
          { label: "내장 초보 추천", value: "Panino con Bollito 또는 덜 강한 메뉴로 시작" },
          { label: "현지식 도전", value: "Lampredotto + salsa verde + piccante" }
        ],
        links: [
          {
            label: "Da Nerbone 지도 검색",
            href: "https://www.google.com/maps/search/?api=1&query=Da%20Nerbone%2C%20Mercato%20Centrale%2C%20Firenze",
            note: "중앙시장 안 위치 확인."
          }
        ],
        actions: ["줄이 길면 메뉴 미리 정하기", "두오모 카페까지 이동시간 확인", "과식하지 않기"],
        status: "방문예정"
      },
      {
        time: "10:00-10:35",
        title: "윈도우 와인 1차 후보",
        place: "중앙시장 근처 와인 윈도우",
        address: "Via de' Pucci, 4a, 50122 Firenze FI, Italy",
        note: "중앙시장 근처라 오전 동선에 넣기 좋은 후보. 실제 영업 여부와 제공 방식은 현장에서 확인.",
        warning: "두오모 카페 11시 예약이 있으니 오래 머물지 않고 가볍게 들르는 정도.",
        details: [
          { label: "함께 먹기", value: "중앙시장에서 산 Finocchiona, Pecorino 소량" },
          { label: "대안", value: "시간이 빠듯하면 오후의 Via delle Belle Donne 후보로 넘기기" }
        ],
        links: [
          {
            label: "Via de' Pucci 4a 지도",
            href: "https://www.google.com/maps/search/?api=1&query=Via%20de%27%20Pucci%204a%2C%20Firenze",
            note: "윈도우 와인 후보 위치."
          }
        ],
        actions: ["영업 중인지 확인", "한 잔만 가볍게", "11시 카페 예약 시간 확인"],
        status: "확인필요"
      },
      {
        time: "11:00-13:00",
        title: "두오모 카페 예약",
        place: "View on Art",
        address: "Via dei Medici, 6, 50123 Firenze FI, Italy",
        note: "두오모 근처 카페 예약. 오전 파니니를 일찍 먹고 이동해야 여유 있음.",
        warning: "예약시간 11:00 기준. 10:45 전후 도착을 목표로 잡기.",
        actions: ["예약 확인", "주소 복사해서 지도 열기", "두오모 사진 찍기", "너무 오래 앉아 있지 않기"],
        status: "확정"
      },
      {
        time: "13:05-14:20",
        title: "단테의 생가와 시뇨리아 광장 산책",
        place: "Casa di Dante → Piazza della Signoria → Palazzo Vecchio",
        note: "두오모 카페에서 남쪽으로 내려가며 피렌체 핵심 구역을 보는 동선.",
        details: [
          { label: "볼거리", value: "단테의 생가 외관/박물관, 시뇨리아 광장, 베키오궁전 외관, 로지아 데이 란치" },
          { label: "추천 방식", value: "입장보다 외관과 광장 중심. 사진과 산책에 집중" }
        ],
        actions: ["단테의 생가 위치 확인", "시뇨리아 광장 사진", "베키오궁전 외관 보기"],
        status: "방문예정"
      },
      {
        time: "14:25-15:00",
        title: "아포가토",
        place: "Vivoli",
        address: "Via Isola delle Stinche, 7r, 50122 Firenze FI, Italy",
        note: "역사적인 젤라테리아 Vivoli가 있는 골목. 아포가토나 젤라토로 오후 당 충전.",
        warning: "현장 표기는 3r/7r처럼 보일 수 있으니 지도에서는 Vivoli로 검색하는 것이 안전.",
        details: [
          { label: "추천", value: "Affogato, pistacchio gelato, crema, cioccolato" },
          { label: "동선", value: "시뇨리아 광장 이후 산타크로체 방향으로 살짝 내려가는 위치" }
        ],
        links: [
          {
            label: "Vivoli 지도 검색",
            href: "https://www.google.com/maps/search/?api=1&query=Vivoli%2C%20Via%20Isola%20delle%20Stinche%207r%2C%20Firenze",
            note: "아포가토 위치 확인."
          }
        ],
        actions: ["아포가토 주문", "더우면 물 마시기", "다음 동선 체력 확인"],
        status: "방문예정"
      },
      {
        time: "15:10-15:45",
        title: "윈도우 와인 2차 후보",
        place: "와인거리 후보",
        address: "Via delle Belle Donne, 16R, 50123 Firenze FI, Italy",
        note: "오전 Via de' Pucci를 못 갔거나 조금 더 여유롭게 즐기고 싶을 때 들르는 후보.",
        warning: "오후 일정이 길어지면 과음하지 않고 한 잔 정도만.",
        details: [
          { label: "함께 먹기", value: "중앙시장에서 산 햄/치즈를 소량만 곁들이기" },
          { label: "선택 기준", value: "오전 와인 윈도우를 이미 즐겼으면 생략 가능" }
        ],
        links: [
          {
            label: "Via delle Belle Donne 16R 지도",
            href: "https://www.google.com/maps/search/?api=1&query=Via%20delle%20Belle%20Donne%2016R%2C%20Firenze",
            note: "윈도우 와인 후보 위치."
          }
        ],
        actions: ["영업 중인지 확인", "한 잔만 가볍게", "다리 건너기 전 화장실 확인"],
        status: "확인필요"
      },
      {
        time: "16:10-17:20",
        title: "숙소 복귀와 휴식",
        place: "Hotel Palazzo Ognissanti",
        address: "Via Maso Finiguerra, 12/red, 50123 Firenze FI, Italy",
        note: "저녁 스테이크 식사를 위해 잠깐 쉬고 옷과 짐을 정리하는 시간. 낮에 산 햄/치즈가 있으면 숙소에 두는 것도 좋음.",
        actions: ["물 마시기", "보조배터리 충전", "햄/치즈 숙소 보관", "저녁 식당 이동 경로 확인"],
        status: "방문예정"
      },
      {
        time: "18:30-20:30",
        title: "저녁식사 후보",
        place: "스테이크 제외, 가벼운 피렌체 저녁",
        note: "전날 ZàZà에서 스테이크를 먹기 때문에 4일차 저녁은 파스타, 와인바, 생선, 토스카나 가정식 중에서 가볍게 선택.",
        warning: "인기 식당은 예약이 필요할 수 있음. 5일차도 음식 일정이 많으니 과식하지 않는 쪽이 좋음.",
        details: [
          { label: "1순위", value: "Il Santo Bevitore - Oltrarno 감성 와인/현대 토스카나, 파스타와 와인 중심" },
          { label: "2순위", value: "Osteria Vini e Vecchi Sapori - 시뇨리아 광장 근처 전통 오스테리아, 예약 난이도 높음" },
          { label: "3순위", value: "Cibrèo Trattoria - 산타크로체 쪽 토스카나식 메뉴, 스테이크 아닌 요리로 선택 가능" },
          { label: "가벼운 선택", value: "중앙시장에서 산 햄/치즈 + 와인 윈도우/와인바로 간단히 마무리" },
          { label: "피해야 할 것", value: "또 스테이크 풀코스, 너무 무거운 고기 메뉴, 늦은 과식" }
        ],
        links: [
          {
            label: "Il Santo Bevitore 공식 홈페이지",
            href: "https://www.ilsantobevitore.com/",
            note: "Oltrarno 저녁 후보."
          },
          {
            label: "Osteria Vini e Vecchi Sapori 지도",
            href: "https://www.google.com/maps/search/?api=1&query=Osteria%20Vini%20e%20Vecchi%20Sapori%2C%20Firenze",
            note: "전통 오스테리아 후보."
          },
          {
            label: "Cibrèo 공식 홈페이지",
            href: "https://www.cibreo.com/",
            note: "산타크로체 쪽 저녁 후보."
          }
        ],
        actions: ["당일 컨디션 보고 선택", "예약 가능 여부 확인", "스테이크 제외 메뉴 고르기", "식후 숙소 복귀 동선 확인"],
        status: "확인필요"
      },
      {
        time: "20:45-21:30",
        title: "저녁 두오모 산책",
        place: "Duomo 주변",
        note: "저녁 식사 후 숙소로 바로 돌아가도 되고, 컨디션이 좋으면 두오모 야경을 짧게 보고 복귀.",
        warning: "다음날도 피렌체 일정과 로마 이동이 있으므로 늦게까지 무리하지 않기.",
        actions: ["두오모 야경 사진", "숙소 복귀", "다음날 기차표와 짐 정리"],
        status: "방문예정"
      }
    ]
  },
  {
    id: "day-5",
    day: "5일차",
    date: "2026.06.18 목",
    city: "피렌체 → 로마",
    theme: "우피치, 트러플 파스타, 로마 복귀",
    summary: "체크아웃 후 짐을 맡기고 우피치 미술관을 여유롭게 본 뒤 Osteria Pastella에서 트러플 파스타를 먹고, 숙소/역 근처에서 쉬다가 18:48 Frecciarossa로 Roma Termini에 이동.",
    events: [
      {
        time: "08:00-08:35",
        title: "체크아웃과 짐 보관",
        place: "Hotel Palazzo Ognissanti",
        address: "Via Maso Finiguerra, 12/red, 50123 Firenze FI, Italy",
        note: "우피치 관람과 점심 후 로마행 기차를 타야 하므로 아침에 체크아웃하고 짐을 맡기는 흐름.",
        warning: "여권, 기차 QR, 지갑, 보조배터리만 작은 가방에 챙기고 큰 짐은 호텔에 맡기기.",
        actions: ["체크아웃", "짐 보관 영수증 받기", "기차표 QR 확인", "우피치 예약/티켓 확인", "가벼운 가방만 들고 출발"],
        status: "확인필요"
      },
      {
        time: "08:40-09:10",
        title: "우피치 미술관으로 이동",
        place: "Hotel Palazzo Ognissanti → H&M 매장 앞",
        address: "Via Por Santa Maria, 50122 Firenze FI, Italy",
        note: "09:20 우피치 가이드 투어 미팅. 미팅 장소는 H&M 매장 앞이며, 투어 전 변경이 없으면 별도 카톡/단톡 안내가 없다고 안내받음.",
        warning: "09:15까지 도착 권장. 가이드와 팀은 정각에 출발하며 지각 시 투어 참여, 투어비, 티켓비 환불이 불가.",
        details: [
          { label: "미팅시간", value: "09:20, 5분 전 도착 필수" },
          { label: "미팅장소", value: "H&M 매장 앞" },
          { label: "가이드 연락", value: "미팅 10분 전부터 투어 종료까지 연락이 잘 닿지 않을 수 있음" },
          { label: "이동 후", value: "가이드와 만나 우피치 미술관으로 이동/입장" }
        ],
        links: [
          {
            label: "우피치 투어 미팅 장소 지도",
            href: "https://maps.app.goo.gl/LEHMfN5Yk7v6PRUB6",
            note: "H&M 매장 앞."
          }
        ],
        actions: ["09:15까지 도착", "실물 여권 챙기기", "3.5mm 유선 이어폰 챙기기", "수신기 대여료 현금 준비", "우피치 예약/바우처 확인"],
        status: "확정"
      },
      {
        time: "09:20-12:20",
        title: "우피치 미술관 가이드 투어",
        place: "Galleria degli Uffizi",
        address: "Piazzale degli Uffizi, 6, 50122 Firenze FI, Italy",
        note: "09:20 가이드 투어 예약 완료. 보통 2시간 30분에서 3시간, 길어지면 4시간까지도 볼 수 있는 일정으로 잡기.",
        warning: "실물 여권이 없으면 입장 불가. 수신기 필수 사용으로 1인 5유로 현금 현장 지불. 3.5mm 유선 이어폰 미지참 시 새 이어폰 2유로 현장 구매.",
        details: [
          { label: "예약", value: "09:20 우피치 가이드 투어" },
          { label: "예상 소요", value: "기본 2시간 30분~3시간, 여유 있게 최대 4시간" },
          { label: "필수 준비물", value: "본인 실물 여권, 3.5mm 동그란 잭 유선 이어폰" },
          { label: "현금 준비", value: "수신기 대여료 1인 5유로, 이어폰 미지참 시 2유로" },
          { label: "우선 작품", value: "Botticelli - Birth of Venus, Primavera" },
          { label: "추가 핵심", value: "Leonardo, Raphael, Michelangelo, Caravaggio 주요 작품" },
          { label: "관람 전략", value: "가이드 설명을 우선 따라가고, 끝난 뒤 기념품/테라스 정도만 가볍게" },
          { label: "공식 운영", value: "Tuesday-Sunday 08:15-18:30, Monday closed" },
          { label: "가방", value: "큰 가방/우산은 cloakroom 대상일 수 있으니 작은 가방 추천" }
        ],
        links: [
          {
            label: "Uffizi 공식 정보",
            href: "https://www.uffizi.it/en/the-uffizi",
            note: "운영시간, 티켓, 규칙 확인."
          },
          {
            label: "Uffizi 지도",
            href: "https://www.google.com/maps/search/?api=1&query=Galleria%20degli%20Uffizi%2C%20Firenze",
            note: "입구 위치 확인."
          }
        ],
        actions: ["실물 여권 제시", "수신기 대여료 현금 지불", "유선 이어폰 연결", "큰 짐 없이 입장", "투어 종료 시간 확인"],
        status: "확정"
      },
      {
        time: "12:20-12:45",
        title: "Osteria Pastella로 이동",
        place: "Uffizi → Osteria Pastella",
        address: "Via della Scala, 17R, 50123 Firenze FI, Italy",
        note: "투어가 12:20 전후 끝나는 기준. 길어지면 바로 점심으로 이동하고, 너무 길어지면 점심 시간을 13:30 전후로 조정.",
        warning: "Osteria Pastella 점심 영업이 14:30까지라, 투어가 13시 이후 끝나면 바로 이동.",
        actions: ["Osteria Pastella 예약/영업시간 확인", "투어 종료 후 바로 이동", "점심 후 숙소 복귀 경로 확인"],
        status: "방문예정"
      },
      {
        time: "12:45-14:00",
        title: "트러플 파스타 점심",
        place: "Osteria Pastella",
        address: "Via della Scala, 17R, 50123 Firenze FI, Italy",
        note: "무조건 넣는 일정. 신선한 파스타와 트러플을 내세우는 피렌체 중심부 오스테리아로, 우피치 관람 후 호텔/역 방향으로 돌아오는 동선에 잘 맞음.",
        warning: "공식 점심 영업은 12:00-14:30. 투어가 길어지면 13:30 전후 식사까지는 괜찮지만, 14:00 이후 도착은 위험.",
        details: [
          { label: "먹고 싶은 메뉴", value: "트러플 파스타, 치즈휠/생파스타 계열 메뉴" },
          { label: "식당 특징", value: "공식 사이트 기준 매일 생면을 준비하고 트러플, 살루미, 치즈 등 토스카나 재료 사용" },
          { label: "영업시간", value: "공식 기준 매일 12:00-14:30, 19:00-22:30" },
          { label: "주문 전략", value: "트러플 파스타 1개는 필수, 배고프면 생면 파스타/전채 1개 추가" }
        ],
        links: [
          {
            label: "Osteria Pastella 공식 홈페이지",
            href: "https://www.osteriapastella.it/",
            note: "영업시간, 예약, 메뉴 확인."
          },
          {
            label: "Osteria Pastella 지도",
            href: "https://www.google.com/maps/search/?api=1&query=Osteria%20Pastella%2C%20Via%20della%20Scala%2017R%2C%20Firenze",
            note: "호텔/역 복귀 동선."
          }
        ],
        actions: ["예약 가능 여부 확인", "트러플 파스타 주문", "너무 과식하지 않기", "식후 숙소까지 이동 시간 확인"],
        status: "확인필요"
      },
      {
        time: "14:10-15:00",
        title: "산타마리아노벨라 근처 여유 산책",
        place: "Santa Maria Novella 주변",
        address: "Piazza di Santa Maria Novella, 50123 Firenze FI, Italy",
        note: "점심 후 숙소/역 근처에서 무리하지 않고 걷는 시간. 마지막날이라 멀리 가지 않는 것이 안전.",
        warning: "5일차에는 새 장소를 더 넣기보다 기차 이동 안정성이 우선.",
        details: [
          { label: "후보", value: "Santa Maria Novella 광장, Officina Profumo-Farmaceutica di Santa Maria Novella, 역 근처 쇼핑" },
          { label: "전략", value: "짐 찾기 전까지 숙소/역 반경 안에서만 움직이기" }
        ],
        links: [
          {
            label: "Santa Maria Novella 지도",
            href: "https://www.google.com/maps/search/?api=1&query=Piazza%20di%20Santa%20Maria%20Novella%2C%20Firenze",
            note: "숙소/역 근처 여유 산책."
          }
        ],
        actions: ["가벼운 산책", "기념품/약국/화장실 정리", "멀리 가지 않기", "15시 전후 숙소 방향으로 복귀"],
        status: "방문예정"
      },
      {
        time: "15:00-17:45",
        title: "짐 찾기와 역 이동 준비",
        place: "Hotel Palazzo Ognissanti → Firenze S. M. Novella",
        address: "Via Maso Finiguerra, 12/red, 50123 Firenze FI, Italy",
        note: "기차 출발 18:48 기준으로 18:00 전에는 모든 관광을 끝내고 짐을 찾아 역 이동 준비. 여유가 남으면 역 근처 카페에서 쉬기.",
        warning: "Frecciarossa는 출발 직전 탑승이 위험하므로 18:20 전후에는 플랫폼 확인을 시작하는 흐름 권장.",
        details: [
          { label: "권장 복귀", value: "15:00-16:00 호텔/역 근처" },
          { label: "플랫폼 확인", value: "18:20 전후부터 전광판 확인" },
          { label: "기차", value: "Frecciarossa 9431, 18:48 출발" }
        ],
        actions: ["호텔에서 짐 찾기", "기차표 QR 열기", "물/간식 준비", "플랫폼 전광판 확인", "객차 5 찾기"],
        status: "확인필요"
      },
      {
        time: "18:48-20:25",
        title: "피렌체 → 로마",
        place: "FR 9431, Firenze Santa Maria Novella → Roma Termini",
        note: "Frecciarossa 9431, Coach 5, 좌석 19C/19D. PNR W2Z235.",
        warning: "매우 중요: Roma Tiburtina가 아니라 Roma Termini에서 하차.",
        details: [
          { label: "열차", value: "Frecciarossa 9431" },
          { label: "출발", value: "Firenze S. M. Novella 18:48" },
          { label: "도착", value: "Roma Termini 20:25" },
          { label: "객차", value: "5" },
          { label: "좌석", value: "19C, 19D" },
          { label: "PNR", value: "W2Z235" }
        ],
        images: [
          {
            src: "/vouchers/0618-firenze-roma-train.png",
            alt: "피렌체에서 로마로 가는 Trenitalia 열차 바우처",
            caption: "Firenze SMN → Roma Termini QR 바우처"
          }
        ],
        actions: ["QR 바우처 열기", "Roma Termini 하차 재확인", "객차 5 찾기", "좌석 19C/19D 확인"],
        status: "확정"
      },
      {
        time: "20:30-21:00",
        title: "가이드 미팅 및 픽업",
        warning: "도착 5분 뒤라 매우 촉박. 플랫폼, 출구, 차량 위치 재확인 필요.",
        status: "확인필요"
      },
      {
        time: "21:30-22:30",
        title: "Ergife Palace Hotel 체크인",
        address: "Largo Lorenzo Mossa, 8, 00165 Rome",
        status: "방문예정"
      },
      { time: "미정", title: "저녁식사 리스트 확인", status: "미정" }
    ]
  },
  {
    id: "day-6",
    day: "6일차",
    date: "2026.06.19 금",
    city: "로마",
    theme: "로마 자유일정과 레스토랑",
    summary: "베드로 대성당, 산탄젤로성, 나보나 광장 후보. 저녁은 아로마 레스토랑.",
    events: [
      { time: "미정", title: "베드로 대성당", warning: "복장 규정과 대기 시간 확인.", status: "미정" },
      { time: "미정", title: "산탄젤로성", status: "미정" },
      { time: "미정", title: "나보나 광장", status: "미정" },
      {
        time: "18:45-21:15",
        title: "아로마 레스토랑",
        place: "Aroma Restaurant",
        address: "Via Labicana, 125, 00184 Roma, Italy",
        note: "예약 확정. 첫 번째 턴 예약으로 18:45 입장, 테이블은 21:15까지 이용. 허니문 기념으로 로맨틱한 테이블 요청 메모가 들어가 있음.",
        warning: "카드 사전승인 1인 180유로, 총 360유로. 예약 24시간 이내 취소 또는 노쇼 시 해당 금액이 패널티로 청구됨.",
        details: [
          { label: "예약자", value: "solmin park" },
          { label: "예약일", value: "2026-06-19 금요일" },
          { label: "예약시간", value: "18:45" },
          { label: "인원", value: "2명" },
          { label: "테이블 이용", value: "첫 번째 턴 18:45-21:15" },
          { label: "주소", value: "Via Labicana, 125, 00184 Roma" },
          { label: "전화", value: "+39 06 97615109" },
          { label: "카드 사전승인", value: "1인 180유로, 예약일 3일 전 진행" },
          { label: "취소 정책", value: "예약 24시간 전까지 무료 취소, 이후 취소/노쇼 시 360유로 청구" },
          { label: "취소 방법", value: "취소가 필요하면 원문 예약 메일의 Cancella la prenotazione 버튼에서 처리" },
          { label: "최소 주문", value: "SMART MENU 180유로, 2가지 요리 + 디저트" },
          { label: "남성 드레스코드", value: "저녁에는 우아한 재킷 착용 선호" },
          { label: "요청 메모", value: "허니문 기념, 가능하면 로맨틱한 테이블 요청" }
        ],
        links: [
          {
            label: "Aroma 길찾기",
            href: "https://www.google.com/maps/dir/?api=1&destination=Via%20Labicana%2C%20125%2CRoma%2C00184",
            note: "식당으로 이동."
          }
        ],
        actions: ["재킷/드레스 코드 준비", "18:30 전후 도착 목표", "카드 사전승인 확인", "SMART MENU 확인", "취소 필요 시 예약 메일 원문에서 처리", "허니문 요청 메모 확인"],
        status: "확정"
      }
    ]
  },
  {
    id: "day-7",
    day: "7일차",
    date: "2026.06.20 토",
    city: "로마",
    theme: "바티칸과 야경 투어",
    summary: "오전 호텔 로비 가이드 미팅, 바티칸+로마 시내 밴투어, 밤에는 야경 투어.",
    events: [
      {
        time: "08:40-09:00",
        title: "호텔 로비 가이드 미팅",
        warning: "미팅시간 엄수.",
        status: "확정"
      },
      {
        time: "09:00-18:00",
        title: "바티칸 + 로마 시내 밴투어",
        warning: "어깨와 무릎을 가리는 복장 준비.",
        status: "확정"
      },
      {
        time: "미정",
        title: "옷 갈아입기",
        warning: "Ergife Palace Hotel 왕복 시간이 길 수 있어 가능 여부 계산 필요.",
        status: "확인필요"
      },
      {
        time: "20:00-21:30",
        title: "로마 야경/명소 투어",
        place: "TRM193646",
        address: "Piazza di S. Pantaleo, 3, 00186 Roma",
        warning: "일정명에 Colosseo가 있으나 주소는 Piazza di S. Pantaleo. 바우처 기준 재확인.",
        status: "확인필요"
      }
    ]
  },
  {
    id: "day-8",
    day: "8일차",
    date: "2026.06.21 일",
    city: "로마 → 인천",
    theme: "마지막 자유시간, 라운지, 귀국",
    summary: "체크아웃 후 가벼운 자유일정, 로마 FCO T3에서 Plaza Premium Lounge 이용 후 TW406 귀국편 탑승.",
    events: [
      {
        time: "오전",
        title: "호텔 조식 후 체크아웃",
        warning: "짐 보관 가능 여부와 가이드 미팅 장소 확인.",
        actions: ["여권 위치 확인", "짐 보관 영수증 받기", "공항 픽업 시간 재확인"],
        status: "확인필요"
      },
      {
        time: "낮",
        title: "로마 자유일정",
        note: "무리한 장거리 관광보다 공항 이동 안정성 우선. 마지막 쇼핑이나 가벼운 산책 위주로 구성.",
        warning: "18:30 전후 공항 이동을 기준으로, 호텔 또는 미팅 장소 복귀 시간을 넉넉히 잡기.",
        status: "미정"
      },
      {
        time: "16:45-17:15",
        title: "로마 공항으로 이동",
        place: "로마 시내 → FCO Terminal 3",
        note: "라운지를 충분히 이용하려면 17시대 공항 도착을 목표로 잡는 것이 좋음.",
        warning: "픽업 미팅시간, 장소, 담당자 연락처를 전날 확정. 늦어도 17:15 전후에는 공항에 도착하는 흐름 권장.",
        details: [
          { label: "도착 공항", value: "FCO 로마 피우미치노 레오나르도 다 빈치 공항 T3" },
          { label: "항공편", value: "티웨이항공 TW406" },
          { label: "예약번호", value: "B5N9K3" },
          { label: "출발", value: "2026.06.21 21:15, FCO T3" },
          { label: "도착", value: "2026.06.22 16:10, ICN T1" },
          { label: "권장 공항 도착", value: "17:15 전후" }
        ],
        vouchers: [
          {
            label: "티웨이 E-ticket - OH/JEONGHYUP",
            href: "/vouchers/tway-eticket-oh-jeonghyup.png",
            note: "귀국편 TW406 좌석 9G, 항공권번호 7222427355720."
          },
          {
            label: "티웨이 E-ticket - PARK/SOLMIN",
            href: "/vouchers/tway-eticket-park-solmin.png",
            note: "귀국편 TW406 좌석 9H, 항공권번호 7222427355719."
          }
        ],
        actions: ["픽업 담당자 연락처 확인", "여권과 항공권 준비", "위탁수하물 무게 확인", "라운지 QR 준비", "예약번호 B5N9K3 확인"],
        status: "확인필요"
      },
      {
        time: "17:15-18:20",
        title: "체크인과 보안검색",
        place: "FCO Terminal 3",
        note: "체크인, 수하물 위탁, 보안검색, 출국심사 후 출국장 내부로 이동.",
        warning: "라운지는 보안검색 후 이용 가능. 체크인 카운터 오픈 시간은 항공사 현장 기준으로 확인.",
        actions: ["티웨이 체크인 카운터 확인", "수하물 위탁", "보안검색", "출국심사", "E1-E44 표지판 확인"],
        status: "방문예정"
      },
      {
        time: "18:20-20:25",
        title: "Plaza Premium Lounge",
        place: "로마 피우미치노 레오나르도 다 빈치 공항 Terminal 3",
        note: "에어사이드 출국장 내부. 여권 심사 및 보안 검색 후 E1-E44 탑승구 표지판을 따라 이동, 면세점을 통과해 에스컬레이터 또는 엘리베이터로 한 층 위로 올라가면 British Airways Lounge 옆에 입구가 있음.",
        warning: "운영시간은 05:00-22:30. 탑승구가 멀 수 있으니 20:25 전후에는 라운지에서 나올 준비.",
        details: [
          { label: "라운지", value: "Plaza Premium Lounge" },
          { label: "공항", value: "FCO Terminal 3" },
          { label: "이용 위치", value: "보안검색 후 에어사이드 출국장 내부" },
          { label: "찾는 방법", value: "E1-E44 표지판 → 면세점 통과 → 한 층 위 → British Airways Lounge 옆" },
          { label: "운영시간", value: "05:00 - 22:30" }
        ],
        actions: ["QR 또는 라운지 이용권 제시", "탑승구와 탑승 시작 시간 확인", "기내에서 쓸 물과 소지품 정리"],
        images: [
          { src: "/images/rome-lounge-qrcode.png", alt: "Plaza Premium Lounge QR 코드", caption: "로마 라운지 QR 1" },
          { src: "/images/rome-lounge-qrcode-1.png", alt: "Plaza Premium Lounge QR 코드 2", caption: "로마 라운지 QR 2" }
        ],
        status: "확정"
      },
      {
        time: "20:25-21:05",
        title: "탑승구 이동과 탑승 준비",
        place: "FCO T3 탑승구",
        note: "라운지에서 너무 늦게 나오지 않고, 탑승구 변경 여부를 전광판에서 확인.",
        actions: ["여권/탑승권 위치 확인", "화장실", "보조배터리와 충전 케이블 정리", "탑승 안내 확인"],
        status: "방문예정"
      },
      {
        time: "21:15-06/22 16:10",
        title: "로마 → 인천",
        place: "티웨이항공 TW406",
        note: "일반석, 에어버스 A330-200 대형, 기내식 포함. 비행시간 11시간 55분.",
        details: [
          { label: "출발", value: "2026.06.21 21:15, FCO T3" },
          { label: "도착", value: "2026.06.22 16:10, ICN T1" },
          { label: "예약번호", value: "B5N9K3" },
          { label: "항공사", value: "티웨이항공" },
          { label: "기종", value: "Airbus A330-200" },
          { label: "좌석", value: "일반석, 9G / 9H" },
          { label: "위탁수하물", value: "각 23KG" },
          { label: "기내식", value: "2회 무료 제공" },
          { label: "항공권번호", value: "OH 7222427355720 / PARK 7222427355719" }
        ],
        vouchers: [
          {
            label: "티웨이 E-ticket - OH/JEONGHYUP",
            href: "/vouchers/tway-eticket-oh-jeonghyup.png",
            note: "귀국편 TW406 좌석 9G."
          },
          {
            label: "티웨이 E-ticket - PARK/SOLMIN",
            href: "/vouchers/tway-eticket-park-solmin.png",
            note: "귀국편 TW406 좌석 9H."
          }
        ],
        actions: ["E-ticket QR 열기", "좌석 9G/9H 확인", "위탁수하물 23KG 확인", "인천 도착 16:10+1 확인"],
        status: "확정"
      }
    ]
  }
];

export const urgentNotes = [
  "06/14 공항 도착 후 20:38 기차는 입국심사와 수하물 상황에 따라 빠듯할 수 있음.",
  "06/18 로마 복귀 기차는 Roma Tiburtina가 아니라 Roma Termini 하차.",
  "06/18 가이드 미팅은 기차 도착 5분 뒤라 연락처와 정확한 위치 확보 필요.",
  "06/20 저녁 투어는 일정명과 주소가 달라 바우처 원문 기준 재확인 필요.",
  "06/21 로마 공항 Plaza Premium Lounge는 보안검색 후 E1-E44 표지판을 따라가야 함.",
  "바티칸과 성당 일정에는 어깨와 무릎을 가리는 복장 준비."
];

export const openItems = [
  "Hotel Gioberti 늦은 체크인 가능 여부",
  "Palazzo Ognissanti 짐 보관, 보증금, 도시세 결제 방식",
  "06/15 스냅촬영 정확한 장소와 우천 시 진행 방식",
  "06/17 피렌체 자유일정의 실제 순서",
  "06/18 픽업 가이드 연락처와 미팅 위치",
  "06/19 아로마 레스토랑 카드 사전승인과 당일 복장 최종 확인",
  "06/20 야경 투어 실제 집결지",
  "06/21 공항 픽업 미팅 장소와 담당자 연락처",
  "06/21 TW406 체크인 카운터와 실제 탑승구"
];

export const packingList = [
  "여권",
  "항공권과 기차표 PDF",
  "호텔 예약 확인서",
  "투어 바우처와 예약 코드",
  "eSIM 또는 로밍",
  "멀티 어댑터",
  "보조배터리",
  "선크림, 모자, 선글라스",
  "편한 신발",
  "성당 방문용 얇은 가디건 또는 스카프",
  "유로 현금 소액권",
  "카드 분실 신고 연락처"
];
