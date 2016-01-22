# Dot-drop

![drop logo](http://www.brandcrowd.com/gallery/brands/pictures/picture12405610372559.png)

Dot-drop is simple node.js utility that helps you sync your `.config` files across multiple Unix computers (using Dropbox). 

First, install `dot-drop` via npm:

    $ npm install -g dot-drop

Next, create a `dot-drop` folder in your Dropbox folder along with an empty configuration file:

    $ mkdir ~/Dropbox/dot-drop
    $ touch ~/Dropbox/dot-drop/.dot-drop

Populate your `.dot-drop` file with a list of the files and/or directories that you wish to sync with Dropbox. For example, the contents of your `.dot-drop` might look like the following:

    ~/.bashrc
    ~/.vimrc
    ~/.vim
    ~/.tmux.conf

Notice in this example that `~/.vim` is a directory containing all of your vim plugins (a useful directory to sync accross your computers).

With your config file finished, you can now use dot-drop to place these files into your `~/Dropbox/dot-drop` folder:

    $ dot-drop drop

Note that this is equivalent to running -- for each `/path/to/file_or_dir` inside `~/Dropbox/.dot-drop` -- the following two commands:

	  $ sudo mv /path/to/file_or_dir ~/Dropbox/$HOME/file_or_dir
	  $ sudo ln -s ~/Dropbox/dot-drop/file_or_dir /path/to/file_or_dir

Finally, migrate to any other Unix computer synced to your Dropbox account, and run the following command:

    $ dot-drop link

You're done.

What this last command does is the following: for each `/path/to/file_or_dir` inside `~/Dropbox/.dot-drop`, dot-drop removes `file_or_dir` (actually, it sticks it inside a backup folder in case something goes awry) and replaces it with a symlink pointing to the appropriate file inside your `~/Dropbox/dot-drop` folder.  Equivalently:

    $ sudo rm -r /path/to/file_or_dir
    $ sudo ln -s ~/Dropbox/dot-drop/file_or_dir /path/to/file_or_dir

# Notes

Dot-drop is written in [ClojureScript](https://github.com/clojure/clojurescript/wiki) and transpiled to pure nodejs.
