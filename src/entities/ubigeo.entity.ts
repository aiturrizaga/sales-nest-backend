import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "UBIGEO" })
export class Ubigeo {

  @PrimaryColumn({ name: "CODUBI", nullable: false })
  id: string;

  @Column({ name: "DEPUBI", nullable: false })
  departamento: string;

  @Column({ name: "PROVUBI", nullable: false })
  provincia: string;

  @Column({ name: "DISTUBI", nullable: false })
  distrito: string;
}
