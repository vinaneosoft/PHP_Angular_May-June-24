import { AbstractControl, FormGroup } from "@angular/forms";

export class CustomValidators {
    static compare(group:AbstractControl):{}|null{
        const pass=group.value.password; //group.get("password")?.value
        const cpass=group.value.cpassword;
        if(pass!=cpass)
                return {compare:true}
        else
            return null;
    }
}
