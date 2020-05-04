# NewApp

Welcome to 7mklol's personal website application. This is a reference for my own use.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.3.

---

## 1. Environment Configuration

Environment setup is done only once on a machine. If the machine already has all the needed tools please jump to "CPQ UI Configuration" section.

1. Git download: please refer to the [git](https://git-scm.com/) documentation.

2. Download and run the latest Node.js installer if you do not have node installed on your machine - [Node.js](https://nodejs.org/en/download/)

3. On command prompt do `node -v` to make sure that the node got installed on the machine. Please close all instances of command prompt before you do this check.

    Command:

        node -v

    eg:

        node -v
        v10.15.0

4. Update npm

    Node comes with npm installed so you should have a version of npm. However, npm gets updated more frequently than Node does, so you'll want to make sure it's the latest version.

    Commands:

    Linux:

        sudo npm install npm -g

    Windows:

        npm install npm -g

    Please notice that npm version 5.3.0 or above is required. Check if the correct version is installed.

    Command:

        npm -v

    eg:

        npm -v
        v6.4.1

---

## 2. CPQ UI Configuration

1. On prompt run:

        npm install

    This will download the node modules and create other needed files.

2. To serve the application:

        npm start

    The application will open on `http://localhost:4200/`, or in the chosen port. The app will automatically reload if you change any of the source files.

---

## 3. Add an existing project to GitHub

1. Initialize the local directory as a Git repository:

        git init

2. Add and stage the files in the local repo:

        git add .

3. Give a commit message:

        git commit -m "Topic"
        git commit --amend

4. Sets the new remote:

        git remote add origin remote-repository-URL
        git remote -v

5. Push to remote repo in GitHub:

        git push -u origin master

## 4. Add files to remote repo

1. Repeat steps 2, 3 from section 3.

2. Push to "develop" branch in the remote from local "some-branch" branch:

        git push origin some-branch:develop

3. Alternative way -- merge from local branch first:

        git checkout develop
        git merge some-branch
        git push origin develop

        Either way will commit to develop branch in the remote repository, and you can merge to master branch later with a second check.



## 5. Other Commands

1. Before code commit:

        npm run verify

    This will do some checking locally.

2. To build the project using dev environment, run:

        npm run build

3. To execute the lint verification, run:

        npm run lint

4. To execute the unit tests, run:

        npm test

5.   To run the unit test in development mode, run:

        npm run test-debug

6. to execute end-to-end tests, run:

        npm run e2e

7. Rebase code:

        git pull origin **BRANCH** --rebase

8. Amend commit:

        git commit --amend --no-edit

9. Graphical representation of the app's architecture:

        npm run compodoc

## 4. IDE Configuration

1. In VS Code, use TSLint to lint the code in ts file:

   1. Go to marketplace and download extension "TSLint". Reload.
   2. Restart VS Code. Now you see underlines when there's a TSLint rule error.

2. Other useful extensions in the marketplace:

   * Sass Lint
   * Trailing Spaces
   * Code Spell Checker
   * Typescript Hero
   * GitLens
   * CodeMetrics

3. Auto-completion:

   Every time you save(Ctrl+ s) the file, it will auto format whatever it can for you if the rule has a fixer. Rules are in .vscode/settings.json.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
