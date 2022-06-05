export function introduction()
{
    return {
        body: (`
             <div>
                <div id="introduction" class="secondary-title">Introduction</div>
                <div>
                    Gravity is a full stack (PHP and Javascript) framework can be used in 3 different ways:
                    <ul>
                        <li>Json api rest</li>
                        <li>Api with custom view system</li>
                        <li>Api with js components</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div>
                <div id="mvcc" class="secondary-title">
                    MVCC aproach
                </div>
                <div>
                    M(odel) V(iew) C(omponent) C(ontroller) is a new aproach when developing web apps, using this method, every html element should be placed with javascript with <a href="#component">GravityJs</a>
                </div>
            </div>
        `),
    }
}