import { Injectable } from '@nestjs/common';
import { ClockPort } from '../../domain/ports/clock.port';

@Injectable()
export class ColombiaClockService implements ClockPort {
  now(): Date {
    return new Date();
  }
}
