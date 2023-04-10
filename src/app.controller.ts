import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  HelperCheck(): string {
    return "Server is running"
  }
}
