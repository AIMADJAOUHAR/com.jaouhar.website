$(() => {

    clear()
    initCommandLine()
    initListeners()

});



function initCommandLine() {
    unfocusLastCommandLine()
    $('body').append('<div class="row"><div>')
    const row = $('.row:last-child')
    getPrompt(row)
    getCommandLine(row)
    $('input:last-child').focus()
}

function getPrompt(row) {
    const prompt = 'root@jaouhar:~#';
    row.append('<div class="prompt col">' + prompt + '</div>')
}

function getCommandLine(row) {
    const commandLine = '<input class="commandLine col" />';
    row.append(commandLine)
}

function unfocusLastCommandLine() {
    $('input').each(function() {
        $(this).attr('disabled', 'disabled')
    });
}

function clear() {
    $('body').html('');
}

function initListeners() {
    $('body').on('keypress', function(e) {
        if (e.keyCode == '13') {
            const inputs = $('input')
            const input = $(inputs)[$(inputs).length - 1]
            exec($(input).val())
        }
    })
    $('html').on('click', function(e) {
        $('input:last-child').focus()
    })
}

function exec(cmd) {
    if (cmd == 'help') {
        menu_cmd()
    } else if (cmd === 'clear') {
        clear()
    } else {
        not_found_cmd(cmd)
    }

    initCommandLine();
}