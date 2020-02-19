import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeroesModule } from './heroes/heroes.module';
import { AbilitiesModule } from './abilities/abilities.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'dba',
      password: 'mysqladmin',
      database: 'testcrud',
      entities: [ __dirname + '/**/*.entity.{ts,js}'],
      synchronize: true
    }),
    HeroesModule,
    AbilitiesModule
  ]
})
export class AppModule {}
