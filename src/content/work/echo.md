---
order: 1
name: Echo
summary: On-device meeting recorder for macOS
tagline: A macOS meeting recorder that transcribes and summarizes on the device.
highlight: 15 releases
company: Sancrisoft
period: "2026"
role: Sole engineer at Sancrisoft. Architecture, implementation, tests and releases.
problem: Sancrisoft paid for Notion’s enterprise plan mostly for its AI meeting notes. Echo had to write notes as good as Notion’s while keeping audio, transcripts and summaries on each person’s Mac, with no per-seat cost.
decisions:
  - title: Process taps, not screen capture
    choice: The microphone and the Mac’s audio are recorded as two streams, with Core Audio process taps for the system side.
    alternatives: ScreenCaptureKit, the first plan. It shows the screen-sharing indicator, which can look like covert recording to the people on the call, and it blocks DRM-protected playback.
    tradeoff: Taps return silence inside the App Sandbox, so Echo ships outside the Mac App Store and needs macOS 14.2 or later.
  - title: Measure the sample rate, don’t trust it
    choice: Each stream’s real rate is checked against the clock and corrected, after Bluetooth headsets that report 48 kHz but deliver 24 kHz made recordings play at double speed.
    alternatives: Trusting the format macOS declares for the stream.
    tradeoff: More capture code to maintain, for channels that stay in sync. On a test call they ended 61 ms apart, against 5.7 s before.
  - title: Echo cancellation only where it helps
    choice: Live WebRTC echo cancellation on the built-in speakers, and a cautious transcript dedup for external speakers and TVs.
    alternatives: Apple’s voice processing, which ducked all system audio, and an offline cancellation pass that removed a fifth to a quarter of the user’s own words.
    tradeoff: Some speaker bleed reaches the raw transcript, and the dedup removes it only when it is sure.
  - title: Every model on the Mac
    choice: Parakeet for transcription and Qwen 3.5 4B through MLX for summaries, with prompts calibrated against Notion AI’s notes.
    alternatives: Cloud models, which would have meant a paid subscription for everyone using the app and meeting audio leaving the device.
    tradeoff: About 4 GB of models and Apple Silicon only. The first summary model, a 12B Gemma at 8.9 GB, froze Macs with less memory and was replaced by a 4B model at 3.3 GB.
  - title: Twelve packages with enforced boundaries
    choice: The proof of concept, 71 flat files and 23,590 lines, was rebuilt as 12 Swift packages, so a bug maps to one area and its fix stays there.
    alternatives: One target with folders, or one package with many targets, where nothing stops one area from reaching into another.
    tradeoff: Twelve manifests to keep consistent and a slower first build, in exchange for faster incremental builds and tests that run without the app.
results:
  - value: "15"
    label: releases since July 2026
  - value: "1,339"
    label: automated tests, 1,299 of them across the 12 Swift packages
  - value: 1.7 min
    label: to transcribe an hour of audio on the Mac, measured on a real meeting
outcome: 15 releases since July 2026. A team of about five at Sancrisoft uses it for its own meetings.
stack: [Swift, SwiftUI, Core Audio, Core ML, MLX, GitHub Actions]
links:
  - label: Source on GitHub
    href: https://github.com/sancrisoft/echo
tone: lavender
cover: ../../assets/work/echo.png
coverAlt: Echo’s main window on macOS, with the meetings sidebar and a meeting’s details, action items and summary topics.
coverCaption: A meeting’s summary in Echo.
video:
  src: /work/echo.mp4
  poster: /work/echo-poster.jpg
  width: 1200
  height: 786
  alt: In Echo, a meeting’s summary and then its transcript, followed by a ⌘K search for “latency” that opens another meeting.
  caption: A meeting’s summary and transcript, then search across every meeting.
gallery:
  - image: ../../assets/work/echo-transcript.png
    alt: A meeting’s transcript in Echo, with timestamped turns for You and Others, the share of speaking time and the on-device speech model.
    caption: The transcript, with the speaking-time split and the on-device model that wrote it.
previewLabel: On-device AI · macOS
---

I built Echo end to end as the only engineer: audio capture, call detection, on-device transcription and summaries, search, tests and releases. A team of about five at Sancrisoft uses it for its own meetings and reports what it finds.

After 14 proof-of-concept releases between July and September 2026, I rebuilt it as version 0.1.0, released in October. It detects calls in Zoom, Teams, Slack, Discord, FaceTime and Webex, and in any browser for Meet, searches across every transcript and summary, and shows a summary’s progress as it is written.
