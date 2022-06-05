import { formatCode } from "./FormatCode.js";

export function database()
{
    return {
        body: (`
            <div>
                <div id="persist" class="secondary-title">Database persisting</div>
                <b>This functionality should be avoided in a real world project as it hasn't been properly tested and lacks security mesures. Try using other orm instead</b>
                <div>The following code examples, are queries with ALL of the posible options</div>
                
                <b id="raw">Execute any query with no restrictions or security</b>
                
                <pre><code class="language-php">
                    Model::_raw("select * from users");
                </code></pre>

                <b id="select">Select with all the possibilities</b>
                ${formatCode(`
                    $result = Model::get(
                        table: ContentModel::$table,
                        columns: ContentModel::$columns,
                        limit: 10,
                        join: [Methods::innerJoin(ContentModel::$table, 'users', 'owner', 'id', 'u')],
                        orderBy: Methods::orderBy('content.id', 'desc'),
                        groupBy: Methods::groupBy('content.id')
                    );
                `)}
                <div>The <code>Having</code> method also exists</div>
                <div>Different joins</div>
                ${formatCode(`
                    $inner = Methods::innerJoin('');
                    $left = Methods::leftJoin('');
                    $right = Methods::rightJoin('');
                `)}
                <b id="update">Update</b>
                <div>The keys in values array must be identical</div>
                ${formatCode(`
                    /**
                    * Returns the amount of affected rows
                    */
                    $result = Model::update(
                        table: UserModel::$table,
                        values: Methods::set(
                            ['name' => 'Mathew'],
                            ['name' => 'Roger']
                        )
                    );
                `)}
                <b id="insert">Insert</b>
                <div>Keys must be identical</div>
                ${formatCode(`
                    Model::create(
                        UserModel::$table,
                        [
                            ['id' => 1, 'name' => '"Lori"'],
                            ['id' => 2, 'name' => '"Albert"'],
                            ['id' => 3, 'name' => '"Carol"']
                        ] 
                    );
                `)}
                <b id="delete">Delete</b>
                <div>The conditions for the where method must be separated by spaces</div>
                ${formatCode(`
                    $result = Model::delete(
                        table: TestModel::$table,
                        where: Methods::where([
                            ['id = 2', 'and'],
                            ['name = "Mark"', 'or'],
                            ['name = "Roger"']
                        ])
                    );
                `)}
            </div>
        `)
    }
}