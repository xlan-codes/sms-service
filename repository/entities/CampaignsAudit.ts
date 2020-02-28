import { Column, Entity, Index } from "typeorm";

@Index("idx_campaigns_parent_id", ["parentId"], {})
@Entity("campaigns_audit", { schema: "sugar" })
export class CampaignsAudit {
  @Column("char", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("char", { name: "parent_id", length: 36 })
  parentId: string;

  @Column("datetime", { name: "date_created", nullable: true })
  dateCreated: Date | null;

  @Column("varchar", { name: "created_by", nullable: true, length: 36 })
  createdBy: string | null;

  @Column("varchar", { name: "field_name", nullable: true, length: 100 })
  fieldName: string | null;

  @Column("varchar", { name: "data_type", nullable: true, length: 100 })
  dataType: string | null;

  @Column("varchar", {
    name: "before_value_string",
    nullable: true,
    length: 255
  })
  beforeValueString: string | null;

  @Column("varchar", {
    name: "after_value_string",
    nullable: true,
    length: 255
  })
  afterValueString: string | null;

  @Column("text", { name: "before_value_text", nullable: true })
  beforeValueText: string | null;

  @Column("text", { name: "after_value_text", nullable: true })
  afterValueText: string | null;
}
