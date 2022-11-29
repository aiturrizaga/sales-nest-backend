import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Ubigeo } from "./ubigeo.entity";

@Entity({ name: "CLIENTE" })
export class Cliente {

  @PrimaryColumn({ name: "CODCLI", nullable: false })
  id: string;

  @Column({ name: "DNICLI", nullable: true })
  dni: string;

  @Column({ name: "NOMCLI", nullable: true })
  nombre: string;

  @Column({ name: "APECLI", nullable: true })
  apellido: string;

  @Column({ name: "EMACLI", nullable: true })
  email: string;

  @Column({ name: "CELCLI", nullable: true })
  celular: string;

  @Column({ name: "DIRCLI", nullable: true })
  direccion: string;

  @Column({ name: "ESTCLI", nullable: true })
  estado: string;

  @Column({ name: "FECCREA", nullable: false })
  fecha: Date;

  @OneToOne(() => Ubigeo)
  @JoinColumn({name: 'UBICLI'})
  ubigeo: Ubigeo;
}
