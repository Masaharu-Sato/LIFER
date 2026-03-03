"use client";

import { memo } from "react";
import { useSwipeActions } from "@/hooks/useSwipeActions";
import { useLocale } from "@/hooks/useLocale";
import { fmtNoteDate } from "@/lib/i18n";

function preview(body: string, fallback: string): string {
  return body.split("\n").filter((l) => l.trim()).slice(0, 2).join(" ") || fallback;
}

interface NoteCellProps {
  id: string;
  title: string;
  body: string;
  updatedAt: string;
  isPinned?: boolean;
  onOpen: (id: string) => void;
  onDelete: (id: string) => void;
  onPin: (id: string) => void;
  onMove: (id: string) => void;
}

export const NoteCell = memo(function NoteCell({
  id, title, body, updatedAt, isPinned, onOpen, onDelete, onPin, onMove,
}: NoteCellProps) {
  const { locale, t } = useLocale();
  const { contentRef, leftActionsRef, rightActionsRef, close, didSwipeRef } =
    useSwipeActions({ leftRevealWidth: 70, rightRevealWidth: 140 });

  const handleClick = () => {
    if (didSwipeRef.current) return;
    onOpen(id);
  };

  return (
    <div className="relative overflow-hidden rounded-xl mb-2.5" style={{ background: "var(--notes-surface)" }}>
      {/* Left actions — pin (swipe right) */}
      <div
        ref={leftActionsRef}
        className="absolute left-0 top-0 bottom-0 flex items-stretch"
        style={{ visibility: "hidden" }}
      >
        <button
          onClick={() => { onPin(id); close(); }}
          className="w-[70px] flex flex-col items-center justify-center gap-1 text-white text-[11px] font-medium notes-font"
          style={{ background: "#FF9500" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
            {isPinned ? (
              <path d="M16.5 2.25a.75.75 0 0 1 .75.75v1.19l1.72 1.72a.75.75 0 0 1 .22.53v3.06a.75.75 0 0 1-.22.53L17 12l-1.5 6.75L12 21l-3.5-2.25L7 12l-1.97-1.97a.75.75 0 0 1-.22-.53V6.44a.75.75 0 0 1 .22-.53L6.75 4.19V3a.75.75 0 0 1 .75-.75h9z" />
            ) : (
              <path d="M12 2l2.4 7.2H21l-5.4 3.9 2 7.2L12 16.2 6.4 20.3l2-7.2L3 9.2h6.6z" />
            )}
          </svg>
          {isPinned ? t("notes.unpin") : t("notes.pin")}
        </button>
      </div>

      {/* Right actions — move + delete (swipe left) */}
      <div
        ref={rightActionsRef}
        className="absolute right-0 top-0 bottom-0 flex items-stretch"
        style={{ visibility: "hidden" }}
      >
        <button
          onClick={() => { onMove(id); close(); }}
          className="w-[70px] flex flex-col items-center justify-center gap-1 text-white text-[11px] font-medium notes-font"
          style={{ background: "#5856D6" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
          </svg>
          {t("common.move")}
        </button>
        <button
          onClick={() => { onDelete(id); close(); }}
          className="w-[70px] flex flex-col items-center justify-center gap-1 text-white text-[11px] font-medium notes-font"
          style={{ background: "#FF3B30" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </svg>
          {t("common.delete")}
        </button>
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        onClick={handleClick}
        className="relative rounded-xl"
        style={{ transform: "translate3d(0,0,0)", willChange: "transform", background: "var(--notes-surface)" }}
      >
        <div className="py-4 px-4">
          <div className="flex items-center gap-2">
            {isPinned && (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--color-amber)" stroke="none" className="shrink-0">
                <path d="M12 2l2.4 7.2H21l-5.4 3.9 2 7.2L12 16.2 6.4 20.3l2-7.2L3 9.2h6.6z" />
              </svg>
            )}
            <p className="text-[17px] font-semibold truncate notes-font leading-snug flex-1"
              style={{ color: "var(--notes-primary)" }}>
              {title || t("notes.newNote")}
            </p>
          </div>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-[14px] font-medium shrink-0 notes-font"
              style={{ color: "var(--notes-secondary)" }}>
              {fmtNoteDate(updatedAt, locale)}
            </span>
            <p className="text-[15px] truncate notes-font leading-snug"
              style={{ color: "var(--notes-tertiary)" }}>
              {preview(body, t("notes.noAdditionalText"))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});
