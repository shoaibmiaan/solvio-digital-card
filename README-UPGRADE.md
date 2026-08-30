# Solvio Digital Card — Upgrade

Preserves the existing card design/content while fixing required technical issues.

- Fixed profile/logo paths from `/card/index.html` to root assets.
- Fixed service-worker registration and scope.
- Rebuilt service-worker cache paths.
- Removed unused 2.8 MB `qr-code.png`.
- Removed QR-server fallback dependency.
- Removed the 1-second root-page delay.
- Added canonical/description/OG URL metadata.
