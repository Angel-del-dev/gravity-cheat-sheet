import { formatCode } from "./FormatCode.js";

export function reqRes()
{
    return {
        body: (`
            <div>
                <div id="reqRes" class="secondary-title">Request and response</div>
                <div>Request and response are identical objects which uses may vary</div>
                ${formatCode(`
                    Request::formatRequest($values);
                    Response::formatResponse($values);
                `)}
                <div>The output will be</div>
                ${formatCode(`
                    [
                        'response' => $values,
                        'timestamp' => new DateTime(),
                        'access_method' => $_SERVER['REQUEST_METHOD'],
                        'route' => $_SERVER['DOCUMENT_ROOT'],
                        'host' => $_SERVER['HTTP_HOST']
                    ]
                `)}
            </div>
        `),
    }
}