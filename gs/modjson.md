# Utilizing `mod.json`

`mod.json` contains basic information on your mod. It can also allow you to define other features such as:

- Cover Image (the preview image shown on the BMBF Mods tab)
- File Copies (extract files from the QMOD to a location on the quest device.)
- Downloading dependency QMODs if missing.

## Cover Image

A cover image is used by certain mods and BMBF to show a preview of your mod.

To add a cover image, simply create `cover.png` at any point in your project  and add the following to your mod.json:

```json
"coverImage": "cover.png"
"or"
"coverImage": "path/to/cover.png"
```

### Recommendations:

- 1024x512 (BMBF will resize the image to be this size)
- File format either png, jpg or gif.
- Under 2mb to prevent load lag (larger `cover.png`, longer it'll take to show on BMBF)

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
    <div class="item">
                <img class"cover-img" src="https://raw.githubusercontent.com/raineio/QClaws/master/cover/cover.png" alt="QClaws" />
                <span>QClaws</span>
    </div>
</div>

## File Copies

File copies is an array that specifies what files should be copied where - you can include files by adding them to the files list in `buildqmod.ps1`.

### Example:

This example will add `secret-data.json` to the QMOD and copy it to `/sdcard/ModData/com.beatgames.beatsaber/Mods/Secret/secret-data.json`

Edit the `buildqmod.ps1` script to include `secret-data.json`.

```powershell
# This is line 41 of buildqmod.ps1
$filelist = @($mod, "secret-data.json")
```

Next, add the following to your `mod.json`

```json
"fileCopies": [
    {
        "name": "secret-data.json",
        "destination": "/sdcard/ModData/com.beatgames.beatsaber/Mods/Secret/secret-data.json"
    }
]
```

This will extract `secret-data.json` from your QMOD file on installation and place it at the path defined at `destination`

# Dependencies

You can specify mod dependencies and how to download them using the `dependencies` field in `mod.json` like so:

```json
"dependencies": [
    {
        "version": ">=0.4.6",
        "id": "tracks",
        "downloadIfMissing": "https://github.com/StackDoubleFlow/Tracks/releases/download/v0.4.6/tracks.qmod"
    },
    {
        "version": ">=0.14.2",
        "id": "custom-json-data",
        "downloadIfMissing": "https://github.com/StackDoubleFlow/CustomJSONData/releases/download/v0.14.2/custom-json-data.qmod"
    }
]
```

This example will download `custom-json-data` and `tracks` if the mods are missing. Useful if you want to split your mod up into modules and make the final QMOD file smaller. 

A disadvantage of this is that without internet, your mod will fail to install if the dependencies are missing and cannot be downloaded by BMBF.
