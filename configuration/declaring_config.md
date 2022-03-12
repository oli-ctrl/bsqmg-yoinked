# Declaring Configuration

First, you will need to define what your configuration will be. Create a `ModConfig.hpp` header file, this will contain
the definition.

In `ModConfig.hpp`, you should put the following:

```cpp
#pragma once

#include "config-utils/shared/config-utils.hpp"

// Declare the mod config as "ModConfiguration" and declare all its values and functions.
DECLARE_CONFIG(ModConfig,
    // Declare "VariableA"
    CONFIG_VALUE(VariableA, std::string, "Variable Name", "Variable Value");

    CONFIG_INIT_FUNCTION(
        // Initialize "VariableA"
        CONFIG_INIT_VALUE(VariableA);
    )
)
```

Here is an example that uses all the types except `const char*` and `char*`

```cpp
#pragma once

#include "config-utils/shared/config-utils.hpp"
#include "UnityEngine/Color.hpp"
#include "UnityEngine/Vector2.hpp"
#include "UnityEngine/Vector3.hpp"
#include "UnityEngine/Vector4.hpp"

DECLARE_CONFIG(ModConfig,
    CONFIG_VALUE(VariableString, std::string, "String Example", "Var Value");
    CONFIG_VALUE(VariableInteger, int, "Integer Example", 5);
    CONFIG_VALUE(VariableFloat, float, "Float Example", 1.5f);
    CONFIG_VALUE(VariableBoolean, bool, "Bool Example", false);
    CONFIG_VALUE(VariableDouble, double, "Double Example", 0.39221);
    
    // Dividing by 255 in color constructor because UnityEngine::Color represents RGB as values in the range of 0 to 1, Alpha is simply 0 to 1 as usual.
    CONFIG_VALUE(VariableColor, UnityEngine::Color, "Color Example", UnityEngine::Color(10 / 255, 155 / 255, 90 / 255 , 0));
    CONFIG_VALUE(VariableVector2, UnityEngine::Vector2, "Vector2 Example", UnityEngine::Vector2(1, 2));
    CONFIG_VALUE(VariableVector3, UnityEngine::Vector3, "Vector3 Example", UnityEngine::Vector3(1, 2, 3));
    CONFIG_VALUE(VariableVector4, UnityEngine::Vector4, "Vector4 Example", UnityEngine::Vector4(1, 2, 3, 4));

    CONFIG_INIT_FUNCTION(
        CONFIG_INIT_VALUE(VariableString);
        CONFIG_INIT_VALUE(VariableInteger);
        CONFIG_INIT_VALUE(VariableFloat);
        CONFIG_INIT_VALUE(VariableBoolean);
        CONFIG_INIT_VALUE(VariableDouble);
        CONFIG_INIT_VALUE(VariableColor);
        CONFIG_INIT_VALUE(VariableVector2);
        CONFIG_INIT_VALUE(VariableVector3);
        CONFIG_INIT_VALUE(VariableVector4);
    )
)
```
