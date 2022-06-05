export function formatCode(code, lang = "php")
{
    return (`
    <pre>
        <code class="language-${lang}">
            ${code}
        </code>
    </pre>
    `);
}