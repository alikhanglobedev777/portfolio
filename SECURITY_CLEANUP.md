# Portfolio malware cleanup

The current branch was cleaned of a known obfuscated malware loader found in
`tailwind.config.js` and a disguised JavaScript payload at
`src/assets/public/fonts/fa-solid-900.woff2`.

This change restores a valid Tailwind configuration, deletes the hidden VS Code
folder-open execution task, disables automatic VS Code tasks, and adds a
dependency-free malware check to GitHub Actions.

**Incident response:** This only removes active loader files from the current
branch. Older Git commits and previously cloned/deployed copies may retain
infected files. Scan affected machines from a trusted environment and rotate
potentially exposed credentials. The scanner targets known indicators, not
all possible malware.
