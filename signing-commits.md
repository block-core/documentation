# Signing commits

We would appricate that all commits to BlockCore be signed by the contributors.

## Windows

1. Install [GPG4Win](https://gpg4win.org/download.html)
2. Run Kleopatra
3. Generate a key, preferably 4096 bytes. Avoid pass phrase if you don't want to supply it on every commit or use tools to cache it locally.
4. Fill out your details, name and e-mail. The e-mail must be a verified address on Github, or your no-reply address on Github.
5. Find your key by opening cmd.exe
```sh
gpg --list-secret-keys --keyid-format LONG
```

Above command will return your keys, starting with their strength and then ID. Make sure you use the "sec" key and not the "ssb" key. "sec" is for Certify and Signing, the "ssb" is for Encrypting.

Depending on your environment variables, cmd and git bash will store keys in different locations. Kleopatra will put keys in the location that cmd.exe looks at.

cmd.exe: C:\Users\USER\AppData\Roaming\gnupg   
git bash: C:\Users\USER.gnupg

To fix this, open git bash and search for pgb:

```sh
where gpg
```

Copy the path that goes to the recent GnuPG folder, for example:

```
C:\Program Files (x86)\GnuPG\bin\gpg.exe
```

Then create a new file, if it doesn't exists, under your user profile (C:\Users\USER\\.bash_profile) named .bash_profile and fill out this into the file:

```
alias gpg="'C:\Program Files (x86)\GnuPG\bin\gpg.exe'"
```

Then run the same gpg command to list keys, and you should see same result in cmd and git bash.

6. Configure git repo to always sign. You can do this globally with the flag --global if you want to.

```sh
# Local only
git config user.signingkey KEYID
git config commit.gpgsign true
```

```sh
# Globally
git config --global user.signingkey KEYID
git config --global commit.gpgsign true
```

You might also want to inform git to use the custom GPG you installed and not the one included with for example Github Desktop:

```sh
git config --global gpg.program "C:\Program Files (x86)\GnuPG\bin\gpg.exe"
```

7. Get your public key:

```sh
gpg --armor --export KEYID
```

8. Add your [Public Key to Github](https://github.com/settings/keys).


## Linux

TBA


## Addtional links

[Signing commits by Github](https://help.github.com/en/articles/signing-commits)

[How to enable auto-signing Git commits with GnuPG for programs that don't support it natively](https://gist.github.com/BoGnY/f9b1be6393234537c3e247f33e74094a)

[Since git 2.19.1, gpg2 is supported!](https://stackoverflow.com/questions/46863981/how-to-sign-git-commits-from-within-an-ide-like-intellij/46884134#46884134)

