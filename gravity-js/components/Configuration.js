import { formatCode } from "./FormatCode.js";

export function config()
{
    return {
        body: (`
            <div>
                <div id="config" class="secondary-title">Component configuration</div>
                <div>
                    In <code>public/gravity-js/config/config.js</code> we can find an object containing booleans
                    ${formatCode(`
                        export const config = {
                            // When set to true, development warnings will be displayed(Do not forget to change it before deploying it)
                            dev_mode : true,
                        };
                    `)}
                </div>
            </div>
        `),
    }
}