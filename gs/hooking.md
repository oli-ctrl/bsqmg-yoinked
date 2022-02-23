# Hooking

Hooking is core to modding. With zenject being terribly difficult to use, `beatsaber-hook` provides a simple way of hooking onto methods.

To view a list of methods, classes and fields you can hook onto, checkout [Phaze's hook viewer here.](https://modtools.phazed.xyz/browser?v=1.19.0)

## Hooking onto a method.

In this example, we will hook onto the initialization of the main menu and change the text on the solo button to something funny.

The main menu runs the event `DidActivate` when it is fully initialized. This is useful for us because we can hook onto this event and extend it further.

Firstly, create your hook using the `MAKE_HOOK_MATCH` macro:

```cpp
// Think of these as C#, using MainMenuViewController, using UnityEngine.UI.Button, using HMUI.CurvedTextMeshPro ect.
// Classes without a namespace are assigned to the GlobalNamespace
#include "GlobalNamespace/MainMenuViewController.hpp"
#include "UnityEngine/UI/Button.hpp"
#include "UnityEngine/GameObject.hpp"
#include "HMUI/CurvedTextMeshPro.hpp"

// Create a hook struct, named MainMenuUIHook.
// Target "void MainMenuViewController::DidActivate" and takes the following arguments:
// bool firstActivation, bool addedToHierarchy, bool screenSystemEnabling
//
// MAKE_HOOK_MATCH also returns an pointer of the class instance (MainMenuViewController *self), which is useful.
MAKE_HOOK_MATCH(MainMenuUIHook, &GlobalNamespace::MainMenuViewController::DidActivate, void, GlobalNamespace::MainMenuViewController *self, bool firstActivation, bool addedToHierarchy, bool screenSystemEnabling) {
    // Run the original method before our code.
    // Note, you can run the original method after our code if you want to change arguments.
    MainMenuUIHook(self, firstActivation, addedToHierarchy, screenSystemEnabling); 
    
    
    // Get the _soloButton text using the dyn_ method and simple unity jazz. dyn_ safely get fields and shouldn't change much during updates.
    HMUI::CurvedTextMeshPro *soloMenuText = self->dyn__soloButton()->get_gameobject()->GetComponentInChildren<CurvedTextMeshPro *>();
    soloMenuText->SetText("Skill Issue");
}
```


