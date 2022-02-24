# Testing

## Without BMBF

You can test your mod without BMBF quickly using the `copy.ps1` command. This is recommended whilst developing. You should always test using a QMOD and BMBF if you're about to release your mod.

The `copy.ps1` command allows you to copy your mod to your quest device and launch Beat Saber - you can also specify whether to start logging or not.

### Example

Recommended, copies your mod and opens beat saber, starts logging and filters for logs produced by only your mod and outputs the log into `latest.log`. 

Exclude `-Self` if you want to view all logs omitted by Beat Saber

```powershell
copy.ps1 -Log -Self > latest.log
```

## With BMBF

Testing your mod with BMBF is useful to check if BMBF presents, or handles your mod.json correctly (copying files, etc.)

You will need to [generate a QMOD file, using the `buildQMOD.ps1` command.](/gs/creating_a_project#buildqmodps1)

You can then upload the generated QMOD file to BMBF, BMBF should install your mod - it should appear on the mods list.

You can start logging using the [`start-logging.ps1 -Self > latest.log` command.](/gs/creating_a_project#start-loggingps1)

On the next page you can find out more info on mod.json, which has useful features that allow you to utilize BMBF.
