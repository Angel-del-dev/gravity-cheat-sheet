import { formatCode } from "./FormatCode.js"
import { escapeHtml } from "./Views.js"

export function component()
{
    return {
        body: (`
            <div>
                <div class="secondary-title" id="component">Components aproach</div>
                <div>
                    To use this aproach, we must include Gravity-js.
                    Gravity-js must be imported as a <b>module</b>
                    ${formatCode(escapeHtml(`<script src="<?=assetRoute('gravity-js/core.js')?>" type="module"></script>`))}
                    When using this aproach, it is recommended to use the require functionalities to create a generic html head element with all the links to our css or scripts and including them in our views(So the code doesn't repeat itself)
                    <br />
                    There are two types of components: Primary components, Secondary components
                    The primary components are thoose which are directly called from a view(Must be a class), and the secondary components are the ones called from a Primary view(Should be a function)
                </div>
                <br />
                <b id="component-register">Registering a component</b>
                <div>
                    To make a component usable, we need to add it to <code>public/gravity-js/config/classes.js</code>
                    ${formatCode(`
                        // Do not forget to import it

                        export const classes = {
                            // name_of_how_its_called_from_the_view : class_reference
                            Packets : Packets,
                        }
                    `, 'js')}
                </div>
                <hr />
                <b id="call_component">Calling a Javascript component from a view</b>
                <div>
                    All the javascript components must be in <code>public/gravity-js/components</code> folder
                    To call a Primary component, an html element must be created in the desired view(It has to have the following attributes and the tag must be the same)
                    ${formatCode(escapeHtml(`<cM instance="name_of_the_class_we_want_to_call" method="method_of_the_class"></cM>`))}
                    When all the components of a view are interpreted, the <code>cT</code> element is removed
                </div>
                <hr />
                <b id="component_variables">Component arguments</b>
                <div>
                    At some point, we may need to interact with data that comes from the backend, to do that, we can give the data through function arguments, and to set thoose, we need to create <code>data</code> elements
                    ${formatCode(escapeHtml(`<data name="description" value="<?=$description?>"></data>`))}
                    There's no limit of <code>data</code> elements, as the data will be given to the component as an object having the <code>name</code> as the key and the <code>value</code> as the value.
                    To access theese values, there are two options.
                    <b>As an object</b>
                    ${formatCode(`
                        public static function function_name(args)
                    `, 'js')}
                    <b>As different variables</b>
                    The name of the variable, must be the exact same as the <code>name</code> attribute, there are no limit of variables that we can pass and must be separated by a comma when using it
                    ${formatCode(`
                        public static function function_name({ description })
                    `, 'js')}
                    When all the components of a view are interpreted, all <code>data</code> elements are removed
                    <b id="c_syntax">Component syntax</b>
                    A component must return at least an object containing a body as a key and a string as the value. The string will be parsed into HTML DOM elements and will be appended to the body.
                    ${formatCode(`
                        function_name ({ description }) {
                            // Including a secondary component
                            const navObj = nav("Hello").body;
                            return {
                                body : (\`
                                    \${navObj}
                                    <div id='test'>\${description}</div>
                                \`),
                            };
                        }
                    `)}
                    <hr />
                    <b id="events">Component events</b>
                    <div>
                        As this aproach changes the flux in which the code is being executed, if we need to call a function every time an user interacts with an element, we need to use a different method.
                        For example, lets say we have a function that gets an element by id and adds an event listener to an element, to do this, when returning the object with the body, we need to add another key and value. This time being events. But instead of calling the function, we need to pass the reference of the function
                        ${formatCode(`
                            function_name ({ description }) {
                                // Including a secondary component
                                const navObj = nav("Hello");
                                return {
                                    body : (\`
                                        \${navObj.body}
                                        <div id='test'>\${description}</div>
                                    \`),
                                    events : [
                                        // Returning a function in the same class without the ()
                                        this.clickTest,
                                        // Returning the events of the secondary component navObj
                                        ...navObj.events
                                    ],
                                };
                            }
                        `)}
                        <hr />
                        <b id="js_available_methods">Especial component methods</b>
                        <div>
                            As in the backend, there's a function to get the path to <code>public</code>
                            ${formatCode(`
                                routeToAssets()
                            `, 'js')}
                            We can use this function to look for an image
                            ${formatCode(escapeHtml(`<img src="\${routeToAssets('img/imgTest.jpg')}">`))}
                        </div>
                        <hr />
                        <b id="change_title">Changing the title dynamically and automatically</b>
                        <div>
                            When using the component aproach, we are probably requiring a main view that contains the <code>head</code> element, and to change the title of the page, we would have to get the element and change the name, but with Gravity-js, this is very simple.
                            <br />
                            In the view, we can create a HTML element to do it automatically
                            <br />
                            <b>Only one <code>cTitle</code> element can exist per view</b>
                            ${formatCode(escapeHtml(`
                            // if it has a value, the title will be changed to this value
                            <cTitle value="Test"></cTitle>
                            // if it has a default attribute, nothing will happen and the title will remain the same
                            <cTitle default></cTitle>
                            `))}
                        </div>
                    </div>
                </div>
            </div>
        `),
    }
}