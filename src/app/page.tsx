"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  AlertTriangle,
  CalendarDays,
  CheckCircle2,
  Clock,
  Compass,
  Check,
  Copy,
  Delete,
  ExternalLink,
  FileText,
  Hotel,
  Lock,
  MapPin,
  Plane,
  TrainFront,
  Utensils
} from "lucide-react";
import { openItems, packingList, tripDays, urgentNotes } from "@/data/itinerary";

const CORRECT_PIN = "8888";
const SESSION_KEY = "italy_unlocked";

function PasswordGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);
  const [shaking, setShaking] = useState(false);
  const dotsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === "1") {
      setUnlocked(true);
    }
  }, []);

  useEffect(() => {
    if (pin.length === 4) {
      if (pin === CORRECT_PIN) {
        sessionStorage.setItem(SESSION_KEY, "1");
        setUnlocked(true);
      } else {
        setShaking(true);
        setError(true);
        setTimeout(() => {
          setPin("");
          setShaking(false);
          setError(false);
        }, 600);
      }
    }
  }, [pin]);

  function pressKey(key: string) {
    if (pin.length < 4) setPin((p) => p + key);
  }

  function deleteKey() {
    setPin((p) => p.slice(0, -1));
  }

  if (unlocked) return <>{children}</>;

  const PAD = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "del"];

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-espresso select-none">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 30% 20%, #b8643f 0%, transparent 55%), radial-gradient(ellipse at 70% 80%, #426b50 0%, transparent 55%)"
        }}
      />

      <div className="relative flex flex-col items-center gap-10 px-6">
        <div className="flex flex-col items-center gap-4 text-white">
          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white/12 backdrop-blur">
            <Lock size={30} className="text-white" />
          </div>
          <div className="text-center">
            <p className="text-2xl font-semibold">이탈리아 여행</p>
            <p className="mt-1 text-sm text-white/60">비밀번호를 입력하세요</p>
          </div>
        </div>

        <div ref={dotsRef} className={`flex gap-5 ${shaking ? "shake" : ""}`}>
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-4 w-4 rounded-full border-2 transition-all duration-150 ${
                i < pin.length
                  ? error
                    ? "border-red-400 bg-red-400"
                    : "border-limone bg-limone"
                  : "border-white/40 bg-transparent"
              }`}
            />
          ))}
        </div>

        {error && (
          <p className="absolute -bottom-6 text-sm text-red-400">비밀번호가 틀렸습니다</p>
        )}

        <div className="grid grid-cols-3 gap-3">
          {PAD.map((key, idx) => {
            if (key === "") return <div key={idx} />;
            if (key === "del") {
              return (
                <button
                  key="del"
                  type="button"
                  onClick={deleteKey}
                  className="grid h-16 w-16 place-items-center rounded-2xl bg-white/10 text-white/70 transition active:bg-white/20"
                >
                  <Delete size={22} />
                </button>
              );
            }
            return (
              <button
                key={key}
                type="button"
                onClick={() => pressKey(key)}
                className="grid h-16 w-16 place-items-center rounded-2xl bg-white/10 text-xl font-semibold text-white transition active:bg-terracotta"
              >
                {key}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const statusTone = {
  확정: "bg-basil text-white",
  방문예정: "bg-marble text-espresso",
  확인필요: "bg-limone text-espresso",
  미정: "bg-white text-espresso"
};

export default function Home() {
  const [selectedDayId, setSelectedDayId] = useState(tripDays[0].id);
  const selectedDay = useMemo(
    () => tripDays.find((day) => day.id === selectedDayId) ?? tripDays[0],
    [selectedDayId]
  );

  const totalEvents = tripDays.reduce((count, day) => count + day.events.length, 0);
  const confirmNeeded = tripDays.flatMap((day) =>
    day.events.filter((event) => event.status === "확인필요").map((event) => `${day.date} ${event.title}`)
  );

  return (
    <PasswordGate>
    <main className="min-h-screen bg-marble text-ink">
      <section className="relative min-h-[560px] overflow-hidden bg-espresso text-white">
        <Image
          src="/images/italy-hero.png"
          alt="로마와 피렌체 분위기의 이탈리아 여행 배너"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/48 to-black/12" />
        <div className="relative mx-auto flex min-h-[560px] max-w-7xl flex-col justify-between px-5 py-6 sm:px-8 lg:px-10">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-sm font-semibold">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-terracotta">
                <Compass size={22} />
              </span>
              이탈리아 여행
            </div>
            <div className="hidden items-center gap-2 rounded-full bg-white/14 px-4 py-2 text-sm backdrop-blur md:flex">
              <CalendarDays size={16} />
              2026.06.14 - 06.21
            </div>
          </nav>

          <div className="max-w-3xl pb-8">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/16 px-4 py-2 text-sm backdrop-blur">
              <Plane size={16} /> 인천 → 로마 → 피렌체 → 토스카나 → 로마 → 인천
            </p>
            <h1 className="text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
              8일간의 이탈리아 여행 플래너
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/86">
              이동, 투어, 호텔, 주의사항을 하루 단위로 바로 확인하는 여행 대시보드입니다.
            </p>
          </div>

          <div className="grid gap-3 pb-2 sm:grid-cols-3">
            <Stat icon={<TrainFront size={20} />} label="주요 이동" value="공항·기차·픽업" />
            <Stat icon={<MapPin size={20} />} label="방문 도시" value="로마·피렌체·토스카나" />
            <Stat icon={<CheckCircle2 size={20} />} label="일정 항목" value={`${totalEvents}개`} />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:px-8 lg:grid-cols-[1.6fr_1fr] lg:px-10">
        <div className="space-y-6">
          <div className="rounded-lg bg-white p-4 shadow-soft">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <h2 className="text-2xl font-semibold">날짜별 일정</h2>
                <p className="text-sm text-espresso/70">탭을 눌러 하루 흐름을 확인하세요.</p>
              </div>
              <span className="rounded-full bg-terracotta px-3 py-1 text-sm font-semibold text-white">
                {selectedDay.city}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {tripDays.map((day) => (
                <button
                  key={day.id}
                  type="button"
                  onClick={() => setSelectedDayId(day.id)}
                  className={`rounded-md border px-3 py-3 text-left transition ${
                    selectedDay.id === day.id
                      ? "border-terracotta bg-terracotta text-white"
                      : "border-espresso/10 bg-marble hover:border-terracotta/50"
                  }`}
                >
                  <span className="block text-sm font-semibold">{day.day}</span>
                  <span className="block truncate text-xs opacity-80">{day.date}</span>
                </button>
              ))}
            </div>
          </div>

          <article className="rounded-lg bg-white p-5 shadow-soft">
            <div className="mb-5 flex flex-col gap-3 border-b border-espresso/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-terracotta">{selectedDay.date}</p>
                <h2 className="mt-1 text-3xl font-semibold">{selectedDay.theme}</h2>
                <p className="mt-2 max-w-2xl text-espresso/74">{selectedDay.summary}</p>
              </div>
              <div className="rounded-md bg-marble px-4 py-3 text-sm font-semibold text-espresso">{selectedDay.city}</div>
            </div>

            <div className="space-y-3">
              {selectedDay.events.map((event) => (
                <div key={`${event.time}-${event.title}`} className="grid gap-3 rounded-lg border border-espresso/10 p-4 sm:grid-cols-[120px_1fr]">
                  <div className="flex items-center gap-2 text-sm font-semibold text-espresso/74">
                    <Clock size={16} />
                    {event.time}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-semibold">{event.title}</h3>
                      {event.status && (
                        <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusTone[event.status]}`}>
                          {event.status}
                        </span>
                      )}
                    </div>
                    {event.place && <p className="mt-1 text-sm text-espresso/76">{event.place}</p>}
                    {event.address && (
                      <div className="mt-2 flex items-start gap-2 text-sm text-espresso/68">
                        <MapPin className="mt-0.5 shrink-0" size={15} />
                        <span className="min-w-0 flex-1 break-words">{event.address}</span>
                        <CopyAddressButton value={event.address} />
                      </div>
                    )}
                    {event.note && <p className="mt-2 text-sm leading-6 text-espresso/70">{event.note}</p>}
                    {event.details && (
                      <dl className="mt-3 grid gap-2 sm:grid-cols-2">
                        {event.details.map((detail) => (
                          <div key={`${event.title}-${detail.label}`} className="rounded-md bg-marble px-3 py-2">
                            <dt className="text-xs font-semibold text-terracotta">{detail.label}</dt>
                            <dd className="mt-1 text-sm font-semibold text-espresso">{detail.value}</dd>
                          </div>
                        ))}
                      </dl>
                    )}
                    {event.actions && (
                      <div className="mt-3">
                        <p className="mb-2 text-xs font-semibold uppercase text-espresso/54">실행 체크</p>
                        <div className="grid gap-2 sm:grid-cols-2">
                          {event.actions.map((action) => (
                            <label
                              key={`${event.title}-${action}`}
                              className="flex min-h-10 items-center gap-2 rounded-md border border-espresso/10 px-3 text-sm text-espresso/78"
                            >
                              <input type="checkbox" className="h-4 w-4 accent-basil" />
                              {action}
                            </label>
                          ))}
                        </div>
                      </div>
                    )}
                    {event.images && (
                      <div className="mt-4 flex flex-wrap gap-3">
                        {event.images.map((image) => (
                          <figure key={image.src} className="w-[148px] rounded-md border border-espresso/10 bg-white p-2">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              width={132}
                              height={132}
                              className="aspect-square w-full rounded object-contain"
                            />
                            {image.caption && <figcaption className="mt-2 text-center text-xs text-espresso/64">{image.caption}</figcaption>}
                          </figure>
                        ))}
                      </div>
                    )}
                    {event.vouchers && (
                      <div className="mt-4 grid gap-2">
                        {event.vouchers.map((voucher) => (
                          <a
                            key={voucher.href}
                            href={voucher.href}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-between gap-3 rounded-md border border-terracotta/20 bg-terracotta/8 px-3 py-3 text-sm font-semibold text-espresso transition hover:border-terracotta hover:bg-terracotta/12"
                          >
                            <span className="flex min-w-0 items-center gap-2">
                              <FileText className="shrink-0 text-terracotta" size={18} />
                              <span className="min-w-0">
                                <span className="block truncate">{voucher.label}</span>
                                {voucher.note && <span className="mt-1 block text-xs font-normal text-espresso/64">{voucher.note}</span>}
                              </span>
                            </span>
                            <span className="shrink-0 rounded-full bg-white px-2.5 py-1 text-xs text-terracotta">열기</span>
                          </a>
                        ))}
                      </div>
                    )}
                    {event.links && (
                      <div className="mt-4 grid gap-2">
                        {event.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-between gap-3 rounded-md border border-sea/20 bg-sea/8 px-3 py-3 text-sm font-semibold text-espresso transition hover:border-sea hover:bg-sea/12"
                          >
                            <span className="flex min-w-0 items-center gap-2">
                              <ExternalLink className="shrink-0 text-sea" size={18} />
                              <span className="min-w-0">
                                <span className="block truncate">{link.label}</span>
                                {link.note && <span className="mt-1 block text-xs font-normal text-espresso/64">{link.note}</span>}
                              </span>
                            </span>
                            <span className="shrink-0 rounded-full bg-white px-2.5 py-1 text-xs text-sea">열기</span>
                          </a>
                        ))}
                      </div>
                    )}
                    {event.warning && (
                      <p className="mt-2 flex items-start gap-2 rounded-md bg-limone/25 px-3 py-2 text-sm leading-6 text-espresso">
                        <AlertTriangle className="mt-0.5 shrink-0" size={16} />
                        {event.warning}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>

        <aside className="space-y-6">
          <Panel title="긴급 주의" icon={<AlertTriangle size={20} />}>
            <ul className="space-y-3">
              {urgentNotes.map((note) => (
                <li key={note} className="rounded-md bg-limone/22 px-3 py-2 text-sm leading-6">
                  {note}
                </li>
              ))}
            </ul>
          </Panel>

          <Panel title="확인 필요" icon={<Clock size={20} />}>
            <div className="mb-3 rounded-md bg-marble px-3 py-2 text-sm font-semibold text-espresso">
              일정 안 확인필요 {confirmNeeded.length}개
            </div>
            <ul className="space-y-2">
              {openItems.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-6 text-espresso/78">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                  {item}
                </li>
              ))}
            </ul>
          </Panel>

          <Panel title="준비물" icon={<Hotel size={20} />}>
            <div className="grid gap-2">
              {packingList.map((item) => (
                <label key={item} className="flex min-h-10 items-center gap-3 rounded-md border border-espresso/10 px-3 text-sm">
                  <input type="checkbox" className="h-4 w-4 accent-basil" />
                  {item}
                </label>
              ))}
            </div>
          </Panel>

          <Panel title="여행 성격" icon={<Utensils size={20} />}>
            <div className="grid grid-cols-2 gap-2 text-sm font-semibold">
              {["문화 탐방", "식도락", "사진", "여유", "가이드 투어", "안전 이동"].map((tag) => (
                <span key={tag} className="rounded-full bg-marble px-3 py-2 text-center text-espresso">
                  {tag}
                </span>
              ))}
            </div>
          </Panel>
        </aside>
      </section>
    </main>
    </PasswordGate>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-lg bg-white/16 p-4 backdrop-blur">
      <div className="mb-3 text-limone">{icon}</div>
      <p className="text-sm text-white/72">{label}</p>
      <p className="mt-1 text-xl font-semibold">{value}</p>
    </div>
  );
}

function Panel({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="rounded-lg bg-white p-5 shadow-soft">
      <div className="mb-4 flex items-center gap-2">
        <span className="text-terracotta">{icon}</span>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function CopyAddressButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = value;
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  return (
    <button
      type="button"
      onClick={copyAddress}
      title={copied ? "복사됨" : "주소 복사"}
      aria-label={copied ? "주소가 복사됨" : "주소 복사"}
      className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-espresso/10 bg-white text-espresso/64 transition hover:border-terracotta hover:text-terracotta"
    >
      {copied ? <Check size={15} /> : <Copy size={15} />}
    </button>
  );
}
