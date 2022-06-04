# solid-wavesurfer

> A wrapper of the [wavesurfer.js](https://wavesurfer-js.org/) library for [Solid](https://solidjs.com/).

## Description

A simple wrapper around a library called [wavesurfer.js](https://wavesurfer-js.org/).

The purpose of the package is to provide an abstraction over wavesurfer.js API and to do it as close to Solid style of doing things as its maintainer(-s) can provide.

This package is also a port of [`wavesurfer-react`](https://github.com/ShiiRochi/wavesurfer-react) for Solid.

## Installation

You can install this library via your favorite package manager.

```bash
# NPM
npm install solid-wavesurfer --save

# Yarn
yarn add solid-wavesurfer

# PNPm
pnpm add solid-wavesurfer
```

## Usage

> \[CURRENTLY IN BUILD !\] You can see multiple use cases on the [example website](https://vexcited.github.io/solid-wavesurfer).

### Basic Usage

> TODO: Add more usages.

<!-- ```tsx
import type { WaveSurferInstance } from "solid-wavesurfer";
import WaveSurfer from "solid-wavesurfer";

const App = () => {
  let wavesurfer: WaveSurferInstance | undefined;

  return (
    <WaveSurfer
      onMount={instance => (wavesufer = instance)}
    />
  );
};

export default App;
``` -->

## Development (for `/package`)

> `git clone https://github.com/Vexcited/solid-wavesurfer`

I use `pnpm` as the package manager, so run `pnpm install` to install the dependencies.

### Scripts

* `pnpm build`: Lints and builds to the `dist` folder.
* `pnpm lint`: Checks if there's any TypeScript and ESLint error.
* `pnpm release`: Runs `release-it` to release new versions.

### Example Website

You can see how to contribute to the [example website](https://vexcited.github.io/solid-wavesurfer/) in the [`example` folder](/example/).
