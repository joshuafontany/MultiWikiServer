# MultiWikiServer

MultiWikiServer for TiddlyWiki.

### How to run

- `npm init @tiddlywiki/mws@latest mws`
- `cd mws`
- `npm start`

You can customize the defaults by modifying `mws.run.mjs`.

- the server runs on port 5000. It does not use HTTPS by default, but you can enable it by specifying a key and cert. 
- A `localpass.key` file is created to hold the password keyfile. If this file changes, all passwords will need to be reset. 
- The data folder (`wikiPath`) is `wiki` by default.

The initial user created on first run has the username `admin` and password `1234`.

### Updates

This is the process for updating to a new version of MWS.

- Run `npx mws --mws-save-archive archive-folder` to export your content from the old database.
- Move your `store` folder out of the data folder to a safe backup folder.
- `npm install @tiddlywiki/mws@latest`
- Run `npx mws --mws-load-archive archive-folder` to import your content into the new database.
- Copy the `files` folder from your old `wiki/store` folder into your new `wiki/store` folder.

You can also use `npm start --` instead of `npx mws`.

### Development

- `git clone`
- `npm install`
- `npm run certs`
- `npm start`

### The Server

- Supports HTTP and HTTPS listeners. All requests are funneled into one stack.
- Uses abstractions and state objects to make the server as flexible as possible.
- Supports overriding classes to implement custom handling of various features.
- All of the features from the old MWS branch have been converted to the new system.

### The Store

- Written using Prisma and entirely promise-based.
- Swapping to a different database engine should be a breeze. For sqlite it uses the libsql adapter, which also allows connections to libsql servers.
- The tiddler text attachment system, which stores some tiddler bodies on the file system, is promise-based and can be modified to store files in the cloud.

### The Features

- Bag & Recipe system for storing tiddlers.
- User and Role management with ACL.
- Attachment system for storing binary tiddlers on the file system.
- Various import and export commands (currently still in development).
- Customization of these features should be quite easy as they are fairly self-contained. The TypeScript code is fully typed and easy to navigate.

### Planned (hopefully) for the future

- AuthJS or a similar integration that supports third-party OAuth (you can already write your own).
- Compiling filters to SQL to optimize memory on both the client and server.
- Support for other database and storage systems. Most likely MariaDB and Postgres.
- Additional recipe strategies with features like prefixed bags and namespaces.
- Server rendering of pages, for a more wikipedia-like experience.
