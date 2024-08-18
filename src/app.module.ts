import { Module } from '@nestjs/common';
import { TransliterateModule } from './transliterate/transliterate.module';

@Module({
  imports: [TransliterateModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
