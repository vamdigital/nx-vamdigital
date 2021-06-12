# Vamdigital

### First Steps
* Clone this Base Repo to start a new Project to your preferred location on local computer `/project/myNewApp`
* Once the Base Repo is cloned open the Project in neovim by going to directory `cd project/myNewApp` and then `nvim`
* This will open the Project in the NeoVim
* Check the root location of the project by running `:pwd` - `/Users/xxx/project/myNewApp`
* Change Directory into the root dir `:cd /Users/xxx/project/myNewApp`
* Then type in `:vimgrep /starter/gj **/*`
* This will do a global search of the term across the folders and files
* Check the search buffer by typing `:copen`
* This will list out all the files that it found the `starter` term
* now to replace `starter` with `myApp` type in `:cfdo %s/starter/myApp/g | update`
* Close all the open buffer by typing `:bd` till all buffer is closed
* Then open nerdTree `<F6>`
* Navigate to the directory and change the name of the directory by press `m - move files /directory` and replace `starter` with `myApp`

### Installation of dependencies
* Run `yarn` from the root of the folder
* Run `yarn start` to start the local development server on port 4200
* Launch the Browser and verify all is working by visiting `http://localhost:4200`

### Deploy to github page - ghpages
Once you are ready to deploy the site to github run the following commands - [https://emilyxiong.medium.com/deploy-a-nx-react-app-to-github-pages-a83de7551ec0]
* `yarn preDeploy`
* `yarn deploy`
* Login to Github account
* Go to Repository settings page and select Pages from left side navigation
* The site should have been published with the link to access it.

Please NOTE in order to publish to GHPages the repository should be Public and not Private or if its Private it should be paid version

