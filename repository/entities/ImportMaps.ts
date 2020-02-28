import { Column, Entity, Index } from "typeorm";

@Index(
  "idx_owner_module_name",
  ["assignedUserId", "module", "name", "deleted"],
  {}
)
@Entity("import_maps", { schema: "sugar" })
export class ImportMaps {
  @Column("char", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "name", nullable: true, length: 254 })
  name: string | null;

  @Column("varchar", { name: "source", nullable: true, length: 36 })
  source: string | null;

  @Column("varchar", {
    name: "enclosure",
    nullable: true,
    length: 1,
    default: () => "' '"
  })
  enclosure: string | null;

  @Column("varchar", {
    name: "delimiter",
    nullable: true,
    length: 1,
    default: () => "','"
  })
  delimiter: string | null;

  @Column("varchar", { name: "module", nullable: true, length: 36 })
  module: string | null;

  @Column("text", { name: "content", nullable: true })
  content: string | null;

  @Column("text", { name: "default_values", nullable: true })
  defaultValues: string | null;

  @Column("tinyint", {
    name: "has_header",
    nullable: true,
    width: 1,
    default: () => "'1'"
  })
  hasHeader: boolean | null;

  @Column("tinyint", { name: "deleted", nullable: true, width: 1 })
  deleted: boolean | null;

  @Column("datetime", { name: "date_entered", nullable: true })
  dateEntered: Date | null;

  @Column("datetime", { name: "date_modified", nullable: true })
  dateModified: Date | null;

  @Column("char", { name: "assigned_user_id", nullable: true, length: 36 })
  assignedUserId: string | null;

  @Column("varchar", {
    name: "is_published",
    nullable: true,
    length: 3,
    default: () => "'no'"
  })
  isPublished: string | null;
}
