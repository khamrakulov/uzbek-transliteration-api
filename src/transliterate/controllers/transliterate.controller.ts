import { Body, Controller, Post } from '@nestjs/common';
import { TextDTO } from '../dtos/Text.dto';
import { TransliterateService } from '../services/transliterate.service';

@Controller('transliterate')
export class TransliterateController {
  constructor(private transliterateService: TransliterateService) {}

  @Post('to-cyrilic')
  toCyrilic(@Body() textDto: TextDTO) {
    const result = this.transliterateService.transliterate(textDto.text);
    return { result };
  }

  @Post('to-latin')
  toLatin(@Body() textDto: TextDTO) {
    const result = this.transliterateService.transliterate(textDto.text);
    return { result };
  }
}
