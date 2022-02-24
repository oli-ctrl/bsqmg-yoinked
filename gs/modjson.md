# Utilizing `mod.json`

`mod.json` contains basic infomation on your mod. It can also allow you to define other features such as:

- Cover Image (the preview image shown on the BMBF Mods tab)
- File Copies (extract files from the QMOD to a location on the quest device.)
- Downloading dependency QMODs if missing.

## Cover Image

A cover image is used by certain mods and BMBF to show a preview of your mod.

To add a cover image, simply create `cover.png` in the root of your project and add the following to your mod.json:

```json
"coverImage": "cover.png"
```

### Specification

- Recommended 1024x512 (BMBF will resize the image to be this size)
- Can be png, jpg or gif.
- Recommended to be under 2mb to prevent load lag (larger `cover.png`, longer it'll take to show on BMBF)

### Example Cover Images:

<div align="left">
    <div class="item">
        <img class="cover-img" src="https://raw.githubusercontent.com/StackDoubleFlow/NoodleExtensions/master/cover.png" alt="noodle"/>
        <span class="caption">Noodle Extensions</span>
    </div>
    <div class="item">
            <img class="cover-img" src="https://raw.githubusercontent.com/cal117/NoPromo/master/cover.png" alt="no promo"/>
            <span class="caption">No Promo</span>
    </div>
    <div class="item">
                <img class="cover-img" src="https://raw.githubusercontent.com/Royston1999/SliceDetails-Quest/main/Cover.jpg" alt="noodle"/>
                <span class="caption">Slice Details Quest</span>
    </div>
</div>
