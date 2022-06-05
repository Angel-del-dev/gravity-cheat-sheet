import { formatCode } from "./FormatCode.js";

export function formattingLibrary()
{
    return {
        body: (`
            <div>
                <div id="formatting_library" class="secondary-title">Formatting library</div>
                <div>The "formatting" library does not only format strings, but also arrays and has other methods that have nothing to do with formatting</div>
                <b>Remove delimiters from string</b>
                First, we need to create an array of delimiters that we want to remove from a string
                ${formatCode(`
                    $delimiters = ["-","_","/",".",",","#"];
                    $str = "what-a_cool/library.you,got#there";
                `)}
                We need to call <code>Entity</code>
                ${formatCode(`
                    $str_format = Entity::cleanString($delimiters, $str)
                    /*
                    * $str_format, will have the previous string with a space where
                    * the given delimiters were before
                    */
                `)}
                A third parameter can be passed to format the result,
                <i>Possible formats:</i>
                ${formatCode(`
                    "first_up",     // Capitalize the first letter of the string
                    "uppercase",    // Transform the string to uppercase
                    "lowercase",    // Transform the string to lowercase
                    "cammel",       // Capitalize the first letter of each word
                    "pascal",       // Capitalize the first letter of each word and join the words
                    "spaces",       // Separates the words with a space(Default)
                    "slash",        // Separates the words with slashes
                    "cobra",        // Separates the words with underscores
                    "dash",         // Separates the words with dashes
                    "dot"           // Separates the words with dots
                `)}
                <b>Check how many times a character repeats in a string</b>
                ${formatCode(`
                    // $occurrences will be 2
                    $str = "what-a_cool/library.you,got#there";
                    $occurrences = Entity::howManyOccurrences($str, "h");
                `)}
                <b>From array to list(key => value)</b>
                Sometimes, we get a two-dimentional array, but we need to format it as a list
                ${formatCode(`
                    /**
                     * Previous array: 
                     * [
                     *  ["name"=>"test1", "details"=>"details1"],
                     *  ["name"=>"test2", "details"=>"details2"]
                     * ]
                     */
                    $arrayAssoc = Entity::arrayToAssociative($array, "name"); // "name" is the key we want as our primary key
                    /**
                     * New array
                     * [
                     *  "test1" => ["details" => "details1"],
                     *  "test2" => ["details" => "details2"]
                     *  ...
                     * ]  
                     */
                `)}
                <b>Check if all keys are identical</b>
                ${formatCode(`
                    // Returns 0 or 1
                    Entity::isArrayIdenticalWithItself($params)
                    /**
                     * For example this will be true
                     * [
                     *  ["num" => 1, "test" => 2],
                     *  ["num" => 3, "test" => 3]
                     * ]
                     */ 
                     /**
                      * For example this will be false
                      * [
                      *  ["num" => 1, "car" => 2],
                      *  ["door" => 3, "test" => 3]
                      * ]
                      */ 
                `)}
                <b>Pretty printing an array(Development purposes)</b>
                ${formatCode(`
                    Entity::prettyPrintJson($array);
                `)}
            </div>
        `)
    }
}