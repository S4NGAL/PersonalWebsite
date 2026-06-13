"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

declare global {
  interface Window {
    loadPyodide: (config: { indexURL: string }) => Promise<PyodideInterface>;
  }
}

interface PyodideInterface {
  runPythonAsync: (code: string) => Promise<unknown>;
}

interface PyodideRunnerProps {
  initialCode?: string;
}

const DEFAULT_CODE = `# Merhaba! Python kodunu buraya yaz ve Çalıştır'a bas.
import sys
print(f"Python {sys.version}")
print("Hoş geldin!")
`;

export default function PyodideRunner({ initialCode = DEFAULT_CODE }: PyodideRunnerProps) {
  const t = useTranslations("playground");
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(true);
  const [running, setRunning] = useState(false);
  const pyodideRef = useRef<PyodideInterface | null>(null);

  useEffect(() => {
    async function loadPy() {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js";
      script.onload = async () => {
        const pyodide = await window.loadPyodide({
          indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.1/full/",
        });
        // Stdout'u yakala
        pyodide.runPythonAsync(`
import sys, io
sys.stdout = io.StringIO()
        `);
        pyodideRef.current = pyodide;
        setLoading(false);
      };
      document.head.appendChild(script);
    }
    loadPy();
  }, []);

  async function runCode() {
    if (!pyodideRef.current || running) return;
    setRunning(true);
    setOutput("");
    try {
      await pyodideRef.current.runPythonAsync(`
import sys, io
sys.stdout = io.StringIO()
${code}
_output = sys.stdout.getvalue()
      `);
      const result = await pyodideRef.current.runPythonAsync("_output");
      setOutput(String(result));
    } catch (err) {
      setOutput(`Hata: ${err}`);
    } finally {
      setRunning(false);
    }
  }

  return (
    <div className="rounded-card-lg bg-bg-surface border border-border-default overflow-hidden">
      {/* Editor */}
      <div className="relative">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          spellCheck={false}
          aria-label="Python kodu editörü"
          className="w-full min-h-[220px] p-4 font-mono text-sm bg-bg-surface text-text-primary resize-y focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
        />
      </div>

      {/* Toolbar */}
      <div className="flex items-center gap-3 px-4 py-2.5 border-t border-border-subtle bg-bg-subtle">
        <button
          onClick={runCode}
          disabled={loading || running}
          aria-label="Kodu çalıştır"
          className="px-4 py-1.5 rounded-btn bg-accent text-white text-sm font-sans font-semibold hover:bg-accent-hover active:bg-accent-active disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {running ? "▶ …" : `▶ ${t("run")}`}
        </button>
        <button
          onClick={() => { setCode(initialCode); setOutput(""); }}
          className="px-3 py-1.5 rounded-btn bg-transparent text-text-muted text-sm font-sans font-medium hover:text-text-primary transition-colors"
        >
          {t("reset")}
        </button>
        {loading && (
          <span className="text-xs font-sans font-medium text-text-faint ml-auto">
            {t("loading")}
          </span>
        )}
      </div>

      {/* Output */}
      {output && (
        <pre
          aria-live="polite"
          aria-label="Çıktı"
          className="p-4 font-mono text-sm text-text-primary border-t border-border-subtle bg-bg-base min-h-[60px] whitespace-pre-wrap"
        >
          {output}
        </pre>
      )}
    </div>
  );
}
