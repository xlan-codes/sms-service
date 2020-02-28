import { Column, Entity, Index } from "typeorm";

@Index("idx_vcal", ["type", "userId"], {})
@Entity("vcals", { schema: "sugar" })
export class Vcals {
  @Column("char", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("tinyint", { name: "deleted", nullable: true, width: 1 })
  deleted: boolean | null;

  @Column("datetime", { name: "date_entered", nullable: true })
  dateEntered: Date | null;

  @Column("datetime", { name: "date_modified", nullable: true })
  dateModified: Date | null;

  @Column("char", { name: "user_id", length: 36 })
  userId: string;

  @Column("varchar", { name: "type", nullable: true, length: 100 })
  type: string | null;

  @Column("varchar", { name: "source", nullable: true, length: 100 })
  source: string | null;

  @Column("text", { name: "content", nullable: true })
  content: string | null;
}
