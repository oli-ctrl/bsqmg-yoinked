# Creating a `DidActivate` method.

`DidActivate` is a generic method used by `questui` that allows you to render your components.

Take a look at this example:

- You should only create your components on first activation to prevent duplication.
- You can utilize containers (such as Scrollable, HorizontalLayout and VerticalLayout) to manipulate the locations of components.

```cpp
void DidActivate(HMUI::ViewController* self, bool firstActivation, bool addedToHierarchy, bool screenSystemEnabling) {
    // Create our UI elements only when shown for the first time.
    if(firstActivation) {
        // Create a container that has a scroll bar.
        GameObject* container = QuestUI::BeatSaberUI::CreateScrollableSettingsContainer(get_transform());
       
        // Create a text that says "Hello World!" and set the parent to the container.
        QuestUI::BeatSaberUI::CreateText(container->get_transform(), "Hello World!");
    }
}
```

There are too many methods to document in this guide, you should refer to documentation and comments inside of `BeatSaberUI.hpp`

For `questui` to use your `DidActivate` you will need to register it using the `questui::Register` class.