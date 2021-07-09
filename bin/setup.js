#!/usr/bin/env node
import chalAnimation from 'chalk-animation'
import {exec} from 'child_process'
import fs, {appendFileSync, rmdirSync, unlinkSync} from 'fs'
import inquirer from 'inquirer'
import {join} from 'path'
import {promisify} from 'util'

const rainbow = chalAnimation.rainbow('VAM Digital', 2)
const defaultFolderName = 'my-app'
const initWorkingDirectory = process.cwd()
let folderName = defaultFolderName
const repo = 'https://github.com/vamdigital/nx-vamdigital.git'
const execPromise = promisify(exec)

console.log(`downloadin files from repo ${repo} 🚀`)

async function runShellCmd(command) {
  try {
    const {stdout, stderr} = await execPromise(command)
    console.log(stdout)
    console.log(stderr)
  } catch (err) {
    console.error(err)
  }
}

async function setup(folder) {
  const folderPath = join(initWorkingDirectory, folder)
  try {
    await runShellCmd(`git clone --depth 1 ${repo} ${folder}`)
    process.chdir(folderPath)
    rainbow.start()

    // Remove items from Package.json files
    fs.readFile(`${folderPath}/package.json`, 'utf8', function (err, data) {
      if (err) {
        return console.log(err)
      }
      let result = data.toString()
      result = JSON.parse(result)

      // remove type / repository / bin
      delete result['type']
      delete result['repository']
      delete result['bin']
      delete result['dependencies']['chalk-animation']
      delete result['dependencies']['inquirer']

      //Change Items
      result['name'] = folder
      result['description'] = ''
      result['version'] = '0.0.0'

      // stringify back
      result = JSON.stringify(result)

      // write back to the file
      fs.writeFile(
        `${folderPath}/package.json`,
        result,
        'utf8',
        function (error) {
          if (error) return console.log(error)
        },
      )
    })

    setTimeout(() => {
      console.log()
      console.log(`installing dependencies, please wait...`)
    }, 1500)
    await runShellCmd(`npm i`)

    console.log(`dependencies installed successfully!`)

    // Rename files and folder
    console.log('Updating folder Name')
    const oldDirName = `${folderPath}/apps/starter`
    const newDirName = `${folderPath}/apps/${folder}`
    const oldDirE2E = `${folderPath}/apps/starter-e2e`
    const newDirE2E = `${folderPath}/apps/${folder}-e2e`

    try {
      fs.renameSync(oldDirName, newDirName)
      fs.renameSync(oldDirE2E, newDirE2E)
    } catch (err) {
      console.log(err)
    }

    // Changing the instance of starter to folderName
    console.log('Updating references....')
    await runShellCmd(
      `git grep -lz starter | xargs -0 sed -i '' -e 's/starter/${folder}/g'`,
    )
    console.log('References updated')

    await runShellCmd(`npx rimraf ./.git`)

    appendFileSync('.gitignore', '\r\ndist', 'utf8')
    appendFileSync('.gitignore', '\r\n.env', 'utf8')

    /** remove extra files and folders from disk. we don't need it anymore */
    unlinkSync(join(process.cwd(), 'README.md'))
    unlinkSync(join(process.cwd(), 'bin', 'setup.js'))
    rmdirSync(join(process.cwd(), 'bin'))

    /** Changing the title of the page from Starter to folderName */
    const indexFilePath = `${folderPath}/apps/${folder}/src/index.html`
    fs.readFile(indexFilePath, 'utf-8', function (readFileError, data) {
      if (readFileError) console.log(readFileError)
      let newValue = data.replace(/Starter/g, `${folder}`)

      fs.writeFile(
        indexFilePath,
        newValue,
        'utf-8',
        function (writeFileError, _data) {
          if (writeFileError) console.log(writeFileError)
          console.log('Title changed')
        },
      )
    })

    await runShellCmd(`git init && git add . && git commit -am "init commit"`)
    console.log(`new git repo initialized successfully!`)

    // Changing reference of imports from @starter/component to folderName/component
    await runShellCmd(
      `git grep -lz @starter | xargs -0 sed -i '' -e 's/@starter/@${folder}/g'`,
    )

    console.log('Imports updated')

    await runShellCmd(
      `git init && git add . && git commit -am "change reference of imports"`,
    )
    console.log(`git committed successfully!`)

    console.log(`Commands to run the project:`)
    console.log()
    console.log(`cd ${folder}`)
    console.log()
    console.log(`npm start`)
    console.log()
    console.log(`Happy Hacking! 🚀`)
  } catch (error) {
    console.log(error)
  }
}

/** Prompter using inquirer to set the Project name */
function prompter() {
  inquirer
    .prompt([
      {
        name: 'projectName',
        message: 'What is the name of your project?',
      },
    ])
    .then((answers) => {
      folderName = answers.projectName
      setup(folderName)
    })
}

prompter()
