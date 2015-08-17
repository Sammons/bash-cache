# bash-cache

bash-cache allows us to store those complex usages of commands... that wondrous regex, or massively complex usage of awk. 
just save it.

install with npm `npm install -g bash-cache`

##Usages

```
bash-cache [-c] <command> -s <text in quotes> # save
bash-cache [-c] <command> -d                  # delete all
bash-cache [-c] <command>                     # display
```

Anywhere `bash-cache` is used below, `cache` would work as well.

##Save an annotation

```
bash-cache -c ls -s "ls -al shows me more than normal" #saves annotation for ls
```

##Display annotations

```
bash-cache ls # displays annotations for ls
```

##Clear annotations

```
bash-cache -c ls -d # deletes annotations for ls
```

##Where are the annotations?

stored in your home directory `~`, in .bash-cache-annotations.json
which is formatted like so:

```
{
	'ls' : [ 'ls -al shows me more than normal' ],
}
```
