---
order: 1
name: Echo
summary: On-device meeting recorder for macOS
tagline: A macOS meeting recorder that transcribes and summarizes on the device.
highlight: 15 releases
company: Sancrisoft
period: "2026"
role: Sole engineer at Sancrisoft. Architecture, implementation, tests and releases.
decisions:
  - title: Record two streams, not one
    choice: The microphone and system audio are captured as separate streams through Core Audio process taps.
  - title: Keep every model on the Mac
    choice: Transcription runs on Parakeet through Core ML and summaries on Qwen through MLX, so nothing leaves the device.
  - title: Small packages, many tests
    choice: The app is split into 12 Swift packages with 1,339 automated tests, released through GitHub Actions.
results:
  - value: "15"
    label: releases since June 2026
  - value: "1,339"
    label: automated tests across 12 Swift packages
  - value: "4"
    label: call apps detected automatically
outcome: 15 releases since June 2026. Sancrisoft uses it for its own meetings.
stack: [Swift, SwiftUI, Core Audio, Core ML, MLX, GitHub Actions]
links:
  - label: Source on GitHub
    href: https://github.com/sancrisoft/echo
tone: lavender
previewLabel: On-device AI · macOS
---

I built Echo end to end as the only engineer on the project: audio capture, on-device transcription and summaries, transcript search, tests and releases. Sancrisoft uses it for its own meetings.

The 0.1.0 rebuild added call detection for Zoom, Teams, Meet and Slack, full-text transcript search and live summary progress.
