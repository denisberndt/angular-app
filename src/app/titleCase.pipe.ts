import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
    name: 'titleCase1'
})
export class TitleCasePipe1 implements PipeTransform {
    transform(value: string) {
        if(!value)
            return null;

        let preposition = ['of', 'the']
        let words = value.split(' ');
        let final = ''

        for (var i = 0 ; i < words.length; i++){
            if ( i > 0 && preposition.includes(words[i].toLowerCase())) {
                words[i] = words[i].toLowerCase();
            } else {
                words[i] = words[i].substring(0,1).toUpperCase() + words[i].substring(1).toLowerCase();
            }

            final = final + ' ' + words[i]
        }



        return final;
    }
}

