import { getResumeText } from "@libs/getResumeText";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Alert, Button, IconButton, Snackbar } from "@mui/material";
import { useEffect, useRef, useState } from "react";

export default function ResumeControl() {
  const [open, setOpen] = useState(false);
  const [command, setCommand] = useState("");
  const [message, setMessage] = useState<{
    text: string;
    error: boolean;
  } | null>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  function closeCommand() {
    setOpen(false);
    setCommand("");
    previousFocus.current?.focus();
    previousFocus.current = null;
  }

  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      const editing = target?.closest(
        'input, textarea, select, [contenteditable="true"]',
      );
      if (event.isComposing) return;
      if (
        event.key === "/" &&
        !editing &&
        !event.ctrlKey &&
        !event.metaKey &&
        !event.altKey
      ) {
        event.preventDefault();
        previousFocus.current = document.activeElement as HTMLElement;
        setOpen(true);
      }
      if (event.key === "Escape") {
        setOpen(false);
        setCommand("");
        previousFocus.current?.focus();
        previousFocus.current = null;
      }
      if (
        event.ctrlKey &&
        event.shiftKey &&
        event.altKey &&
        event.key.toLowerCase() === "p"
      ) {
        event.preventDefault();
        window.print();
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(getResumeText());
      setMessage({ text: "경력기술서를 복사했습니다.", error: false });
      closeCommand();
    } catch {
      setMessage({
        text: "복사하지 못했습니다. 브라우저의 클립보드 권한을 확인하고 다시 시도해 주세요.",
        error: true,
      });
    }
  }

  return (
    <>
      {open && (
        <form
          className="resume-command"
          aria-label="명령 입력"
          onSubmit={(event) => {
            event.preventDefault();
            if (command === "copyResume") void copy();
            else
              setMessage({
                text: "알 수 없는 명령입니다.",
                error: true,
              });
          }}
        >
          <label htmlFor="resume-command-input">명령</label>
          <input
            id="resume-command-input"
            autoFocus
            value={command}
            onChange={(event) => setCommand(event.target.value)}
            autoComplete="off"
          />
          <Button type="submit">실행</Button>
          <IconButton onClick={closeCommand} aria-label="명령 닫기">
            <CloseOutlinedIcon />
          </IconButton>
        </form>
      )}
      <Snackbar
        open={!!message}
        autoHideDuration={message?.error ? null : 4000}
        onClose={() => setMessage(null)}
      >
        <Alert
          severity={message?.error ? "error" : "success"}
          onClose={() => setMessage(null)}
        >
          {message?.text}
        </Alert>
      </Snackbar>
    </>
  );
}
