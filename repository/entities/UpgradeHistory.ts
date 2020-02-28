import { Column, Entity, Index } from "typeorm";

@Index("upgrade_history_md5_uk", ["md5sum"], { unique: true })
@Entity("upgrade_history", { schema: "sugar" })
export class UpgradeHistory {
  @Column("char", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "filename", nullable: true, length: 255 })
  filename: string | null;

  @Column("varchar", {
    name: "md5sum",
    nullable: true,
    unique: true,
    length: 32
  })
  md5sum: string | null;

  @Column("varchar", { name: "type", nullable: true, length: 30 })
  type: string | null;

  @Column("varchar", { name: "status", nullable: true, length: 50 })
  status: string | null;

  @Column("varchar", { name: "version", nullable: true, length: 64 })
  version: string | null;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("varchar", { name: "id_name", nullable: true, length: 255 })
  idName: string | null;

  @Column("longtext", { name: "manifest", nullable: true })
  manifest: string | null;

  @Column("datetime", { name: "date_entered", nullable: true })
  dateEntered: Date | null;

  @Column("tinyint", {
    name: "enabled",
    nullable: true,
    width: 1,
    default: () => "'1'"
  })
  enabled: boolean | null;
}
