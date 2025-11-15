export const TAGGER_SESSION_OPTIONS = {
  executionProviders: ["wasm"],
  extra: {
    session: {
      disable_prepacking: "1",
    },
  },
} as const;
