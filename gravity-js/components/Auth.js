import { formatCode } from "./FormatCode.js";

export function auth()
{
    return {
        body: (`
            <div>
                <div id="auth" class="secondary-title">Auth</div>
                <div>Routes that require an authentication must be placed in <code>routes/auth-routes.php</code></div>
                There's also a way to access authentication methods with the class Auth <br />

                <b>Creating a session</b>
                <div>This function can be used to log in users</div>
                ${formatCode(`
                    Auth::_createSession([
                        'user' => 'userName',
                        'id' => '1'
                    ]);
                `)}
                <b>Checking if a session exists</b>
                ${formatCode(`
                    // Returns 0 or 1
                    Auth::check();
                `)}
                <b>Get the Authentication object</b>
                ${formatCode(`
                    Auth::usr();
                `)}
            </div>
        `)
    }
}