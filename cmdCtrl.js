function hello_cmd(prompt) {

}

function menu_cmd(prompt) {
    $('body').append('<p>Commands:</p>')
    $('body').append('<p>whoami: </p>')
    $('body').append('<br>')
}

function help_cmd(prompt) {

}

function clear_cmd() {
    clear()
    initCommandLine()
    initListeners()
}

function not_found_cmd(cmd) {
    $('body').append('<p>' + cmd + ': command not found</p>')
}