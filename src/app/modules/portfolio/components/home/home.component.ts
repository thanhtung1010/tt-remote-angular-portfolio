import { Component, OnInit } from '@angular/core';
import { IFloatItem, ISummaryExp } from '../../interface';

@Component({
  selector: 'tt-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  floatIcons: IFloatItem[] = [
    {
      name: 'avatar',
      type: 'svg',
      top: '50%',
      right: '5%',
      translateX: '0%',
      translateY: '-50%'
    },
    {
      name: 'tablet-screen',
      type: 'svg',
      top: '25%',
      left: '55%',
      translateX: '0%',
      translateY: '0%'
    },
    {
      name: 'desktop-screen',
      type: 'svg',
      top: '10%',
      right: '3%',
      translateX: '0%',
      translateY: '0%'
    },
    {
      name: 'phone-screen',
      type: 'svg',
      bottom: '5%',
      right: '7%',
      translateX: '0%',
      translateY: '0%'
    },
    {
      name: 'mouse',
      type: 'svg',
      top: '50%',
      left: '50%',
      translateX: '-50%',
      translateY: '-50%'
    },
    {
      name: 'headphone',
      type: 'svg',
      top: '8%',
      left: '53%',
      translateX: '0%',
      translateY: '0%'
    },
    {
      name: 'book',
      type: 'svg',
      top: '12%',
      left: '15%',
      translateX: '0%',
      translateY: '0%'
    },
    {
      name: 'coffee',
      type: 'svg',
      bottom: '19%',
      left: '43%',
      translateX: '0%',
      translateY: '0%'
    },
    {
      name: 'code',
      type: 'svg',
      bottom: '7%',
      left: '18%',
      translateX: '0%',
      translateY: '0%'
    },
  ];
  summaryExpItems: ISummaryExp[] = [
    {
      iconName: 'companies-worked',
      iconType: 'svg',
      count: 1,
      label: 'COMMON.COMPANIES_WORKED'
    },
    {
      iconName: 'completed-projects',
      iconType: 'svg',
      count: 2,
      label: 'COMMON.COMPLETED_PROJECTS'
    },
    {
      iconName: 'years-experience',
      iconType: 'svg',
      count: 2,
      label: 'COMMON.YEARS_EXPERIENCE'
    },
  ];

  constructor() { }

  ngOnInit() { }

  toggleMousePosition() {
    const existIdx = this.floatIcons.findIndex(icon => icon.name === 'mouse');
    if (existIdx > -1) {
      const {x, y} = this.getRandomPosition(existIdx);
      this.floatIcons[existIdx].top = x + '%';
      this.floatIcons[existIdx].left = y + '%';
    }
  }

  getRandomPosition(mouseIdx: number): {x: number, y: number} {
    const randomX = (): number => {
      const x = Math.round(Math.random() * 100);
      if ((x + '%') === this.floatIcons[mouseIdx].top) {
        return randomX();
      } else {
        return x;
      }
    };
    const randomY = (): number => {
      const x = Math.round(Math.random() * 100);
      if ((x + '%') === this.floatIcons[mouseIdx].left) {
        return randomY();
      } else {
        return x;
      }
    };

    return {
      x: randomX(),
      y: randomY(),
    };
  }
}
