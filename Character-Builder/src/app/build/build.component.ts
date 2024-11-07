import { Component, inject, signal, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BuildService } from '../build.service';
import { CommonModule } from '@angular/common';
import { CharacterData } from '../build.service';

@Component({
  selector: 'app-build',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './build.component.html',
  styleUrl: './build.component.css'
})

export class BuildComponent {
  eye = signal('');
  hasHammer = signal(false);
  mouth = signal('');
  rightHand = signal('');
  hasTail = signal(false);
  imageUrl = signal('');

  private readonly buildService = inject(BuildService);

  async BuildCharacter() {
    const characterData: CharacterData = {
      eye: this.eye(),
      hasHammer: this.hasHammer(),
      mouth: this.mouth(),
      rightHand: this.rightHand(),
      hasTail: this.hasTail()
    }
    try {
      const res = await this.buildService.getCharacterData(characterData);
      this.imageUrl.set(res.url);
      console.log('Character built successfully:', this.imageUrl());
    } catch (error) {
      console.error('Error building character:', error);
    }
  }

  Randomize(){
    const eyeTypes = ['NoEye', 'HalfOpen', 'Closed', 'Open'];
    const mouthTypes = ['NoMouth', 'Happy', 'Normal', 'Unhappy'];
    const rightHandTypes = ['NoHand', 'Normal', 'Victory'];
    const randomRightHandIndex = Math.floor(Math.random() * rightHandTypes.length);
    const randomEyeIndex = Math.floor(Math.random() * eyeTypes.length);
    const randomMouthIndex = Math.floor(Math.random() * mouthTypes.length);

    this.eye.set(eyeTypes[randomEyeIndex]);
    this.rightHand.set(rightHandTypes[randomRightHandIndex]);
    this.mouth.set(mouthTypes[randomMouthIndex]);
    this.hasHammer.set(Math.random() < 0.5);
    this.hasTail.set(Math.random() < 0.5);
  }
}

