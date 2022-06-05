import { classes as c } from "./config/classes.js";
import { gravity as g } from "./config/gravity.js";

(function core() {
  
  const gM = new g();

  const [ cN, mN, args ] = gM.getDataFromView();

  if(cN !== null && mN !== null)
  {
    if (c[cN]) {
      const classInstance = new c[cN]();
  
      if (classInstance[mN]) {
        const structure = classInstance[mN](args);
        if(structure === undefined) {
          gM.toWarn(`Component : '${cN}' does not return a value`);
          return;
        }
  
        const body = structure['body'];
        const events = structure['events'] ?? [];
   
        if (structure === undefined) {
         gM.toWarn(`Method : '${mN}' from class :'${cN}' returns nothing`);
         return;
        }
        gM.toBody(body);
        gM.toEvents(events);

        gM.removeSensitiveHTMLElements();

      } else {
        throw new Error(`There's no such method : '${mN}' in class : '${cN}'`);
      }
    } else {
      throw new Error(`There's no such class : '${cN}'`);
    }
  }else
  {
    throw new Error(`'cM' element must exist when using 'MVCC' aproach, read the documentation to learn about it`);
  }
})();
