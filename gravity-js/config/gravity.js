import { config as c } from './config.js';

export class gravity {

    #dev_mode_var_name = 'dev_mode';

    #checkIfDevMode () {
        return c[this.#dev_mode_var_name];
    }

    toBody(el)
    {
        const body = document.getElementsByTagName('body')[0];
        // From string of elements to dom tree elements
        const domEl = document.createRange().createContextualFragment(el);
        body.appendChild(domEl);
    }

    toWarn(msg = 'Generic warning message')
    {
        if(this.#checkIfDevMode()) console.warn(msg);
    }

    toErr(msg = 'Generic error message')
    {
        if(this.#checkIfDevMode()) console.error(msg);
    }

    toLog(msg = 'Generic log message')
    {
        if(this.#checkIfDevMode()) console.log(msg);
    }

    toEvents(events)
    {
        for(let e of events)
        {
            e();
        }
    }

    getDataFromView()
    {
        const cM = document.getElementsByTagName('cM')[0];
        if(cM === undefined) return [ null, null, null ];
        
        const cN = cM.getAttribute('instance');
        const mN = cM.getAttribute('method');
        const rawArgs = document.getElementsByTagName('data');
        const args = this.formatArgs(rawArgs);

        return [ cN, mN, args ];

    }

    formatArgs(rawArgs)
    {
        const args = {};
        for(let arg of rawArgs)
        {
            const value = arg.getAttribute('value');
            try{
                args[arg.getAttribute('name')] = JSON.parse(value);
            }catch(e){
                args[arg.getAttribute('name')] = value;
            }
        }

        return args;
    }

    removeSensitiveHTMLElements()
    {
        const cM = document.querySelectorAll('cM');
        const data = document.querySelectorAll('data');
        const cTitle = document.querySelectorAll('cTitle');

        this.#removeClassMethods(cM);
        this.#removeData(data);
        
        this.changeTitle(cTitle);

        if(this.#checkIfDevMode()){

            this.#displayDevModeWarning();
        }
    }

    #displayDevModeWarning()
    {
        this.toWarn(`Development messages are only visible on development mode, to toggle development mode change the conditional in public/gravity-js/config/config.js or search development mode on the documentation page`);
    }

    #removeClassMethods(cM)
    {
        for(let c of cM)
        {
            c.remove();
        }
    }

    #removeData(data)
    {
        for(let d of data)
        {
            d.remove();
        }
    }

    changeTitle(cTitleList)
    {
        if(cTitleList.length < 1) return;
        if(cTitleList.length > 1) throw new Error(`Only one 'cTitle' element must exist per page`);

        const cTitle = cTitleList[0];

        if(cTitle.hasAttribute('default')) return;

        const title = document.querySelectorAll('title')[0];

        title.innerHTML = cTitle.getAttribute('value');
    }
}

export function routeToAssets(route)
{
    return `../${route}`;
}