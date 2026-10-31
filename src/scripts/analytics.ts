import { createScript, isScriptInjected } from "@databuddy/sdk";

const DATABUDDY_CLIENT_ID = "tZhMcXkjewbyniYKtIVBv";

if (import.meta.env.PROD && !isScriptInjected()) {
  document.head.append(
    createScript({
      clientId: DATABUDDY_CLIENT_ID,
      enableBatching: true,
      trackAttributes: true,
      trackErrors: true,
      trackHashChanges: true,
      trackInteractions: true,
      trackOutgoingLinks: true,
      trackPerformance: true,
      trackScrollDepth: true,
      trackWebVitals: true,
    })
  );
}
