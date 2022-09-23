import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: 'VG_UBIGEO'})
export class UbigeoEntity {

  @PrimaryColumn({name: 'CODUBI', nullable: false})
  id: string;

  @Column({name: 'DEPUBI', nullable: false})
  departamento: string;

  @Column({name: 'PROVUBI', nullable: false})
  provincia: string;

  @Column({name: 'DISTUBI', nullable: false})
  distrito: string;
}
