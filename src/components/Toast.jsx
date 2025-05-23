// src/components/Toast.jsx
import { useEffect } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

export default function Toast({ type = "success", message, onClose }) {
  // auto-dismiss after 4 s
  useEffect(() => {
    if (!message) return;
    const id = setTimeout(onClose, 4000);
    return () => clearTimeout(id);
  }, [message, onClose]);

  if (!message) return null;

  const base =
    "fixed top-6 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-3 px-6 py-4 rounded-xl shadow-lg text-white";
  const styles = type === "success" ? "bg-emerald-600" : "bg-rose-600";

  const Icon = type === "success" ? CheckCircleIcon : XCircleIcon;

  return (
    <div
      className={`${base} ${styles} animate-slideDown`}
      role="alert"
      aria-live="assertive"
    >
      <Icon className="h-6 w-6 shrink-0" />
      <span className="text-base">{message}</span>
    </div>
  );
}
