import { Column, Entity, Index } from "typeorm";

@Index("idx_meta_id_del", ["id", "deleted"], {})
@Index("idx_meta_cm_del", ["customModule", "deleted"], {})
@Entity("fields_meta_data", { schema: "sugar" })
export class FieldsMetaData {
  @Column("varchar", { primary: true, name: "id", length: 255 })
  id: string;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("varchar", { name: "vname", nullable: true, length: 255 })
  vname: string | null;

  @Column("varchar", { name: "comments", nullable: true, length: 255 })
  comments: string | null;

  @Column("varchar", { name: "help", nullable: true, length: 255 })
  help: string | null;

  @Column("varchar", { name: "custom_module", nullable: true, length: 255 })
  customModule: string | null;

  @Column("varchar", { name: "type", nullable: true, length: 255 })
  type: string | null;

  @Column("int", { name: "len", nullable: true })
  len: number | null;

  @Column("tinyint", {
    name: "required",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  required: boolean | null;

  @Column("varchar", { name: "default_value", nullable: true, length: 255 })
  defaultValue: string | null;

  @Column("datetime", { name: "date_modified", nullable: true })
  dateModified: Date | null;

  @Column("tinyint", {
    name: "deleted",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  deleted: boolean | null;

  @Column("tinyint", {
    name: "audited",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  audited: boolean | null;

  @Column("tinyint", {
    name: "massupdate",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  massupdate: boolean | null;

  @Column("smallint", {
    name: "duplicate_merge",
    nullable: true,
    default: () => "'0'"
  })
  duplicateMerge: number | null;

  @Column("tinyint", {
    name: "reportable",
    nullable: true,
    width: 1,
    default: () => "'1'"
  })
  reportable: boolean | null;

  @Column("varchar", { name: "importable", nullable: true, length: 255 })
  importable: string | null;

  @Column("varchar", { name: "ext1", nullable: true, length: 255 })
  ext1: string | null;

  @Column("varchar", { name: "ext2", nullable: true, length: 255 })
  ext2: string | null;

  @Column("varchar", { name: "ext3", nullable: true, length: 255 })
  ext3: string | null;

  @Column("text", { name: "ext4", nullable: true })
  ext4: string | null;
}
