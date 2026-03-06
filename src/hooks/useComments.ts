import { useState } from "react"
import type { Comment } from "../types/comment"

// localStorage 에서 모든 댓글을 불러오는 키
const STORAGE_KEY = "comments"

// localStorage → Comment[] 파싱. 실패하면 빈 배열 반환
function loadComments(): Comment[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]")
  } catch {
    return []
  }
}

// Comment[] → localStorage 저장
function saveComments(comments: Comment[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(comments))
}

const useComments = (videoId: string) => {
  const [comments, setComments] = useState<Comment[]>(() =>
    // useState 초기값을 함수로 넘기면 최초 렌더링 때만 한 번 실행됨 (lazy initialization)
    // 전체 댓글 중 현재 videoId에 해당하는 것만 필터링해서 초기 state로 설정
    loadComments().filter(c => c.videoId === videoId)
  )

  const addComment = (content: string) => {
    const newComment: Comment = {
      id: crypto.randomUUID(), // 브라우저 내장 UUID 생성
      videoId,
      authorName: "나",
      content,
      createdAt: new Date().toLocaleString(),
    }

    // localStorage 에는 모든 비디오의 댓글이 함께 저장됨
    // 새 댓글을 전체 목록에 추가 후 다시 저장
    const allComments = loadComments()
    const updated = [...allComments, newComment]
    saveComments(updated)

    // state 는 현재 비디오 댓글만 유지
    setComments(updated.filter(c => c.videoId === videoId))
  }

  return { comments, addComment }
}

export default useComments
