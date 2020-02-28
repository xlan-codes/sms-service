import { Column, Entity, Index } from "typeorm";

@Index("idx_prospect_list_name", ["name"], {})
@Entity("prospect_lists", { schema: "sugar" })
export class ProspectLists {
  @Column("char", { name: "assigned_user_id", nullable: true, length: 36 })
  assignedUserId: string | null;

  @Column("char", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "name", nullable: true, length: 50 })
  name: string | null;

  @Column("varchar", { name: "list_type", nullable: true, length: 100 })
  listType: string | null;

  @Column("datetime", { name: "date_entered", nullable: true })
  dateEntered: Date | null;

  @Column("datetime", { name: "date_modified", nullable: true })
  dateModified: Date | null;

  @Column("char", { name: "modified_user_id", nullable: true, length: 36 })
  modifiedUserId: string | null;

  @Column("char", { name: "created_by", nullable: true, length: 36 })
  createdBy: string | null;

  @Column("tinyint", { name: "deleted", nullable: true, width: 1 })
  deleted: boolean | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("varchar", { name: "domain_name", nullable: true, length: 255 })
  domainName: string | null;
}
