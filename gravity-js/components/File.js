import { formatCode } from "./FormatCode.js";

export function file()
{
    return {
        body: (`
            <div>
                <div id="file" class="secondary-title">File management</div>
                <b id="create_log">Creating a log</b>
                <div>A log contains the operation/message given and the exact date</div>
                ${formatCode(`
                    Log::create($operation, $route);
                `)}
                <b id="read">Read contents of file</b>
                ${formatCode(`
                    File::read($route);
                `)}
                <b id="write">Create or append to file</b>
                ${formatCode(`
                    File::createOrAppend($route, $text);
                `)}
                <b id="last_access">Get last access</b>
                ${formatCode(`
                    File::lastAccess($route, $format_of_the_date);
                `)}
            </div>
        `),
    }
}