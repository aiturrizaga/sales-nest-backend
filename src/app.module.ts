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
import { Vendedor } from "./entities/vendedor.entity";
import { VendedorController } from "./controllers/vendedor.controller";
import { VendedorService } from "./services/vendedor.service";
import { AuthController } from "./controllers/auth.controller";
import { AuthService } from "./services/auth.service";

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
    TypeOrmModule.forFeature([Ubigeo, Cliente, Vendedor])
  ],
  controllers: [
    AppController,
    UbigeoController,
    ClienteController,
    VendedorController,
    AuthController
  ],
  providers: [
    AppService,
    UbigeoService,
    ClienteService,
    VendedorService,
    AuthService
  ]
})
export class AppModule {
}
