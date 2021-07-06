#!/usr/bin/env node
import fs from 'fs'
import {promisify} from 'util'
import {join} from 'path'
import {appendFileSync, unlinkSync, rmdirSync} from 'fs'
import {exec} from 'child_process'
import chalAnimation from 'chalk-animation'

/** Steps:
 * 1- create folder
 * 2- copy files to created folder
 * 3- run npm install
 * 4- run git init
 */

const rainbow = chalAnimation.rainbow('VAM Digital', 2)

const defaultFolderName = 'vam-nxbase'
const initWorkingDirectory = process.cwd()

let folderName = defaultFolderName
if (process.argv.slice(2).length > 0) {
  folderName = process.argv.slice(2)[0]
}

const folderPath = join(initWorkingDirectory, folderName)

const repo = 'https://github.com/vamdigital/nx-vamdigital.git'
console.log(`downloadin files from repo ${repo} 🚀`)

const execPromise = promisify(exec)
async function runShellCmd(command) {
  try {
    const {stdout, stderr} = await execPromise(command)
    console.log(stdout)
    console.log(stderr)
  } catch {
    ;(err) => {
      console.error(err)
    }
  }
}

async function setup() {
  try {
    await runShellCmd(`git clone --depth 1 ${repo} ${folderName}`)
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

      //Change Items
      result['name'] = folderName
      result['description'] = ''
      result['version'] = '0.0.0'

      // stringify back
      result = JSON.stringify(result)

      // write back to the file
      fs.writeFile(
        `${folderPath}/package.json`,
        result,
        'utf8',
        function (err) {
          if (err) return console.log(err)
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
    const newDirName = `${folderPath}/apps/${folderName}`
    const oldDirE2E = `${folderPath}/apps/starter-e2e`
    const newDirE2E = `${folderPath}/apps/${folderName}-e2e`

    try {
      fs.renameSync(oldDirName, newDirName)
      fs.renameSync(oldDirE2E, newDirE2E)
    } catch (err) {
      console.log(err)
    }

    // Changing the instance of starter to folderName
    console.log('Updating references....')
    await runShellCmd(
      `git grep -lz starter | xargs -0 sed -i '' -e 's/starter/${folderName}/g'`,
    )
    console.log('References updated')

    await runShellCmd(`npx rimraf ./.git`)

    appendFileSync('.gitignore', '\r\ndist', 'utf8')
    appendFileSync('.gitignore', '\r\n.env', 'utf8')

    /** remove extra files and folders from disk. we don't need it anymore */
    unlinkSync(join(process.cwd(), 'README.md'))
    unlinkSync(join(process.cwd(), 'bin', 'setup.js'))
    rmdirSync(join(process.cwd(), 'bin'))

    await runShellCmd(`git init && git add . && git commit -am "init commit"`)
    console.log(`new git repo initialized successfully!`)
    console.log(`Commands to run the project:`)
    console.log()
    console.log(`cd ${folderName}`)
    console.log()
    console.log(`npm start`)
    console.log()
    console.log(`Happy Hacking! 🚀`)
  } catch (error) {
    console.log(error)
  }
}

setup()
