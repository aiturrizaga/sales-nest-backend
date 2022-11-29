import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Ubigeo } from "./ubigeo.entity";

@Entity({ name: "VENDEDOR" })
export class Vendedor {
  @PrimaryColumn({ name: "CODVEN", nullable: false })
  id: string;

  @Column({ name: "NOMVEN", nullable: true })
  nombre: string;

  @Column({ name: "APEVEN", nullable: true })
  apellido: string;

  @Column({ name: "DNIVEN", nullable: true })
  dni: string;

  @Column({ name: "EMAVEN", nullable: true })
  email: string;

  @Column({ name: "CELVEN", nullable: true })
  celular: string;

  @Column({ name: "DIRVEN", nullable: true })
  direccion: string;

  @Column({ name: "ESTVEN", nullable: true })
  estado: string;

  @Column({ name: "USUVEN", nullable: true })
  user: string;

  @Column({ name: "PASVEN", nullable: true })
  password: string;

  @OneToOne(() => Ubigeo)
  @JoinColumn({ name: "UBIVEN" })
  ubigeo: Ubigeo;
}
