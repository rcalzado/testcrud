import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeroesModule } from './heroes/heroes.module';

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
      synchronize: true,
    }),
    HeroesModule
  ]
})
export class AppModule {}
