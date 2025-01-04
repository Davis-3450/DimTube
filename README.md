# DimTube

A minimalist browser extension that reduces visual stimulation on YouTube by dimming thumbnails and simplifying the interface.

## Why DimTube?

I created DimTube after noticing how often I got distracted by YouTube thumbnails. These thumbnails are designed to grab attention, often leading to unplanned viewing sessions and reduced productivity. This extension helps maintain focus by making thumbnails less stimulating while preserving YouTube's core functionality.

## Features

- Dims video thumbnails to reduce visual stimulation
- Reduces color saturation of thumbnails
- Subtle hover effect to reveal original thumbnail
- Minimalist approach focusing on core functionality
- Follows SOLID principles for maintainable code

## Installation

1. Clone this repository
2. Open Chrome/Edge and navigate to `chrome://extensions`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the `src` directory of this project

## Usage

The extension works automatically once installed. When you visit YouTube:

- All thumbnails will be dimmed by default
- Hover over a thumbnail to see its original brightness
- The effect applies to both home page and search results

## Development

The extension is built with:

- Manifest V3
- Vanilla JavaScript (following SOLID principles)
- CSS for styling and visual effects

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
