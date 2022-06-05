import { formatCode } from "./FormatCode.js";

export function dataType()
{
    return {
        body: (`
            <div>
                <div id="data_types" class="secondary-title">New dataTypes</div>
                <div>There's currently 2 new dataTypes(Both arrays): fixedTypeArray and fixedLengthArray</div>
                <b>Fixed type array</b>
                <div>
                    The fixed type array only allows one type of input predifined, that means when an array its created, we assign a type and every time we try to append data, it checks if the data is the same type as what the array contains
                </div>
                <div>Different contaiable types</div>
                <code>I(integer), S(string), D(double), A(array)</code>
                <div>We use <code>softAppend</code> method to append new data while checking the types</div>

                ${formatCode(`
                    $array = new FixedTypeArray('S');
                    $array->softAppend('string1');
                    $array->softAppend('string2');
                    // In this case the following lines will throw an error as they are different types
                    $array->softAppend(1);
                    $array->softAppend([1,2,3]);
                    $array->softAppend(["string1","string2","string3"]);
                `)}
                <b>Fixed length array</b>
                <div>
                    The fixed length array data type only allows a limit amount of values
                </div>
                ${formatCode(`
                    // 3 is the limit of values
                    $array = new FixedLengthArray(3);
                    $array->softAppend('test');
                    $array->softAppend(2);
                    $array->softAppend(4);
                    // The following line will throw an error as the amount 
                    // of values would exceed the limit given
                    $array->softAppend(4);
                `)}
            </div>
        `)
    }
}