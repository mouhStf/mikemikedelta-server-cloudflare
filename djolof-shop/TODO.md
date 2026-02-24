# 🎬 Djolof Shop: Video Asset Requirements

To complete the "Narrative of Velocity" redesign, you need to produce and place three specific video files. These videos are the "proof of life" for the platform and are critical for the professional aesthetic.

## 📂 Target Directory
Place all files in: `codex/mikemikedelta/public/media/djolof-shop/video/`

---

## 1. `hero-live.mp4` (The Experience)
*   **Purpose**: Shows the "Magic" of the live-commerce experience.
*   **Content**: A vertical (phone) view of a live stream. Ideally, show a person presenting a product with interactive elements:
    *   Floating hearts/likes.
    *   A "pinned" product card appearing at the bottom.
    *   Active chat messages.
*   **Format**: MP4 (H.264).
*   **Aspect Ratio**: 9:16 (Vertical).
*   **Duration**: 10-15 seconds (Looping).
*   **Size**: Optimized for web (< 5MB recommended).

## 2. `admin-demo.mp4` (The Power)
*   **Purpose**: Demonstrates the robustness and professional nature of the back-office.
*   **Content**: A screen recording of the Djolof Shop admin dashboard:
    *   Scrolling through the "Orders" or "Transactions" table.
    *   Updating a product stock level.
    *   The "Live Dashboard" view showing stream health or chat moderation.
*   **Pro Tip**: Record at 1x speed but export at **1.5x speed** to make the software feel fast and efficient.
*   **Format**: MP4 (H.264).
*   **Aspect Ratio**: 16:9 (Desktop).
*   **Duration**: 15-20 seconds (Looping).

## 3. `purchase-flow.mp4` (The Frictionless - Optional)
*   **Purpose**: Shows how easy it is to buy.
*   **Content**: A quick cut showing:
    1.  Clicking "Acheter" on a product during a live.
    2.  The cart slide-over appearing.
    3.  A "Success" or "Merci" screen.
*   **Format**: MP4 (H.264).
*   **Duration**: 5-8 seconds.

---

## 🛠 Technical Tips for Web Video
1.  **Mute Everything**: The `index.html` code uses the `muted` attribute. Ensure your source files have no audio track to save file size.
2.  **Compression**: Use a tool like **Handbrake** or `ffmpeg` with a CRF of 24-28 to keep quality high but bitrates low.
3.  **Poster Frame**: If possible, extract the first frame of each video as a `.jpg` with the same name. This allows us to implement a "loading" placeholder later if needed.
