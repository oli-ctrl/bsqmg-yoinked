# Testing

## Without BMBF

You can test your mod without BMBF quickly using the `copy.ps1` command. This is recommended whilst developing. You should always test using a QMOD and BMBF if you're about to release your mod.

What the `copy.ps1` command does, is copying the `libmodname.so` to the correct place, and launch your game for you. You can also specify while launching to log or not with the `-Log` argument and logging to only itself with the `-Log -Self` arguments. The following example is the recommended setup for `copy.ps1`.

```powershell
copy.ps1 -Log -Self > _latest.log
```

## With BMBF

Testing your mod with BMBF is useful to check if BMBF presents, or handles your mod.json correctly (copying files, etc.)

You will need to [generate a QMOD file, using the `buildQMOD.ps1` command.](/getting-started/creating_a_project#buildqmodps1)

You can then upload the generated QMOD file to BMBF, BMBF should install your mod - it should appear on the mods list.

You can start logging using the [`start-logging.ps1 -Self > latest.log` command.](/getting-started/creating_a_project#start-loggingps1)

On the next page you can find out more info on mod.json, which has useful features that allow you to utilize BMBF.
