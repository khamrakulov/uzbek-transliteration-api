import { Module } from '@nestjs/common';
import { TransliterateController } from './controllers/transliterate.controller';
import { TransliterateService } from './services/transliterate.service';

@Module({
  controllers: [TransliterateController],
  providers: [TransliterateService]
})
export class TransliterateModule {}
