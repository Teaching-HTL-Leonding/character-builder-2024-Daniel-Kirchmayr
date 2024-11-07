import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

type CharacterResponse =
  {
    url: string;
  };

export type CharacterData = {
  eye: string;
  hasHammer: boolean;
  mouth: string;
  rightHand: string;
  hasTail: boolean;
};

@Injectable({
  providedIn: 'root'
})
export class BuildService {
  private httpClient = inject(HttpClient);

  getCharacterData(characterData: CharacterData): Promise<CharacterResponse> {
    return firstValueFrom(this.httpClient.post<CharacterResponse>('http://localhost:5110/build-image-url', characterData));
  }

  constructor() {}
}
