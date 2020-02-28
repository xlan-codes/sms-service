import { Column, Entity, Index } from "typeorm";

@Index("idx_parent_folder", ["parentFolder"], {})
@Entity("folders", { schema: "sugar" })
export class Folders {
  @Column("char", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "name", nullable: true, length: 25 })
  name: string | null;

  @Column("varchar", { name: "folder_type", nullable: true, length: 25 })
  folderType: string | null;

  @Column("char", { name: "parent_folder", nullable: true, length: 36 })
  parentFolder: string | null;

  @Column("tinyint", {
    name: "has_child",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  hasChild: boolean | null;

  @Column("tinyint", {
    name: "is_group",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  isGroup: boolean | null;

  @Column("tinyint", {
    name: "is_dynamic",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  isDynamic: boolean | null;

  @Column("text", { name: "dynamic_query", nullable: true })
  dynamicQuery: string | null;

  @Column("char", { name: "assign_to_id", nullable: true, length: 36 })
  assignToId: string | null;

  @Column("char", { name: "created_by", length: 36 })
  createdBy: string;

  @Column("char", { name: "modified_by", length: 36 })
  modifiedBy: string;

  @Column("tinyint", {
    name: "deleted",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  deleted: boolean | null;
}
