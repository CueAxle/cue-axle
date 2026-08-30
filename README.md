# CueAxle

> **Notice:** CueAxle is currently under active early development and is **unreleased**. APIs, integration schemas, and packages are subject to breaking changes prior to the `v0.1.0` public release.

## About

CueAxle is an open-source, modular automation hub and show-control platform built for live production environments. Designed to run headlessly on a Raspberry Pi or Linux rack hardware, it bridges disparate hardware and software workflows—normalizing triggers, cues, and commands across network, serial, and MIDI protocols into a single unified event engine.

This repository is managed as a monorepo containing the core engine, web dashboard, shared SDKs, and official integrations.

## Applications

- `@cueaxle/core` - The headless Bun runtime, event router, and persistence engine
- `@cueaxle/web` - The Next.js and Shadcn UI control surface, live monitor, and cue builder

## Packages

- `@cueaxle/sdk` - Base classes, interfaces, and manifest types for building integrations
- `@cueaxle/types` - Normalized event schemas, action types, and shared definitions

## Integrations

- `@cueaxle/integration-atem` - Blackmagic ATEM video switcher control via IP
- `@cueaxle/integration-propresenter` - Renewed Vision ProPresenter API connector
- `@cueaxle/integration-osc` - Generic Open Sound Control driver for digital audio consoles (X32, Wing, SQ)
- `@cueaxle/integration-midi` - USB/DIN MIDI input and output trigger adapter
- `@cueaxle/integration-visca` - PTZ camera positioning over IP/Serial

## Containers

- `cueaxle/runtime` - Docker appliance image for Raspberry Pi and x86 rack units

## Contributing

CueAxle is open-source and welcomes contributions. Before opening a pull request, review the repository contribution guidelines. If you are looking for somewhere to jump in, look for issues labeled `good first issue`.

## Help

For troubleshooting local setups or discussing hardware routing and protocol support, open an issue or start a thread in the GitHub Discussions tab.
