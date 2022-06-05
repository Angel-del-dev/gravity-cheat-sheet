import { formatCode } from "./FormatCode.js";

export function env()
{
    return {
        body: (`
            <div>
                <div id="env">Env</div>
                <div>The <code>.env</code> file can be found in the route of the project</div>
                <b id="cred">Database credentials</b>
                ${formatCode(`
                    MYSQL_HOST=localhost
                    MYSQL_USER=root
                    MYSQL_PASSWORD=
                    MYSQL_DATABASE=
                    // User table is the table Gravity will use for Auth
                    MYSQL_USER_TABLE=user
                `)}
                <b id="back_devmode">Development mode variables</b>
                ${formatCode(`
                    // When set to true, every single query(Executed with gravity mysql library) will 
                    // Create a log with the query string in 'logs/mysql'
                    MYSQL_LOG_AFTER_QUERY=true
                `)}
                <b id="extension">Extension of the views</b>
                ${formatCode(`
                    // The default extension is gravity.phtml
                    // It is recommended to use an extension that allows php code
                    // After setting the VIEW_EXTENSION variable, every view MUST have that extension
                    VIEW_EXTENSION=gravity.phtml
                `)}
            </div>
        `),
    }
}