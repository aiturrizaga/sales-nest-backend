import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UbigeoController } from "./controllers/ubigeo.controller";
import { UbigeoService } from "./services/ubigeo.service";
import { UbigeoEntity } from "./entities/ubigeo.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "oracle",
      "host": "localhost",
      "port": 1521,
      "username": "HR",
      "password": "system",
      "sid": "xe",
      "entities": [__dirname + "/**/**.entity{.ts,.js}"],
      "synchronize": false,
      "logging": true
    }),
    TypeOrmModule.forFeature([UbigeoEntity])
  ],
  controllers: [AppController, UbigeoController],
  providers: [AppService, UbigeoService]
})
export class AppModule {
}
