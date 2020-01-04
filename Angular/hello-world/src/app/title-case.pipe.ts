import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if (!value) return null;

    let words = value.split(' ');
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (i > 0 && this.isPrepositions(word))
        words[i] = words[i].toLowerCase();
      else
        words[i] = this.toTitleCase(word);
    }
    return words.join(' ');
  }

  //Convert to title case, first character of each word
  //Example word taken: the rise of planet of the apes
  private toTitleCase(words: string): string {
    return words.substr(0, 1).toUpperCase() + words.substr(1).toLowerCase();
  }

  //Make all prepositions to lowercase
  private isPrepositions(words: string): boolean {
    let prepositions = [
      'of',
      'the'
    ];
    return prepositions.includes(words.toLowerCase());
  }

}
