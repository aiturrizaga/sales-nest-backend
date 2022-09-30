import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UbigeoController } from "./controllers/ubigeo.controller";
import { UbigeoService } from "./services/ubigeo.service";
import { Ubigeo } from "./entities/ubigeo.entity";
import { Cliente } from "./entities/cliente.entity";
import { ClienteController } from "./controllers/cliente.controller";
import { ClienteService } from "./services/cliente.service";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "oracle",
      host: "localhost",
      port: 1521,
      username: "minimarket",
      password: "admin",
      sid: "xe",
      entities: [__dirname + "/**/**.entity{.ts,.js}"],
      synchronize: false,
      logging: true
    }),
    TypeOrmModule.forFeature([Ubigeo, Cliente])
  ],
  controllers: [AppController, UbigeoController, ClienteController],
  providers: [AppService, UbigeoService, ClienteService]
})
export class AppModule {
}
