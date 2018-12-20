# CompGen - A Simple Random Selection Picker

This is a tool to quickly pick a selection of unique items from a list. I am using it to pick different musical instruments to sample and make music. The idea is to pick four things to sample at random. The script reads a textfile containing a list of instruments - **sources.txt**, loads the values into an array, and then outputs the values as a tabbed list, prepended with the current date and time 

Requirements
------------

- Git
- Node

Clone the repository
--------------------

Start a **Terminal** program on your computer. You'll see something that looks a little like this:

```
$
```

Type the command after the dollar sign and hit enter:

```
$ git clone https://github.com/dabbingcoders/compgen-nodejs.git
Cloning into 'compgen-nodejs'...
remote: Enumerating objects: 9, done.
remote: Counting objects: 100% (9/9), done.
remote: Compressing objects: 100% (8/8), done.
remote: Total 9 (delta 1), reused 5 (delta 0), pack-reused 0
Unpacking objects: 100% (9/9), done.
```

Run the script
--------------

`cd` into the directory containing the source code:

```
$ cd compgen-nodejs
```

To see what files are inside the directory, use the `ls` command:

```
$ ls
LICENSE		README.md	index.js	package.json	sources.txt
```

To run the **compgen.js** script, use the **node** command followed by the script name:

```
$ node compgen.js
Wed Dec 19 2018 10:49:29	voice           	Yamaha AN1X     	djembe          	Moog Little Phatty
```

If you do not see the output as above and instead you see something like `node: command not found` then you need to install node. I recommend using [nvm](https://github.com/creationix/nvm)

Outputting to a textfile
------------------------

Using the commandline it is possible to redirect the output from our script to another file, rather than printing it on the screen. This way we can keep a log of the output generated each time. To _append_ the output to a file (e.g. add it to the end of file), we can use `>>` - the **append operator**  

```
$ node compgen.js >> log.txt
```

If we execute the above command a few times, and then use the `cat` command to print the contents of the file to screen then we should see something like this:

```
$ node compgen.js >> log.txt
$ node compgen.js >> log.txt
$ cat log.txt
Wed Dec 19 2018 11:05:32	toy drum machine	Moog Little Phatty	Yamaha AN1X     	Yamaha RX5
Wed Dec 19 2018 11:05:33	voice           	cassette        	djembe          	Moog Little Phatty
```

Understanding the script
------------------------

The first thing to do is understand how the script works. The juicy bit is carried out in the **getRandomSubset(src,length)** function:

```
function getRandomSubset(src,length) {

    // initilize empty array to contain our random choices
    let result = [];

    // keep looping until the result array has the required number of elements
    while(result.length < length){

        // pick a random integer (whole number) between 0 and the number of total items in sources.txt
        let r = Math.floor(Math.random()*src.length);

        // is the item to which the number corresponds not already in our result array?
        if(result.indexOf(src[r]) === -1) {
            // it isn't, so let's push the item it onto the end of the result array
            result.push(src[r]);
        }
    }
    return result;
}
```

Next Steps
----------

Once you have understood how it works this script could be adapted for many purposes. You could use it to pick a hand of cards at random or you could use it to build a random playlist generator from a master list of songs. You could use it to pick 4 random books from your bookshelf. The possibilities are endless. The world is your lobster.

```
      ____
     /  __\
    |: /---)  \    /   ___
     \:( _/    \  /   /_  \
      \  \      \/    \_\::)
       \_ \   _0""0_   / _/
         \ \/=  \/  =\/ /
          \ |  (||)  | /
           \_\______/_/
           __//    \\__
          /__//====\\__\
       _ //__//====\\__\\ _
       _ //__//====\\__\\ _
       _ //   /(  )\   \\ _
       _ /    /(  )\    \ _
              |(  )|
              /    \
             / /||\ \
             \:_/\_:/   S@yaN
                       11.11.02
```
