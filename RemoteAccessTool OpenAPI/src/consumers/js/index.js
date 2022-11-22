const fetch = require('node-fetch')
const prompt = require('prompt-sync')({ sigint: true });
const fs = require('fs/promises');

const baseURL = 'http://localhost:8080/remote'
const processes = async (num) => {
    fetch(baseURL + '/processes')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            data = data.join('\n')
            let date = new Date().toISOString().replaceAll(':', '');
            fs.writeFile(`processes/processes_${date}.txt`, data)
            console.log(`Command ${num} (processes) finished !`)
        })
        .catch((error) => console.log(error))
}

const screenshot = async (num) => {
    fetch(baseURL + '/screenshot')
        .then((response) => response.blob())
        .then((data) => data.arrayBuffer())
        .then((buffer) => {
            let dataArray = new Uint8Array(buffer)
            let date = new Date().toISOString().replaceAll(':', '');
            fs.writeFile(`screenshots/screenshot_${date}.png`, dataArray)
            console.log(`Command ${num} (screenshot) finished !`)
        })
        .catch((error) => console.log(error))
}

const reboot = async (num) => {
    fetch(baseURL + '/reboot')
        .then((response) => response.json())
        .then((data) => {

            console.log('Rebooting Remote Server')
            console.log(`Command ${num} (reboot) finished !`)
        })
        .catch((error) => console.log(error))
}


const functions = {
    "screenshot": screenshot,
    1: screenshot,
    "processes": processes,
    2: processes,
    "reboot": reboot,
    3: reboot,
}

function menu(num) {
    console.log('\n')
    console.log(`What value do you want for command ${num++}?\n`)
    console.log('1 | screenshot')
    console.log('2 | processes')
    console.log('3 | reboot')
    console.log('\nOR\n')
    console.log('4 | stop: to stop and execute all commands asynchronously')
    console.log('0 | quit\n')
    let command = prompt('Your choice: ')
    console.log('\n')
    return command
}

function main() {
    console.log('<-------- Remote Access Tool -------->')
    console.log('In this program, you get to specify a sequence of commands to ' +
        'issue to the remote server located in localhost:8080/remote. The commands will then' +
        'run in an asynchronous function')
    let num = 1
    let commands = []
    while (true) {
        let command = menu(num)
        num++
        if (command == 4 || command == 'stop')
            break

        if (command == 0 || command == 'exit')
            process.exit(0)

        let procedure = functions[command]
        if (!procedure)
            console.log("Please enter a valid command")
        else
            commands.push(functions[command])
    }
    console.log('<------------------------------------>')

    console.log('[] Running all commands asynchronously...\n\n')
    let promises = []
    commands.forEach((command, num) => {
        promises.push(command(num + 1))
    });
    Promise.all(promises).then(() => {
        console.log('<-------- Remote Access Tool -------->')
        console.log('\n\nFinished Executing All Commands\n\n')
        console.log('<------------------------------------>')
    })
}

main()
