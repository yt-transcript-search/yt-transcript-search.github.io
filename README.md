# YT Transcript Search — Website

The official website for **YT Transcript Search**, a browser extension that adds a Transcript search overlay to YouTube. Load a video's Transcript, search for any word or phrase and qualifying Timestamp Links will be displayed. Click on any entry to jump straight to the moment in the video. Both the full Transcript or your Timestamp Links can be exported in numerous formats.

This repository contains the website only. It is a simple static site (plain HTML and CSS, no build step) and is hosted free with GitHub Pages.

**Live site:** www.yttranscriptsearch.store

## Pages

| Page | File |
| --- | --- |
| Home | `index.html` |
| How It Works | `how-it-works.html` |
| Free vs Pro | `free_vs_pro.html` |
| Pro | `pro.html` |
| Purchase | `purchase.html` |
| Testimonials | `testimonials.html` |
| FAQ | `faq.html` |
| Privacy Policy | `privacy.html` |
| Contact | `contact.html` |

All pages share one stylesheet, `style.css`, which controls the colours, fonts, headings, paragraph style and the install frame that appears across the site.

## Images

The pages use these image files, which must stay in the same folder as the pages and keep exactly the same names (GitHub treats upper and lower case as different):

- `icon_128x128.png`
- `transcript-search-youtube-banner-1546x423-(dark-background-no-icon).png`
- `mainUI_free.png`
- `mainUI_pro.png
-  mainUI_on_yt_pro.png`
- `export-menu.png`
- `lang-menu.png`
- `tp-examples.png`
- `tp-settings.png`

## Editing the site

1. Open the file you want to change in this repository and click the pencil icon, or upload a replacement file with the same name using **Add file → Upload files**.
2. Click **Commit changes**.
3. Wait a few minutes. GitHub Pages republishes the site automatically.

Site-wide appearance (headings, paragraph text, buttons and the install frame) lives in `style.css`, so a change there updates every page.

## Publishing with GitHub Pages

In the repository, go to **Settings → Pages**, set **Source** to **Deploy from a branch**, choose the **main** branch and the **/ (root)** folder, and save. The repository must be public to use Pages on the free plan.

## Still to be completed

- The **Add to Chrome** and **Add to Edge** buttons will link to the store listings once the extension is published.
- The **Pay with PayPal** button on `purchase.html` will link to the PayPal payment page once it is set up.
- The **Testimonials** page currently shows clearly labelled example testimonials. It will be updated with real ones as feedback arrives.

## Contact

Questions, bug reports and feature ideas: yt.transcript.search@gmail.com

## Copyright

© 2026 YT Transcript Search. All rights reserved.
