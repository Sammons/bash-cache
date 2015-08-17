# bash-cache
Annotations of specific usages of unix commands

Anywhere bash-cache is used below, cache would work as well.

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