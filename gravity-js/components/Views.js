import { formatCode } from "./FormatCode.js";

export function escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
  }

export function views()
{
    const parsedHtml = escapeHtml('<div><?=$varName?></div>');
    return {
        body: (`
            <div>
                <div class="secondary-title" id="views"></div>
                <b id="variables">Variables</b>
                <div>
                    When using views, we have the posibility to use variables set in the controller.
                    By simply writting them inside a HTML element
                    ${formatCode(parsedHtml)}
                </div>
                <b id="php_public_path">Get public path in view</b>
                <div>Simply call the following method. Bare in mind, the function will concatenate the given route from the <code>public</code> folder</div>
                ${formatCode(`assetRoute($route)`)}
            </div>
        `),
    }
}