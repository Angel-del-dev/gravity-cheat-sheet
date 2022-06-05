import { formatCode } from "./FormatCode.js";

export function models()
{
    return {
        body: (`
            <div>
                <div id="models" class="secondary-title">Models</div>
                <div>Models are nothing more than a way to reuse some code easily, tipically used in peristing data to a database so that we can reuse the columns of the table(for example) instead of having to write them manually multiple times</div>
                ${formatCode(`
                    class UserModel {
                        public static $table = "user";
                        public static $key = "";
                        public static $columns = ['id', 'name'];
                    }
                `)}
            </div>
        `)
    }
}