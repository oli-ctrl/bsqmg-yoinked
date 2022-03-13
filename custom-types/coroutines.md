# Coroutines

> In Unity, a coroutine is a method that can pause execution and return control to Unity but then continue where it left off on the following frame. [Unity Documentation](https://docs.unity3d.com/Manual/Coroutines.html)

## Creating a Coroutine

Using Custom Types, coroutines are pretty much the same as their C# counterparts. Take a look at this example:

```cpp
#include "System/Collections/IEnumerator.hpp"
#include "custom-types/shared/coroutine.hpp"
#include "UnityEngine/WaitForSeconds.hpp"

custom_types::Helpers::Coroutine counterCoroutine() {

    int secondsPassed = 0;

    // Loop 30 times.
    for (int i = 0; i < 30; i++) {
      // Timer
      secondsPassed++;
      
      // Wait one second.
      co_yield reinterpret_cast<System::Collections::IEnumerator*>(UnityEngine::WaitForSeconds::New_ctor(1));
    }
    
    // Return
    co_return;
}
```

| C#             | C++         |
|----------------|-------------|
| `yield return` | `co_yield`  |
| `yield`        | `co_yield`  |
| None           | `co_return` |

`co_return` is used to return a `Coroutine`, C# automatically handles this during compilation, but c++ does not.

Using normal `return` in a coroutine will not work.

## Using the Coroutine

You can use `SharedCoroutineStarter` to spawn a Coroutine without the need of a `MonoBehaviour` Custom Type like so:

```cpp
#include "GlobalNamespace/SharedCoroutineStarter.hpp"
#include "custom-types/shared/coroutine.hpp"

auto coroutine = custom_types::Helpers::CoroutineHelper::New(counterCoroutine());

SharedCoroutineStarter::get_instance()->StartCoroutine(coroutine);
```
