"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";

interface TimelineItem {
  date: { tr: string; en: string };
  title: { tr: string; en: string };
  org: { tr: string; en: string };
  bullets: { tr: string[]; en: string[] };
  type: "experience" | "education";
}

const timelineItems: TimelineItem[] = [
  {
    date:    { tr: "Eyl 2023 – Günümüz", en: "Sep 2023 – Present" },
    title:   { tr: "Eğitimden Sorumlu Başkan Yardımcısı", en: "VP of Activities" },
    org:     { tr: "EMU Yazılım & AI Geliştirme Kulübü", en: "EMU Software & AI Development Club" },
    bullets: {
      tr: [
        "KKTC'nin en büyük yapay zeka zirvesi AISummit'25 ve AISummit'26 yönetim kurulu",
        "Online eğitimler ve webinarlar düzenledi",
      ],
      en: [
        "Executive board for AISummit'25 and AISummit'26 — TRNC's largest AI conference",
        "Organized online training sessions and webinars",
      ],
    },
    type: "experience",
  },
  {
    date:    { tr: "Tem – Ağu 2024", en: "Jul – Aug 2024" },
    title:   { tr: "AI Research Engineering Intern", en: "AI Research Engineering Intern" },
    org:     { tr: "Huawei İstanbul Ar-Ge Ofisi", en: "Huawei Istanbul R&D Office" },
    bullets: {
      tr: [
        "LLM, PyTorch, Model Fine-Tuning, NLP, Transformer modelleri",
        "Öneri modelleri, NumPy, Pandas",
      ],
      en: [
        "LLMs, PyTorch, Model Fine-Tuning, NLP, Transformer architectures",
        "Recommendation models, NumPy, Pandas",
      ],
    },
    type: "experience",
  },
  {
    date:    { tr: "2021 – Günümüz", en: "2021 – Present" },
    title:   { tr: "Bilgisayar Mühendisliği", en: "B.S. Computer Engineering" },
    org:     { tr: "Doğu Akdeniz Üniversitesi (KKTC)", en: "Eastern Mediterranean University (TRNC)" },
    bullets: {
      tr: ["CGPA 3.06/4 · Onur Öğrencisi (4 dönem)", "ABET Akredite"],
      en: ["CGPA 3.06/4 · Honor Student (4 semesters)", "ABET Accredited"],
    },
    type: "education",
  },
];

export default function Timeline() {
  const locale = useLocale() as "tr" | "en";

  return (
    <div className="relative pl-6 border-l border-border-default space-y-10">
      {timelineItems.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="relative"
        >
          {/* Dot */}
          <span
            className="absolute -left-[29px] top-1 w-3 h-3 rounded-full border-2 border-accent bg-bg-base"
            aria-hidden="true"
          />

          <div className="flex items-start justify-between gap-2 mb-1 flex-wrap">
            <div>
              <h3 className="font-sans font-semibold text-text-primary text-sm">
                {item.title[locale]}
              </h3>
              <p className="text-sm font-sans font-medium text-accent">
                {item.org[locale]}
              </p>
            </div>
            <time className="text-xs font-sans font-medium text-text-faint whitespace-nowrap">
              {item.date[locale]}
            </time>
          </div>

          <ul className="mt-2 space-y-1 list-none">
            {item.bullets[locale].map((b, j) => (
              <li key={j} className="text-sm font-sans font-medium text-text-muted flex gap-2">
                <span className="text-accent mt-0.5" aria-hidden="true">•</span>
                {b}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
