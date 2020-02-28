
export class Utils {
    public static phonenumber(inputtxt: string): boolean
    {
        var phoneno = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if(inputtxt.match(phoneno))
        {
            return true;
        } else {
            return false;
        }
    }
}
