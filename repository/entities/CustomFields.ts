import { Column, Entity, Index } from "typeorm";

@Index("idx_beanid_set_num", ["beanId", "setNum"], {})
@Entity("custom_fields", { schema: "sugar" })
export class CustomFields {
  @Column("varchar", { name: "bean_id", nullable: true, length: 36 })
  beanId: string | null;

  @Column("int", { name: "set_num", nullable: true, default: () => "'0'" })
  setNum: number | null;

  @Column("varchar", { name: "field0", nullable: true, length: 255 })
  field0: string | null;

  @Column("varchar", { name: "field1", nullable: true, length: 255 })
  field1: string | null;

  @Column("varchar", { name: "field2", nullable: true, length: 255 })
  field2: string | null;

  @Column("varchar", { name: "field3", nullable: true, length: 255 })
  field3: string | null;

  @Column("varchar", { name: "field4", nullable: true, length: 255 })
  field4: string | null;

  @Column("varchar", { name: "field5", nullable: true, length: 255 })
  field5: string | null;

  @Column("varchar", { name: "field6", nullable: true, length: 255 })
  field6: string | null;

  @Column("varchar", { name: "field7", nullable: true, length: 255 })
  field7: string | null;

  @Column("varchar", { name: "field8", nullable: true, length: 255 })
  field8: string | null;

  @Column("varchar", { name: "field9", nullable: true, length: 255 })
  field9: string | null;

  @Column("tinyint", {
    name: "deleted",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  deleted: boolean | null;
}
