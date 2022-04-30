# Getting Started

These tutorials/guides will teach you how to create a mod. It is not IDE dependent, you must configure your IDE appropriately (C++ tools for VSCode and CMake configured correctly for CLion ect.)

This guide is based for windows, as 74% of developers are on Windows - and that powershell scripts are used for development.

The getting started guides expects you have knowledge of the following:

- [C++](https://www.w3schools.com/CPP/default.asp)
- [CMake](https://cmake.org/cmake/help/latest/guide/tutorial/index.html)
- [ADB](https://developer.android.com/studio/command-line/adb)
- [Powershell](https://docs.microsoft.com/en-us/learn/modules/introduction-to-powershell/)

The guide is recommended to be followed in chronological order, check the sidebar or use the navigation buttons at the bottom.

## Prerequisites

To follow this guide, you will need to download and install the following prerequisites:

- [QPM Rust](https://github.com/RedBrumbler/QuestPackageManager-Rust) - Dependency Management
- [Templatr](https://www.npmjs.com/package/tmplytr) - Templating Tool - [Requires current NodeJS](https://nodejs.org/en/download/current/)
- [Android NDK](https://developer.android.com/ndk) - Self explanatory.

### Templatr

You can download the [latest `templatr` release here.](https://github.com/cal117/templatr/releases/latest)

Extract the executable and add to path.

Linux/MacOS users will need to run `chmod +x templatr` before using `templatr`.

To check if `templatr` was installed, run the help command.

```powershell
templatr --help
```

### Android NDK

[Download the Android NDK](https://developer.android.com/ndk), unzip it and add it to path.

### QPM Rust

[Download the latest QPM Rust binary for your system](https://github.com/RedBrumbler/QuestPackageManager-Rust) from the Actions tab and add it to path.
