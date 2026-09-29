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
    id: "224382426084",
    title: "SNS 자동화로 블로그·인스타·유튜브까지 자동 발행하기 (과정 수강 후기)",
    date: "2026-08-18",
    summary: "교육 후기 하나를 올리는 데 반나절이 걸린다면, 그것은 부지런함의 문제가 아니라 구조의 문제입니다. 사진 선별, 얼굴 모자이크, 원고 작성, 채널별 재편집까지 사람이 순서대로 처리하는 한 시간은 줄지 않습니다.",
    thumbnail: "",
    tags: ["SNS자동화", "업무자동화", "기업교육", "콘텐츠마케팅"],
    url: "https://tychegroup.tistory.com/1"
  }
];
