// 이 파일은 자동 생성됩니다. 직접 수정하지 마세요.
// 생성: tistory 프로젝트의 `python src/site_sync.py`
// 티스토리에 발행된 기업교육 후기 기록입니다.
// 모집 중인 유료 공개과정(courses 배열)과는 성격이 다르므로 섞지 마세요.

export type TrainingRecord = {
  id: string;
  title: string;
  date: string;      // YYYY-MM-DD
  summary: string;
  thumbnail: string; // public/ 기준 경로 (없으면 빈 문자열)
  tags: string[];
  url: string;       // 티스토리 원문
};

export const trainingLog: TrainingRecord[] = [
  {
    id: "224383685504",
    title: "공공기관 취업 특강, 자소서부터 모의면접까지 6시간에 (청년인턴 12명 만족도 4.8점)",
    date: "2026-08-19",
    summary: "공공기관 취업 준비에서 가장 자주 막히는 지점은 자기소개서입니다. 인터넷에서 본 문장을 옮겨 적으면 서류는 통과해도 면접에서 곧바로 드러납니다. 본인 이야기가 없기 때문입니다.",
    thumbnail: "",
    tags: ["취업교육", "자기소개서컨설팅", "면접코칭", "공공기관취업"],
    url: "https://tychegroup.tistory.com/2"
  },
  {
    id: "224382426084",
    title: "SNS 자동화로 블로그·인스타·유튜브까지 자동 발행하기 (과정 수강 후기)",
    date: "2026-08-18",
    summary: "교육 후기 하나를 올리는 데 반나절이 걸린다면, 그것은 부지런함의 문제가 아니라 구조의 문제입니다. 사진 선별, 얼굴 모자이크, 원고 작성, 채널별 재편집까지 사람이 순서대로 처리하는 한 시간은 줄지 않습니다.",
    thumbnail: "",
    tags: ["SNS자동화", "업무자동화", "기업교육", "콘텐츠마케팅"],
    url: "https://tychegroup.tistory.com/1"
  }
];
