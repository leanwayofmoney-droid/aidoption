"use client";
import { useState } from "react";

export default function WinstSlider({ savingsPerTask, frequentieLabel, savingsEuro, savingsEuroLabel }) {
  // Detecteer modus: project-gebaseerd (jaarlijks) of taak-gebaseerd (wekelijks)
  const isProjectMode = frequentieLabel?.toLowerCase().includes("project");

  const [timesPerWeek, setTimesPerWeek]       = useState(3);   // taak-modus: 1–14 per week
  const [projectsPerYear, setProjectsPerYear] = useState(3);   // project-modus: 1–10 per jaar

  // Taak-modus: wekelijkse herhaling × 52 weken
  const hoursPerYearWeekly = Math.round((timesPerWeek * 52 * savingsPerTask) / 60);
  const daysPerYearWeekly  = (hoursPerYearWeekly / 8).toFixed(1);

  // Project-modus: aantal projecten per jaar × minuten per project
  const hoursPerYearProject = Math.round((projectsPerYear * savingsPerTask) / 60);
  const daysPerYearProject  = (hoursPerYearProject / 8).toFixed(1);

  const hoursPerYear = isProjectMode ? hoursPerYearProject : hoursPerYearWeekly;
  const daysPerYear  = isProjectMode ? daysPerYearProject  : daysPerYearWeekly;

  return (
    <div
      className="my-10 rounded-2xl p-6 md:p-8"
      style={{ backgroundColor: "#F0F4F8", border: "1px solid #CDD3D9" }}
    >
      {/* Label */}
      <p
        className="text-xs font-semibold tracking-widest uppercase mb-6"
        style={{ color: "#2C5A85", letterSpacing: "0.16em" }}
      >
        De Winst-Slider
      </p>

      {/* Vraag + slider */}
      <div className="mb-8">
        {isProjectMode ? (
          <>
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-medium" style={{ color: "#1E2D3D" }}>
                Hoeveel projecten doe je per jaar?
              </p>
              <span
                className="text-sm font-bold px-3 py-1 rounded-full"
                style={{ backgroundColor: "#2C5A85", color: "#FFFFFF" }}
              >
                {projectsPerYear} {projectsPerYear === 1 ? "project" : "projecten"} per jaar
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={10}
              value={projectsPerYear}
              onChange={(e) => setProjectsPerYear(Number(e.target.value))}
              aria-label={`Aantal projecten per jaar: ${projectsPerYear}`}
              aria-valuemin={1}
              aria-valuemax={10}
              aria-valuenow={projectsPerYear}
              className="w-full h-2 rounded-full appearance-none cursor-pointer"
              style={{
                accentColor: "#2C5A85",
                background: `linear-gradient(to right, #2C5A85 ${((projectsPerYear - 1) / 9) * 100}%, #CDD3D9 ${((projectsPerYear - 1) / 9) * 100}%)`,
              }}
            />
            <div className="flex justify-between text-xs mt-1" style={{ color: "#9BA8B5" }}>
              <span>1 project</span>
              <span>10 projecten</span>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-medium" style={{ color: "#1E2D3D" }}>
                Hoe vaak doe je dit {frequentieLabel}?
              </p>
              <span
                className="text-sm font-bold px-3 py-1 rounded-full"
                style={{ backgroundColor: "#2C5A85", color: "#FFFFFF" }}
              >
                {timesPerWeek}× per week
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={14}
              value={timesPerWeek}
              onChange={(e) => setTimesPerWeek(Number(e.target.value))}
              aria-label={`Aantal keer per week: ${timesPerWeek}`}
              aria-valuemin={1}
              aria-valuemax={14}
              aria-valuenow={timesPerWeek}
              className="w-full h-2 rounded-full appearance-none cursor-pointer"
              style={{
                accentColor: "#2C5A85",
                background: `linear-gradient(to right, #2C5A85 ${((timesPerWeek - 1) / 13) * 100}%, #CDD3D9 ${((timesPerWeek - 1) / 13) * 100}%)`,
              }}
            />
            <div className="flex justify-between text-xs mt-1" style={{ color: "#9BA8B5" }}>
              <span>1×</span>
              <span>14×</span>
            </div>
          </>
        )}
      </div>

      {/* Resultaat */}
      <div
        className="rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        style={{ backgroundColor: "#1E2D3D" }}
      >
        <div>
          <p className="text-xs mb-1" style={{ color: "#9BA8B5" }}>Jouw jaarlijkse tijdswinst</p>
          <p className="text-3xl font-bold" style={{ color: "#FFFFFF" }}>
            {hoursPerYear}{" "}
            <span className="text-lg font-medium" style={{ color: "#9BBCD8" }}>uur</span>
          </p>
          <p className="text-xs mt-1" style={{ color: "#6C7B8B" }}>
            Dat is {daysPerYear} volledige werkdagen per jaar
          </p>
          {savingsEuro && (
            <p className="text-xs mt-2 inline-flex items-center gap-1" style={{ color: "#4CAF82" }}>
              <span>+</span>
              <span>{savingsEuroLabel || `€${savingsEuro} bespaard`}</span>
            </p>
          )}
        </div>
        <div
          className="rounded-xl px-5 py-4 text-center min-w-[130px]"
          style={{ backgroundColor: "rgba(44,90,133,0.25)" }}
        >
          <p className="text-xs mb-1" style={{ color: "#9BBCD8" }}>
            {isProjectMode ? "Besparing per project" : "Besparing per keer"}
          </p>
          <p className="text-2xl font-bold" style={{ color: "#FFFFFF" }}>{savingsPerTask} min</p>
        </div>
      </div>
    </div>
  );
}
