export type Locale = "ja" | "ko";

const LOCALE_KEY = "lifer-locale";

export function getLocale(): Locale {
  if (typeof window === "undefined") return "ja";
  return (localStorage.getItem(LOCALE_KEY) as Locale) || "ja";
}

export function setLocale(locale: Locale): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(LOCALE_KEY, locale);
}

// ─── Translation dictionaries ───

const ja: Record<string, string> = {
  // Nav
  "nav.missions": "ミッション",
  "nav.plan": "予定を組む",
  "nav.history": "確認",
  "nav.notes": "メモ",

  // Common
  "common.save": "保存",
  "common.delete": "削除",
  "common.cancel": "キャンセル",
  "common.close": "閉じる",
  "common.edit": "編集",
  "common.move": "移動",
  "common.add": "追加",
  "common.back": "戻る",
  "common.today": "今日",
  "common.yesterday": "昨日",
  "common.last7days": "過去7日間",
  "common.last30days": "過去30日間",
  "common.search": "検索",
  "common.type": "タイプ",
  "common.addAction": "追加する",
  "common.category": "カテゴリ",
  "common.group": "グループ",
  "common.uncategorized": "未分類",
  "common.noGroup": "グループなし",
  "common.done": "完了",
  "common.completed": "完了済み",

  // Missions page
  "missions.title": "ミッション一覧",
  "missions.count": "{count}件のミッション",
  "missions.empty": "ミッションがありません",
  "missions.emptyHint": "右上の＋ボタンからミッションを追加してください",
  "missions.addCategory": "カテゴリを追加",
  "missions.mission": "ミッション",
  "missions.subgroup": "サブグループ",
  "missions.dataManagement": "データ管理",
  "missions.collapseAll": "すべて閉じる",
  "missions.expandAll": "すべて開く",

  // Plan page
  "plan.title": "予定を組む",
  "plan.selectDate": "日程を選んでください",
  "plan.dateLabel": "日付",
  "plan.backToToday": "今日に戻す",
  "plan.hasPlan": "予定あり · {count}件のミッション",
  "plan.noPlan": "予定なし",
  "plan.viewPlan": "この日の予定を見る",
  "plan.editMissions": "ミッションを編集する",
  "plan.selectMissions": "ミッションを選ぶ",
  "plan.noMissions": "ミッションがありません",
  "plan.noMissionsHint": "先にミッション一覧でミッションを追加してください",
  "plan.categoryLabel": "カテゴリ:",
  "plan.groupLabel": "グループ:",
  "plan.editDetail": "詳細を編集",
  "plan.enterDetail": "詳細を入力",
  "plan.detail": "詳細",
  "plan.detailPlaceholder": "詳細を入力...",
  "plan.confirmPlan": "{count}件のミッションで予定を確定",
  "plan.completedCount": "{done}/{total}件完了",
  "plan.noPlanYet": "この日の予定はまだありません",

  // History page
  "history.title": "確認",
  "history.planCount": "{count}日分の予定",
  "history.noPlans": "まだ予定がありません",
  "history.noPlansEmpty": "予定がありません",
  "history.noPlansHint": "「予定を組む」で予定を作成すると表示されます",
  "history.itemCount": "{total}件 · {done}件完了",
  "history.deleteConfirm": "削除する",
  "history.deletePlan": "この予定を削除",

  // Notes
  "notes.title": "メモ",
  "notes.pinned": "ピン固定",
  "notes.folders": "フォルダ",
  "notes.noNotes": "メモなし",
  "notes.notFound": "見つかりませんでした",
  "notes.noteCount": "{count}件のメモ",
  "notes.newFolder": "新規フォルダ",
  "notes.folderName": "フォルダ名",
  "notes.create": "作成",
  "notes.renameFolder": "フォルダ名を変更",
  "notes.titlePlaceholder": "タイトル",
  "notes.bodyPlaceholder": "メモ",
  "notes.newNote": "新規メモ",
  "notes.noAdditionalText": "追加テキストなし",
  "notes.unpin": "解除",
  "notes.pin": "ピン",
  "notes.rename": "名変更",
  "notes.itemCount": "{count}件",
  "notes.folderDefault": "フォルダ",
  "notes.selectFolder": "フォルダを選択",

  // Data transfer
  "data.title": "データ管理",
  "data.subtitle": "他のデバイスへデータを移行できます",
  "data.export": "エクスポート",
  "data.exportDesc": "JSONファイルとして保存",
  "data.import": "インポート",
  "data.importDesc": "JSONファイルから復元（上書き）",
  "data.exportSuccess": "エクスポートしました",
  "data.importSuccess": "インポート完了。リロードします...",
  "data.invalidFile": "無効なファイルです",

  // Add item
  "addItem.title": "追加",
  "addItem.categoryName": "カテゴリ名",
  "addItem.groupName": "グループ名",
  "addItem.missionName": "ミッション名",
  "addItem.parentGroup": "親グループ",
  "addItem.parentGroupNone": "なし（トップレベル）",

  // Move task
  "moveTask.titleWithName": "「{name}」を移動",
  "moveTask.title": "移動",
  "moveTask.submit": "移動する",

  // Quick add
  "quickAdd.addMission": "{name} にミッション追加",
  "quickAdd.addSubgroup": "{name} にサブグループ追加",
  "quickAdd.missionName": "ミッション名",
  "quickAdd.subgroupName": "サブグループ名",

  // Settings
  "settings.language": "言語",
};

const ko: Record<string, string> = {
  // Nav
  "nav.missions": "미션",
  "nav.plan": "일정 짜기",
  "nav.history": "확인",
  "nav.notes": "메모",

  // Common
  "common.save": "저장",
  "common.delete": "삭제",
  "common.cancel": "취소",
  "common.close": "닫기",
  "common.edit": "편집",
  "common.move": "이동",
  "common.add": "추가",
  "common.back": "뒤로",
  "common.today": "오늘",
  "common.yesterday": "어제",
  "common.last7days": "지난 7일",
  "common.last30days": "지난 30일",
  "common.search": "검색",
  "common.type": "유형",
  "common.addAction": "추가하기",
  "common.category": "카테고리",
  "common.group": "그룹",
  "common.uncategorized": "미분류",
  "common.noGroup": "그룹 없음",
  "common.done": "완료",
  "common.completed": "완료됨",

  // Missions page
  "missions.title": "미션 목록",
  "missions.count": "{count}개의 미션",
  "missions.empty": "미션이 없습니다",
  "missions.emptyHint": "오른쪽 상단의 + 버튼으로 미션을 추가해주세요",
  "missions.addCategory": "카테고리 추가",
  "missions.mission": "미션",
  "missions.subgroup": "서브그룹",
  "missions.dataManagement": "데이터 관리",
  "missions.collapseAll": "모두 접기",
  "missions.expandAll": "모두 펼치기",

  // Plan page
  "plan.title": "일정 짜기",
  "plan.selectDate": "날짜를 선택해주세요",
  "plan.dateLabel": "날짜",
  "plan.backToToday": "오늘로 돌아가기",
  "plan.hasPlan": "일정 있음 · {count}개의 미션",
  "plan.noPlan": "일정 없음",
  "plan.viewPlan": "이 날의 일정 보기",
  "plan.editMissions": "미션 편집하기",
  "plan.selectMissions": "미션 선택하기",
  "plan.noMissions": "미션이 없습니다",
  "plan.noMissionsHint": "먼저 미션 목록에서 미션을 추가해주세요",
  "plan.categoryLabel": "카테고리:",
  "plan.groupLabel": "그룹:",
  "plan.editDetail": "상세 편집",
  "plan.enterDetail": "상세 입력",
  "plan.detail": "상세",
  "plan.detailPlaceholder": "상세를 입력...",
  "plan.confirmPlan": "{count}개의 미션으로 일정 확정",
  "plan.completedCount": "{done}/{total}건 완료",
  "plan.noPlanYet": "이 날의 일정이 아직 없습니다",

  // History page
  "history.title": "확인",
  "history.planCount": "{count}일의 일정",
  "history.noPlans": "아직 일정이 없습니다",
  "history.noPlansEmpty": "일정이 없습니다",
  "history.noPlansHint": "\"일정 짜기\"에서 일정을 만들면 표시됩니다",
  "history.itemCount": "{total}건 · {done}건 완료",
  "history.deleteConfirm": "삭제하기",
  "history.deletePlan": "이 일정을 삭제",

  // Notes
  "notes.title": "메모",
  "notes.pinned": "고정됨",
  "notes.folders": "폴더",
  "notes.noNotes": "메모 없음",
  "notes.notFound": "찾을 수 없습니다",
  "notes.noteCount": "{count}개의 메모",
  "notes.newFolder": "새 폴더",
  "notes.folderName": "폴더 이름",
  "notes.create": "만들기",
  "notes.renameFolder": "폴더 이름 변경",
  "notes.titlePlaceholder": "제목",
  "notes.bodyPlaceholder": "메모",
  "notes.newNote": "새 메모",
  "notes.noAdditionalText": "추가 텍스트 없음",
  "notes.unpin": "해제",
  "notes.pin": "고정",
  "notes.rename": "이름변경",
  "notes.itemCount": "{count}건",
  "notes.folderDefault": "폴더",
  "notes.selectFolder": "폴더 선택",

  // Data transfer
  "data.title": "데이터 관리",
  "data.subtitle": "다른 기기로 데이터를 이전할 수 있습니다",
  "data.export": "내보내기",
  "data.exportDesc": "JSON 파일로 저장",
  "data.import": "가져오기",
  "data.importDesc": "JSON 파일에서 복원 (덮어쓰기)",
  "data.exportSuccess": "내보내기 완료",
  "data.importSuccess": "가져오기 완료. 새로고침합니다...",
  "data.invalidFile": "유효하지 않은 파일입니다",

  // Add item
  "addItem.title": "추가",
  "addItem.categoryName": "카테고리 이름",
  "addItem.groupName": "그룹 이름",
  "addItem.missionName": "미션 이름",
  "addItem.parentGroup": "상위 그룹",
  "addItem.parentGroupNone": "없음 (최상위)",

  // Move task
  "moveTask.titleWithName": "\"{name}\" 이동",
  "moveTask.title": "이동",
  "moveTask.submit": "이동하기",

  // Quick add
  "quickAdd.addMission": "{name}에 미션 추가",
  "quickAdd.addSubgroup": "{name}에 서브그룹 추가",
  "quickAdd.missionName": "미션 이름",
  "quickAdd.subgroupName": "서브그룹 이름",

  // Settings
  "settings.language": "언어",
};

// ─── Translation function ───

export function t(key: string, locale: Locale, params?: Record<string, string | number>): string {
  const dict = locale === "ko" ? ko : ja;
  let str = dict[key] ?? ja[key] ?? key;
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      str = str.replaceAll(`{${k}}`, String(v));
    }
  }
  return str;
}

// ─── Locale-aware date functions ───

export function formatDateLabel(dateStr: string, locale: Locale): string {
  const [y, m, d] = dateStr.split("-");
  const daysJa = ["日", "月", "火", "水", "木", "金", "土"];
  const daysKo = ["일", "월", "화", "수", "목", "금", "토"];
  const days = locale === "ko" ? daysKo : daysJa;
  const date = new Date(Number(y), Number(m) - 1, Number(d));
  const bracket = locale === "ko" ? ["(", ")"] : ["（", "）"];
  return `${Number(m)}/${Number(d)}${bracket[0]}${days[date.getDay()]}${bracket[1]}`;
}

export function getDateGroup(updatedAt: string, locale: Locale): string {
  const d = new Date(updatedAt);
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const noteDay = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const diff = Math.floor((today.getTime() - noteDay.getTime()) / 86400000);
  if (diff === 0) return t("common.today", locale);
  if (diff === 1) return t("common.yesterday", locale);
  if (diff < 7) return t("common.last7days", locale);
  if (diff < 30) return t("common.last30days", locale);
  const loc = locale === "ko" ? "ko-KR" : "ja-JP";
  return d.toLocaleDateString(loc, { year: "numeric", month: "long" });
}

export function fmtNoteDate(s: string, locale: Locale): string {
  const d = new Date(s);
  const now = new Date();
  const t0 = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const td = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const diff = Math.floor((t0.getTime() - td.getTime()) / 86400000);
  const loc = locale === "ko" ? "ko-KR" : "ja-JP";
  if (diff === 0) return d.toLocaleTimeString(loc, { hour: "2-digit", minute: "2-digit" });
  if (diff === 1) return t("common.yesterday", locale);
  if (diff < 7) return d.toLocaleDateString(loc, { weekday: "short" });
  return d.toLocaleDateString(loc, { year: "numeric", month: "2-digit", day: "2-digit" });
}
