import { Column, Entity, Index } from "typeorm";

@Index("idx_poly_module_poly_id", ["polymorphicModule", "polymorphicId"], {})
@Index("idx_fr_id_deleted_poly", ["folderId", "deleted", "polymorphicId"], {})
@Entity("folders_rel", { schema: "sugar" })
export class FoldersRel {
  @Column("char", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("char", { name: "folder_id", length: 36 })
  folderId: string;

  @Column("varchar", { name: "polymorphic_module", nullable: true, length: 25 })
  polymorphicModule: string | null;

  @Column("char", { name: "polymorphic_id", length: 36 })
  polymorphicId: string;

  @Column("tinyint", {
    name: "deleted",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  deleted: boolean | null;
}
