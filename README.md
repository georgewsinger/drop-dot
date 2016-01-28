# Drop-dot

![drop logo](http://www.brandcrowd.com/gallery/brands/pictures/picture12405610372559.png)

Dot-drop is simple node.js utility that helps you sync your `.config` files/directories across multiple Unix computers using Dropbox. 

First, install `drop-dot` via npm:

    $ npm install -g drop-dot

Next, create a `.drop-dot` folder in your `~/Dropbox` directory along with an empty configuration file:

    $ mkdir ~/Dropbox/.drop-dot
    $ touch ~/Dropbox/.drop-dot/.drop-dot

Then, populate this `.drop-dot` file with a list of the files and/or directories that you wish to sync with Dropbox. For example, the contents of your `.drop-dot` might look like the following:

    ~/.bashrc
    ~/.vimrc
    ~/.vim
    ~/.tmux.conf

**Note:** You are free to use the `~` symbol in this file to denote your home folder, but cannot (presently) use environment variables (i.e., `$HOME`, etc).

After you populate your config file, you can use drop-dot to place its files into your `~/Dropbox/.drop-dot` folder:


    $ drop-dot drop # on Computer #1

In case you are curious, this is equivalent to running -- for each `/path/to/file_or_dir` written inside `~/Dropbox/.drop-dot/.drop-dot` -- the following two commands:

	  $ sudo mv /path/to/file_or_dir ~/Dropbox/.drop-dot/file_or_dir
	  $ sudo ln -s ~/Dropbox/.drop-dot/file_or_dir /path/to/file_or_dir

Finally, migrate to any other Unix computer synced to your Dropbox account, and run the following command:

    $ drop-dot link

You're done.

What this last command does is the following: for each `/path/to/file_or_dir` inside `~/Dropbox/.drop-dot`, drop-dot creates a symlink corresponding to this address that points to the appropriate corresponding file/directory inside your `~/Dropbox/.drop-dot` folder.  This is equivalent to the following:

    $ sudo ln -s ~/Dropbox/.drop-dot/file_or_dir /path/to/file_or_dir

# Graphical Representation

Here is a graphical representation of how this program would go about syncing `~/file1`:

![Alt Text](http://www.gravizo.com/g?%20%20digraph%20G%20{%20%20%20%20aize%20=%224,4%22;%20%20%20%20%22~/Dropbox/.drop-dot/file1%22%20[shape=box];%20%20%20%20%22Computer%20A:~/file1%22%20-%3E%20%22~/Dropbox/.drop-dot/file1%22%20[style=bold,label=%22symlinked%22];%20%20%20%20%22Computer%20B:%20~/file1%20%22-%3E%20%22~/Dropbox/.drop-dot/file1%22[style=bold,label=%22symlinked%22];%20})

If you don't know what a "symlink" is, check out [this](https://en.wikipedia.org/wiki/Symbolic_link).

# Requirements

- A Unix system (i.e., linux or mac)
- Dropbox

# Is this program safe?

This program is designed to never eat, move, or link a file if any sort of system conflict exists (you'll just get an error message printed to your console); however, use this at your own risk (and always make backups :)

# TODO

- Add the ability to individually add and remove files (instead of relying on a config file): i.e.: 

    $ drop-dot drop <file1> ... <filen>
    $ drop-dot remove <file1> ... <filen>

- Add `drop-dot status`:

    $ drop-dot status
    All of your files are synced!

‐ Improve readability of error messages
- Allow the usage of environment variables in configuration files

# Notes

Dot-drop is written in [ClojureScript](https://github.com/clojure/clojurescript/wiki) and transpiled to pure nodejs.
