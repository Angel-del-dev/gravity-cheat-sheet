import { formatCode } from "./FormatCode.js";

export function controller()
{
    return {
        body: (`
            <div>
                <div id="controllers" class="secondary-title">Controllers</div>
                <div>
                    If a route gets called, it will automatically call the given method.<br />
                    In case of having a dynamic parameter in the url, giving a value through post or both, a <code>Request</code> object will be incorporated as a function argument <br />
                    All return values will be returned as a <code>Response</code> json object unless its a redirect or a view(that exists) <br />
                    <b>All controller funcions that are called from a route must be static</b>
                </div>
            </div>
            <hr />
            <div>
                <div id="redirect" class="secondary-title">Redirect to other routes from controller</div>
                <div>There's a class <code>Redirect</code> which we can call to acomplish the result(The redirect must be returned)</div>
                ${formatCode(`
                    return Redirect::send('/home');
                `)}
            </div>
            <hr />
            <div>
                <div id="return_view" class="secondary-title">Returning views</div>
                <div>The class <code>View</code> has a method <code>call</code>, we can return this method to refer as a view</div>
                ${formatCode(`
                    return View::call('name-of-the-view');
                `)}
                <div>We can also return values within views as an array. The array <b>must</b> be a list(key => value) and the <code>key</code> will be the name of the variable that we will use in the view</code></div>
                ${formatCode(`
                    return View::call('name-of-the-view', [
                        "greet" => "Hello",
                        "refer" => "World!"
                    ]);
                `)}
            </div>
        `)
    }
}