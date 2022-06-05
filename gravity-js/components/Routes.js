import { formatCode } from "./FormatCode.js";

export function routes()
{
    return {
        body: (`
            <div>
                <div id="routes" class="secondary-title">Routes</div>
                <div>
                    The routes must be written in the routes folder, if its a regular route with no middleware, it must be placed in <code>routes/routes.php</code> <br />
                    The available route methods are <code>GET</code> and <code>POST</code> <br />
                    The class <code>Router</code> must be called followed the method you want to assign it
                    ${formatCode(`
                        Router::get('/home', function() {
                            // Some code
                        });

                        Router::post('/home', function() {
                            // Some code
                        });
                    `)}
                    Gravity offers a way to use dynamic urls, and it must include the character <code>':'</code> before and after the dynamic parameter
                    ${formatCode(`
                        Router::get('/home/:id:', function() {
                            // Some code
                        });
                    `)}
                    Another aproach is calling a controller instead of creating an anonymous function: <br />
                    To use this alternative, an array should be given as the second argument, having the class in the first index and the function(as a string) in the second index(Do not forget to import the class)
                    ${formatCode(`
                        Router::get('/home', [ClassName::class, 'method_name']);
                    `)}
                    The 404 route handler can be found in <code>routes/route-not-found.php</code>
                </div>

            </div>
        `),
    }
}