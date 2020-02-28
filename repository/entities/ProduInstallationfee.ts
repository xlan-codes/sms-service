import { Column, Entity } from "typeorm";

@Entity("produ_installationfee", { schema: "sugar" })
export class ProduInstallationfee {
  @Column("char", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("datetime", { name: "date_entered", nullable: true })
  dateEntered: Date | null;

  @Column("datetime", { name: "date_modified", nullable: true })
  dateModified: Date | null;

  @Column("char", { name: "modified_user_id", nullable: true, length: 36 })
  modifiedUserId: string | null;

  @Column("char", { name: "created_by", nullable: true, length: 36 })
  createdBy: string | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("tinyint", {
    name: "deleted",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  deleted: boolean | null;

  @Column("char", { name: "assigned_user_id", nullable: true, length: 36 })
  assignedUserId: string | null;

  @Column("varchar", {
    name: "category",
    nullable: true,
    length: 100,
    default: () => "'0'"
  })
  category: string | null;

  @Column("int", { name: "price", nullable: true })
  price: number | null;

  @Column("int", { name: "kohezgjatjamuaj", nullable: true })
  kohezgjatjamuaj: number | null;

  @Column("varchar", {
    name: "type",
    nullable: true,
    length: 100,
    default: () => "'0'"
  })
  type: string | null;
}
