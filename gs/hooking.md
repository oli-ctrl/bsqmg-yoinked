# Hooking

Hooking is core to modding. `beatsaber-hook` provides a simple way of hooking onto methods and other miscellaneous stuff like constructors.

> In computer programming, the term hooking covers a range of techniques used to alter or augment the behaviour of an operating system, of applications, or of other software components by intercepting function calls or messages or events passed between software components. Code that handles such intercepted function calls, events or messages is called a hook.
> [Wikipedia](https://en.wikipedia.org/wiki/Hooking#:~:text=In%20computer%20programming%2C%20the%20term,events%20passed%20between%20software%20components.&text=Hooking%20can%20also%20be%20used%20by%20malicious%20code.)

To view a list of classes, methods and fields you can hook onto, checkout [Phaze's hook viewer here.](https://modtools.phazed.xyz/browser?v=1.19.0)

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

// General format: MAKE_HOOK_MATCH(HookName, method, method return type, method class pointer, arguments...) { 
//  HookName(arguments...);
//  // your code here 
//}

MAKE_HOOK_MATCH(MainMenuUIHook, &GlobalNamespace::MainMenuViewController::DidActivate, void, GlobalNamespace::MainMenuViewController *self, bool firstActivation, bool addedToHierarchy, bool screenSystemEnabling) {
    // Run the original method before our code.
    // Note, you can run the original method after our code if you want to change arguments.
    MainMenuUIHook(self, firstActivation, addedToHierarchy, screenSystemEnabling); 
    
    
    // Get the _soloButton text using the dyn_ method and simple unity jazz. dyn_ safely get fields and shouldn't change much during updates.
    
    UnityEngine::UI::Button *soloMenuButton = self->dyn__soloButton();
    UnityEngine::GameObject *gameObject = soloMenuButton->get_gameobject();
    HMUI::CurvedTextMeshPro *soloMenuText = gameObject->GetComponentInChildren<CurvedTextMeshPro *>();
    
    // Set the text to "Skill Issue"
    soloMenuText->SetText("Skill Issue");
}
```

Now, you have to install your hook. Usually, hooks are installed on `load()` in `main.cpp`:

```cpp
extern "C" void load() {
    il2cpp_functions::Init();

    getLogger().info("Installing hooks...");
    
    INSTALL_HOOK(getLogger(), MainMenuUIHook);
    
    getLogger().info("Installed all hooks!");
}
```
