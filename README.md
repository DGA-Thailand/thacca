# Welcome to thacca.go.th

This is the repo for the thacca.go.th website.

# How to contribute

Please contact the repo's admin to grant you the necessary access.

# How to make changes to the website

Use https://thacca-admin.netlify.app/admin to add, edit contents.
Or you may set up your local environment.

# Setting Up Local Environment

1. Install Hugo on your computer : https://gohugo.io/installation/
2. Install git on your computer.
3. Clone this repo.
4. Run the following commands:

```
cd thacca
git init
git submodule init
git submodule update
hugo server
```

or, if you wish to build drafts too.

```
hugo server -D
```

Go to http://localhost:1313.

# Content Structure

Directory "/content/thai" contains most of webpages.
Refer to decapcms.org documentation for "/static/admin/config.yml"
