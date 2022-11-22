const soap = require('soap')
const fs = require('fs/promises')
const prompt = require('prompt-sync')({ sigint: true });
const wsdl = 'C:\\Users\\ayoub\\OneDrive\\Documents\\Assignments\\Fall 2022\\Adv. Distributed Programming Paradigms\\Programming for Integration\\RemoteAccessTool XS\\app\\src\\main\\resources\\RemoteServerService.wsdl'
const url = "localhost:9000/remote"

async function screenshot(num) {
    const client = await soap.createClientAsync(wsdl)
    let response = await client.screenshotAsync(url)
    let result = response[0].return
    let dataArray = Uint8Array.from(Buffer.from(result, 'base64'))
    let date = new Date().toISOString().replaceAll(':', '');
    await fs.writeFile(`screenshots/screenshot_${date}.jpg`, dataArray)
    console.log(`Command ${num} (screenshot) finished !`)

}

async function processes(num) {
    const client = await soap.createClientAsync(wsdl)
    let response = await client.getProcessListAsync(url)
    let result = response[0].return
    let date = new Date().toISOString().replaceAll(':', '');
    let data = result.join('\n')
    await fs.writeFile(`processes/processes_${date}.txt`, data)
    console.log(`Command ${num} (processes) finished !`)
}
async function reboot(num) {
    const client = await soap.createClientAsync(wsdl)
    await client.systemRebootAsync(url)
    console.log(`Command ${num} (reboot) finished !
    Rebooting Remote Server...`)
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
