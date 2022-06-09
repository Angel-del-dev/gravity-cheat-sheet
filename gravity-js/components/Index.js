export function index()
{
    return {
        body: (`
            <ul>
                <li><a href="#introduction">Introduction</a></li>
                <li><a href="#mvcc">What is the MVCC aproach?</a></li>
                <li><a href="#routes">Routes</a></li>
                <li><a href="#auth">Auth</a></li>
                <li><a href="#controllers">Controllers</a></li>
                <ul>
                    <li><a href="#redirect">Redirect to route</a></li>
                    <li><a href="#return_view">Return a view</a></li>
                </ul>
                <li><a href="#models">Models</a></li>
                <li><a href="#persist">Database persisting</a></li>
                <ul>
                    <li><a href="#raw">Raw</a></li>
                    <li><a href="#select">Select</a></li>
                    <li><a href="#update">Update</a></li>
                    <li><a href="#insert">Insert</a></li>
                    <li><a href="#delete">Delete</a></li>
                </ul>
                <li><a href="#file">File management</a></li>
                <ul>
                    <li><a href="#create_log">Create a log</a></li>
                    <li><a href="#read">Read contents</a></li>
                    <li><a href="#write">Write</a></li>
                    <li><a href="#last_access">Get last access</a></li>
                </ul>
                <li><a href="#data_types">New data types</a></li>
                <li><a href="#formatting_library">Formatting library</a></li>
                <li><a href="#reqRes">Request && Response</a></li>
                <ul>
                <li><a href="#req">Request</a></li>
                <li><a href="#res">Response</a></li>
                </ul>
                <li><a href="#env">.env</a></li>
                <ul>
                <li><a href="#cred">Database credentials</a></li>
                <li><a href="#back_devmode">Backend development mode</a></li>
                <li><a href="#extension">Extension</a></li>
                </ul>
                <h2>View aproach</h2>
                <li><a href="#views">Views</a></li>
                <ul>
                    <li><a href="#variables">Variables</a></li>
                    <li><a href="#php_public_path">Get public path</a></li>
                </ul>
                <h2>Component aproach</h2>
                <li><a href="#component">Component</a></li>
                <ul>
                    <li><a href="#component-register">Registering a component</a></li>
                    <li><a href="#call_component">Call a component</a></li>
                    <li><a href="#component_variables">Component arguments</a></li>
                    <li><a href="#c_syntax">Basic component syntax</a></li>
                    <li><a href="#events">Events</a></li>
                    <li><a href="#js_available_methods">Available methods</a></li>
                </ul>
                <li><a href="#change_title">Change title</a></li>
                <li><a href="#config">Components configuration</a></li>
                <li><a href="#videoPlayer"><span style="color:red;">(Experimental feature)</span> Advanced video player</a></li>
            </ul>
        `),
    }
}