import { auth } from "./Auth.js";
import { component } from "./Component.js";
import { config } from "./Configuration.js";
import { controller } from "./Controller.js";
import { database } from "./Database.js";
import { dataType } from "./DataType.js";
import { env } from "./Env.js";
import { file } from "./File.js";
import { footer } from "./Footer.js";
import { formattingLibrary } from "./FormattingLibrary.js";
import { index } from "./Index.js";
import { introduction } from "./Introduction.js";
import { models } from "./Models.js";
import { reqRes } from "./ReqRes.js";
import { routes } from "./Routes.js";
import { views } from "./Views.js";

export class Home 
{
    displayHome()
    {
        const iB = index().body;
        const introB = introduction().body;
        const routesB = routes().body;
        const authB = auth().body;
        const controllerB = controller().body;
        const modelB = models().body;
        const dbB = database().body;
        const fileB = file().body;
        const dataTypeB = dataType().body;
        const formattingLibraryB = formattingLibrary().body;
        const reqResB = reqRes().body;
        const envB = env().body;
        const viewB = views().body;
        const componentB = component().body;
        const componentConfigB = config().body

        const footerB = footer().body;

        return {
            body: (`
                <cTitle value="Gravity framework cheatsheet"></cTitle>
                <div class="wrapper">
                    <div class="container">
                        <div class="title">Gravity</div>
                        <div class="title-description">A full stack MVCC framework</div>
                        <div class="index">
                            ${iB}
                            <hr />
                            ${introB}
                            <hr />
                            ${routesB}
                            <hr />
                            ${authB}
                            <hr />
                            ${controllerB}
                            <hr />
                            ${modelB}
                            <hr />
                            ${dbB}
                            <hr />
                            ${fileB}
                            <hr />
                            ${dataTypeB}
                            <hr />
                            ${formattingLibraryB}
                            <hr />
                            ${reqResB}
                            <hr />
                            ${envB}
                            <hr />
                            ${viewB}
                            <hr />
                            ${componentB}
                            <hr />
                            ${componentConfigB}
                            <hr />
                            ${footerB}
                        </div>
                    </div>
                </div>
            `),
        }
    }
}