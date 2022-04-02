# Creating A Project

To begin, open a terminal and run the command:

```powershell
tmplytr use Lauriethefish/quest-mod-template
```

This will guide you through the process of creating a mod from Laurie's quest mod template.

Example for each placeholder:

![placeholders](https://cal.has-no-bra.in/5oNtogkJg.png)

## Updating dependencies in qpm.json and adding codegen

It is recommended you update your `beatsaber-hook` to a version that is suited best for the current game version (1.20.0) -
`codegen` is a library allows you to interface with the game's code.

```powershell
qpm-rust dependency add beatsaber-hook -v ^3.6.7
qpm-rust dependency add codegen -v ^0.22.0
```

## Restoring Dependencies

Before you can open your project in an IDE, you must first restore all dependencies.

Open your terminal into your newly created project and run:

```powershell
qpm-rust restore
```

### Migrating from qpm to qpm-rust

If you're following this guide and want to migrate from old QPM to QPM Rust, you will need to fix the old cache to work with QPM Rust:

This will fix cache paths for old dependencies (such as codegen before 1.17.0) and does not need to be re-ran in the future. Note: Old QPM will no longer work.

```powershell
qpm-rust cache legacy-fix
```

## Project Contents

Your project should contain the following structure:

```
// Files in .gitignore have been excluded
extern/
└── ... dependencies should be here
include/
└── main.hpp
shared
src/
└── main.cpp
.gitignore
build.ps1
buildQMOD.ps1
restart-game.ps1
start-logging.ps1
ndk-stack.ps1
copy.ps1
CMakeLists.txt
mod.json
qpm.json
README.md
```

### Code Breakdown

#### `src/main.cpp`

`main.cpp` contains the `setup()` and `load()` methods. These methods can exist anywhere as long as they are accessible by the modloader. Take a look inside of `main.cpp` for more information. Laurie has thankfully commented most of the code, which will greatly help you.

#### `shared`

The shared folder can be exposed by QPM to other mods and published to the QPM dependency registry. Useful if you want to make an API to let other mods control your mod in certain ways (for example Qosmetics has a model loading API)

#### `extern`

The extern folder should be ignored (and or in some cases excluded), it contains dependencies, similarly to `node_modules (nodejs)` or `packages (.net core)`

### Script Breakdown

It is recommended to run these scripts using Powershell Core (v7) - however, it is not required.

#### `build.ps1`

Usage: `build.ps1`

Builds your mod. Does not produce a `.qmod` file. See inside `build.ps1` for information on what arguments can be inputted.

#### `buildQMOD.ps1`

Usage: `buildQMOD.ps1 {file name}`

Builds your mod, then generates a `.qmod` file that can be parsed by BMBF and or QuestPatcher.

#### `copy.ps1`

Usage: `copy.ps1`

Builds your mod, then copies it to your quest and launches Beat Saber if your quest is plugged in.

#### `start-logging.ps1`

Usage: `start-logging.ps1 -Self`

Usage of `-Self` is recommended, it allows you to read logs from only your mod. Starts logging using adb logcat for Beat Saber output.
